import { useParams } from 'react-router-dom';
import { getMarkDown } from '../utils/getMarkdown';

export default function About() {
  const MarkdownData = getMarkDown();
  const markdown = MarkdownData.find(p => p.slug === "about_me");
  return (
    <section className="max-w-3xl mx-auto p-6 my-10 bg-white rounded shadow">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: markdown.content }} />
    </section>
  );
}
