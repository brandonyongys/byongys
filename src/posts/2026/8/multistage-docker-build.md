---
layout: post
title: "What Multi-Stage Builds Actually Buy You"
description: "I knew multi-stage builds for years without knowing what they were for. Rewriting one Dockerfile cut our transfer size by 68%."

date: 2026-08-24
tags: [engineering, docker, infrastructure, kubernetes]
published: true
---

The staging and production environments at my company are air-gapped. No Internet, no registry pull, no pipeline that reaches in from outside. Every release means building the image outside, saving it as a tarball, compressing it, moving it across by hand, loading it into an on-prem registry, and only then pushing it to Kubernetes for SIT, UAT and production. Each megabyte in that image is paid for at every one of those steps, on every release.

I spent a recent stretch going back through the fundamentals of Docker. I already knew the common commands and had used multi-stage builds before, but I had never sat with what they actually buy you. Once that landed, I rewrote our Dockerfile.

<hr>

The original was a classic single-stage build.

```dockerfile
FROM ubuntu:18.04

RUN apt-get update && apt-get install -y \
    software-properties-common libgl1-mesa-glx apt-utils

RUN add-apt-repository ppa:deadsnakes/ppa
RUN apt-get update && apt-get install -y python3.8 python3-pip python3.8-dev
RUN update-alternatives --install /usr/bin/python3 python3 /usr/bin/python3.8 1

RUN apt install curl -y
RUN curl https://packages.microsoft.com/keys/microsoft.asc | apt-key add -
RUN curl https://packages.microsoft.com/config/ubuntu/18.04/prod.list > /etc/apt/sources.list.d/mssql-release.list
RUN apt-get update
RUN ACCEPT_EULA=Y apt-get install msodbcsql17 -y
RUN apt-get install unixodbc-dev -y

WORKDIR /app
...
COPY requirements.txt requirements.txt
RUN python3 -m pip install --upgrade pip
RUN python3 -m pip install --no-cache-dir -r requirements.txt

COPY . .
CMD gunicorn django_server.wsgi:application --bind 0.0.0.0:8003 --timeout 100 --reload
```

It works. It also ships everything that was ever needed to build it - compilers, package manager caches, the `python3.8-dev` toolchain required to compile wheels like `pyodbc`. Nothing gets left behind, because there is nowhere to leave it.

<hr>

The rewrite splits the file into two stages: a `builder` that installs dependencies into a virtual environment, and a `runtime` stage that copies over the finished environment and none of the tools that produced it.

```dockerfile
# ---- builder ----
FROM ubuntu:24.04 AS builder
ENV DEBIAN_FRONTEND=noninteractive
RUN apt-get update && apt-get install -y --no-install-recommends \
        python3.12 python3.12-venv python3-pip \
    && rm -rf /var/lib/apt/lists/*
RUN python3 -m venv /opt/venv
ENV PATH="/opt/venv/bin:$PATH"
COPY requirements.txt requirements-test.txt .
RUN pip install --no-cache-dir --upgrade pip \
    && pip install --no-cache-dir --only-binary=:all: -r requirements.txt -r requirements-test.txt

# ---- runtime ----
FROM ubuntu:24.04
ENV DEBIAN_FRONTEND=noninteractive
RUN apt-get update && apt-get install -y --no-install-recommends \
        python3.12 python3-pip curl ca-certificates gnupg unixodbc \
    && curl -sSL https://packages.microsoft.com/keys/microsoft.asc \
        | gpg --dearmor -o /usr/share/keyrings/microsoft-prod.gpg \
    && echo "deb [arch=amd64,armhf,arm64 signed-by=/usr/share/keyrings/microsoft-prod.gpg] \
        https://packages.microsoft.com/ubuntu/24.04/prod noble main" \
        > /etc/apt/sources.list.d/mssql-release.list \
    && apt-get update \
    && ACCEPT_EULA=Y apt-get install -y --no-install-recommends msodbcsql18 \
    && rm -rf /var/lib/apt/lists/*

COPY --from=builder /opt/venv /opt/venv
ENV PATH="/opt/venv/bin:$PATH"

WORKDIR /app
COPY . .
EXPOSE 8006
CMD ["gunicorn", "django_server.wsgi:application", \
     "--bind", "0.0.0.0:8006", "--timeout", "100"]
```

*The key line is `COPY --from=builder /opt/venv /opt/venv`.* Only the finished virtual environment crosses the boundary into the runtime stage. No compilers, no `-dev` headers, no pip cache.

The rest is smaller savings that compound. `--no-install-recommends` on every install stops Ubuntu pulling in optional packages nobody asked for. `rm -rf /var/lib/apt/lists/*` runs inside the same `RUN` as the install it cleans up after - in a separate layer it would only hide the bytes, not remove them, since they still sit in the earlier layer. `--only-binary=:all:` forces pip onto prebuilt wheels rather than compiling from source, which is what lets the runtime stage drop `gcc` and `python3-dev` entirely.

Moving the base from `ubuntu:18.04` and Python 3.8 to `ubuntu:24.04` and Python 3.12 is not what shrank the image. It does mean current wheels and a supported ODBC driver, which removes most of the workarounds the old file was carrying.

<hr>

I built both files as-is and compared the image size against the compressed tarball from `docker save | gzip`. The tarball is the number that matters, because that is what gets carried across.

| | Old (single-stage) | New (multi-stage) | Reduction |
|---|---|---|---|
| Image size | 940 MB | 381 MB | ~59% smaller |
| `docker save \| gzip` tarball | 370 MB | 119 MB | ~68% smaller |

Roughly a third of the original transfer size. For one deploy that is a pleasant afternoon. For a release process that repeats build, save, compress, transfer, load every cycle, it changes what the process costs.

<hr>

Size is the visible win, but not the only one. Pulls in Kubernetes get faster, which shows up in pod startup and in how quickly a node can scale. The attack surface shrinks - there is no compiler and no dev header sitting in a production container for anyone who gets a shell to use. And the builder stage becomes free space: it can install test dependencies and whatever tooling it needs, none of which reaches what actually ships.

That last part is what I had missed for years. I thought of multi-stage builds as a size trick. They are a boundary - a way of saying explicitly what belongs in production and what was only ever scaffolding.
