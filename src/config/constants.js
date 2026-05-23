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

// 'rect' = float-right rectangle | 'circle' = float-right circle
export const PROFILE_PIC = {
    STYLE: 'rect',              // 'rect' | 'circle'
    OBJECT_POSITION: '20% 120%',
    SCALE: 'scale-90',         // e.g. 'scale-75', 'scale-100', 'scale-125', 'scale-150'
    WIDTH: 'w-52',              // Tailwind width class e.g. 'w-40', 'w-48', 'w-56'
    HEIGHT: 'h-80',             // Tailwind height class e.g. 'h-60', 'h-72', 'h-80', 'h-96'
};

// NOTE: string values must be full Tailwind class names — no dynamic construction — so the build scanner can detect them.
export const NAVBAR = {
    SCROLL_THRESHOLD: 8,
    PADDING_TOP: 'py-4',
    PADDING_SCROLLED: 'py-1',
    TRANSITION_DURATION_CLASS: 'duration-300',
};
