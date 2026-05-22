import ReactMarkdown from 'react-markdown';
import { useMarkdownData } from '../hooks/useMarkdownData';
import { REMARK_PLUGINS, REHYPE_PLUGINS } from '../config/markdownPlugins';
import MissingPage from '../components/MissingPage';
import { usePageMeta } from '../hooks/usePageMeta';

export default function About() {
  const MarkdownData = useMarkdownData('config');
  const markdown = MarkdownData.find(p => p.slug === "about");

  usePageMeta({ title: 'About Me', path: '/about' });

  if (!markdown) {
    return <MissingPage pageName='About' />;
  }

  return (
    <section className="max-w-4xl mx-auto p-8 my-8 bg-surface-raised rounded-sm border border-border-subtle">
      <h2 className="font-display text-4xl font-semibold mb-3 text-text-primary">About Me</h2>
      <article className="prose max-w-none mt-2">
        <ReactMarkdown
          remarkPlugins={REMARK_PLUGINS}
          rehypePlugins={REHYPE_PLUGINS}
        >
          {markdown.content}
        </ReactMarkdown>
      </article>
    </section>
  );
}
