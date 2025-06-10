import fm from 'front-matter';
import { marked } from 'marked';

// Function to dynamically import and process all markdown posts
export function getMarkDown() {
  try {
    const MarkdownFiles = import.meta.glob('../config/*.md', { eager: true, as: 'raw' });

    console.log('Loaded MarkdownFiles:', MarkdownFiles);
    const MarkdownData = Object.entries(MarkdownFiles).map(([path, rawContent]) => {
      console.log('Parsing:', path);
      const parsed = fm(rawContent);
      const slug = path.split('/').pop().replace('.md', '');

      return {
        slug,
        title: parsed.attributes.title || 'Untitled Post',
        date: parsed.attributes.date || 'Unknown Date',
        description: parsed.attributes.description || '',
        content: marked(parsed.body),
        tags: parsed.attributes.tags || [],
      };
    });

    MarkdownData.sort((a, b) => new Date(b.date) - new Date(a.date));

    console.log('Final MarkdownData:', MarkdownData);   

    return MarkdownData;
  } catch (error) {
    console.error('Error in getAllPosts:', error);
    return [
      { slug: 'aws-deployment', title: 'Default post: Deploying a React App with Vercel', date: '2025-06-01', description: 'test summary', tags: ['react', 'deployment'] },
      { slug: 'aws-lambda', title: 'Default post: AWS Lambda Automation', date: '2025-05-22', description: 'Another summary', tags: ['aws', 'automation'] },
    ];
  }
}
