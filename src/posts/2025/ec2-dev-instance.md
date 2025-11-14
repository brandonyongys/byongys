---
layout: post
title: Saving my machine life..
description: ...by doing development work on another machine

date: 2025-11-19
tags: [development, AWS, technical]
published: true
---

For as long as I can remember, I did all my development on my own machine. Back then, I wrote code locally and sent the jobs to a high performance cluster to train ML and DL models. These days, that part of my work is long gone. Most of my time is spent building logic, writing REST APIs, and deploying to AWS and on-prem kubernetes. I test things locally with Docker.

Working on my own machine was fine for a while. But as I took on more projects, the number of repositories grew, and managing them became a pain. I ended up running several VS Code windows because using a single window for many repos made git work messy.

During my recent trip to the UK, I met a close friend who suggested that I switch to doing my development on an EC2 instance. I hesitated at first since it meant setting up everything again. After thinking about it more, the idea made sense. My laptop could stay light, my system resources would not get drained, and the hardware limits of my own machine would not hold me back. I can spin up a stronger EC2 machine any time I want, without shopping for a new laptop.

There are a few things to weigh. The main one is cost. A large EC2 instance is not cheap and it adds up. To manage this, I start and stop the instance only when I need it. My company also bought a savings plan, so I might as well make use of it.

Security is another point. Even though the instance only handles development work with no production data, the code is still sensitive. I locked the inbound rules to my home and office IPs. If I work from another place or my IP changes, I update the rules. It adds a small step, but it keeps things safe.

The setup phase took some time, as I had to configure and test everything from scratch. But once it was done, the workflow felt smooth. After using it for a little over two weeks, I'm happy with the move.