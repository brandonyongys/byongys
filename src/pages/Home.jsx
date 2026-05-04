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
    <main className="max-w-4xl mx-auto my-8 text-brand-text-main">
      <div className="page-background" aria-hidden="true"></div>
      <section className="mb-8 p-8 bg-gray-custom-bg rounded shadow">
        <h2 className="text-4xl font-bold mb-3 text-brand-text-main">{markdown.title}</h2>
        <article className="prose max-w-none text-gray-custom-muted mt-2">
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