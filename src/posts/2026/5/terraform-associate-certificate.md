---
layout: post
title: Getting certified as HashiCorp Terraform Associate
description: Passed the Terraform Associate exam on my first try and now looking to put it to real use at work.

date: 2026-05-04
tags: [career, technical, certificate, terraform]
published: true
---

I passed the HashiCorp Terraform Associate (003) exam on 26 March 2026. Another certificate added, and this one feels different from my AWS certifications.

With the AWS exams, I was studying services I had used but never gone deep on. With Terraform, I had already been using it on my personal projects for a while. I manage a handful of AWS pipelines — a data scraping pipeline, a RAG pipeline, and a Telegram bot. More recently, I started managing EKS clusters for these as well. Terraform was my tool of choice across all of them, mainly because I wanted reproducible infrastructure and a clear record of what I had built.

Going into the exam, I was not starting from zero. But hands-on experience on personal projects and knowing the tool well enough to pass a certification exam are two different things.

<hr>

## How I studied

I used the Udemy course by Bryan Krausen, which includes both lesson videos and an exam prep course. Similar to how I approached my AWS certifications, I skipped most of the videos and went straight to the exam prep.

The questions in the prep course are close in style and difficulty to the actual exam. More importantly, each question comes with a detailed explanation, which is where the real learning happened. It forced me to understand why an answer was correct rather than just pattern-matching the options.

I spent about two weeks on this. Not two intensive weeks, but focused enough that I felt ready by the time I sat for the online proctored exam.

<hr>

## The exam itself

After submitting, I had the familiar feeling of having passed but not being certain. There were some genuinely difficult questions, particularly around HCP Terraform, which is HashiCorp's managed cloud platform. That was my weaker area going in. Most of my experience is with open-source Terraform, and HCP Terraform is something you really only get comfortable with through production use.

The result confirmed I passed on the first attempt, though the section scores were a honest reflection of where I stand. HCP Terraform was flagged as needing more review, which is accurate.

<hr>

## What's next

The more meaningful part is applying this at work.

Our current setup is split. Lambda functions are managed through the Serverless Framework, which works well for that specific use case. But everything else — DynamoDB tables, API Gateway configurations, Secrets Manager entries — was created manually, across three environments. That means configuration drift is a real risk, there is no single source of truth, and onboarding someone new means walking them through a setup that only exists in someone's memory or in scattered notes.

This is exactly the problem I already solved on my personal projects. I documented part of that journey in an [earlier post](../../2025/7/terraform-basic-telegram), where I migrated my Telegram bot infrastructure from Serverless Framework to Terraform. The tradeoff was real: Serverless Framework is fast and beginner-friendly for Lambda, but it does not cover the rest of your stack. As the infrastructure grows, that gap becomes harder to ignore.

At work, the plan is to bring those manually managed resources — DynamoDB, API Gateway, Lambda, Secrets Manager — under Terraform. Having all of it defined in code means changes are reviewable, environments stay consistent, and nothing relies on someone remembering what they clicked six months ago.

The other concrete target is EC2. I currently run a dev instance manually. If a teammate needs a similar environment, I have to either walk them through setup or do it myself. With Terraform, I can define the instance configuration once, replicate it on demand, and tear it down cleanly when it is no longer needed. As people join or leave the team, that matters both for access management and for cost.

Passing the exam gives me the grounding to do this credibly. The harder part is migrating live infrastructure that a team depends on and building enough trust that people are comfortable letting Terraform manage it. That is the part I am working towards.
