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

    console.log('Loaded MarkdownFiles:', MarkdownFiles);

    const MarkdownData = Object.entries(MarkdownFiles).map(([path, rawContent]) => {
      console.log('Parsing:', path);
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

    MarkdownData.sort((a, b) => new Date(b.date) - new Date(a.date));

    console.log('Final MarkdownData:', MarkdownData);   

    return MarkdownData;
  } catch (error) {
    console.error('Error in getAllPosts:', error);
    return [];
  }
}
