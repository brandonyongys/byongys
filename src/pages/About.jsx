import { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { useMarkdownData } from '../hooks/useMarkdownData';
import { REMARK_PLUGINS, REHYPE_PLUGINS } from '../config/markdownPlugins';
import MissingPage from '../components/MissingPage';

export default function About() {
  const MarkdownData = useMarkdownData('config');
  const markdown = MarkdownData.find(p => p.slug === "about");

  useEffect(() => {
    document.title = 'About Me | Brandon Yong';
    return () => { document.title = 'Brandon Yong'; };
  }, []);

  if (!markdown) {
    return <MissingPage pageName='About' />;
  }

  return (
    <section className="max-w-4xl mx-auto p-8 my-8 bg-gray-custom-bg rounded shadow">
      <div className="page-background" aria-hidden="true"></div>
      <h2 className="text-4xl font-bold mb-3 text-brand-text-main">About Me</h2>
      <article className="prose max-w-none text-gray-custom-muted mt-2">
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
