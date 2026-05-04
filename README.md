# Portfolio Website

[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?logo=tailwind-css)](https://tailwindcss.com)

A modern, high-performance portfolio website built with **React 19**, **Vite**, and **Tailwind CSS**. This project serves as a technical showcase of my frontend engineering capabilities, focusing on performance, security, and clean architecture.

> **Note**: This repository is a technical demonstration. For my full professional profile, please visit my [LinkedIn](https://www.linkedin.com/in/byongys/) or my [Personal Website](https://byongys.netlify.app/).

---

## 🚀 Key Technical Highlights

- **React 19 & Vite 6**: Leveraging the latest React features and Vite's lightning-fast build system for an optimal developer experience and runtime performance.
- **Build-Time Search Indexing**: A custom Node.js script (`src/utils/generateSearchIndex.js`) generates a static search index from Markdown files during the build process, enabling instant client-side search with **Fuse.js** without a backend.
- **Efficient Data Discovery**: Uses Vite's `import.meta.glob` for automated, build-time discovery of Markdown files, avoiding the need for manual file manifests.
- **Context-Level Memoization**: Markdown data is parsed and memoized at the React Context level, ensuring that expensive parsing only happens once and data is shared efficiently across the app.
- **Secure Rendering**: Implements `react-markdown` with `rehype-sanitize` to ensure all user-provided or markdown-sourced content is safely stripped of potentially malicious HTML.
- **Responsive & Design-First**: Built with Tailwind CSS for a fully responsive, mobile-first experience with a clean, modern aesthetic.

---

## 🏗️ Core Architecture

The application is structured as a static-site-generation (SSG) hybrid, where content is managed in Markdown and processed into the application state.

### Data Flow
1. **Source**: Markdown files located in `/src/posts` and `/src/projects`.
2. **Processing**: `src/utils/getMarkdown.js` uses `front-matter` and Vite-specific imports to parse content.
3. **Distribution**: `src/context/MarkdownContext.jsx` provides parsed data throughout the component tree.
4. **Search**: `npm run generate-index` creates `src/config/searchIndex.json` for high-performance client-side search.

### Project Structure
- `src/components/`: Reusable UI components including Error Boundaries and Navigation.
- `src/pages/`: Main route views (Home, Blog, Projects, etc.).
- `src/context/`: Global state management for Markdown data.
- `src/utils/`: Core logic for data fetching, search indexing, and markdown processing.

### Routes

| Path | Component | Description |
|---|---|---|
| `/` | Home | Landing page with welcome message (from `src/config/welcome.md`) and latest posts |
| `/about` | About | About page rendered from `src/config/about.md` |
| `/cv` | CV | CV page parsed from `src/config/cv.yml` |
| `/blog` | Blog | Paginated list of all published posts, sorted by date |
| `/posts/:slug` | PostPage | Individual blog post rendered from `src/posts/YYYY/M/:slug.md` |
| `/projects` | Projects | Grid of all published projects as cards |
| `/projects/:slug` | ProjectPage | Individual project write-up rendered from `src/projects/:slug.md` |
| `/search` | SearchPage | Fuzzy search across all posts using Fuse.js and the pre-built search index |

### Vite Configuration Note

`vite.config.js` sets `assetsInclude: ['**/*.md']`, which enables `import.meta.glob` to treat Markdown files as raw string assets. This is what powers the build-time content discovery — without it, `.md` imports would fail.

---

## 🛠️ Getting Started

To run this project locally, ensure you have [Node.js](https://nodejs.org/) installed.

1. **Clone the repository**
   ```bash
   git clone https://github.com/brandonyongys/byongys.git
   cd byongys
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

   > **Note**: Always use `npm run dev` (not `vite` directly). The `generate-index` step runs first and generates `src/config/searchIndex.json`. This file is gitignored — skipping this step breaks client-side search.

---

## 🚀 Deployment

Deployed on [Netlify](https://www.netlify.com/). `public/_redirects` contains:

```
/*    /index.html   200
```

This is required for SPA client-side routing — without it, direct URL access (e.g. `/blog`) and page refreshes return a 404.

---

## ✍️ Adding Content

**New blog post** — create `src/posts/YYYY/M/your-slug.md` with frontmatter:

```yaml
---
title: Your Post Title
description: A short description.
date: 2026-01-15
tags: [tag1, tag2]
published: true
---
```

Posts with a future `date` are automatically hidden until that date. Set `published: false` to draft indefinitely.

**New project** — create `src/projects/your-slug.md` with the same frontmatter plus `image`, `published_date`, and `updated_date`.

No code changes needed for either — `getMarkDown` picks up new files automatically via `import.meta.glob`.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## ✉️ Contact

- **Name**: Brandon Yong
- **Portfolio**: [https://byongys.netlify.app/](https://byongys.netlify.app/)
- **LinkedIn**: [linkedin.com/in/byongys](https://www.linkedin.com/in/byongys)
- **Email**: [byongys@gmail.com](mailto:byongys@gmail.com)

