---
layout: post
title: "AskAuntieBot: Cutting AWS Costs by 42%"
description: "Reviewing AskAuntieBot's AWS costs after going to production - where the money went, and two changes that dropped the monthly bill by over $700."

date: 2026-07-12
tags: [aws, cost-optimization, eks, rds, infrastructure]
published: true
---

AskAuntieBot, a products chatbot, had been lingering in my head for a few years, but I never had the time or bandwidth to build on it. That changed in March this year when I started dabbling with AI coding assistants. Development ramped up quickly - full architecture from backend data scraping to frontend chatbot integration, backed by scalable infrastructure. AskAuntieBot went into production in May 2026.

<hr>

I was focused on building a scalable and reliable system. What I didn't focus on was cost. When I reviewed the monthly bill, it came out to about $55 a day, roughly $1,672 a month, with dev and prod environments running concurrently. Two components accounted for most of it: Amazon EKS at $876 a month and Amazon RDS PostgreSQL at $431 a month - about 78% of the total.

<hr>

The EKS setup was identical for dev and prod: same compute type, same node count. Idle nodes still cost money, and dev sits idle most of the time. So I moved to manually scaling dev nodes up and down, only running them during active development. Prod couldn't get the same treatment - backend data processing jobs and user queries can arrive at any time, and users shouldn't wait for infrastructure to spin up before getting a response.

Scaling dev down this way roughly halves its cost, bringing EKS to an estimated $438 a month - a $438 saving.

<hr>

I had no prior experience with RDS or its database engines, and picked PostgreSQL for its ubiquity. Both dev and prod were running on a db.m5d.large instance at $0.29/hour, single-AZ, per environment. Given how light my current dev and prod workloads actually are, that instance size was overkill. I downsized both, with prod kept slightly larger to match its heavier workload.

Combined daily cost for both databases dropped to about $3, or $91 a month - a $340 saving.

<hr>

Together, these two changes cut about $778 off the monthly bill, bringing the estimate down to roughly $894. In practice I expect closer to a $700 saving, since I'll still scale dev back up during active development stretches - putting the realistic number around $972 a month, a 42% reduction overall.

None of this required new tooling or a redesign. Just an hour spent actually looking at where the money was going.