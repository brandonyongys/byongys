import LatestPostList from '../components/LatestPostList';

export default function Home() {
  return (
    <main className="min-h-screen text-orange-900 p-8">
      <section className="max-w-4xl mx-auto mb-8">
        <h2 className="text-3xl font-bold mb-4">Welcome!</h2>
        <p className="text-lg">
          🛠️ This blog is called <b>Build, Break, Rebuild</b> because that's exactly how my systems (and skills) have evolved - one failure at a time.
        </p>
      </section>

      <LatestPostList />
    </main>
  );
}