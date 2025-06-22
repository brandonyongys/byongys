import LatestPostList from '../components/LatestPostList';
import { getMarkDown } from '../utils/getMarkdown';

export default function Home() {
  const MarkdownData = getMarkDown('config')
  const markdown = MarkdownData.find(p => p.slug === "welcome");

  if (!markdown) {
    return <center><div>Page not found</div></center>
  }

  return (
    <main className="min-h-screen text-orange-900 p-8">
      <section className="max-w-4xl mx-auto mb-8 p-8 bg-gray-50 rounded shadow">
        <h2 className="text-3xl font-bold mb-4">{markdown.title}</h2>
        <article className="prose max-w-none text-orange-900 text-lg">
          <div dangerouslySetInnerHTML={{ __html: markdown.content }} />
        </article>
        {/* <p className="text-lg">
          🛠️ This blog is called <b>Build, Break, Rebuild</b> because that's exactly how my systems (and skills) have evolved - one failure at a time.
        </p> */}
      </section>

      <LatestPostList />
    </main>
  );
}