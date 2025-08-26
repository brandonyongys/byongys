---
layout: post
title: Building a Simple Supermarket Price Scraper
description: How I built a low-cost setup to track supermarket prices without running a full database.

date: 2025-08-26
tags: [scrapping, AWS]
published: true
---

I've been wanting to scrape and preprocess product data from different retailer websites for a while. The goal is to build a way to quickly query current prices in Singapore. My motivation is simple: prices keep going up, and sometimes the same items are cheaper in Malaysia. The problem is, checking prices one by one takes time.

<hr>

<p align="center">
  <img src="/images/2025/products_data_scrapper_architecture.png" />
</p>

The diagram above shows the high-level design of my data scraping pipeline for supermarket sites.

1. Event start - An EventBridge event triggers the `Master data scrapper` Lambda, which sends product page URLs into an SQS queue.
2. Scraping - The `Worker data scrapper` Lambdas pick up messages from the queue and scrape the product listings. Depending on the site, the worker either handles infinite scrolling or moves through pages until all products are collected.
3. Raw data storage - The scraped results are saved as JSON in an S3 bucket.
4. Parsing - When new JSON is stored, the `Product parser` Lambda extracts details such as product name, prices (regular and promo), weight, and unit of measure, and writes them back into S3.
5. Query prep - Ideally, this processed data should live in a database for easy querying. But running an RDS instance or an EC2-hosted database is too costly for a development setup. As a workaround, the `Database ETL` Lambda consolidates the processed data into Parquet files, which can then be queried through the `Database query` Lambda.

<hr>

That's the current setup. It's not perfect, but it works. The plan is to keep running it in production, learn from it, and improve as I go. A first version doesn't have to be flawless - it just has to exist.

