import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useMarkdownData } from '../hooks/useMarkdownData';
import { formatDate } from '../utils/formatDate';
import { PAGINATION } from '../config/constants';
import { usePageMeta } from '../hooks/usePageMeta';

export default function Blog() {
  const allPosts = useMarkdownData('posts');
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTag, setSelectedTag] = useState(null);
  const postsPerPage = PAGINATION.POSTS_PER_PAGE;

  usePageMeta({ title: 'Blog', path: '/blog' });

  useEffect(() => {
    setPosts(allPosts.filter(post => post.published));
  }, [allPosts]);

  const tagCounts = posts.reduce((acc, post) => {
    (post.tags || []).forEach(tag => { acc[tag] = (acc[tag] || 0) + 1; });
    return acc;
  }, {});

  const allTags = Object.keys(tagCounts).sort((a, b) => a.localeCompare(b));

  const filteredPosts = selectedTag
    ? posts.filter(post => (post.tags || []).includes(selectedTag))
    : posts;

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfLastPost - postsPerPage, indexOfLastPost);

  const handleTagClick = (tag) => {
    setSelectedTag(tag);
    setCurrentPage(1);
  };

  return (
    <main className="max-w-4xl mx-auto px-6 py-12 flex gap-12">
      {/* Tag sidebar */}
      <aside className="w-40 shrink-0">
        <h3 className="font-display text-xs font-semibold tracking-widest uppercase text-text-muted mb-4">
          Topics
        </h3>
        <ul className="space-y-2">
          <li>
            <button
              onClick={() => handleTagClick(null)}
              aria-pressed={!selectedTag}
              className={`text-left w-full text-sm font-body transition-colors ${!selectedTag ? 'text-accent font-semibold' : 'text-text-secondary hover:text-text-primary'}`}
            >
              All Posts
              <span className="font-mono text-xs text-text-muted ml-1">({posts.length})</span>
            </button>
          </li>
          {allTags.map(tag => (
            <li key={tag}>
              <button
                onClick={() => handleTagClick(tag)}
                aria-pressed={selectedTag === tag}
                className={`text-left w-full text-sm font-body transition-colors ${selectedTag === tag ? 'text-accent font-semibold' : 'text-text-secondary hover:text-text-primary'}`}
              >
                {tag}
                <span className="font-mono text-xs text-text-muted ml-1">({tagCounts[tag]})</span>
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* Posts list */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="font-display text-sm font-semibold tracking-widest uppercase text-text-muted whitespace-nowrap">
            {selectedTag ? `#${selectedTag}` : 'All Writing'}
          </h2>
          <div className="flex-1 h-px bg-border-subtle" />
        </div>

        {currentPosts.length === 0 ? (
          <p className="font-body text-text-secondary">No posts found{selectedTag ? ` for "${selectedTag}"` : ''}.</p>
        ) : (
          <ul className="space-y-0">
            {currentPosts.map(post => (
              <li key={post.slug} className="py-5 border-b border-border-subtle last:border-b-0">
                <div className="flex items-baseline justify-between gap-4">
                  <Link to={`/posts/${post.slug}`} className="font-body text-base text-text-primary hover:text-accent transition-colors leading-snug">
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
                <div className="mt-2 flex flex-wrap gap-1">
                  {(post.tags || []).map(tag => (
                    <button
                      key={tag}
                      onClick={() => handleTagClick(tag)}
                      className="font-mono text-xs text-text-muted border border-border-subtle px-2 py-0.5 rounded-sm hover:border-border-medium hover:text-text-secondary transition-colors"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        )}

        {/* Pagination */}
        <div className="flex items-center gap-3 mt-8">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="font-mono text-xs text-text-secondary border border-border-subtle px-3 py-1.5 rounded-sm hover:border-border-medium transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            ← Prev
          </button>
          <span className="font-mono text-xs text-text-muted">{currentPage} / {totalPages || 1}</span>
          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages || totalPages === 0}
            className="font-mono text-xs text-text-secondary border border-border-subtle px-3 py-1.5 rounded-sm hover:border-border-medium transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Next →
          </button>
        </div>
      </div>
    </main>
  );
}
