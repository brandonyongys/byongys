# byongys — Portfolio Website

React + Vite personal portfolio and blog. Markdown-driven content, build-time search index, deployed on Netlify.

## Stack

- **React 19** with react-router-dom v7
- **Vite 6** — dev server and build tool
- **Tailwind CSS v3** with `@tailwindcss/typography`
- **react-markdown** + rehype-sanitize + rehype-raw + remark-gfm for rendering posts
- **Fuse.js** for fuzzy search (runs against pre-built `searchIndex.json`)
- **front-matter** for parsing markdown frontmatter
- **js-yaml** for parsing `cv.yml`

## Commands

```bash
npm run dev          # generate search index then start dev server
npm run build        # generate search index then production build
npm run lint         # eslint
npm run preview      # preview production build
```

**Always run `npm run dev`, not `vite` directly** — the `generate-index` step must run first or search breaks.

## Architecture

### Content pipeline (critical path)

```
src/posts/**/*.md           ──┐
src/projects/*.md             ├──► getMarkDown(type)  ──► MarkdownProvider (memoized)  ──► useMarkdownData(type)  ──► page components (.find() for specific item)
src/config/{about,welcome}.md ┘
```

- `src/utils/getMarkdown.js` — `getMarkDown(type)` uses `import.meta.glob` to load all `.md` files at build time. Accepts `'posts'`, `'projects'`, or `'config'`. Filters out unpublished and future-dated content. Returns sorted array.
- `src/context/MarkdownContext.jsx` — `MarkdownProvider` calls `getMarkDown` for all three types once, wrapped in `useMemo(() => ({ ... }), [])`. Single parse per session.
- `src/context/MarkdownContextInstance.js` — exports the `MarkdownContext` object (kept separate to avoid circular imports).
- `src/hooks/useMarkdownData.js` — `useMarkdownData(type)` consumes `MarkdownContext` and returns the full array for `'posts'`, `'projects'`, or `'config'`. Pages call `.find()` themselves to get a specific item by slug.

### Search pipeline

```
generateSearchIndex.js  (build-time node script)
  ──► reads all posts via getMarkDown
  ──► writes src/config/searchIndex.json
      ──► useSearch.js (Fuse.js) ──► SearchPage / SearchResults
```

### Routing

All routes defined in `src/App.jsx`:

| Route | Component |
|---|---|
| `/` | `Home` |
| `/about` | `About` |
| `/cv` | `CV` |
| `/blog` | `Blog` |
| `/posts/:slug` | `PostPage` |
| `/projects` | `Projects` |
| `/projects/:slug` | `ProjectPage` |
| `/search` | `SearchPage` |

### Content structure

```
src/posts/YYYY/M/slug.md     ← blog posts
src/projects/slug.md         ← project write-ups
src/config/about.md          ← About page content
src/config/welcome.md        ← Home page welcome section
src/config/cv.yml            ← CV data (parsed with js-yaml)
```

Post frontmatter fields: `title`, `description`, `date`, `tags`, `published` (bool, default true). Posts with future `date` are hidden automatically.

Project frontmatter fields: same as posts plus `image`, `published_date`, `updated_date`.

### Pagination constants

All pagination config lives in `src/config/constants.js`:
- `POSTS_PER_PAGE: 10`
- `RESULTS_PER_PAGE: 10`
- `LATEST_POSTS_LIMIT: 5`

## Key invariants

- **Never use `dangerouslySetInnerHTML`** for markdown — use `react-markdown` with `rehype-sanitize` (XSS protection).
- **`MarkdownProvider` must wrap the entire app** — it sits above `<Router>` in `App.jsx`. Don't move it inside a route.
- **Search index is static** — `searchIndex.json` is committed and regenerated at build time. If you add/rename posts, run `npm run generate-index` (or just `npm run dev`/`npm run build`).
- **`getMarkDown` filters future dates** — posts with `date` > today are invisible in dev and prod. This is intentional for scheduled publishing.
- **`ErrorBoundary` wraps both the whole app and the routes** — two layers, outer catches provider errors, inner catches route render errors.

## Adding content

**New blog post:** create `src/posts/YYYY/M/your-slug.md` with frontmatter. No code changes needed.

**New project:** create `src/projects/your-slug.md` with frontmatter including `image`. No code changes needed.

**New page/route:** add component to `src/pages/`, add `<Route>` in `src/App.jsx`, add nav link in `src/components/Navbar.jsx`.
