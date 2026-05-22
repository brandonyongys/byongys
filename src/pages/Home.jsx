import ReactMarkdown from 'react-markdown';
import LatestPostList from '../components/LatestPostList';
import { REMARK_PLUGINS, REHYPE_PLUGINS } from '../config/markdownPlugins';
import { useMarkdownData } from '../hooks/useMarkdownData';
import MissingPage from '../components/MissingPage';
import { usePageMeta } from '../hooks/usePageMeta';

export default function Home() {
  const MarkdownData = useMarkdownData('config');
  const markdown = MarkdownData.find(p => p.slug === "welcome");

  usePageMeta({ title: 'Home', path: '/' });

  if (!markdown) {
    return <MissingPage pageName='Home' />;
  }

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      {/* Hero */}
      <section className="mb-16">
        <h1 className="font-display text-5xl font-semibold text-text-primary mb-3 leading-tight tracking-tight">
          {markdown.title}
        </h1>
        <p className="font-mono text-sm text-text-muted mb-4">Backend engineer · data pipelines · cloud infrastructure · Python · AWS</p>
        <div className="w-12 h-px bg-accent mb-6" />
        <article className="prose prose-stone max-w-none text-text-secondary font-body text-lg leading-relaxed">
          <ReactMarkdown
            remarkPlugins={REMARK_PLUGINS}
            rehypePlugins={REHYPE_PLUGINS}
          >
            {markdown.content}
          </ReactMarkdown>
        </article>
      </section>

      <LatestPostList />
    </main>
  );
}
