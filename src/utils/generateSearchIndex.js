import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { getMarkDown } from './getMarkdown.js';

// Handle __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let postsData, projectsData;

try {
    postsData = getMarkDown('posts');
    projectsData = getMarkDown('projects');
} catch (err) {
    console.error('Failed to load markdown content:', err.message);
    // eslint-disable-next-line no-undef
    process.exit(1);
}

const searchIndex = [
    ...postsData.map(post => ({
        title: post.title || '',
        description: post.description || '',
        tags: post.tags || [],
        date: post.date || '',
        url: `/posts/${post.slug}`,
    })),
    ...projectsData.map(project => ({
        title: project.title || '',
        description: project.description || '',
        tags: project.tags || [],
        date: project.date || '',
        url: `/projects/${project.slug}`,
    })),
];

const outputPath = path.resolve(__dirname, '../config/searchIndex.json');

try {
    fs.writeFileSync(outputPath, JSON.stringify(searchIndex, null, 2), 'utf-8');
    console.log(`✅ searchIndex.json generated with ${searchIndex.length} entries`);
} catch (err) {
    console.error('Failed to write searchIndex.json:', err.message);
    // eslint-disable-next-line no-undef
    process.exit(1);
}
