import fm from 'front-matter';
import { marked } from 'marked';

marked.setOptions({
  breaks: true,            // respects line breaks
  gfm: true,               // GitHub Flavored Markdown (enables tables, etc.)
});

// Function to dynamically import and process all markdown posts
export function getMarkDown(type = 'config') {
  try {
    let MarkdownFiles;
    if (type === 'config') {
      MarkdownFiles = import.meta.glob('../config/*.md', { eager: true, as: 'raw' });
    } else if (type === 'posts') {
      MarkdownFiles = import.meta.glob('../posts/*/*.md', { eager: true, as: 'raw' });
    } else if (type === 'projects') {
      MarkdownFiles = import.meta.glob('../projects/*.md', { eager: true, as: 'raw'});
    } else {
      throw new Error('Invalid type');
    }

    const MarkdownData = Object.entries(MarkdownFiles).map(([path, rawContent]) => {
      const parsed = fm(rawContent);
      const slug = path.split('/').pop().replace('.md', '');

      return {
        slug,
        title: parsed.attributes.title || '',
        date: parsed.attributes.date || '',
        description: parsed.attributes.description || '',
        content: marked(parsed.body),
        tags: parsed.attributes.tags || [],
        published: parsed.attributes.published ?? true,
      };
    });

    // Remove future dated posts
    let VisibleMarkdownData;
    if (type === 'posts' || type === 'projects') {
      const today = new Date()
      VisibleMarkdownData = MarkdownData.filter(post => new Date(post.date) <= today)
    } else {
      VisibleMarkdownData = MarkdownData
    }

    // Sort by date
    VisibleMarkdownData.sort((a, b) => new Date(b.date) - new Date(a.date));

    return VisibleMarkdownData;
  } catch (error) {
    console.error('Error in getAllPosts:', error);
    return [];
  }
}
