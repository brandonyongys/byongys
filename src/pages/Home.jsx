import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import LatestPostList from '../components/LatestPostList';
import { useMarkdownData } from '../context/MarkdownContext';
import MissingPage from '../components/MissingPage';

export default function Home() {
  const MarkdownData = useMarkdownData('config');
  const markdown = MarkdownData.find(p => p.slug === "welcome");

  if (!markdown) {
    return <MissingPage pageName='Home' />;
  }

  return (
    <main className="min-h-screen text-orange-900 p-8">
      <div className="page-background" aria-hidden="true"></div>
      <section className="max-w-4xl mx-auto mb-8 p-8 bg-gray-50 rounded shadow">
        <h2 className="text-4xl font-bold mb-3 text-orange-800">{markdown.title}</h2>
        <article className="prose max-w-none text-gray-700 mt-2">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown.content}</ReactMarkdown>
        </article>
      </section>

      <LatestPostList />
    </main>
  );
}