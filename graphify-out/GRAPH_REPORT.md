# Graph Report - .  (2026-05-04)

## Corpus Check
- 104 files · ~329,474 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 286 nodes · 314 edges · 45 communities detected
- Extraction: 80% EXTRACTED · 20% INFERRED · 1% AMBIGUOUS · INFERRED: 62 edges (avg confidence: 0.8)
- Token cost: 43,100 input · 14,500 output

## Community Hubs (Navigation)
- [[_COMMUNITY_React App Core|React App Core]]
- [[_COMMUNITY_Goals and Career Progression|Goals and Career Progression]]
- [[_COMMUNITY_Blog Content Pipeline|Blog Content Pipeline]]
- [[_COMMUNITY_RAG Pipeline Improvements|RAG Pipeline Improvements]]
- [[_COMMUNITY_Telegram Chatbot Project|Telegram Chatbot Project]]
- [[_COMMUNITY_App Shell and Routing|App Shell and Routing]]
- [[_COMMUNITY_Telegram Bot Setup Series|Telegram Bot Setup Series]]
- [[_COMMUNITY_AWS Cloud Learning Journey|AWS Cloud Learning Journey]]
- [[_COMMUNITY_Portfolio Architecture Concepts|Portfolio Architecture Concepts]]
- [[_COMMUNITY_Multi-Turn Chatbot and AWS Lex|Multi-Turn Chatbot and AWS Lex]]
- [[_COMMUNITY_DSA Interview Prep|DSA Interview Prep]]
- [[_COMMUNITY_OpenSearch and Naive RAG|OpenSearch and Naive RAG]]
- [[_COMMUNITY_React Website Enhancement|React Website Enhancement]]
- [[_COMMUNITY_React Portfolio Migration|React Portfolio Migration]]
- [[_COMMUNITY_RDS SSH Tunnel|RDS SSH Tunnel]]
- [[_COMMUNITY_Personal Reflections|Personal Reflections]]
- [[_COMMUNITY_Docker and Kubernetes CronJobs|Docker and Kubernetes CronJobs]]
- [[_COMMUNITY_EC2 Dev Instance|EC2 Dev Instance]]
- [[_COMMUNITY_Search Feature|Search Feature]]
- [[_COMMUNITY_Task Management Tools|Task Management Tools]]
- [[_COMMUNITY_CV Page|CV Page]]
- [[_COMMUNITY_Writing and IELTS|Writing and IELTS]]
- [[_COMMUNITY_Finding Inspiration|Finding Inspiration]]
- [[_COMMUNITY_Loading Spinner|Loading Spinner]]
- [[_COMMUNITY_CV Component|CV Component]]
- [[_COMMUNITY_Markdown Utility|Markdown Utility]]
- [[_COMMUNITY_GitHub Page Launch|GitHub Page Launch]]
- [[_COMMUNITY_Background Assets|Background Assets]]
- [[_COMMUNITY_RDS SSH Diagram|RDS SSH Diagram]]
- [[_COMMUNITY_ESLint Config|ESLint Config]]
- [[_COMMUNITY_Vite Config|Vite Config]]
- [[_COMMUNITY_Tailwind Config|Tailwind Config]]
- [[_COMMUNITY_PostCSS Config|PostCSS Config]]
- [[_COMMUNITY_App Entry Point|App Entry Point]]
- [[_COMMUNITY_Markdown Context|Markdown Context]]
- [[_COMMUNITY_Pagination Constants|Pagination Constants]]
- [[_COMMUNITY_Search Index Generator|Search Index Generator]]
- [[_COMMUNITY_ESLint Setup|ESLint Setup]]
- [[_COMMUNITY_PostCSS Setup|PostCSS Setup]]
- [[_COMMUNITY_Travel Post|Travel Post]]
- [[_COMMUNITY_AI Trip Planning|AI Trip Planning]]
- [[_COMMUNITY_Terraform Certificate|Terraform Certificate]]
- [[_COMMUNITY_Site Logo Variant 1|Site Logo Variant 1]]
- [[_COMMUNITY_Site Logo Variant 2|Site Logo Variant 2]]
- [[_COMMUNITY_Multi-Turn Chatbot Flow Diagram|Multi-Turn Chatbot Flow Diagram]]

## God Nodes (most connected - your core abstractions)
1. `getMarkDown` - 11 edges
2. `App()` - 10 edges
3. `Modular Telegram Chatbot Architecture (Project)` - 10 edges
4. `useMarkdownData()` - 9 edges
5. `ProjectPostPage()` - 8 edges
6. `Building a Telegram Chatbot with AWS Lambda` - 8 edges
7. `RAG Powered Chatbot Architecture (Project)` - 8 edges
8. `MarkdownProvider()` - 7 edges
9. `Basic Telegram Chatbot Architecture` - 7 edges
10. `From Templates to Something That Feels Like Me (Post)` - 7 edges

## Surprising Connections (you probably didn't know these)
- `From Templates to Something That Feels Like Me (Post)` --related_asset--> `Vite logo SVG asset`  [INFERRED]
  src/posts/2026/2/enhancing-react-website.md → public/vite.svg
- `Context-level memoization pattern` --implemented_by--> `MarkdownContext`  [EXTRACTED]
  README.md → src/context/MarkdownContextInstance.js
- `XSS mitigation via rehype-sanitize` --implemented_by--> `react-markdown`  [EXTRACTED]
  README.md → src/pages/PostPage.jsx
- `Hosting a Database - From EC2 to RDS with SSH Tunnel` --semantically_similar_to--> `AWS S3 (Raw Data Storage)`  [AMBIGUOUS] [semantically similar]
  src/posts/2025/3/rds-ssh-tunnel.md → src/posts/2025/8/products-data-scrapping.md
- `RAG Powered Chatbot Architecture (Project)` --illustrated_by--> `RAG chatbot illustration (friendly orange robot waving beside a mobile chat interface)`  [EXTRACTED]
  src/projects/rag-powered-chatbot.md → public/images/2025/rag_chatbot.png

## Hyperedges (group relationships)
- **Markdown data pipeline: getMarkDown -> MarkdownProvider -> useMarkdownData -> consumers** — utils_getmarkdown, markdowncontext_markdownprovider, markdowncontextinstance_markdowncontext, hooks_usemarkdowndata, latestpostlist_postlist, projectpage_projectpostpage, about_about [INFERRED 0.85]
- **App shell: ErrorBoundary wraps MarkdownProvider wraps Router with Navbar, ScrollToTop, Routes, Footer** — app_app, errorboundary_errorboundary, markdowncontext_markdownprovider, navbar_navbar, scrolltotop_scrolltotop, footer_footer [EXTRACTED 1.00]
- **Components sharing PAGINATION constants for paginated UX** — constants_pagination, latestpostlist_postlist, searchresults_searchresults [EXTRACTED 1.00]
- **Pages using useMarkdownData hook** — projects_jsx, blog_jsx, postpage_jsx, markdownpage_jsx, home_jsx, usemarkdowndata_js, markdowncontext, getmarkdown_js [INFERRED 0.90]
- **Pages rendering Markdown with react-markdown + rehype-sanitize** — postpage_jsx, markdownpage_jsx, home_jsx, reactmarkdown_lib, concept_xss_mitigation [EXTRACTED 1.00]
- **Search index build and query pipeline** — generatesearchindex_js, getmarkdown_js, searchindex_json, usesearch_js, fusejs, searchpage_jsx [EXTRACTED 1.00]
- **Career reflection posts by Brandon Yong** — post_getting_first_ds_job, post_whats_next, post_getting_aws_dva, post_2024_reflection, post_faang_interview, tag_career, brandon_yong [INFERRED 0.85]
- **Telegram Bot Development Series** — building_telegram_chatbot_post, securing_telegram_bot_post, setting_up_rag_telegram_bot_post, scaling_rag_pipeline_post, improved_rag_pipeline_post, terraform_basic_telegram_post, structured_logging_post [EXTRACTED 0.95]
- **Docker and Kubernetes Cronjob Series** — k8s_cronjob_part1_post, k8s_cronjob_part2_post [EXTRACTED 1.00]
- **React Portfolio Web App Series** — creating_react_webapp_part1_post, creating_react_webapp_part2_post, creating_react_webapp_part3_post [EXTRACTED 1.00]
- **Supermarket Price Scraper Pipeline** — products_data_scrapping_post, query_using_duckdb_post [INFERRED 0.90]
- **AWS Certification Journey** — getting_aws_saa_aws_cloud_practitioner, getting_aws_saa_aws_saa, getting_aws_saa_aws_ml_specialty [EXTRACTED 1.00]
- **Personal Reflection and Growth Posts** — thief_of_joy_post, future_me_post, falling_sick_post, genai_interview_reflection_post [INFERRED 0.85]
- **RAG Pipeline Technology Stack** — connecting_opensearch_post, naive_rag_pipeline_post, naive_rag_pipeline_opensearch_knn, naive_rag_pipeline_claude_llm, naive_rag_pipeline_summarization_before_embedding, naive_rag_pipeline_reranking, telegram_chatbot_architecture_rag_plan [INFERRED 0.90]
- **Telegram Chatbot AWS Infrastructure** — telegram_chatbot_architecture_post, telegram_chatbot_architecture_webhook, telegram_chatbot_architecture_dynamodb_session, telegram_chatbot_architecture_lambda_microservices, telegram_chatbot_architecture_s3_archive, golang_server_go_server, golang_server_rds [INFERRED 0.85]
- **2025 Career Reflection and Self-Development** — rethinking_how_i_learn_post, reflections_2025_post, dsa_interview_post, rethinking_how_i_learn_georgia_tech_mscs, reflections_2025_career_direction, reflections_2025_goal_setting_approach [INFERRED 0.85]
- **AWS Certification Learning Progression** — data_science_interviews_cloud_gap, getting_aws_ccp_post, getting_aws_ccp_skillbuilder, reflections_2025_sap_c02, goals_2025_mls_c01 [INFERRED 0.80]
- **Telegram Bot AWS Infrastructure Stack** — basic_telegram_bot_architecture_project, basic_telegram_bot_architecture_api_gateway, basic_telegram_bot_architecture_dynamodb, basic_telegram_bot_architecture_terraform, rag_powered_chatbot_aws_lambda, open_sourced_telegram_bot_repo, open_sourced_telegram_bot_backendlabbot [INFERRED 0.85]
- **RAG Pipeline AWS Stack** — rag_powered_chatbot_project, rag_powered_chatbot_aws_lambda, rag_powered_chatbot_amazon_bedrock, rag_powered_chatbot_opensearch, rag_powered_chatbot_s3, rag_powered_chatbot_banking_faq [INFERRED 0.90]
- **Portfolio Website Technology Stack** — enhancing_react_website_post, enhancing_react_website_react, enhancing_react_website_vite, enhancing_react_website_tailwind, react_svg_asset, vite_svg_asset [INFERRED 0.85]

## Communities

### Community 0 - "React App Core"
Cohesion: 0.08
Nodes (19): About(), Blog(), PAGINATION constants, formatDate(), Home(), useMarkdownData hook, PostList(), MarkdownProvider() (+11 more)

### Community 1 - "Goals and Career Progression"
Cohesion: 0.08
Nodes (28): Golang Application Development Goal (2025), MLS-C01 Certification Goal (2025), Setting Goals for 2025, Supermarket Chatbot Goal (2025), Weekly Blog Post Goal (2025), EKS Deployment Deferred (cost ~$100/month, not justified for intermittent use), Go Server (intermediary between Lambda and RDS), Building a Secure Go Server for Lambda Microservices (+20 more)

### Community 2 - "Blog Content Pipeline"
Cohesion: 0.17
Nodes (22): About Config Markdown, Blog, Brandon Yong (author/engineer), formatDate, front-matter (npm package), getMarkDown, Home, MarkdownContext (+14 more)

### Community 3 - "RAG Pipeline Improvements"
Cohesion: 0.12
Nodes (19): Embedding Original Text Chunks (not summaries), Entity Extraction from Query, RAG Metadata Filtering, Improving My RAG Pipeline, AWS EventBridge, Building a Simple Supermarket Price Scraper, AWS S3 (Raw Data Storage), Amazon SQS (Scraping Queue) (+11 more)

### Community 4 - "Telegram Chatbot Project"
Cohesion: 0.16
Nodes (18): Basic Telegram Chatbot Architecture diagram (Telegram message -> API Gateway -> Webhook Lambda -> Handler Bot Lambda -> Message Processor Lambda -> Send Message Lambda -> user; DynamoDB for session; Save Chat Log Lambda for S3), Amazon API Gateway (Telegram webhook entry point), Amazon DynamoDB (session state storage), Modular Telegram Chatbot Architecture (Project), Terraform (infrastructure deployment for chatbot), Chatbot illustration (cartoon robot holding CPR sign, used as project image), BackendLabBot (deployed Telegram bot), Modular Telegram Bot, Open Sourced (Post) (+10 more)

### Community 5 - "App Shell and Routing"
Cohesion: 0.12
Nodes (6): App(), ErrorBoundary, Footer(), main entry point, Navbar(), ScrollToTop()

### Community 6 - "Telegram Bot Setup Series"
Cohesion: 0.15
Nodes (14): AWS Lambda (Telegram Chatbot), Telegram BotFather, Building a Telegram Chatbot with AWS Lambda, Telegram Webhook Setup, AWS API Gateway Security, Securing My Telegram Bot, Telegram Webhook Secret Token, AWS CloudWatch Logs Insights (+6 more)

### Community 7 - "AWS Cloud Learning Journey"
Cohesion: 0.15
Nodes (13): Cloud Experience Gap (AWS, GCP, Azure), Data Engineering and SQL Gap, Understanding My Professional Gaps (Data Science Interviews), Getting AWS Cloud Practitioner Certificate, AWS Skill Builder (Cloud Essential Learning Plan), Dockerfile Build and Run Workflow, Getting Started with Docker, VSCode Remote Containers Extension (+5 more)

### Community 8 - "Portfolio Architecture Concepts"
Cohesion: 0.24
Nodes (10): Build-time search indexing pattern, Context-level memoization pattern, Static-site-generation hybrid architecture, XSS mitigation via rehype-sanitize, Fuse.js (fuzzy search library), generateSearchIndex, History Changelog, Portfolio Website README (+2 more)

### Community 9 - "Multi-Turn Chatbot and AWS Lex"
Cohesion: 0.22
Nodes (10): AWS Lex Session Orchestrator, AWS Lex 30-Second Timeout Constraint, Building a Multi-Turn Chatbot, Twilio (Async Response Delivery), Amazon Lex, AWS Cloud Practitioner Certificate, AWS Machine Learning Specialty Certificate, AWS Solutions Architect Associate Certificate (+2 more)

### Community 10 - "DSA Interview Prep"
Cohesion: 0.32
Nodes (8): DSA Coding Gap (concepts understood, coding practice lacking), LeetCode Practice Plan, A Reality Check from a Technical Interview, System Design Interview Strength, Georgia Tech MSCS Application, Broad Learning Philosophy (beyond technical skills), MIT OpenCourseWare 6.006 Introduction to Algorithms, Rethinking How I Learn

### Community 11 - "OpenSearch and Naive RAG"
Cohesion: 0.29
Nodes (8): Bastion EC2 for Private VPC Access (OpenSearch dashboard via port forwarding), Lambda IAM Role Mapping to OpenSearch Security Role, Setting Up Lambda Access to Amazon OpenSearch in Private Subnet, Claude LLM for Response Generation, OpenSearch k-NN Retrieval, Implementing a Naive RAG Pipeline, Reranking After k-NN Retrieval (model-based relevance reranking), Summarization Before Embedding (improvement over naive chunking)

### Community 12 - "React Website Enhancement"
Cohesion: 0.25
Nodes (8): al-folio template, Beautiful Jekyll template by Dean Attali, From Templates to Something That Feels Like Me (Post), React (frontend library), Tailwind CSS (styling framework), Vite (build tool), React logo SVG asset, Vite logo SVG asset

### Community 13 - "React Portfolio Migration"
Cohesion: 0.29
Nodes (7): GitHub Pages Blog (Previous Setup), Recreating Portfolio Website with React - Part 1, React Framework, Hawker Centre Dashboard (Previous Project), Netlify (Hosting), Recreating Portfolio Website with React - Part 2, Recreating Portfolio Website with React - Part 3

### Community 14 - "RDS SSH Tunnel"
Cohesion: 0.4
Nodes (6): Working with a Dev Machine (EC2) - Part 2, Amazon RDS (PostgreSQL), DBeaver Database Interface, EC2 Bastion Host, Hosting a Database - From EC2 to RDS with SSH Tunnel, SSH Tunnel for Private Subnet Database Access

### Community 15 - "Personal Reflections"
Cohesion: 0.33
Nodes (6): OpenFDA API, My First Hands-on Experience with LLMs and the Price Paid, Where Do I See Myself in 3-5 Years?, GenAI Data Scientist Interview Reflection, Comparison is the Thief of Joy, Theodore Roosevelt Quote - Comparison is the thief of joy

### Community 16 - "Docker and Kubernetes CronJobs"
Cohesion: 0.4
Nodes (6): Docker Containerization, Kubernetes (K8s), Running Scheduled Jobs with Docker and Kubernetes - Part 1, pyodbc (MSSQL Connection), AWS ECR (Container Registry), Running Scheduled Jobs with Docker and Kubernetes - Part 2

### Community 17 - "EC2 Dev Instance"
Cohesion: 0.33
Nodes (6): EC2 Dev Instance Setup, EC2 Dev Instance Rationale (laptop resource relief, multi-repo management), EC2 Security (IP-locked inbound rules), Full Architecture Upgrade (team project with April 2026 go-live), I'm Alive! (Life Update Nov 2025), UK Trip (2 weeks, career reflection period)

### Community 18 - "Search Feature"
Cohesion: 0.5
Nodes (3): SearchPage(), useQuery(), useSearch()

### Community 19 - "Task Management Tools"
Cohesion: 0.6
Nodes (5): Google Tasks (personal to-do management), Notion (work task management), Managing Personal and Work To-Do Lists, Zapier (Google Tasks to Notion sync), Zapier Sync Limitations (one-way, no edit propagation from Google Tasks)

### Community 20 - "CV Page"
Cohesion: 0.67
Nodes (3): CV, cv.yml config, js-yaml

### Community 21 - "Writing and IELTS"
Cohesion: 1.0
Nodes (3): IELTS (International English Language Testing System), LLM (Large Language Model) - writing aid, IELTS Made Me Rethink My Writing (Post)

### Community 22 - "Finding Inspiration"
Cohesion: 0.67
Nodes (3): Jake Gyllenhaal (actor cited as inspiration example), Leonardo DiCaprio (actor cited as inspiration example), Finding Inspiration in Craft (Post)

### Community 23 - "Loading Spinner"
Cohesion: 1.0
Nodes (0): 

### Community 24 - "CV Component"
Cohesion: 1.0
Nodes (0): 

### Community 25 - "Markdown Utility"
Cohesion: 1.0
Nodes (0): 

### Community 26 - "GitHub Page Launch"
Cohesion: 1.0
Nodes (2): al-folio Jekyll Theme, New GitHub Page Launch (al-folio template)

### Community 27 - "Background Assets"
Cohesion: 1.0
Nodes (2): Background image: ruins transitioning to future city skyline (painterly/artistic style, warm orange palette), Background image: ruins transitioning to future city skyline (geometric/flat style, warm orange palette)

### Community 28 - "RDS SSH Diagram"
Cohesion: 1.0
Nodes (1): RDS SSH access architecture diagram (user -> desktop -> internet gateway -> route table -> EC2 in public subnet -> PostgreSQL RDS in private subnet inside VPC)

### Community 29 - "ESLint Config"
Cohesion: 1.0
Nodes (0): 

### Community 30 - "Vite Config"
Cohesion: 1.0
Nodes (0): 

### Community 31 - "Tailwind Config"
Cohesion: 1.0
Nodes (0): 

### Community 32 - "PostCSS Config"
Cohesion: 1.0
Nodes (0): 

### Community 33 - "App Entry Point"
Cohesion: 1.0
Nodes (0): 

### Community 34 - "Markdown Context"
Cohesion: 1.0
Nodes (0): 

### Community 35 - "Pagination Constants"
Cohesion: 1.0
Nodes (0): 

### Community 36 - "Search Index Generator"
Cohesion: 1.0
Nodes (0): 

### Community 37 - "ESLint Setup"
Cohesion: 1.0
Nodes (0): 

### Community 38 - "PostCSS Setup"
Cohesion: 1.0
Nodes (0): 

### Community 39 - "Travel Post"
Cohesion: 1.0
Nodes (1): Life's More Than Just Work (Morocco travel, Apr 2025)

### Community 40 - "AI Trip Planning"
Cohesion: 1.0
Nodes (1): Using AI Tools (ChatGPT, Perplexity) for Trip Planning

### Community 41 - "Terraform Certificate"
Cohesion: 1.0
Nodes (1): IELTS Made Me Rethink My Writing

### Community 42 - "Site Logo Variant 1"
Cohesion: 1.0
Nodes (1): Lightning Book Icon (site favicon/logo variant 1)

### Community 43 - "Site Logo Variant 2"
Cohesion: 1.0
Nodes (1): Lightning Book Icon variant 2 (site favicon/logo variant 2)

### Community 44 - "Multi-Turn Chatbot Flow Diagram"
Cohesion: 1.0
Nodes (1): Multi-turn chatbot overall flow diagram (initiation trigger, auth/authorization, question generation, response processing, termination)

## Ambiguous Edges - Review These
- `Hosting a Database - From EC2 to RDS with SSH Tunnel` → `AWS S3 (Raw Data Storage)`  [AMBIGUOUS]
  src/posts/2025/3/rds-ssh-tunnel.md · relation: semantically_similar_to
- `RDS SSH access architecture diagram (user -> desktop -> internet gateway -> route table -> EC2 in public subnet -> PostgreSQL RDS in private subnet inside VPC)` → `RDS SSH access architecture diagram (user -> desktop -> internet gateway -> route table -> EC2 in public subnet -> PostgreSQL RDS in private subnet inside VPC)`  [AMBIGUOUS]
  public/images/2025/rds-ssh.png · relation: self

## Knowledge Gaps
- **87 isolated node(s):** `main entry point`, `SearchPage`, `About Config Markdown`, `front-matter (npm package)`, `js-yaml` (+82 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Loading Spinner`** (2 nodes): `LoadingSpinner()`, `LoadingSpinner.jsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `CV Component`** (2 nodes): `CV()`, `CV.jsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Markdown Utility`** (2 nodes): `getMarkDown()`, `getMarkdown.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `GitHub Page Launch`** (2 nodes): `al-folio Jekyll Theme`, `New GitHub Page Launch (al-folio template)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Background Assets`** (2 nodes): `Background image: ruins transitioning to future city skyline (painterly/artistic style, warm orange palette)`, `Background image: ruins transitioning to future city skyline (geometric/flat style, warm orange palette)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `RDS SSH Diagram`** (1 nodes): `RDS SSH access architecture diagram (user -> desktop -> internet gateway -> route table -> EC2 in public subnet -> PostgreSQL RDS in private subnet inside VPC)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `ESLint Config`** (1 nodes): `eslint.config.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Vite Config`** (1 nodes): `vite.config.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Tailwind Config`** (1 nodes): `tailwind.config.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `PostCSS Config`** (1 nodes): `postcss.config.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `App Entry Point`** (1 nodes): `main.jsx`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Markdown Context`** (1 nodes): `MarkdownContextInstance.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Pagination Constants`** (1 nodes): `constants.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Search Index Generator`** (1 nodes): `generateSearchIndex.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `ESLint Setup`** (1 nodes): `eslint.config.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `PostCSS Setup`** (1 nodes): `postcss.config.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Travel Post`** (1 nodes): `Life's More Than Just Work (Morocco travel, Apr 2025)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `AI Trip Planning`** (1 nodes): `Using AI Tools (ChatGPT, Perplexity) for Trip Planning`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Terraform Certificate`** (1 nodes): `IELTS Made Me Rethink My Writing`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Site Logo Variant 1`** (1 nodes): `Lightning Book Icon (site favicon/logo variant 1)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Site Logo Variant 2`** (1 nodes): `Lightning Book Icon variant 2 (site favicon/logo variant 2)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Multi-Turn Chatbot Flow Diagram`** (1 nodes): `Multi-turn chatbot overall flow diagram (initiation trigger, auth/authorization, question generation, response processing, termination)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What is the exact relationship between `Hosting a Database - From EC2 to RDS with SSH Tunnel` and `AWS S3 (Raw Data Storage)`?**
  _Edge tagged AMBIGUOUS (relation: semantically_similar_to) - confidence is low._
- **What is the exact relationship between `RDS SSH access architecture diagram (user -> desktop -> internet gateway -> route table -> EC2 in public subnet -> PostgreSQL RDS in private subnet inside VPC)` and `RDS SSH access architecture diagram (user -> desktop -> internet gateway -> route table -> EC2 in public subnet -> PostgreSQL RDS in private subnet inside VPC)`?**
  _Edge tagged AMBIGUOUS (relation: self) - confidence is low._
- **Why does `Career Focus on Software and Backend Engineering` connect `Goals and Career Progression` to `DSA Interview Prep`?**
  _High betweenness centrality (0.021) - this node is a cross-community bridge._
- **Are the 9 inferred relationships involving `getMarkDown` (e.g. with `ProjectsPage` and `MarkdownContext`) actually correct?**
  _`getMarkDown` has 9 INFERRED edges - model-reasoned connections that need verification._
- **Are the 2 inferred relationships involving `App()` (e.g. with `ScrollToTop()` and `tailwind.config.js`) actually correct?**
  _`App()` has 2 INFERRED edges - model-reasoned connections that need verification._
- **Are the 8 inferred relationships involving `useMarkdownData()` (e.g. with `PostList()` and `ProjectPostPage()`) actually correct?**
  _`useMarkdownData()` has 8 INFERRED edges - model-reasoned connections that need verification._
- **Are the 3 inferred relationships involving `ProjectPostPage()` (e.g. with `useMarkdownData()` and `formatDate()`) actually correct?**
  _`ProjectPostPage()` has 3 INFERRED edges - model-reasoned connections that need verification._