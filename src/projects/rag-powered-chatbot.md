---
layout: page
title: RAG Powered Chatbot Architecture # required
image: /images/2025/rag_chatbot.png # Optional
importance: 1
category: web app # chatbot, data analysis, web app, if wrong category, the post won't be posted

published_date: 2025-08-06
# updated_date: 2025-07-22 # Optional field
comments: true
published: true

description: A general RAG pipeline that further extends the capability of the Telegram chatbot. The primary AWS resources are AWS Lambda, Amazon Bedrock and Amazon OpenSearch. 

# description: A serverless Telegram chatbot architecture built on AWS Lambda, designed with modular microservices, session state management via DynamoDB, and long-term logging to S3. This architecture enables easy extensibility, scalability, and clean separation of business logic. # Optional field


# Motivation 
# Proposed architecture 
# Architecture Design Review
# Milestones 
# Next step
# Summary


---

# Motivation

Since I've built a basic modular telegram chatbot (as shared [here](../../projects/basic-telegram-bot-architecture)) that allows other type of chatbot to be used, I've decided to further extend it and attach an RAG powered chatbot. As a start, I am building a banking chatbot. The idea is that user is able to ask any questions about singapore Bank credit card products. 

I've decided to build such a chatbot because 
1. I am interested in LLM and would want to gain hands on experience with it. So I am starting with the basic popular application - RAG. 
2. There are a lot of credit card products and often time people don't read the full terms and conditions. The burning questions that they have are often found buried in one of the documents. 
3. I just want to build an application that is useful for the general public.

<hr>

# Proposed architecture 

<p align="center">
  <img src="/images/2025/rag_banking_pipeline.png" />
</p>


Above is a high level general architecture, including an independent pipeline to upload and store the vector embeddings of a document in a vector database. In my application, I decided to use AWS OpenSearch. 

The message processor lambda in the basic architecture is replaced by the RAG pipeline. The entry point is from the Handler Bot, which would identify the intent based on the input message. If it is identified as a banking FAQ intent, the message is routed to the `FAQ Bot` which further preprocess the message by extracting relevant information to improve the subsequent search process. It then triggers the `Text to Embedding` lambda so that subsequent search in the Open Search could be conducted by the `Text Retrieval` lambda. The `Text Retrieval` lambda triggers the `OpenSearch Manager` lambda, which the basic CRUD operations. Once the search is performed, the retrieved context along with the input message are sent to the `Context Reranking` to identify more relevant contexts using Amazon Bedrock. Finally, the response is generated using Amazon Bedrock based on the input text and contexts before triggering the `Send Message` lambda.

Of course, the entire RAG pipeline is not possible with the relevant documents. To do so, an independent pipeline is developed to upload and store the vector embedding of the documents in OpenSearch. The flow is denoted by the red arrows. When a document is uploaded to S3 bucket, it triggers the `Document Reader` lambda via EventBridge. The lambda reads and breaks the long documents into subsections. The subsections would then be summarized using the `Text Summarization` lambda before triggering the `Text to Embedding` lambda to convert both subsection and summary into embedding vectors. The vectors are then stored in Amazon OpenSearch using `OpenSearch Manager` lambda. 

<hr>

# Architecture Design Review

## FAQ Bot
Given that the pipeline can be generalized and utilized for various use cases, the FAQ Bot is necessary to preprocess the input text and extract the relevant information such as bank and credit card product name in the Banking Chatbot use case. This data extraction can help to improve the search in Amazon OpenSearch as it narrows down the search field. Of course this is not perfect as the wrong field may be used but overall, it improves the search performance.


## Modular design

As you can see in the architecture diagram above, there are plenty of modular components. In certain use cases, certain lambdas such as `Text to Embedding` and `Text Retrieval` need to be used together sequentially. Though they are coupled in certain use cases, they are coded as separate microservices so that they could still be used by other use cases without having to trigger the other lambda. The only caveat is having to code the lambda so that it knows which lambda to trigger next based on its input. There are many ways to play with it - denoting the payload source as "text summarization" or "telegram bot", setting a new variable called "trigger_xx_lambda" as a boolean value etc.

## Amazon Bedrock usage
In case you did not notice, there are actually multiple lambdas that are calling Amazon Bedrock along the way such as the `Text Summarization`, `Context Reranking` and `Response Generation` lambdas. Each of these lambdas have a different prompt as their purpose differ. However, the underlying code is rather similar and is repetitive. There are a couple of ways to deal with it. I could write a generic utils function to trigger Bedrock within each lambda separately, or I could either write a separate `Bedrock Trigger` lambda which can be triggered by different lambdas. The former is a lot simpler as I could reduce the latency. The latter would introduce a slight latency but the advantage is that I could keep the codes modularized and I would need to modify the code at 1 place instead of multiple places. 

Given that this is still a relatively simple project, I have implemented the former.


## Amazon Kendra vs Amazon OpenSearch
I chose to use Amazon OpenSearch for one main reason and that is cost. Amazon Kendra Developer Edition costs up to USD 820 per month and Amazon OpenSearch would be significantly cheaper depending the configurations than that though still costly for one to bear for professional development during personal time. I chose some of the lowest specs for development purpose as I could deal with the long start and latency. The long latency would translate to longer lambda runtime and that would still incur me cost. Nonetheless, I went ahead with OpenSearch as I estimated that the overall monthly cost would still be signficicantly lower.

<hr>

# Next Steps
I have been playing around with this RAG powered chatbot pipeline for a few months and while it has been fun, it has also been quite costly for me to maintain especially when I don't actively work on them. Primarily due to cost concern, I have decided to decommission the pipeline for now while I work on other projects.

During the development phase, I have learned quite a fair bit and there are still much improvements to be made, not in the architecture but the specific specifications and configurations.
1. With so many lambdas, the overall latency would definitely increase. Provisioned lambdas should be made when this pipeline is deployed to production.
2. LLM payloads, outputs and performances would need to be recorded and analyzed for fine tuning purpose. Simply relying on the state of the art models may work but its outputs may lose some context and have poor accuracy given that its corpus and LLM hyperparameters may not be good enough. Lambdas such as the `Text Summarization` and `Response Generation` are some examples with such problems.
3. The context search step can be improved by using the appropriate scoring method for the text retrieval and context reranking. I simply used the basic cosine similiarity and used LLM to rerank the context from 1 to n, which works but just not good enough.

There are other issues as well but these are the main improvements.

<hr>

# Summary

This is a relatively simple RAG powered chatbot pipeline. While it is fun building and playing with RAG, it has also been relatively costly especially for a proof of concept pipeline. I cannot imagine how expensive it would be to run in production but I suppose that that would serve a greater value. Building an RAG pipeline is also not an easy feat as there are multiple failure and improvement points along the pipeline. 

