import { Link } from 'react-router-dom';
import { getMarkDown } from '../utils/getMarkdown';


export default function PostList() {
  const posts = getMarkDown('posts');
  console.log(posts); 

  // Limit posts to 5 latest (assuming posts are already sorted by date descending)
  const n_posts = 8
  const latestPosts = posts.slice(0, n_posts);

  return (
    <section className="max-w-4xl mx-auto">
      <h3 className="text-3xl font-semibold mb-4">Latest Posts</h3>
      <ul className="space-y-3">
        {latestPosts.map(post => (
          <li key={post.slug} className="border-b border-orange-200 pb-2">
            <h4 className="text-xl font-medium">
              <Link to={`/posts/${post.slug}`} className="font-semibold text-orange-800 hover:underline">
                {post.title}
              </Link>
            </h4>
            <p className="text-sm text-orange-600">{new Date(post.date).toLocaleDateString('en-GB')}</p>
            <p className="text-sm text-orange-600">{post.summary || ''}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}