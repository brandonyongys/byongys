import { useMemo } from 'react';
import { getMarkDown } from '../utils/getMarkdown';

import { MarkdownContext } from './MarkdownContextInstance';

export function MarkdownProvider({ children }) {
    // Memoize all markdown data to prevent re-parsing on every render
    const markdownData = useMemo(() => ({
        posts: getMarkDown('posts'),
        projects: getMarkDown('projects'),
        config: getMarkDown('config'),
    }), []); // Empty dependency array means this only runs once

    return (
        <MarkdownContext.Provider value={markdownData}>
            {children}
        </MarkdownContext.Provider>
    );
}
