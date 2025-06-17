---
layout: post
title: Running scheduled jobs with Docker and Kubernetes - Part 2
description: Deploying to Kubernetes

date: 2025-07-03
tags: [technical, programming, Docker, Kubernetes, AWS]
published: true
---

Welcome back! Congrats on successfully building your Dockerized cronjob! Let's deploy it to Kubernetes.

<hr>

### Pushing your image to AWS ECR

1. Login to AWS
```
aws --profile PROFILE_NAME sso login
```

2. Connect Docker to AWS ECR
```
aws --profile PROFILE_NAME ecr get-login-password --region REGION | docker login --username AWS --password-stdin ACCOUNT_ID.dkr.ecr.REGION.amazonaws.com
```

3. Build and tag your image
```
docker build -t ACCOUNT_ID.dkr.ecr.REGION.amazonaws.com/YOUR_REPO:IMAGE_TAG .
```

4. Push your image
```
docker push ACCOUNT_ID.dkr.ecr.REGION.amazonaws.com/YOUR_REPO:IMAGE_TAG
```

<hr>

### Deploying your job to Kubernetes

1. Create Kubernetes resources
a. `secrets.yml`
```
apiVersion: v1
kind: Secret
metadata:
  name: YOUR_SECRET_NAME
  namespace: YOUR_NAMESPACE
type: Opaque
data:
  MSSQL_URL_W_PORT: ENCODED_DB_URL_W_PORT
  MSSQL_DB_NAME: ENCODED_DB_NAME
  MSSQL_USERNAME: ENCODED_USERNAME
  MSSQL_PWD: ENCODED_PASSWORD
```
🔐 Encode values using: `echo -n "YOUR_VALUE" | base64`
❗ Reminder: Never hardcode sensitive data into YAML files in production.


b. `cronjob.yml`
```
apiVersion: batch/v1
kind: CronJob
metadata:
  name: YOUR_CRONJOB_NAME
  namespace: YOUR_NAMESPACE
spec:
  schedule: "0 16 * * *" # Runs every day at 16:00 UTC
  concurrencyPolicy: Replace
  suspend: false
  successfulJobsHistoryLimit: 3
  failedJobsHistoryLimit: 1
  jobTemplate:
    spec:
      activeDeadlineSeconds: 82800
      backoffLimit: 1
      ttlSecondsAfterFinished: 2592000
      template:
        spec:
          restartPolicy: Never
          containers:
            - name: CONTAINER_NAME
              image: ACCOUNT_ID.dkr.ecr.REGION.amazonaws.com/YOUR_REPO:IMAGE_TAG
              command: ["python", "main.py"]
              envFrom:
                - secretRef:
                    name: YOUR_SECRET_NAME
              resources:
                requests:
                  cpu: 200m
                  memory: 512Mi
                limits:
                  cpu: 1
                  memory: 1Gi
```

2. Deploy to Kubernetes
```
kubectl apply -f secrets.yml
kubectl apply -f cronjob.yml
```

* Verify that the deployment is success:
```
kubectl get cronjobs -n YOUR_NAMESPACE
```

* Trigger manually for testing:
```
kubectl create job --from=cronjob/YOUR_CRONJOB_NAME manual-run -n YOUR_NAMESPACE
```

<hr>

And that's it! You've now built, pushed, and deployed a cronjob from Docker to Kubernetes.

