---
layout: post
title: Querying Parquet Files on AWS Lambda with DuckDB
description: How I used DuckDB on AWS Lambda to query structured data from S3 without running a full database.

date: 2025-08-31
tags: [scrapping, database, AWS]
published: true
---

After scraping and parsing raw HTML into structured data, the next step is usually to store it in a database so it can be queried easily. The catch is that running a database isn't cheap, especially for a personal project. To work around this, I explored using AWS Lambda together with DuckDB.

Like a standard database (such as AWS RDS), DuckDB lets you query data with SQL. The key difference is that DuckDB can read directly from sources like pandas dataframes, CSVs, or parquet files. This fits well with my plan to add an LLM layer later on, where a user query gets turned into SQL to pull the right data before generating a response.

To make this possible, I consolidated all the scraped product data into a single parquet file and stored it in S3. I then built a general query Lambda that can run SQL statements against that parquet file in S3. In practice, it works like querying a database, but without the overhead of actually running one.

<hr>

### Why parquet files?
Parquet is a columnar storage format, which means it organizes data by column rather than row. This gives two big benefits:
1. Compression - parquet files are smaller than CSVs, saving on storage and transfer costs.
2. Selective reads - DuckDB can scan only the columns needed for a query instead of reading the whole dataset, which speeds things up.

<hr>

### Why DuckDB works well in Lambda
DuckDB is lightweight and doesn't require setting up a separate server. This makes it a good fit for Lambda, where you want something quick to spin up, run, and shut down. Instead of paying for an always-on database, I only pay for the compute time when a query actually runs.

<hr>

### How the Lambda query flow works
1. User sends a query request (for now, I test this with my own SQL).
2. Lambda pulls the parquet file directly from S3.
3. DuckDB runs the SQL against the parquet file.
4. The results are returned in structured JSON.

<hr>

### Sample Lambda code 
```
import duckdb
import logging

duckdb.sql("SET home_directory='/tmp'")
duckdb.sql(""" \
        INSTALL httpfs; \
        LOAD httpfs; \
    """)
duckdb.sql("SET s3_region='ap-southeast-1'") 

def lambda_handler(event, context):
    bucket = "my-bucket"
    key = "products/data.parquet"
    sql_statement = event.get("query", "SELECT COUNT(*) FROM parquet_scan('s3://my-bucket/products/data.parquet')")

    # Query parquet with DuckDB
    result = duckdb.sql(sql_statement).arrow()
    result_df = result.to_pandas()

    if result_df.empty:
        logging.warning("No data found")
        output_data = []
    else:
        logging.info("Gotten some data")
        output_data = result_df.to_dict("records")

    return {"statusCode": 200, "body": output_data}
```

<hr>

From here, the next step is to connect this flow with the LLM. The LLM will take a natural language query, turn it into SQL, run it through this Lambda, and then turn the results into a user-friendly answer.