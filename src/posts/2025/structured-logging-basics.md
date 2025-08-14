---
layout: post
title: Structured Logging with Correlation IDs for Easier Troubleshooting
# description: Automated and version controlled terraforming

date: 2025-08-14
tags: [deployment, logging]
published: true
---

As I transition my systems toward a microservices-oriented architecture such as my basic Telegram bot, the services naturally become more distributed and complex. This makes troubleshooting more challenging since errors can occur anywhere in the chain.

Previously, I would manually inspect log files for each microservice. While this worked because I was familiar with the system, it was time-consuming and inefficient, especially for newcomers or during critical incidents.

To improve this, I implemented structured logging with correlation IDs:
- Structured logs are now stored in JSON format, making them easier to search and parse.
- A correlation ID is generated for each incoming payload and passed along as it flows through the system.
  This allows me to trace a request end-to-end across multiple services.

<hr>

## Example Logger Setup
```
# logger.py
import logging
import structlog
import sys

def setup_logging():
    logging.basicConfig(
        format="%(message)s", 
        stream=sys.stdout,
        level=logging.INFO
        )

    structlog.configure(
        processors=[
            structlog.processors.TimeStamper(fmt="iso", utc = False),
            structlog.processors.add_log_level,
            structlog.contextvars.merge_contextvars,  # for dynamic context like correlation_id
            structlog.processors.JSONRenderer()
        ],
        context_class=dict,
        logger_factory=structlog.stdlib.LoggerFactory(),
        wrapper_class=structlog.stdlib.BoundLogger,
        cache_logger_on_first_use=True
    )

setup_logging()
logger = structlog.get_logger()
```

<hr>

## Adding the Correlation ID in a Lambda

```
# lambda_handler.py
import uuid
from structlog import contextvars
from logger import logger

correlation_id = event.pop("correlation_id", None) or str(uuid.uuid4())
contextvars.bind_contextvars(
  correlation_id=correlation_id, 
  lambda_function=os.getenv("AWS_LAMBDA_FUNCTION_NAME", "unknown"),
)

logger.info("EVENT NAME", **{"extra_info": info_pls})
# Apply logic here

logger.info("Invoking next lambda", **{"lambda_event": event})
...
```

<hr>

## Implementation Steps
1. Add correlation ID at the entry point - usually the first microservice receiving the payload.
2. Propagate the ID through every Lambda - generate one if missing, then include it in the outgoing payload.
3. Switch from `logging` to `structlog` - allows binding the correlation ID once instead of passing it manually to every log statement.
4. Query logs efficiently - with JSON logs, I can filter across the entire distributed system using AWS CloudWatch Logs Insights:

```
fields @timestamp, event, lambda_function, level
| filter correlation_id = 'random-alphanumeric'
| sort @timestamp asc
```

To make finding the correlation ID easier during errors, I plan to send both the payload and ID to a dead letter queue (DLQ) whenever an exception occurs. From there, I can instantly retrieve the ID and run a log search.

<hr>

This approach has greatly improved my ability to troubleshoot distributed systems. While it's not a complete solution for large-scale failure handling, it's a strong foundation for structured logging and it can be expanded with more sophisticated monitoring and automated recovery in the future.

