---
layout: post
title: Running scheduled jobs with Docker and Kubernetes - Part 1
description: Building a Docker image for your cronjob

date: 2025-06-26
tags: [technical, programming, Docker, Kubernetes]
published: true
---

Docker is a fantastic invention for software development. It allows us to containerize our apps, packaging everything they need to run - regardless of the environment. This is particularly helpful when we want to deploy an app with specific dependencies that may not be present on the local machine. However, Docker by itself doesn't provide robust scalability or orchestration features.

That's where Kubernetes (K8s) comes in. Kubernetes is an open-source platform for automating the deployment, scaling, and management of containerized applications.

In an enterprise setting, K8s is extremely useful because it allows us to automate application deployments without needing to manually intervene (except for rare occasions when K8s breaks or requires updates). It's been very helpful in keeping the apps I've developed running reliably.

Now, I'm not a K8s expert, but I've built and deployed my fair share of apps using Kubernetes. While I won't cover setting up or managing your K8s cluster in this post, I will show you how to deploy a cronjob using Kubernetes.

<hr>

### Creating a simple app to connect to database
Let's start by building a Dockerized app that reads from and writes to a database.

1. Create an `.env` file with your database credentials
```
MSSQL_URL_W_PORT=YOUR_DB_URL:1433
MSSQL_DB_NAME=YOUR_DB_NAME
MSSQL_USERNAME=YOUR_USERNAME
MSSQL_PWD=YOUR_PASSWORD
```
⚠️ Note: Never commit `.env` files with real credentials to version control.

2. In the `src/` directory, create a file named `main.py`:
```
import os 
import logging
import pyodbc

logging.basicConfig(level=logging.INFO)

# DB setting
db_address = os.environ.get("MSSQL_URL_W_PORT")
db_name = os.environ.get("MSSQL_DB_NAME")
db_uid = os.environ.get("MSSQL_USERNAME")
db_pwd = os.environ.get("MSSQL_PWD")

def connect_to_db(address, name, uid, pwd):
    """
    Connect to the database using pyodbc.
    """
    try:
        conn = pyodbc.connect(SERVER=db_address,
                                database=db_name,
                                uid=db_uid,
                                pwd=db_pwd,
                                driver='{ODBC Driver 17 for SQL Server}',
                                Trusted_Connection='no')
        logging.info(f"Connection to '{db_name}' Database succeeded...")
        return conn
    except:
        logging.error(f"Connection to '{db_name}' Database failed...")
        return None

# Connect to the database
conn = connect_to_db(db_address, db_name, db_uid, db_pwd)

# TODO: Read data from database
# TODO: Run preprocessing step
# TODO: Write data back to database
```

3. Create a `requirements.txt`
    ✅ Add any additional packages you need here.
```
pyodbc==5.1.0
```


4. Create a `Dockerfile`
```
# Install Miniconda (python 3.11)
FROM continuumio/miniconda3:24.1.2-0

# Install necessary linux packages
RUN apt-get update --allow-releaseinfo-change-suite -y
RUN apt-get install unzip curl -y --reinstall build-essential -y \
                    unixodbc-dev -y gnupg -y nano -y

# Install ODBC 17 driver for Debian 10
RUN curl https://packages.microsoft.com/keys/microsoft.asc | apt-key add -
RUN curl https://packages.microsoft.com/config/debian/10/prod.list > /etc/apt/sources.list.d/mssql-release.list
RUN apt-get update --allow-releaseinfo-change-suite -y
RUN ACCEPT_EULA=Y apt-get install -y msodbcsql17

# Clean up
RUN apt-get clean
RUN rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Install necessary packages
WORKDIR "/home"
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
# RUN pip install -r requirements.txt

# Copy necessary files and codes
COPY src/ /home/
```

5. Add `docker-compose.yml`
```
version: "3.11"

services:
  app:
    build: .
    command: python main.py
    volumes:
      - .:/app
    env_file:
      - .env
```
6. Run the Docker container
```
docker compose up --build
```

If everything is correct, Docker will build your image and run your app.

<hr>

That's how you develop and run a Docker container on your local machine. In [Part 2](./k8s-cronjob-deployment-part2), we'll push this container to AWS ECR and deploy it to Kubernetes as a cronjob.