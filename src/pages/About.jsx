import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import { useMarkdownData } from '../context/MarkdownContext';
import MissingPage from '../components/MissingPage';

export default function About() {
  const MarkdownData = useMarkdownData('config');
  const markdown = MarkdownData.find(p => p.slug === "about");

  if (!markdown) {
    return <MissingPage pageName='About' />;
  }

  return (
    <section className="max-w-4xl mx-auto p-8 my-8 bg-gray-50 rounded shadow">
      <div className="page-background" aria-hidden="true"></div>
      <h2 className="text-4xl font-bold mb-3 text-orange-800">About Me</h2>
      <article className="prose max-w-none text-gray-700 mt-2">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw, rehypeSanitize]}
        >
          {markdown.content}
        </ReactMarkdown>
      </article>
    </section>
  );
}
