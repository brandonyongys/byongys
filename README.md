# Portfolio Website

A modern, high-performance portfolio website built with React, Vite, and Tailwind CSS. Featuring a blog and project showcase powered by markdown.

## Core Features
- 🚀 **Performance Optimized**: Markdown data is parsed once and memoized using React Context.
- 🔒 **Secure Rendering**: Markdown is rendered safely using `react-markdown` with `rehype-sanitize`.
- 🔍 **Fast Search**: Client-side search index for instant content discovery.
- 🛡️ **Robust Error Handling**: Global and route-level error boundaries.
- 📱 **Responsive Design**: Mobile-friendly layout with Tailwind CSS.

## Tech Stack
- **Frontend**: React 18, Vite, Tailwind CSS
- **Markdown**: react-markdown, remark-gfm, rehype-raw
- **Routing**: React Router 6
- **Icons**: Lucide React
- **Data**: YAML frontmatter + Markdown content

## Project Structure
- `src/context/MarkdownContext.jsx`: Global data provider.
- `src/hooks/useMarkdownData.js`: Hook for accessing memoized data.
- `src/utils/getMarkdown.js`: Core markdown fetching logic.
- `src/config/searchIndex.json`: Pre-generated search data.
- `src/utils/generateSearchIndex.js`: Script to rebuild search index.

## Markdown Schema

### Blog Posts (`/src/posts/*/*/*.md`)
```yaml
---
title: "Post Title"
description: "Brief summary"
date: "YYYY-MM-DD"
published: true
tags: ["tag1", "tag2"]
---
[Markdown Content]
```

### Projects (`/src/projects/*.md`)
```yaml
---
title: "Project Name"
description: "Project description"
published_date: "YYYY-MM-DD"
updated_date: "YYYY-MM-DD"
published: true
image: "/images/path.png"
---
[Markdown Content]
```

