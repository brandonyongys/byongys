---
layout: post
title: "AskAuntieBot: Shipping the First Products Chatbot"
description: "How I turned a scraping pipeline into a queryable Telegram chatbot and the issues I found immediately."

date: 2026-05-22
tags: [engineering, backend, chatbot, telegram, products]
published: true
---

I had a working backend pipeline and a database full of supermarket product data. What I did not have was any way for someone to actually use it. A basic Telegram bot was already running - capable of receiving a message and returning a fixed response - so the path forward was to extend it rather than rebuild anything. I connected a new chatbot service alongside it: two microservices, a dispatcher and a products query service, that could sit independently from the existing stack.

The products query service is the only component that talks to the database, routed through a Spring Boot server. The dispatcher receives the incoming payload from the Telegram bot, validates that the necessary slots are present, triggers a query, and shapes the response before sending it back. The Telegram bot itself stays mostly unchanged. That separation was intentional - I wanted to be able to extend the chatbot layer without touching infrastructure that was already working.

[AskAuntieBot](t.me/AskAuntieBot) is now live on Telegram.

<hr>

I used it for a few sessions and found five things that needed fixing.

The first was *result relevance*. Asking for the price of Sunflower Oil returns every product containing that phrase - 'Unmeat Fish-free Tuna Style Flakes in Sunflower Oil', 'Ayam Brand Tuna Chunks - Sunflower Oil', 'Coelsanus Tomatoes In Sunflower Oil - Artichokes & Dried'. The query is too broad. It needs to surface products where sunflower oil is the primary item, not an ingredient.

The second was *conversation memory*. When the bot returns a list of options and I pick one, it responds with an error. It has no context from the previous turn - each message is processed in isolation. Without history, multi-turn exchanges are not possible.

The third was *historical pricing*. The bot prompts for the right input but cannot execute the query. The capability is simply not there yet in the products query service.

The fourth was *the welcome message*. It is generic. No instructions, no description of what the bot can do, no indication of recent changes. A first-time user has nothing to go on.

The fifth was *coverage*. There is data from one supermarket. No Sheng Siong, no Cold Storage. Without more sources, price comparison - the most useful thing the bot could do - is not possible.

<hr>

These issues came from a single user, in the first few sessions. That is actually a reasonable outcome for a first version: the core flow is stable enough to use, and using it surfaced exactly what needs to change next.