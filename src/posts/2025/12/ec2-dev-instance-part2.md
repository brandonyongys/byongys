---
layout: post
title: Working with a dev machine
description: Follow up on saving my machine life..

date: 2025-12-14
tags: [development, AWS, technical]
published: true
---

It has been a little over a month since I set up an Ubuntu EC2 instance for my development work.

At the start, it was not smooth. I had to set everything up from scratch again, AWS profiles, Git, and all the usual tools. It took time, but it forced me to revisit steps I had not touched in a while. That refresher alone made the effort worth it.

After a few weeks, the upsides became clear.

The biggest win is battery life. I no longer run heavy tools like Docker or a second operating system through WSL on my laptop. Most of the resource hungry work now lives on the EC2 instance. I still run apps like DBeaver and Postman locally, but even with that, my laptop runs cooler and lasts much longer on a single charge. The tradeoff feels fair.

Another benefit I did not expect was the cleaner split between my laptop and my work environment. My local machine feels lighter, with fewer configs and background services to worry about. Almost everything related to development now lives in one place, which makes it easier to manage and reason about.

There is one recurring annoyance. Whenever I work outside my usual spots, home or office, I need to update the EC2 inbound rules. Public WiFi or phone hotspots mean a different IP address, so I have to whitelist it again. It is a small hassle, but it also means the instance stays locked down instead of being open to the world. I am fine with that.

As for latency, it has been mostly a non issue. In day to day work, I hardly notice any difference compared to working locally. That said, when my network is weak, it can take a while to start things up or reconnect when needed. It is not a deal breaker, but it is something to be aware of.

All in all, this has been a worthwhile setup, and I am glad I tried it after taking a break from work and visiting a friend in the UK. It gave me the space to rethink how I work day to day.

I would do this again when I move to another employer. If you have never tried running your development setup this way, it is worth giving it a shot and seeing how it fits into your routine. It may work better than you expect.
