---
layout: post
title: From Serverless Framework to Terraform - My Journey Deploying a Telegram Chatbot
# description: Automated and version controlled terraforming

date: 2025-07-22
tags: [AWS, programming, deployment, terraform]
published: true
---

I've been using the [Serverless Framework](https://www.serverless.com/) to manage resource deployments on AWS. It's a great tool - fast, beginner-friendly, and ideal for managing AWS Lambda functions and related services. At work, our team relies on it heavily because most of our infrastructure is serverless. Other components like VPCs and databases are handled by a separate team, so Serverless Framework suits our scope perfectly.

When I started building a personal Telegram chatbot (more details [here](../../projects/basic-telegram-bot-architecture)), I initially used Serverless as well. It worked fine, but as I expanded the architecture to include services like API Gateway, DynamoDB, and S3, I realized managing these manually wasn't sustainable. Over time, I'd forget how I configured earlier components, which could lead to inconsistency and potential issues during updates.

That led me to Terraform - a powerful Infrastructure as Code (IaC) tool - and a skill I knew would benefit my professional development.

<hr>

# Getting Started with Terraform
I began with the basics: deploying an EC2 instance using the [official tutorial](https://developer.hashicorp.com/terraform/tutorials/aws-get-started/aws-create). It was straightforward and gave me a good grasp of the Terraform workflow. But when I applied it to my chatbot project, things quickly got more complex.

I turned to ChatGPT for help with initial setup tasks like creating the S3 bucket and DynamoDB tables. I also explored the [AWS Terraform Provider Registry](https://registry.terraform.io/providers/hashicorp/aws/latest/docs) to better understand how each AWS resource is represented.

Here are the core Terraform commands I found myself using most often:
| command line | Meaning |
| ---- | ---- |
| `terraform init` | Initialize the working directory |
| `terraform fmt` | Format Terraform configuration files |
| `terraform validate` | Check the configuration for syntax and internal consistency |
| `terraform plan` | Preview the changes Terraform will make |
| `terraform apply` | Apply the proposed changes |
| `terraform destroy` | Tear down the infrastructure |

With these tools in hand, I started building and deploying my infrastructure more confidently. Here are a few key learnings from that process.

<hr>

# Automating Lambda Packaging and Deployment

The [Terraform documentation](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/lambda_function) covers how to deploy AWS Lambda functions from a `.zip` file. However, it assumes you've already packaged your code manually.

To streamline my workflow, I use a `null_resource` block with `local-exec` to automatically build and zip the Lambda code - including dependencies:

```
resource "null_resource" "build_lambda" {
  for_each = var.lambda_functions

  provisioner "local-exec" {
    command = <<EOT
      rm -rf ${path.module}/../../../builds/${each.key}
      mkdir -p ${path.module}/../../../builds/${each.key}
      python3 -m pip install --upgrade pip
      pip install -r ${path.module}/../../../${var.src_folder_name}/requirements.txt --target ${path.module}/../../../builds/${each.key}
      cp -r ${path.module}/../../../${var.src_folder_name}/${each.key} ${path.module}/../../../builds/${each.key}/
      cp -r ${path.module}/../../../sls_helpers ${path.module}/../../../builds/${each.key}/
    EOT
  }

  triggers = {
    always_run = timestamp()
  }
}

data "archive_file" "lambda_zip" {
  for_each    = var.lambda_functions
  type        = "zip"
  source_dir  = "${path.module}/../../../builds/${each.key}"
  output_path = "${path.module}/../../../builds/${each.key}.zip"

  depends_on = [null_resource.build_lambda]
}
```

This eliminates the need for manual zipping and ensures consistent builds.

<hr>

# Cleaning Up After Deployment

To keep my workspace clean, I added another `null_resource` block to remove the temporary build directory once deployment completes:

```
resource "null_resource" "cleanup_lambda_build" {
  provisioner "local-exec" {
    command = <<EOT
      rm -rf ${path.module}/../../../builds/
    EOT
  }

  triggers = {
    always_run = timestamp()
  }
  
  depends_on = [
    data.archive_file.lambda_zip,
    aws_lambda_function.lambda
  ]
}
```

<hr>

# Managing Variables with `.tfvars` Files

To avoid hardcoding values (like API tokens or environment tags), I moved them to a separate `.tfvars` file - such as `dev.tfvars`.

To use it, simply run: `terraform apply -var-file="dev.tfvars"`

Just remember to define all the required variables in your `variables.tf` and reference them appropriately in `main.tf` or other configuration files.

<hr>

# Final Thoughts

Switching from Serverless Framework to Terraform has been a rewarding experience. It gave me better control and visibility over my infrastructure, and it's a valuable addition to my DevOps skillset.

If you're currently using Serverless and find yourself needing more flexibility or want to broaden your deployment skills, I highly recommend giving Terraform a try.

