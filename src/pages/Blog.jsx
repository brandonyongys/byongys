import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getMarkDown } from '../utils/getMarkdown';

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTag, setSelectedTag] = useState(null);
  const postsPerPage = 10;

  // Get the set of posts in reverse chronological order
  useEffect(() => {
    const posts = getMarkDown('posts').filter(post => post.published);
    setPosts(posts);
  }, []);

  // Count number of posts per tag
  const tagCounts = posts.reduce((acc, post) => {
    (post.tags || []).forEach(tag => {
      acc[tag] = (acc[tag] || 0) + 1;
    });
    return acc;
  }, {});

  const allTags = Object.keys(tagCounts).sort((a,b) => a.localeCompare(b));

  const filteredPosts = selectedTag
    ? posts.filter(post => (post.tags || []).includes(selectedTag))
    : posts;

  // Pagination logic
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Reset to page 1 when a tag is selected
  const handleTagClick = (tag) => {
    setSelectedTag(tag);
    setCurrentPage(1);
  };

  return (
    <main className="max-w-6xl mx-auto p-4 flex gap-6">
      {/* Side menu for tags */}
      <aside className="w-1/6 border-r pr-4">
        {/* Tags header */}
        <h3 className="text-xl font-bold mb-4">Tags</h3>

        {/* Spacing between tags */}
        <ul className="space-y-1">
          <li>
            {/* All posts button */}
            <button
              onClick={() => handleTagClick(null)}
              className={`text-left w-full ${!selectedTag ? 'font-bold text-orange-700' : 'text-gray-700'}`}
            >
              All Posts ({posts.length})
            </button>
          </li>

          {/* Rest of the tags */}
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

      {/* Posts menu */}
      <div className="w-2/3 p-8 bg-gray-50">
        <h2 className="text-2xl font-bold mb-6">
          {selectedTag ? `Posts tagged "${selectedTag}"` : 'All Posts'}
        </h2>

        {currentPosts.length === 0 ? (
          <p>No posts found{selectedTag ? ` for "${selectedTag}"` : ''}.</p>
        ) : (
          // Post details for selection
          <ul className="space-y-3">
            {currentPosts.map(post => (
              // Horizontal line to separate the different posts
              <li key={post.slug} className="border-b border-orange-300 pb-3">

                {/* Clickable post title with post date */}
                <div className="flex items-center justify-between">
                  <Link to={`/posts/${post.slug}`}>
                    <h3 className="text-xl font-semibold text-orange-800 hover:underline">{post.title}</h3>
                  </Link>
                  <p className="text-sm font-semibold text-orange-600 ml-4 whitespace-nowrap">{new Date(post.date).toLocaleDateString('en-GB')}</p>
                </div>

                {/* Post description */}
                <p className="text-m font-semibold text-orange-700">{post.description}</p>

                {/* Tags */}
                <div className="mt-1 space-x-2">
                  {(post.tags || []).map(tag => (
                    <button
                      key={tag}
                      onClick={() => handleTagClick(tag)}
                      className="inline-block text-xs text-gray-900 bg-gray-100 px-2 py-0.5 rounded hover:bg-gray-200"
                    >
                      {tag}
                    </button>
                  ))}
                </div>

              </li>
            ))}
          </ul>
        )}

        {/* Next and previous button for pagination */}
        <div className="flex justify-center items-center space-x-2 mt-6">
          {/* Previous button */}
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 bg-orange-100 rounded disabled:opacity-50"
          >
            Previous
          </button>

          {/* Pages number */}
          <span className="px-3 py-1 font-medium">{currentPage} / {totalPages || 1}</span>

          {/* Next button */}
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
