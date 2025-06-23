import { getMarkDown } from '../utils/getMarkdown';
import MissingPage from '../components/MissingPage';

export default function About() {
  const MarkdownData = getMarkDown('config');
  const markdown = MarkdownData.find(p => p.slug === "about");

  if (!markdown) {
    return <MissingPage pageName='About' />;
  }

  return (
    <section className="max-w-3xl mx-auto p-8 my-8 bg-gray-50 rounded shadow">
      <div className="page-background" aria-hidden="true"></div>
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <article className="prose max-w-none">
        <div dangerouslySetInnerHTML={{ __html: markdown.content }} />
      </article>
    </section>
  );
}
