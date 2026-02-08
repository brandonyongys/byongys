import { createContext, useContext, useMemo } from 'react';
import { getMarkDown } from '../utils/getMarkdown';

const MarkdownContext = createContext(null);

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

export function useMarkdownData(type) {
    const context = useContext(MarkdownContext);
    if (!context) {
        throw new Error('useMarkdownData must be used within a MarkdownProvider');
    }
    return context[type];
}
