export const PAGINATION = {
    POSTS_PER_PAGE: 10,
    RESULTS_PER_PAGE: 10,
    LATEST_POSTS_LIMIT: 5,
};

export const SEARCH = {
    DEBOUNCE_MS: 200,
};

export const SITE = {
    NAME: 'Brandon Yong',
    URL: 'https://byongys.me',
    DEFAULT_TITLE: 'Brandon Yong | Software Engineer Portfolio',
    DEFAULT_DESCRIPTION: 'Personal portfolio and blog of Brandon Yong, a software engineer focusing on building scalable web applications and exploring new technologies.',
};

// NOTE: string values must be full Tailwind class names — no dynamic construction — so the build scanner can detect them.
export const NAVBAR = {
    SCROLL_THRESHOLD: 8,
    PADDING_TOP: 'py-4',
    PADDING_SCROLLED: 'py-1',
    TRANSITION_DURATION_CLASS: 'duration-300',
};
