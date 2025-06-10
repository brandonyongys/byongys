import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getMarkDown } from '../utils/getMarkdown';

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTag, setSelectedTag] = useState(null);

  useEffect(() => {
    const posts = getMarkDown('posts');
    setPosts(posts);
  }, []);

  const postsPerPage = 5;

  const tagCounts = posts.reduce((acc, post) => {
    (post.tags || []).forEach(tag => {
      acc[tag] = (acc[tag] || 0) + 1;
    });
    return acc;
  }, {});

  const allTags = Object.keys(tagCounts);

  const filteredPosts = selectedTag
    ? posts.filter(post => (post.tags || []).includes(selectedTag))
    : posts;

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const handleTagClick = (tag) => {
    setSelectedTag(tag);
    setCurrentPage(1);
  };

  return (
    <main className="max-w-6xl mx-auto p-4 flex gap-6">
      <aside className="w-1/4 border-r pr-4">
        <h3 className="text-xl font-bold mb-4">Tags</h3>
        <ul className="space-y-2">
          <li>
            <button
              onClick={() => handleTagClick(null)}
              className={`text-left w-full ${!selectedTag ? 'font-bold text-orange-700' : 'text-gray-700'}`}
            >
              All Posts ({posts.length})
            </button>
          </li>
          {allTags.map(tag => (
            <li key={tag}>
              <button
                onClick={() => handleTagClick(tag)}
                className={`text-left w-full ${selectedTag === tag ? 'font-bold text-orange-700' : 'text-gray-700'}`}
              >
                {tag} ({tagCounts[tag]})
              </button>
            </li>
          ))}
        </ul>
      </aside>

      <div className="w-3/4">
        <h2 className="text-3xl font-bold mb-6">
          {selectedTag ? `Posts tagged "${selectedTag}"` : 'All Posts'}
        </h2>

        {currentPosts.length === 0 ? (
          <p>No posts found{selectedTag ? ` for "${selectedTag}"` : ''}.</p>
        ) : (
          <ul className="space-y-4">
            {currentPosts.map(post => (
              <li key={post.slug} className="border-b border-orange-300 pb-2">
                <Link to={`/posts/${post.slug}`}>
                  <h3 className="text-xl font-semibold text-orange-800 hover:underline">{post.title}</h3>
                </Link>
                <p className="text-sm text-orange-600">{new Date(post.date).toLocaleDateString('en-GB')}</p>
                <p className="text-sm">{post.summary}</p>
                <div className="mt-1 space-x-2">
                  {(post.tags || []).map(tag => (
                    <button
                      key={tag}
                      onClick={() => handleTagClick(tag)}
                      className="inline-block text-xs text-gray-700 bg-gray-200 px-2 py-0.5 rounded hover:bg-gray-300"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        )}

        <div className="flex justify-center items-center space-x-2 mt-6">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 bg-orange-100 rounded disabled:opacity-50"
          >
            Previous
          </button>

          <span className="px-3 py-1 font-medium">{currentPage} / {totalPages || 1}</span>

          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages || totalPages === 0}
            className="px-3 py-1 bg-orange-100 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </main>
  );
}
