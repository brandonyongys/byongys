import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { getMarkDown } from './getMarkdown.js';

// Handle __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Extract the data using your getMarkDown() function
const postsData = getMarkDown('posts');
const projectsData = getMarkDown('projects');

// Extract relevant data for search index
const searchIndex = [
    ...postsData.map(post => ({
        title: post.title || '',
        description: post.description || '',
        tags: post.tags || [],
        url: `/posts/${post.slug}`,
    })),
    ...projectsData.map(project => ({
        title: project.title || '',
        description: project.description || '',
        tags: project.tags || [],
        url: `/projects/${project.slug}`,
    })),
];

// Define output file path for the generated search index
const outputPath = path.resolve(__dirname, '../config/searchIndex.json');

// Write the index to a file in JSON format
fs.writeFileSync(outputPath, JSON.stringify(searchIndex, null, 2), 'utf-8');

console.log(`✅ searchIndex.json generated with ${searchIndex.length} entries`);
