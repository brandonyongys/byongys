# Routing Reference

All routes defined in `src/App.jsx`.

| Route | Component |
|---|---|
| `/` | `Home` |
| `/about` | `About` |
| `/cv` | `CV` |
| `/blog` | `Blog` |
| `/posts/:slug` | `PostPage` |
| `/projects` | `Projects` |
| `/projects/:slug` | `MarkdownPage` |
| `/search` | `SearchPage` |

**Note:** `ProjectPage` file does not exist — project detail pages use `MarkdownPage` (`src/pages/MarkdownPage.jsx`).

## Adding a new page/route

1. Add component to `src/pages/`
2. Add `<Route>` in `src/App.jsx`
3. Add nav link in `src/components/Navbar.jsx`
