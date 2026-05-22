import { Link } from 'react-router-dom';
import { useMarkdownData } from '../hooks/useMarkdownData';
import { formatDate } from '../utils/formatDate';
import { PAGINATION } from '../config/constants';

export default function LatestPostList() {
  const posts = useMarkdownData('posts');
  const latestPosts = posts.slice(0, PAGINATION.LATEST_POSTS_LIMIT);

  return (
    <section>
      <div className="flex items-center gap-4 mb-6">
        <h2 className="font-display text-sm font-semibold tracking-widest uppercase text-text-muted whitespace-nowrap">
          Recent Writing
        </h2>
        <div className="flex-1 h-px bg-border-subtle" />
      </div>

      <ul className="space-y-0">
        {latestPosts.map(post => (
          <li key={post.slug} className="py-4 border-b border-border-subtle last:border-b-0">
            <div className="flex items-baseline justify-between gap-4">
              <Link
                to={`/posts/${post.slug}`}
                className="font-body text-base text-text-primary hover:text-accent transition-colors leading-snug"
              >
                {post.title}
              </Link>
              <span className="font-mono text-xs text-text-muted whitespace-nowrap shrink-0">
                {formatDate(post.date)}
              </span>
            </div>
            {post.description && (
              <p className="font-body text-sm text-text-secondary mt-1 leading-relaxed">
                {post.description}
              </p>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
