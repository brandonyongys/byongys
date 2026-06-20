---
layout: post
title: "AskAuntieBot: A Second Supermarket, and the Problems That Followed"
description: "Expanding to a second supermarket was straightforward. What it uncovered about the existing pipeline was not."

date: 2026-06-19
tags: [engineering, backend, chatbot, scraping]
published: true
---

AskAuntieBot started with FairPrice. That made sense for an initial build, but it also meant the chatbot was only useful to a subset of users. Most people in Singapore shop across several supermarkets - FairPrice, Sheng Siong, Giant - and limiting to one was an obvious gap.

Expanding to Sheng Siong was the first step. The scraping and parsing pipeline already had a clear structure, so adding a new supermarket meant extending it rather than redesigning it. That part went smoothly.

<hr>

What the expansion exposed was less clean.

Some of the existing product URLs in the database were no longer valid. Supermarkets reorganise their product pages, and the pipeline had no way to detect that. It would attempt to scrape a stale URL, get nothing meaningful, and move on silently.

To fix this, I built a URL discovery pipeline that runs daily before the main scraping step. It finds updated product URLs and writes them back to the database, so by the time the scraper runs, it is working with current links.

I also updated the scraping pipeline itself to check whether a URL is active before attempting to parse it. If a URL is inactive, the record gets flagged in the database and skipped on subsequent runs. It is a small change but it cuts down unnecessary load and makes failures visible rather than silent.

<hr>

There are still gaps. Cold Storage does not expose product data in a way that's straightforward to scrape. Giant does not publish it online at all. For those, the only real option might be user submissions - a photo upload flow where shoppers contribute prices directly. That is further down the road.

For now, covering Sheng Siong is a meaningful step, and the pipeline is more resilient than it was before.