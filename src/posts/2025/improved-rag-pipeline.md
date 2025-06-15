---
layout: post
title: Improving my RAG pipeline
description: What went wrong and how I fixed it

date: 2025-06-23
tags: [development, LLM, telegram, chatbot, RAG, project, AWS]
published: true
---

Back in May, I wrote about how my [naive RAG pipeline](./naive-rag-pipeline) wasn’t performing well and the challenges I faced when [scaling it](scaling-rag-pipeline) as I tried to upload more files. Through those failures, I came to realize just how rough my pipeline was — and how much potential there was for fine-tuning and improvement.

Rather than sharing and brainstorming with friends or colleagues (the usual route for most people), I took a more unconventional approach: I explained my entire end-to-end pipeline to ChatGPT. I even let it ask clarifying questions before giving me advice. While it’s not the norm, I find this approach faster and it gives me a solid starting point to work from.

Of course, once things get more complex or if the work involves confidential components, I’ll start looping in friends and colleagues for further discussion. But for now, this hybrid approach has worked quite well — and credit where it’s due, ChatGPT helped me surface quite a few blind spots.

Here are the main issues I identified with my RAG pipeline, along with the solutions I’ve implemented so far:

<hr>

### 1. No Metadata Filtering
__Problem:__ 
As I uploaded more credit card documents, the vector search often returned semantically similar but irrelevant results. For example, searching for “rewards on transport for OCBC 90N credit card” might bring up unrelated documents about “rewards for transport,” but not necessarily about OCBC 90N. Without filtering, the search space became too noisy.

__Solutions:__
* Each document is now tagged with bank and card metadata during the upload process.
* During retrieval, this metadata is used to filter and narrow down the search space, improving relevance.

<hr>

### 2. No Entity Extraction to Guide Context
__Problem:__
Related to the issue above, I wasn’t extracting key entities (like the bank name or credit card name) from the user’s query to help narrow down the search. This led to the search treating all documents equally, often resulting in irrelevant matches.

__Solutions:__
* The pipeline now extracts bank and card entities from the query.
* If either is present, they’re used as filters in the vector search. If not, the search proceeds without them.

<hr>

### 3. Embeddings Generated from Summaries
__Problem:__
Originally, I was splitting long texts into chunks, summarizing those chunks, and embedding the summaries for kNN search. The issue was that important keywords (like “GrabPay” or “AXS”) often got dropped in the summaries, making it harder to retrieve relevant content.

__Solutions:__
* I now embed the original text chunks directly.
* Summaries are still used — but only in the reranking step, helping to identify the top k most relevant chunks.

<hr>

### 4. Summarization Prompt Not Focused
__Problem:__
My original summarization prompt was vague. It simply told the LLM to “summarize,” without specific instructions to preserve critical financial details like exclusions, caps, or bonus categories. As a result, summaries were often too generic, hurting both reranking and final output quality.

__Solutions:__
* The prompt is now explicitly written to preserve key financial details.
* I also increased the max_tokens parameter to avoid premature truncation of important information.

<hr>

It took me a while to implement these changes since I’ve been quite busy with work. That said, the Telegram bot seems to be performing better now — it can handle questions about a broader range of credit card products, though it still occasionally misses the mark.

These are the key issues I’ve tackled so far with my RAG pipeline, but I expect more to surface as I continue scaling the bot.

There are also several improvements I’m planning that fall outside the RAG scope, such as:
* Building an end-to-end monitoring system.
* Generating session summaries of historical messages.
* Implementing exponential backoff for rate limiting to prevent abuse of both the bot and my backend resources.

<hr>

More to come as I continue iterating.







