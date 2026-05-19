# Config Reference

## `src/config/constants.js`

Three named exports — all global tunables live here:

```js
PAGINATION = {
  POSTS_PER_PAGE: 10,
  RESULTS_PER_PAGE: 10,
  LATEST_POSTS_LIMIT: 5,
}

SEARCH = {
  DEBOUNCE_MS: 200,   // search input debounce
}

SITE = {
  NAME: 'Brandon Yong',
  URL: 'https://byongys.me',
  DEFAULT_TITLE: 'Brandon Yong | Software Engineer Portfolio',
  DEFAULT_DESCRIPTION: '...',
}
```

`SITE` is consumed by `usePageMeta` for default SEO values.

## `src/config/searchIndex.json`

Static file. Generated at build time by `generateSearchIndex.js`. Committed to repo. Regenerated automatically on `npm run dev` or `npm run build`. If you add or rename posts, run `npm run generate-index` manually or restart dev server.
