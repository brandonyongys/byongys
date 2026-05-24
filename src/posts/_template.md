---
layout: post
title: "Post Title"
description: Short description shown in post listings and meta tags.
date: 2026-01-01
tags: [tag1, tag2]
published: false
---

Post content goes here.

## Image Directive Reference

### Float right (with caption)

::image{src="/images/YYYY/filename.jpg" float="right" width="250" alt="Alt text" caption="Caption below image"}

### Float left (no caption)

::image{src="/images/YYYY/filename.jpg" float="left" width="200" alt="Alt text"}

### Full width centered

::image{src="/images/YYYY/filename.jpg" float="center" alt="Alt text"}

### Side-by-side equal (48/48)

:::image-row
::image{src="/images/YYYY/a.jpg" width="48%" alt="Left image" caption="Left caption"}
::image{src="/images/YYYY/b.jpg" width="48%" alt="Right image" caption="Right caption"}
:::

### Side-by-side unequal (60/38)

:::image-row
::image{src="/images/YYYY/a.jpg" width="60%" alt="Wider image" caption="Wider caption"}
::image{src="/images/YYYY/b.jpg" width="38%" alt="Narrower image" caption="Narrower caption"}
:::


## Reference post
[here](../posts/ai-impact-on-swe)