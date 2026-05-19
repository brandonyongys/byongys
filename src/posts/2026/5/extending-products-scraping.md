---
layout: post
title: "Extending a Pipeline I Didn't Write"
description: "What it looks like to extend an existing scraping pipeline using Claude Code — and why preparation still matters more than the agent."

date: 2026-05-19
tags: [ai, engineering, agents, backend]
published: true
---

Building a product from scratch with Claude Code taught me a lot about how to direct an agent effectively. The question I wanted to answer next was whether that same approach holds when extending an existing, already-deployed project.

Using it at work was not the right test. Any mistake there has real consequences, and I would need to review every line before anything touched production. My supermarket products scraping pipeline was a better candidate — low stakes, real complexity, and something I had been meaning to extend for a while.

<hr>

The pipeline at that point did one thing: scrape product data from a supermarket website and write the raw JSON to S3. There was no parsing, no structured storage, nothing a downstream application could easily consume.

The extension I had in mind followed a clear pattern. When raw data lands in S3, an event is published to SQS, which triggers a Lambda to parse it. The processed records are written to a PostgreSQL database through a Spring Boot server that sits between the Lambda and the database. I chose Spring Boot over something more familiar like Django deliberately — I wanted to learn another language, and this was a contained enough project to do it safely.

Before touching Claude Code, I designed the database schema myself. I had a clear enough picture of the data model to draft it, and I used an SQL skill to review and sharpen it before moving on. Getting the schema right early avoids rework that is hard to undo once the application layer is built around it.

<hr>

With the schema done, I ran a brainstorming session and wrote a structured plan — specs and execution order — before giving Claude anything to implement. That preparation made a measurable difference in the first project I built this way, and it held here too.

Once the plan was in place, I let Claude execute it using subagents. I reviewed progress at key points, checked what was built, and stepped in when direction was needed. I wrote almost no code. What I did instead was supervise: verify that the implementation matched the design, catch anything that drifted, and redirect where needed.

Testing revealed edge cases that were not in the plan. I prompted Claude to handle them as they surfaced. That back-and-forth is expected — no spec survives first contact with real data completely intact.

<hr>

The full extension was done over a weekend. That pace would not have been possible if I had coded it myself, especially across a stack that included a language I am still learning.

What this reinforced is the same point from the SF conference: higher-order thinking matters more than ever, and the ability to write code line by line matters less. That does not mean technical knowledge is irrelevant. I needed enough familiarity with Spring Boot to judge whether what Claude produced was correct. Supervision without domain knowledge is just approval.