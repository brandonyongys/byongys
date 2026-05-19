# Components Reference

All components live in `src/components/`.

- `ErrorBoundary.jsx` — two-layer error boundary. Outer wraps the whole app (catches provider errors), inner wraps routes (catches render errors). Already wired in `App.jsx` — do not remove.
- `Footer.jsx` — site footer.
- `LatestPostList.jsx` — shows latest N posts. Limited by `PAGINATION.LATEST_POSTS_LIMIT` from `src/config/constants.js`. Used on Home page.
- `LoadingSpinner.jsx` — generic loading state component.
- `MissingPage.jsx` — renders "X not found" UI. Accepts `pageName` prop. Use when a slug lookup returns nothing.
- `Navbar.jsx` — site navigation. Add nav links here when adding new pages.
- `ProjectCard.jsx` — card for project listings. Uses `project.image` as a low-opacity background if present.
- `ScrollToTop.jsx` — scrolls to top on route change. Already wired in `App.jsx`.
- `SearchResults.jsx` — renders search result items. Used by `SearchPage`.
