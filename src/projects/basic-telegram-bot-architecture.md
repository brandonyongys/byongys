---
layout: page
title: Modular Telegram Chatbot Architecture # required
image: /images/2025/chatbot.png # Optional
importance: 1
category: web app # chatbot, data analysis, web app, if wrong category, the post won't be posted

published_date: 2025-07-17
updated_date: 2025-07-22 # Optional field
comments: true
published: true

description: A serverless Telegram chatbot architecture built on AWS Lambda, designed with modular microservices, session state management via DynamoDB, and long-term logging to S3. This architecture enables easy extensibility, scalability, and clean separation of business logic. # Optional field
---

I've been working with chatbots - particularly WhatsApp-based ones - for the past few years. It's been a fulfilling experience turning business requirements into scalable chatbot solutions. Along the way, I've picked up valuable lessons on building and maintaining conversational systems.

However, I noticed that our existing chatbot architecture relied on multiple middleware layers between the user and our backend, which introduced latency and complexity.

As part of my professional development, I decided to build my own Telegram chatbot using an architecture that reflects what I've learned. My goal is to create a modular, microservice-oriented, serverless architecture that is easy to scale, maintain, and extend.

This post gives a detailed look at the architecture and my design decisions.

<hr>

# The architecture

<p align="center">
  <img src="/images/2025/basic_telegram_architecture.png" />
</p>

Here's how the system works:
1. A user sends a message to the Telegram bot.
1. The message is received via a webhook and passed to API Gateway, which invokes the handler bot Lambda.
1. The handler bot enriches the payload by retrieving the current session state from DynamoDB and appending metadata.
1. The enriched message is routed to one or more processing Lambdas for logic execution and response generation.
1. Once a response is ready, another Lambda sends the reply back to the user.
1. The full interaction is stored in S3 for long-term logging and potential downstream analysis.
1. Finally, the session state is updated in DynamoDB.

All components are built on AWS, though the design is cloud-agnostic and can be adapted to other platforms.

I'm treating this as a foundational version, with plans to add full observability and fault tolerance in future iterations.

<hr>

# Architecture Design Review
Below are my design considerations when I was developing the basic architecture.

## Serverless & Microservices
Instead of hosting a persistent server, I've opted for a fully serverless architecture using AWS Lambda. This choice allows:
- Cost efficiency (pay-per-use model)
- No need to manage long-running infrastructure
- Easy scaling of individual components (microservices)
- Faster iteration by separating logic into individual Lambda functions

Each Lambda performs a specific function—like session management, message preprocessing, business logic execution, or response handling—allowing me to add, modify, or remove functionality with minimal impact.

## Latency Trade-offs
One downside of using multiple Lambdas is potential cold start latency. However:
- This is acceptable at the proof-of-concept (POC) stage.
- AWS Provisioned Concurrency or warming strategies can be introduced later to mitigate latency for production-critical flows.

## Why Not Amazon Lex?
While Amazon Lex is AWS's native chatbot service, I chose not to use it because:
- Lex introduces an additional layer of complexity and routing.
- I need more control over custom logic and flow.
- Ultimately, Lex would still need to invoke my own Lambdas, so it adds overhead without much benefit for my use case.

Instead, I route incoming Telegram messages directly to my `handler bot` Lambda.

## Extensibility
The `handler bot` Lambda acts as a router. It can easily forward messages to new or existing processing Lambdas based on message type, user state, or business rules. This design supports clean separation of concerns:
- Each Lambda focuses on one function (e.g., booking logic, reminders, Q&A)
- Easy to plug in new services without touching existing flows
- Lower chance of breaking the entire system when deploying updates

## Session State Management
Lex automatically manages session state, but since I'm bypassing it, I needed a custom solution.

I created a dedicated `telegram session` Lambda that handles session lifecycle operations in DynamoDB:
- Create: Start a new session if none exists or the old one has expired.
- Read: Fetch the current session state to determine the context of the incoming message.
- Update: Save the updated session state after response generation.
- Delete: Optional reset mechanism to clear session data when needed.

Session state is typically retrieved at the start of the flow (Create/Read) and updated at the end (Update/Delete).

## Session State Storage
I use DynamoDB for session state storage because:
- It offers fast, low-latency reads/writes.
- It supports flexible schema, ideal for evolving chatbot contexts.
- Its TTL (Time to Live) feature automatically purges stale sessions.

For long-term logs and potential analytics, I store full conversation data in S3.

<hr>

# Deployment process

The basic Telegram chatbot requires several AWS resources, so I initially used the Serverless Framework for deployment due to its simplicity. However, I’ve recently switched to Terraform, which offers better control, visibility, and consistency when managing infrastructure. You can read more about the Terraform setup [here](../posts/terraform-basic-telegram).

<hr>

# Next Steps
While this architecture is functional and modular, there are still important production-level concerns that I plan to implement next. These include:

## Failure Handling
- Implement retries and dead-letter queues (DLQs) for critical Lambdas.
- Add error wrapping and structured logging to capture exceptions consistently across services.
- Graceful fallback mechanisms in case certain processors fail (e.g., skip and continue, or notify user with a generic message).

## Observability and Monitoring
- Integrate CloudWatch logs with correlation IDs for tracing each request end-to-end.
- Use CloudWatch metrics and alarms to monitor key health indicators (e.g., Lambda error rate, latency spikes).
- Add SNS or email alerts for unhandled failures and abnormal patterns.
- These additions will improve the reliability, maintainability, and debuggability of the chatbot system—key requirements for production deployment.



<hr>

# Summary
This basic Telegram chatbot architecture demonstrates how to:
- Build a modular, serverless chatbot backend
- Manage session state independently of Lex
- Handle extensibility and scaling via microservices
- Maintain chat history for future improvement and insights

While it's a foundational setup, it forms the basis for more advanced features like NLP integration, real-time analytics, or multi-channel support in the future.


