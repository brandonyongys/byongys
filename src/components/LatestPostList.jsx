import { Link } from 'react-router-dom';
import { useMarkdownData } from '../hooks/useMarkdownData';
import { formatDate } from '../utils/formatDate';
import { PAGINATION } from '../config/constants';


export default function PostList() {
  const posts = useMarkdownData('posts');

  // Limit posts to latest (assuming posts are already sorted by date descending)
  const latestPosts = posts.slice(0, PAGINATION.LATEST_POSTS_LIMIT);

  return (
    <section className="max-w-4xl mx-auto p-8 bg-gray-custom-bg rounded shadow">
      <h3 className="text-3xl font-semibold mb-4">Latest Posts</h3>
      <ul className="space-y-3">
        {latestPosts.map(post => (
          <li key={post.slug} className="border-b border-brand-primary-border pb-2">

            {/* Clickable post title with post date */}
            <div className="flex items-center justify-between">
              <Link to={`/posts/${post.slug}`}>
                <h3 className="text-xl font-semibold text-brand-text-main hover:underline">{post.title}</h3>
              </Link>
              <p className="text-sm font-semibold text-brand-text-muted ml-4 whitespace-nowrap">
                {formatDate(post.date)}
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