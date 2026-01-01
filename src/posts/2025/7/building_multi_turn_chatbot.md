---
layout: post
title: Building a multi-turn chatbot
description: Lessons from my first project

date: 2025-07-08
tags: [chatbot, AWS, programming]
published: true
---

I've had the opportunity to work with chatbots - and it's been both fun and instructive. A chatbot application can range from something simple like sending rule-based nudges, to complex, multi-turn conversations with conditional logic, state tracking, and asynchronous flows.

My first chatbot project was somewhere in the middle. It involved building a questionnaire-based chatbot governed by dynamic business rules, where each question depended on the previous response.

![Multi turn chatbot overall flow](/images/2025/multiturn_chatbot_overall_flow.png)

Think of the chatbot flow as a cycle: there's an initial trigger, followed by repeated back-and-forth exchanges, until a termination condition is reached.

<hr>

## Tech Stack and Constraints
The chatbot was built using AWS Lex as the session orchestrator. However, I didn't rely on Lex's built-in conversation management. Instead, all inputs were routed into custom AWS Lambda functions for preprocessing and logic execution. The entire application was written in Python.

While Lex offered out-of-the-box session management, it came with a hard 30-second timeout limit per response. That posed a challenge because some of our logic involved time-consuming preprocessing (e.g. API calls, conditional branching, external service checks).

To work around this, I built a custom flow that closed the Lex session early, then separately used Twilio to send asynchronous responses back to the user. 

The downside? These async responses weren't captured in the Lex chat log, complicating traceability and auditing.

In contrast, I've since built a Telegram chatbot without Lex, where I had full control over the flow and could take more time to process inputs. However, response latency became a new challenge, especially due to excessive Bedrock calls for LLM-powered responses.

<hr>

## Authentication and Authorization
The user often doesn't know when a chatbot interaction will begin - until it's prompted by a trigger phrase or a specific action.

Once triggered, the conversation cycle begins. The first step in this cycle should always be authentication and authorization.
* Authentication ensures the user is who they say they are. This might be a backend check, like verifying the user's phone number, or a more secure method like OTP verification.
* Authorization determines whether the user is permitted to access a particular feature.

In my case, if a user wasn't authorized (e.g. not enrolled in a particular programme), it didn't mean the conversation had to end. Instead, the chatbot would encourage the user to sign up or guide them on how to do so.

🔁 **Important**: Authentication and authorization should only happen once per session (or be rechecked after a significant time interval), rather than repeatedly within a short window (like every 1 minute). Frequent checks would severely degrade user experience.

<hr>

## Preprocessing User Input
Once the user is verified and authorized, the chatbot processes the next input. This input could be:
* A trigger phrase to start the conversation,
* An answer to a question, or
* A termination phrase to end the session.

#### Handling Responses
Each type of input must be handled appropriately:
* If it's a trigger phrase: initiate the first question.
* If it's a termination phrase: clean up the session, purge any sensitive data, and log the interaction.
* If it's an actual response: validate and process it.

#### Input Validation
This is where things get tricky.

First, check if the response is in the expected format. If it's not, prompt the user to rephrase. But what if the user keeps sending invalid responses?

At this point, you must decide:
* Do you keep prompting indefinitely?
* Do you give up after a few tries and skip the question?
* Or do you escalate to a human agent?

Each approach has trade-offs between user experience, data quality, and fallback rate.

If the input is valid, you can extract the relevant content and store it in a database or logfile for downstream use.

<hr>

## Determining the Next Question
Once a valid response is received, the chatbot uses rules or decision trees to determine the next question.

For example:
* If a user asks about banking products, the chatbot may offer choices like credit cards or savings accounts.
* Based on the selection, the bot follows a branch of logic with sub-questions (e.g. what type of credit card, eligibility criteria, etc.).
* If needed data is missing (e.g. age restrictions), the chatbot dynamically asks for that information.

Once the next question is determined, it's sent to the user, and the loop repeats - though authentication and authorization checks should be avoided during each cycle, unless security demands it.

<hr>

## Metrics: Latency and Fallback
In our chatbot system, the two most important performance metrics were:
* Latency: Responses needed to be delivered in under 5 seconds to preserve a smooth user experience.
* Fallback Rate: We aimed to minimize fallback to human agents, ensuring that the chatbot could resolve most interactions autonomously.

These constraints influenced not just the architecture, but also how we managed user flows, error handling, and message complexity.

<hr>

## Closing Thoughts
That's the general structure I followed while building my first multi-turn chatbot: a loop of authentication, input validation, logic execution, and question delivery.

While AWS Lex helped manage session state, its 30-second timeout was limiting - prompting custom workarounds using Twilio for async replies. Later, building a Telegram bot without Lex gave me more freedom but introduced new latency challenges.

Every architecture has trade-offs. But the key takeaway is this: when designing chatbot flows, think deeply about what users expect, how much friction they're willing to tolerate, and where automation should stop and human support begins.

