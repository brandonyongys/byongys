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

---

## 🛠️ Getting Started

To run this project locally, ensure you have [Node.js](https://nodejs.org/) installed.

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/byongys_portfolio.git
   cd byongys_portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Generate the search index**
   ```bash
   npm run generate-index
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## ✉️ Contact

- **Name**: Brandon Yong
- **Portfolio**: [https://byongys.netlify.app/](https://byongys.netlify.app/)
- **LinkedIn**: [linkedin.com/in/byongys](https://www.linkedin.com/in/byongys)
- **Email**: [byongys@gmail.com](mailto:byongys@gmail.com)

