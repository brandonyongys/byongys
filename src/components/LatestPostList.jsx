import { Link } from 'react-router-dom';
import { getMarkDown } from '../utils/getMarkdown';


export default function PostList() {
  const posts = getMarkDown('posts');
  console.log(posts); 

  // Limit posts to 5 latest (assuming posts are already sorted by date descending)
  const n_posts = 5
  const latestPosts = posts.slice(0, n_posts);

  return (
    <section className="max-w-4xl mx-auto p-8 bg-gray-50 rounded shadow">
      <h3 className="text-3xl font-semibold mb-4">Latest Posts</h3>
      <ul className="space-y-3">
        {latestPosts.map(post => (
          <li key={post.slug} className="border-b border-orange-200 pb-2">

            {/* Clickable post title with post date */}
            <div className="flex items-center justify-between">
              <Link to={`/posts/${post.slug}`}>
                <h3 className="text-xl font-semibold text-orange-800 hover:underline">{post.title}</h3>
              </Link>
              <p className="text-sm font-semibold text-orange-600 ml-4 whitespace-nowrap">
                {new Date(post.date).toLocaleDateString('en-GB', {
          day: '2-digit',
          month: 'short',
          year: 'numeric',
        })}
                </p>
            </div>

            {/* Post description */}
            <p className="text-m font-semibold text-orange-700">{post.description}</p>

            {/* Post summary */}
            <p className="text-sm text-orange-600">{post.summary || ''}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}