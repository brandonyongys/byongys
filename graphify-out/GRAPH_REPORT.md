# Graph Report - .  (2026-06-20)

## Corpus Check
- 128 files · ~448,849 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 330 nodes · 379 edges · 49 communities detected
- Extraction: 80% EXTRACTED · 20% INFERRED · 0% AMBIGUOUS · INFERRED: 76 edges (avg confidence: 0.8)
- Token cost: 25,300 input · 6,000 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Portfolio Site Config|Portfolio Site Config]]
- [[_COMMUNITY_Telegram Chatbot Series|Telegram Chatbot Series]]
- [[_COMMUNITY_React App Architecture|React App Architecture]]
- [[_COMMUNITY_EC2 Dev Setup|EC2 Dev Setup]]
- [[_COMMUNITY_Interview Prep Posts|Interview Prep Posts]]
- [[_COMMUNITY_Basic Telegram Bot|Basic Telegram Bot]]
- [[_COMMUNITY_AskAuntieBot Features|AskAuntieBot Features]]
- [[_COMMUNITY_Markdown Content Pipeline|Markdown Content Pipeline]]
- [[_COMMUNITY_Warm Editorial Redesign|Warm Editorial Redesign]]
- [[_COMMUNITY_AI Dev 26 + Floated Images|AI Dev 26 + Floated Images]]
- [[_COMMUNITY_Fuzzy Search System|Fuzzy Search System]]
- [[_COMMUNITY_OpenSearch RAG Pipeline|OpenSearch RAG Pipeline]]
- [[_COMMUNITY_React Website Evolution|React Website Evolution]]
- [[_COMMUNITY_Agentic AI Reflection|Agentic AI Reflection]]
- [[_COMMUNITY_React Webapp Build|React Webapp Build]]
- [[_COMMUNITY_Image Directive Plugin|Image Directive Plugin]]
- [[_COMMUNITY_AWS Certifications|AWS Certifications]]
- [[_COMMUNITY_Personal Reflections|Personal Reflections]]
- [[_COMMUNITY_Kubernetes Cronjob Posts|Kubernetes Cronjob Posts]]
- [[_COMMUNITY_Task Management Post|Task Management Post]]
- [[_COMMUNITY_Chatbot UI Screenshots|Chatbot UI Screenshots]]
- [[_COMMUNITY_Markdown Data Hooks|Markdown Data Hooks]]
- [[_COMMUNITY_App Performance Post|App Performance Post]]
- [[_COMMUNITY_Float Image Remark Plugin|Float Image Remark Plugin]]
- [[_COMMUNITY_DuckDB Post|DuckDB Post]]
- [[_COMMUNITY_Writing Reflection|Writing Reflection]]
- [[_COMMUNITY_Inspiration Post|Inspiration Post]]
- [[_COMMUNITY_Tailwind Design Tokens|Tailwind Design Tokens]]
- [[_COMMUNITY_REST API Post|REST API Post]]
- [[_COMMUNITY_GitHub Pages Post|GitHub Pages Post]]
- [[_COMMUNITY_Background Images|Background Images]]
- [[_COMMUNITY_Vite Config|Vite Config]]
- [[_COMMUNITY_Background WebP Assets|Background WebP Assets]]
- [[_COMMUNITY_Personal Photos|Personal Photos]]
- [[_COMMUNITY_RDS SSH Diagram|RDS SSH Diagram]]
- [[_COMMUNITY_ESLint Config|ESLint Config]]
- [[_COMMUNITY_Vite Config File|Vite Config File]]
- [[_COMMUNITY_Tailwind Config File|Tailwind Config File]]
- [[_COMMUNITY_PostCSS Config|PostCSS Config]]
- [[_COMMUNITY_Loading Spinner|Loading Spinner]]
- [[_COMMUNITY_Markdown Plugin Config|Markdown Plugin Config]]
- [[_COMMUNITY_Constants Config|Constants Config]]
- [[_COMMUNITY_Search Index Generator|Search Index Generator]]
- [[_COMMUNITY_Date Formatter|Date Formatter]]
- [[_COMMUNITY_EC2 Dev Part 2|EC2 Dev Part 2]]
- [[_COMMUNITY_Travel Time Post|Travel Time Post]]
- [[_COMMUNITY_AI Trip Planning|AI Trip Planning]]
- [[_COMMUNITY_Chatbot Flow Diagram|Chatbot Flow Diagram]]
- [[_COMMUNITY_Search Constants|Search Constants]]

## God Nodes (most connected - your core abstractions)
1. `ProjectPostPage()` - 11 edges
2. `Modular Telegram Chatbot Architecture (Project)` - 10 edges
3. `About()` - 9 edges
4. `PostPage()` - 9 edges
5. `Home()` - 9 edges
6. `usePageMeta()` - 9 edges
7. `useMarkdownData` - 9 edges
8. `getMarkDown` - 9 edges
9. `usePageMeta hook` - 9 edges
10. `Warm Minimal Redesign Implementation Plan` - 9 edges

## Surprising Connections (you probably didn't know these)
- `Paper Grain CSS Texture (SVG noise overlay)` --semantically_similar_to--> `BY Logo — Dark Initials on Paper White`  [INFERRED] [semantically similar]
  docs/superpowers/plans/2026-05-22-warm-minimal-redesign.md → public/by-dark-on-paper.svg
- `From Templates to Something That Feels Like Me (Post)` --related_asset--> `Vite logo SVG asset`  [INFERRED]
  src/posts/2026/2/enhancing-react-website.md → public/vite.svg
- `RAG Powered Chatbot Architecture (Project)` --illustrated_by--> `RAG chatbot illustration (friendly orange robot waving beside a mobile chat interface)`  [EXTRACTED]
  src/projects/rag-powered-chatbot.md → public/images/2025/rag_chatbot.png
- `Modular Telegram Chatbot Architecture (Project)` --illustrated_by--> `Chatbot illustration (cartoon robot holding CPR sign, used as project image)`  [EXTRACTED]
  src/projects/basic-telegram-bot-architecture.md → public/images/2025/chatbot.png
- `Portfolio Website README` --references--> `useSearch Hook`  [INFERRED]
  README.md → src/utils/useSearch.js

## Hyperedges (group relationships)
- **Markdown data pipeline: getMarkDown -> MarkdownProvider -> useMarkdownData -> consumers** — utils_getmarkdown, markdowncontext_markdownprovider, markdowncontextinstance_markdowncontext, hooks_usemarkdowndata, latestpostlist_postlist, projectpage_projectpostpage, about_about [INFERRED 0.85]
- **Pages using useMarkdownData hook** — projects_jsx, blog_jsx, postpage_jsx, markdownpage_jsx, home_jsx, usemarkdowndata_js, markdowncontext, getmarkdown_js [INFERRED 0.90]
- **Career reflection posts by Brandon Yong** — post_getting_first_ds_job, post_whats_next, post_getting_aws_dva, post_2024_reflection, post_faang_interview, tag_career, brandon_yong [INFERRED 0.85]
- **AWS Certification Journey** — getting_aws_saa_aws_cloud_practitioner, getting_aws_saa_aws_saa, getting_aws_saa_aws_ml_specialty [EXTRACTED 1.00]
- **Personal Reflection and Growth Posts** — thief_of_joy_post, future_me_post, falling_sick_post, genai_interview_reflection_post [INFERRED 0.85]
- **Telegram Bot Development Series** — building_telegram_chatbot_post, securing_telegram_bot_post, setting_up_rag_telegram_bot_post, scaling_rag_pipeline_post, improved_rag_pipeline_post, terraform_basic_telegram_post, structured_logging_post [EXTRACTED 0.95]
- **React Portfolio Web App Series** — creating_react_webapp_part1_post, creating_react_webapp_part2_post, creating_react_webapp_part3_post [EXTRACTED 1.00]
- **Docker and Kubernetes Cronjob Series** — k8s_cronjob_part1_post, k8s_cronjob_part2_post [EXTRACTED 1.00]
- **2025 Career Reflection and Self-Development** — rethinking_how_i_learn_post, reflections_2025_post, dsa_interview_post, rethinking_how_i_learn_georgia_tech_mscs, reflections_2025_career_direction, reflections_2025_goal_setting_approach [INFERRED 0.85]
- **RAG Pipeline Technology Stack** — connecting_opensearch_post, naive_rag_pipeline_post, naive_rag_pipeline_opensearch_knn, naive_rag_pipeline_claude_llm, naive_rag_pipeline_summarization_before_embedding, naive_rag_pipeline_reranking, telegram_chatbot_architecture_rag_plan [INFERRED 0.90]
- **AWS Certification Learning Progression** — data_science_interviews_cloud_gap, getting_aws_ccp_post, getting_aws_ccp_skillbuilder, reflections_2025_sap_c02, goals_2025_mls_c01 [INFERRED 0.80]
- **Portfolio Website Technology Stack** — enhancing_react_website_post, enhancing_react_website_react, enhancing_react_website_vite, enhancing_react_website_tailwind, react_svg_asset, vite_svg_asset [INFERRED 0.85]
- **RAG Pipeline AWS Stack** — rag_powered_chatbot_project, rag_powered_chatbot_aws_lambda, rag_powered_chatbot_amazon_bedrock, rag_powered_chatbot_opensearch, rag_powered_chatbot_s3, rag_powered_chatbot_banking_faq [INFERRED 0.90]
- **Telegram Bot AWS Infrastructure Stack** — basic_telegram_bot_architecture_project, basic_telegram_bot_architecture_api_gateway, basic_telegram_bot_architecture_dynamodb, basic_telegram_bot_architecture_terraform, rag_powered_chatbot_aws_lambda, open_sourced_telegram_bot_repo, open_sourced_telegram_bot_backendlabbot [INFERRED 0.85]
- **Markdown Rendering Pipeline (plugins + ReactMarkdown + pages)** — markdownplugins_remark_plugins, markdownplugins_rehype_plugins, postpage_postpage, projectpage_projectpostpage, home_home, about_about, markdownpage_markdownpage [EXTRACTED 0.95]
- **Pages consuming useMarkdownData hook for content** — usemarkdowndata_usemarkdowndata, blog_blog, postpage_postpage, projectpage_projectpostpage, projects_projectspage, home_home, about_about, latestpostlist_latestpostlist, markdownpage_markdownpage [EXTRACTED 0.95]
- **Page-level SEO meta management via usePageMeta + SITE constants** — usepageeta_usepageeta, constants_site, home_home, about_about, blog_blog, postpage_postpage, projectpage_projectpostpage, projects_projectspage, cv_cv, searchpage_searchpage [EXTRACTED 0.95]
- **AskAuntieBot Development Series** — post_products_chatbot_mvp1, post_patching_products_chatbot, post_expand_to_ss, concept_askauntiebot, concept_spring_boot_query_service [EXTRACTED 0.95]
- **AI and Engineering Reflection Series (2026)** — post_ai_impact_on_swe, post_ai_coding_assistant, post_extending_products_scraping, concept_k_shaped_economy, concept_agentic_coding [EXTRACTED 0.95]
- **Search Index Build and Runtime Query Pipeline** — generatesearchindex_js, config_searchindex_json, usesearch_js, lib_fusejs, concept_build_time_search [EXTRACTED 1.00]
- **Warm Editorial Redesign System (Fonts + Colors + Layout)** — fraunces_font, source_serif_4_font, css_variable_color_system, editorial_minimal_layout [INFERRED 0.90]
- **Floated Image Markdown Pipeline (Directive + Plugin + CSS)** — remark_directive_dep, remark_float_image_plugin, float_image_css [EXTRACTED 1.00]
- **Products Price Bot Telegram UI Screenshots** — product_chatbot_welcome_jpg, product_chatbot_historical_prices_jpg, product_chatbot_conversation_memory_jpg, product_chatbot_search_loose_jpg [INFERRED 0.90]

## Communities

### Community 0 - "Portfolio Site Config"
Cohesion: 0.12
Nodes (23): About(), Blog(), PAGINATION constants, PROFILE_PIC constants, SITE constants, CV(), formatDate, Home() (+15 more)

### Community 1 - "Telegram Chatbot Series"
Cohesion: 0.08
Nodes (26): AWS Lambda (Telegram Chatbot), Telegram BotFather, Building a Telegram Chatbot with AWS Lambda, Telegram Webhook Setup, Embedding Original Text Chunks (not summaries), Entity Extraction from Query, RAG Metadata Filtering, Improving My RAG Pipeline (+18 more)

### Community 2 - "React App Architecture"
Cohesion: 0.09
Nodes (13): App(), Inner ErrorBoundary (routes-level), Outer ErrorBoundary (app-level), MarkdownProvider (context wrapper), NAVBAR constants, ErrorBoundary, Footer(), main entry point (+5 more)

### Community 3 - "EC2 Dev Setup"
Cohesion: 0.1
Nodes (23): EC2 Dev Instance Setup, EC2 Dev Instance Rationale (laptop resource relief, multi-repo management), EC2 Security (IP-locked inbound rules), Golang Application Development Goal (2025), MLS-C01 Certification Goal (2025), Setting Goals for 2025, Supermarket Chatbot Goal (2025), Weekly Blog Post Goal (2025) (+15 more)

### Community 4 - "Interview Prep Posts"
Cohesion: 0.12
Nodes (19): Cloud Experience Gap (AWS, GCP, Azure), Data Engineering and SQL Gap, Understanding My Professional Gaps (Data Science Interviews), DSA Coding Gap (concepts understood, coding practice lacking), LeetCode Practice Plan, A Reality Check from a Technical Interview, System Design Interview Strength, Getting AWS Cloud Practitioner Certificate (+11 more)

### Community 5 - "Basic Telegram Bot"
Cohesion: 0.16
Nodes (18): Basic Telegram Chatbot Architecture diagram (Telegram message -> API Gateway -> Webhook Lambda -> Handler Bot Lambda -> Message Processor Lambda -> Send Message Lambda -> user; DynamoDB for session; Save Chat Log Lambda for S3), Amazon API Gateway (Telegram webhook entry point), Amazon DynamoDB (session state storage), Modular Telegram Chatbot Architecture (Project), Terraform (infrastructure deployment for chatbot), Chatbot illustration (cartoon robot holding CPR sign, used as project image), BackendLabBot (deployed Telegram bot), Modular Telegram Bot, Open Sourced (Post) (+10 more)

### Community 6 - "AskAuntieBot Features"
Cohesion: 0.18
Nodes (17): AskAuntieBot (Telegram Supermarket Chatbot), AWS Lex 30-Second Timeout Constraint, Conversation Memory (LLM Session History), Dispatcher Microservice (Telegram Payload Routing), PostgreSQL Full-Text Search (tsvector + trigram), HCP Terraform (HashiCorp Cloud Platform), Spring Boot Products Query Service, Terraform Infrastructure as Code (Work Migration) (+9 more)

### Community 7 - "Markdown Content Pipeline"
Cohesion: 0.17
Nodes (16): About Page Content, front-matter (npm package), getMarkDown, MarkdownContext, NUHS (National University Health System), Brandon Yong (Author/Engineer), Post: 2024 reflection, Post: Reflecting on a FAANG data science interview experience (+8 more)

### Community 8 - "Warm Editorial Redesign"
Cohesion: 0.17
Nodes (15): BY Logo — Dark Initials on Paper White, CSS Variable-Driven Color System, Editorial Minimal Layout Design Direction, Fraunces Display Font, JetBrains Mono Accent Font, NAVBAR Padding Tailwind Config (py-4/py-2), NAVBAR.SCROLL_THRESHOLD Config Constant, Paper Grain CSS Texture (SVG noise overlay) (+7 more)

### Community 9 - "AI Dev 26 + Floated Images"
Cohesion: 0.22
Nodes (10): AI Dev 26 Conference, Brandon Yong with Andrew Ng at AI Dev 26, Float Image CSS Classes (.float-image, .float-right, .float-left, .float-center, .image-row), Floated Images via remark-directive Design Spec, Floated Images Implementation Plan, ::image Leaf Directive Markdown Syntax, :::image-row Container Directive Markdown Syntax, Rationale: Emit Raw HTML Before rehype-sanitize (Avoid Stripping) (+2 more)

### Community 10 - "Fuzzy Search System"
Cohesion: 0.28
Nodes (9): Build-Time Search Indexing Pattern, Debounced Query Execution, Fuzzy Search with Fuse.js, SEARCH Constants (DEBOUNCE_MS), searchIndex.json (Static Search Index), generateSearchIndex Script, Fuse.js (Fuzzy Search Library), Portfolio Website README (+1 more)

### Community 11 - "OpenSearch RAG Pipeline"
Cohesion: 0.29
Nodes (8): Bastion EC2 for Private VPC Access (OpenSearch dashboard via port forwarding), Lambda IAM Role Mapping to OpenSearch Security Role, Setting Up Lambda Access to Amazon OpenSearch in Private Subnet, Claude LLM for Response Generation, OpenSearch k-NN Retrieval, Implementing a Naive RAG Pipeline, Reranking After k-NN Retrieval (model-based relevance reranking), Summarization Before Embedding (improvement over naive chunking)

### Community 12 - "React Website Evolution"
Cohesion: 0.25
Nodes (8): al-folio template, Beautiful Jekyll template by Dean Attali, From Templates to Something That Feels Like Me (Post), React (frontend library), Tailwind CSS (styling framework), Vite (build tool), React logo SVG asset, Vite logo SVG asset

### Community 13 - "Agentic AI Reflection"
Cohesion: 0.36
Nodes (8): CLAUDE.md Project Instructions, Agentic Coding with Claude Code, K-Shaped Economy (AI Impact on SWE), Vibe Coding With Intent, DeepLearning.AI, Andrew Ng, Vibe Coding, But With Intent, AI Dev 26: Rethinking Where Engineers Fit

### Community 14 - "React Webapp Build"
Cohesion: 0.29
Nodes (7): GitHub Pages Blog (Previous Setup), Recreating Portfolio Website with React - Part 1, React Framework, Hawker Centre Dashboard (Previous Project), Netlify (Hosting), Recreating Portfolio Website with React - Part 2, Recreating Portfolio Website with React - Part 3

### Community 15 - "Image Directive Plugin"
Cohesion: 0.38
Nodes (7): ::image Markdown Directive, :::image-row Container Directive, History Changelog, remark-directive (npm package), unist-util-visit, Post Template with Image Directives, remarkFloatImage Remark Plugin

### Community 16 - "AWS Certifications"
Cohesion: 0.33
Nodes (6): Amazon Lex, AWS Cloud Practitioner Certificate, AWS Machine Learning Specialty Certificate, AWS Solutions Architect Associate Certificate, Getting AWS SAA Certificate, Tutorial Dojo

### Community 17 - "Personal Reflections"
Cohesion: 0.33
Nodes (6): OpenFDA API, My First Hands-on Experience with LLMs and the Price Paid, Where Do I See Myself in 3-5 Years?, GenAI Data Scientist Interview Reflection, Comparison is the Thief of Joy, Theodore Roosevelt Quote - Comparison is the thief of joy

### Community 18 - "Kubernetes Cronjob Posts"
Cohesion: 0.4
Nodes (6): Docker Containerization, Kubernetes (K8s), Running Scheduled Jobs with Docker and Kubernetes - Part 1, pyodbc (MSSQL Connection), AWS ECR (Container Registry), Running Scheduled Jobs with Docker and Kubernetes - Part 2

### Community 19 - "Task Management Post"
Cohesion: 0.6
Nodes (5): Google Tasks (personal to-do management), Notion (work task management), Managing Personal and Work To-Do Lists, Zapier (Google Tasks to Notion sync), Zapier Sync Limitations (one-way, no edit propagation from Google Tasks)

### Community 20 - "Chatbot UI Screenshots"
Cohesion: 0.4
Nodes (5): Products Price Bot Conversation Memory After Improvement Screenshot, Products Price Bot Historical Prices After Improvement Screenshot, Products Price Bot Loose Search Results Screenshot, Products Price Bot Welcome Message Screenshot, Products Price Bot Telegram Chatbot

### Community 21 - "Markdown Data Hooks"
Cohesion: 0.5
Nodes (4): useMarkdownData hook, MarkdownProvider, MarkdownContext, getMarkDown utility

### Community 22 - "App Performance Post"
Cohesion: 0.5
Nodes (4): Caching System (reduce repeated DB load from same patient profile page), Clinical Decision Support Tool (patient targets calculation), Latency Fix (direct DB query instead of chained endpoint calls), Improving Application Performance

### Community 23 - "Float Image Remark Plugin"
Cohesion: 0.67
Nodes (0): 

### Community 24 - "DuckDB Post"
Cohesion: 0.67
Nodes (3): DuckDB, Parquet File Format, Querying Parquet Files on AWS Lambda with DuckDB

### Community 25 - "Writing Reflection"
Cohesion: 1.0
Nodes (3): IELTS (International English Language Testing System), LLM (Large Language Model) - writing aid, IELTS Made Me Rethink My Writing (Post)

### Community 26 - "Inspiration Post"
Cohesion: 0.67
Nodes (3): Jake Gyllenhaal (actor cited as inspiration example), Leonardo DiCaprio (actor cited as inspiration example), Finding Inspiration in Craft (Post)

### Community 27 - "Tailwind Design Tokens"
Cohesion: 0.67
Nodes (3): Tailwind CSS variable-based design tokens, Tailwind legacy brand/gray aliases, Tailwind Config

### Community 28 - "REST API Post"
Cohesion: 0.67
Nodes (3): OneMap API (Singapore), REST API Concepts, Working with REST API

### Community 29 - "GitHub Pages Post"
Cohesion: 1.0
Nodes (2): al-folio Jekyll Theme, New GitHub Page Launch (al-folio template)

### Community 30 - "Background Images"
Cohesion: 1.0
Nodes (2): Background image: ruins transitioning to future city skyline (painterly/artistic style, warm orange palette), Background image: ruins transitioning to future city skyline (geometric/flat style, warm orange palette)

### Community 31 - "Vite Config"
Cohesion: 1.0
Nodes (2): Vite manualChunks (vendor splitting), Vite Config

### Community 32 - "Background WebP Assets"
Cohesion: 1.0
Nodes (2): Background Image: Ruins-to-Future Artistic Cityscape, Background Image: Ruins-to-Future Skyline

### Community 33 - "Personal Photos"
Cohesion: 1.0
Nodes (2): Brandon Yong Selfie at Street Art Mural (San Francisco), Brandon Yong Selfie at Seattle Waterfront (Pier with Ferris Wheel)

### Community 34 - "RDS SSH Diagram"
Cohesion: 1.0
Nodes (1): RDS SSH access architecture diagram (user -> desktop -> internet gateway -> route table -> EC2 in public subnet -> PostgreSQL RDS in private subnet inside VPC)

### Community 35 - "ESLint Config"
Cohesion: 1.0
Nodes (0): 

### Community 36 - "Vite Config File"
Cohesion: 1.0
Nodes (0): 

### Community 37 - "Tailwind Config File"
Cohesion: 1.0
Nodes (0): 

### Community 38 - "PostCSS Config"
Cohesion: 1.0
Nodes (0): 

### Community 39 - "Loading Spinner"
Cohesion: 1.0
Nodes (1): LoadingSpinner

### Community 40 - "Markdown Plugin Config"
Cohesion: 1.0
Nodes (0): 

### Community 41 - "Constants Config"
Cohesion: 1.0
Nodes (0): 

### Community 42 - "Search Index Generator"
Cohesion: 1.0
Nodes (0): 

### Community 43 - "Date Formatter"
Cohesion: 1.0
Nodes (1): formatDate utility

### Community 44 - "EC2 Dev Part 2"
Cohesion: 1.0
Nodes (1): Working with a Dev Machine (EC2) - Part 2

### Community 45 - "Travel Time Post"
Cohesion: 1.0
Nodes (1): Life's More Than Just Work (Morocco travel, Apr 2025)

### Community 46 - "AI Trip Planning"
Cohesion: 1.0
Nodes (1): Using AI Tools (ChatGPT, Perplexity) for Trip Planning

### Community 47 - "Chatbot Flow Diagram"
Cohesion: 1.0
Nodes (1): Multi-turn chatbot overall flow diagram (initiation trigger, auth/authorization, question generation, response processing, termination)

### Community 48 - "Search Constants"
Cohesion: 1.0
Nodes (1): SEARCH constants

## Ambiguous Edges - Review These
- `RDS SSH access architecture diagram (user -> desktop -> internet gateway -> route table -> EC2 in public subnet -> PostgreSQL RDS in private subnet inside VPC)` → `RDS SSH access architecture diagram (user -> desktop -> internet gateway -> route table -> EC2 in public subnet -> PostgreSQL RDS in private subnet inside VPC)`  [AMBIGUOUS]
  public/images/2025/rds-ssh.png · relation: self

## Knowledge Gaps
- **126 isolated node(s):** `main entry point`, `ScrollToTop`, `LoadingSpinner`, `useMarkdownData hook`, `getMarkDown utility` (+121 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `GitHub Pages Post`** (2 nodes): `al-folio Jekyll Theme`, `New GitHub Page Launch (al-folio template)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Background Images`** (2 nodes): `Background image: ruins transitioning to future city skyline (painterly/artistic style, warm orange palette)`, `Background image: ruins transitioning to future city skyline (geometric/flat style, warm orange palette)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Vite Config`** (2 nodes): `Vite manualChunks (vendor splitting)`, `Vite Config`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Background WebP Assets`** (2 nodes): `Background Image: Ruins-to-Future Artistic Cityscape`, `Background Image: Ruins-to-Future Skyline`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Personal Photos`** (2 nodes): `Brandon Yong Selfie at Street Art Mural (San Francisco)`, `Brandon Yong Selfie at Seattle Waterfront (Pier with Ferris Wheel)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `RDS SSH Diagram`** (1 nodes): `RDS SSH access architecture diagram (user -> desktop -> internet gateway -> route table -> EC2 in public subnet -> PostgreSQL RDS in private subnet inside VPC)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `ESLint Config`** (1 nodes): `eslint.config.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Vite Config File`** (1 nodes): `vite.config.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Tailwind Config File`** (1 nodes): `tailwind.config.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `PostCSS Config`** (1 nodes): `postcss.config.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Loading Spinner`** (1 nodes): `LoadingSpinner`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Markdown Plugin Config`** (1 nodes): `markdownPlugins.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Constants Config`** (1 nodes): `constants.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Search Index Generator`** (1 nodes): `generateSearchIndex.js`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Date Formatter`** (1 nodes): `formatDate utility`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `EC2 Dev Part 2`** (1 nodes): `Working with a Dev Machine (EC2) - Part 2`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Travel Time Post`** (1 nodes): `Life's More Than Just Work (Morocco travel, Apr 2025)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `AI Trip Planning`** (1 nodes): `Using AI Tools (ChatGPT, Perplexity) for Trip Planning`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Chatbot Flow Diagram`** (1 nodes): `Multi-turn chatbot overall flow diagram (initiation trigger, auth/authorization, question generation, response processing, termination)`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Search Constants`** (1 nodes): `SEARCH constants`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What is the exact relationship between `RDS SSH access architecture diagram (user -> desktop -> internet gateway -> route table -> EC2 in public subnet -> PostgreSQL RDS in private subnet inside VPC)` and `RDS SSH access architecture diagram (user -> desktop -> internet gateway -> route table -> EC2 in public subnet -> PostgreSQL RDS in private subnet inside VPC)`?**
  _Edge tagged AMBIGUOUS (relation: self) - confidence is low._
- **Why does `useMarkdownData` connect `Portfolio Site Config` to `Markdown Content Pipeline`?**
  _High betweenness centrality (0.046) - this node is a cross-community bridge._
- **Why does `MarkdownContext` connect `Markdown Content Pipeline` to `Portfolio Site Config`?**
  _High betweenness centrality (0.044) - this node is a cross-community bridge._
- **Are the 4 inferred relationships involving `ProjectPostPage()` (e.g. with `useMarkdownData` and `usePageMeta()`) actually correct?**
  _`ProjectPostPage()` has 4 INFERRED edges - model-reasoned connections that need verification._
- **Are the 2 inferred relationships involving `About()` (e.g. with `useMarkdownData` and `usePageMeta()`) actually correct?**
  _`About()` has 2 INFERRED edges - model-reasoned connections that need verification._
- **Are the 3 inferred relationships involving `PostPage()` (e.g. with `useMarkdownData` and `usePageMeta()`) actually correct?**
  _`PostPage()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **Are the 2 inferred relationships involving `Home()` (e.g. with `useMarkdownData` and `usePageMeta()`) actually correct?**
  _`Home()` has 2 INFERRED edges - model-reasoned connections that need verification._