---
layout: post
title: Vibe Coding, But With Intent
description: Two months of building with Claude Code changed how I think about what engineers actually do. Here's what that looked like.

date: 2026-05-17
tags: [career, ai, engineering, agents]
published: true
---


When I first heard the term *vibe coding*, it carried a negative connotation. It described how anyone - regardless of technical background - could use an AI coding assistant to build a product from scratch. As an engineer who has built products and lived through every design decision they require, I was skeptical. An AI cannot make those calls independently, and certainly not on behalf of someone with no technical foundation.

After attending AI Dev 26 in San Francisco (covered [here](../posts/ai-impact-on-swe)), my view shifted. The agents are mature. The guardrails are thoughtful. What separates good outcomes from bad ones is how well the user defines the problem - not whether the AI is capable.

<hr>

My experience with AI coding tools has moved through two distinct phases.

The first was autocomplete. I used Cursor for about a year - completing functions, predicting intent, generating specific pieces on request. It worked well for focused tasks, but it still consumed significant time and full attention. I was directing every step.

The second phase was agentic. Over the past two months, I used Claude Code to build two products from scratch: a rostering system and a Telegram chatbot service. The rostering system took two weeks across two attempts. The first was unstructured - I let the agent run without clear requirements and paid for it. The second started with proper spec files, a reviewed design, and a clear execution order. That structure made the difference.

The chatbot work followed a similar pattern. I had an existing Telegram bot and a backend scraping pipeline. What I needed was a Spring Boot server to act as an interface between the chatbot service and a PostgreSQL database, a new chatbot service for product queries, and intent-based routing in the Telegram layer. I wrote almost no code. What I did instead was review implementation plans, push back on architecture that was too tightly coupled, and enforce a generalized, pluggable design. The agent built; I supervised.

The shift is real: the job became defining the problem well enough that the agent could solve it.

<hr>

This tracks with what I heard at AI Dev 26. The agents are here. What changes for engineers is which skills matter most - clear written specifications, architectural judgment, and the confidence to supervise without being misled. Technical depth still matters, not for writing code line by line, but for knowing when the agent is wrong.

That, and writing. Clear thinking requires clear writing, and clear writing is what makes the difference between an agent that builds what you meant and one that builds what you said.