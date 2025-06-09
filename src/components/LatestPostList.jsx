import { Link } from 'react-router-dom';

const posts = [
  { slug: 'aws-deployment', title: 'Deploying a React App with Vercel', date: '2025-06-01', summary: 'test summary', content: 'THIS A TEST CONTENT HELLOW!' },
  { slug: 'aws-lambda', title: 'Using AWS Lambda for Automation', date: '2025-05-22' },
  { slug: 'llms-healthcare', title: 'LLMs in Healthcare: What Works', date: '2025-05-15' },
  { slug: 'testing-123', title: '123', date: '2025-04-15' },
  { slug: 'random-4234', title: '4234', date: '2025-03-15' },
  { slug: 'llmserw', title: 'LLMserw', date: '2025-02-15' },
  { slug: 'llms-dsfg', title: 'LLMs dsfg Works', date: '2025-01-15' },
  { slug: 'llms-healthcare-old', title: 'LLMs in Healthcare: What Works', date: '2024-05-15' },
];

export default function PostList() {
  // Limit posts to 5 latest (assuming posts are already sorted by date descending)
  const n_posts = 4
  const latestPosts = posts.slice(0, n_posts);

  return (
    <section className="max-w-4xl mx-auto">
      <h3 className="text-3xl font-semibold mb-4">Latest Posts in PostList.jsx</h3>
      <ul className="space-y-3">
        {latestPosts.map(post => (
          <li key={post.slug} className="border-b border-orange-200 pb-2">
            <h4 className="text-xl font-medium">
              <Link to={`/posts/${post.slug}`} className="font-semibold text-orange-800 hover:underline">
                {post.title}
              </Link>
            </h4>
            <p className="text-sm text-orange-600">{post.date}</p>
            <p className="text-sm text-orange-600">{post.summary || ''}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}