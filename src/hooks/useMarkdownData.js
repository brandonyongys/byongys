import { useContext } from 'react';
import { MarkdownContext } from '../context/MarkdownContextInstance';

export function useMarkdownData(type) {
    const context = useContext(MarkdownContext);
    if (!context) {
        throw new Error('useMarkdownData must be used within a MarkdownProvider');
    }
    return context[type];
}
