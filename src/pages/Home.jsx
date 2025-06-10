import LatestPostList from '../components/LatestPostList';

export default function Home() {
  return (
    <main className="bg-orange-50 min-h-screen text-orange-900 p-8">
      <section className="max-w-4xl mx-auto mb-8">
        <h2 className="text-3xl font-bold mb-4">Welcome!</h2>
        <p className="text-lg">
          This is the "About me"
        </p>
      </section>

      <LatestPostList />
    </main>
  );
}
