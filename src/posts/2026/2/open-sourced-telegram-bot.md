---
layout: post
title: Modular Telegram Bot, Open Sourced
description: A production style Telegram chatbot built with AWS and Terraform, now available on GitHub.

date: 2026-02-23
tags: [chatbot, telegram, aws]
published: true
---

I previously wrote about the architecture of my Telegram chatbot in [Building a basic Telegram chatbot](../posts/basic-telegram-chatbot-architecture) and [Modular Telegram Chatbot Architecture](../projects/basic-telegram-bot-architecture). Those posts focused on high level ideas and design choices, but I did not share the actual implementation.

I have since cleaned up the repository and I am ready to share the code. You can find it on GitHub here:
[repo](https://github.com/brandonyongys/telegram-chatbot).

The repo includes a clear README with step by step instructions on how to set up and deploy the chatbot to your own AWS account. It also explains how to deploy to multiple AWS accounts using Terraform, without interfering with each other.

The project is still evolving. There are features I plan to add and parts of the codebase I want to refine.

For now, feel free to explore the repo and share your thoughts. You can also try the deployed bot [here](https://t.me/BackendLabBot). I will be using it to build and test new features, including the upcoming supermarket price lookup.
