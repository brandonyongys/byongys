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

`getMarkDown(type)` filters unpublished and future-dated content, then sorts by date. `MarkdownProvider` calls it once for all three types at app start.

### Content structure

```
src/posts/YYYY/M/slug.md     ← blog posts
src/projects/slug.md         ← project write-ups
src/config/about.md          ← About page content
src/config/welcome.md        ← Home page welcome section
src/config/cv.yml            ← CV data (parsed with js-yaml)
```

Post frontmatter fields: `title`, `description`, `date`, `tags`, `published` (bool, default true).

Project frontmatter fields: same as posts plus `image`, `published_date`, `updated_date`.

## Key invariants

- **Never use `dangerouslySetInnerHTML`** for markdown — use `react-markdown` with `rehype-sanitize` (XSS protection).
- **`MarkdownProvider` must wrap the entire app** — it sits above `<Router>` in `App.jsx`. Don't move it inside a route.
- **Search index is static** — regenerated at build time. Run `npm run generate-index` after adding/renaming posts.
- **`getMarkDown` filters future dates** — posts with `date` > today are invisible. Intentional for scheduled publishing.
- **`ErrorBoundary` wraps both the whole app and the routes** — two layers. Don't remove either.
- **Project detail pages use `MarkdownPage`**, not `ProjectPage` — that file does not exist.

## Adding content

**New blog post:** create `src/posts/YYYY/M/your-slug.md` with frontmatter. No code changes needed.

**New project:** create `src/projects/your-slug.md` with frontmatter including `image`. No code changes needed.

**New page/route:** see `.claude/docs/routing.md`.

## Reference docs

Load these when the task needs them — don't read all upfront:

- `.claude/docs/components.md` — all components, props, usage notes
- `.claude/docs/routing.md` — route table, adding new pages
- `.claude/docs/utilities.md` — utils, hooks, plugin config
- `.claude/docs/config.md` — constants, searchIndex details

## Blog writing tone and style

Match 2025–2026 tone for all post drafting and editing.

**Voice:** Direct, reflective, confident. First person but not chatty. State observations as facts, not hedged opinions.

**Structure:** Clear sections separated by `<hr>`. Each section does one job — context, then detail, then reflection. No trailing summaries or lesson-in-a-bow endings.

**Sentences:** Mix of short declarative statements and longer sentences that build an argument. Fragments used for emphasis.

**Avoid:** "So yeah", "basically", "in a way", "I guess", "quite", "rather", "All in all", restating what was just said, closing with a moral.

**Reference posts:** `src/posts/2026/5/ai-impact-on-swe.md`, `src/posts/2026/5/ai-coding-assistant.md`
