# Utilities and Hooks Reference

## Utilities (`src/utils/`)

- `formatDate.js` — `formatDate(dateString)` formats to `DD Mon YYYY` (en-GB locale). Used by post/project pages and cards.
- `getMarkdown.js` — `getMarkDown(type)` loads all `.md` files via `import.meta.glob`. Accepts `'posts'`, `'projects'`, `'config'`. Filters unpublished and future-dated content. Returns array sorted by date descending.
- `generateSearchIndex.js` — build-time Node script. Reads all posts, writes `src/config/searchIndex.json`. Runs automatically via `npm run dev` and `npm run build`.
- `useSearch.js` — `useSearch(query)` hook. Wraps Fuse.js against `searchIndex.json`. Searches `title`, `description`, `tags`. Threshold 0.4. Debounced via `SEARCH.DEBOUNCE_MS` (200ms).

## Hooks (`src/hooks/`)

- `useMarkdownData.js` — `useMarkdownData(type)` consumes `MarkdownContext`, returns full array for `'posts'`, `'projects'`, or `'config'`. Pages call `.find()` themselves for a specific item by slug.
- `usePageMeta.js` — `usePageMeta({ title, description, path })` sets `<title>` and all `og:` / `twitter:` meta tags. Resets to site defaults on unmount. Call in every page component.

## Shared plugin config (`src/config/markdownPlugins.js`)

Exports `REMARK_PLUGINS` and `REHYPE_PLUGINS`. Import these instead of declaring plugins inline in any new markdown-rendering component.
