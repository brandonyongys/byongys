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
        // Mandatory params
        slug,
        title: parsed.attributes.title || '',
        description: parsed.attributes.description || '',
        content: marked(parsed.body),
        published: parsed.attributes.published ?? true,
        date: parsed.attributes.date || parsed.attributes.published_date || parsed.attributes.updated_date || '',

        // Params for posts
        tags: parsed.attributes.tags || [],

        // Params for projects
        image: parsed.attributes.image || '',
        published_date: parsed.attributes.published_date || '',
        updated_date: parsed.attributes.updated_date || '',

      };
    });

    // Keep published data only
    const PublishedMarkdownData = MarkdownData.filter(data => data.published)

    // Remove future dated data
    let VisibleMarkdownData;
    if (type === 'posts' || type === 'projects') {
      const today = new Date()
      VisibleMarkdownData = PublishedMarkdownData.filter(data => new Date(data.date) <= today)
    } else {
      VisibleMarkdownData = PublishedMarkdownData
    }

    // Sort by date
    VisibleMarkdownData.sort((a, b) => new Date(b.date) - new Date(a.date));

    return VisibleMarkdownData;
  } catch (error) {
    console.error('Error in getMarkDown:', error);
    return [];
  }
}
