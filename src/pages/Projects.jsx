// import { Link } from 'react-router-dom';
// import { useState } from 'react';
// // import { getAllprojects } from '../utils/projects';

// export default function Blog() {
//   // const projects = getAllProjects(); // Have issue calling this
//   const projects = [
//     { slug: 'aws-deployment', title: 'PROJECT a React App with Vercel', date: '2025-06-01', 
//       summary: 'test summary', content: 'THIS A TEST CONTENT HELLOW!', tags: ['react', 'deployment']},
//     { slug: 'aws-lambda', title: 'PROJECT AWS Lambda for Automation', date: '2025-05-22', tags: ['test', 'tag1'] },
//     { slug: 'llms-healthcare', title: 'PROJECT in Healthcare: What Works', date: '2025-05-15', tags: ['test', 'llm'] },
//     { slug: 'testing-123', title: 'PROJECT3423 ', date: '2025-04-15', tags: ['misc'] },
//     { slug: 'random-4234', title: 'PROJECT 12', date: '2025-03-15', tags: ['test', 'tag1'] },
//     { slug: 'llmserw', title: 'PROJECT', date: '2025-02-15', tags: ['test', 'tag1'] },
//     { slug: 'llms-dsfg', title: 'PROJECTs dsfg Works', date: '2025-01-15', tags: ['test', 'tag1'] },
//     { slug: 'llms-healthcare-old', title: 'PROJECT in Healthcare: What Works', date: '2024-05-15', tags: ['test', 'tag1'] },
//   ];

//   const projectsPerPage = 5;
//   const [currentPage, setCurrentPage] = useState(1);
//   const [selectedTag, setSelectedTag] = useState(null);

//   const allTags = [...new Set(projects.flatMap(post => post.tags || []))];

//   // Filter posts by selectedTag if applicable
//   const filteredProjects = selectedTag
//     ? projects.filter(post => (post.tags || []).includes(selectedTag))
//     : projects;

//   const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
//   const indexOfLastPost = currentPage * projectsPerPage;
//   const indexOfFirstPost = indexOfLastPost - projectsPerPage;
//   const currentProjects = filteredProjects.slice(indexOfFirstPost, indexOfLastPost);

//   const handleTagClick = (tag) => {
//     setSelectedTag(tag);
//     setCurrentPage(1); // Reset to page 1 when filtering by tag
//   };

//   return (
//     <main className="max-w-6xl mx-auto p-4 flex gap-6">
//       {/* Sidebar with Tags */}
//       <aside className="w-1/4 border-r pr-4">
//         <h3 className="text-xl font-bold mb-4">Tags</h3>
//         <ul className="space-y-2">
//           <li>
//             <button
//               onClick={() => handleTagClick(null)}
//               className={`text-left w-full ${!selectedTag ? 'font-bold text-orange-700' : 'text-gray-700'}`}
//             >
//               All Projects
//             </button>
//           </li>
//           {allTags.map(tag => (
//             <li key={tag}>
//               <button
//                 onClick={() => handleTagClick(tag)}
//                 className={`text-left w-full ${selectedTag === tag ? 'font-bold text-orange-700' : 'text-gray-700'}`}
//               >
//                 {tag}
//               </button>
//             </li>
//           ))}
//         </ul>
//       </aside>

//       {/* Main Projects Content */}
//       <div className="w-3/4">
//         <h2 className="text-3xl font-bold mb-6">
//           {selectedTag ? `Projects tagged "${selectedTag}"` : 'All Projects'}
//         </h2>

//         <ul className="space-y-4">
//           {currentProjects.map(post => (
//             <li key={post.slug} className="border-b border-orange-300 pb-2">
//               <Link to={`/projects/${post.slug}`}>
//                 <h3 className="text-xl font-semibold text-orange-800 hover:underline">{post.title}</h3>
//               </Link>
//               <p className="text-sm text-orange-600">{post.date}</p>
//               <p className="text-sm">{post.summary}</p>
//               <div className="mt-1 space-x-1">
//                 {(post.tags || []).map(tag => (
//                   <span
//                     key={tag}
//                     className="inline-block text-xs text-gray-600 bg-gray-100 px-2 py-0.5 rounded"
//                   >
//                     {tag}
//                   </span>
//                 ))}
//               </div>
//             </li>
//           ))}
//         </ul>

//         {/* Pagination */}
//         <div className="flex justify-center items-center space-x-2 mt-6">
//           <button
//             onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
//             disabled={currentPage === 1}
//             className="px-3 py-1 bg-orange-100 rounded disabled:opacity-50"
//           >
//             Previous
//           </button>

//           <span className="px-3 py-1 font-medium">{currentPage} / {totalPages || 1}</span>

//           <button
//             onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
//             disabled={currentPage === totalPages || totalPages === 0}
//             className="px-3 py-1 bg-orange-100 rounded disabled:opacity-50"
//           >
//             Next
//           </button>
//         </div>
//       </div>
//     </main>
//   );
// }



/////////// Filter at the top 
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { getMarkDown } from '../utils/getMarkdown';

export default function Blog() {
  const posts = getMarkDown('projects'); // Have issue calling this

  const postsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTag, setSelectedTag] = useState('All');

  const allTags = Array.from(new Set(posts.flatMap(post => post.tags || [])));

  // Filter posts based on selectedTag
  const filteredPosts = selectedTag === 'All'
    ? posts
    : posts.filter(post => post.tags?.includes(selectedTag));

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const handleTagClick = (tag) => {
    setSelectedTag(tag);
    setCurrentPage(1); // Reset to first page when changing tag
  };

  return (
    <main className="max-w-4xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Blog</h2>

      {/* Tag Filter */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => handleTagClick('All')}
          className={`px-3 py-1 rounded ${selectedTag === 'All' ? 'bg-orange-400 text-white' : 'bg-orange-100'}`}
        >
          All
        </button>
        {allTags.map(tag => (
          <button
            key={tag}
            onClick={() => handleTagClick(tag)}
            className={`px-3 py-1 rounded ${selectedTag === tag ? 'bg-orange-400 text-white' : 'bg-orange-100'}`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Posts List */}
      <ul className="space-y-4">
        {currentPosts.map(post => (
          <li key={post.slug} className="border-b border-orange-300 pb-2">
            <Link to={`/posts/${post.slug}`}>
              <h3 className="text-xl font-semibold text-orange-800 hover:underline">{post.title}</h3>
            </Link>
            <p className="text-sm text-orange-600">{new Date(post.date).toLocaleDateString('en-GB')}</p>
            <p className="text-sm">{post.summary}</p>
          </li>
        ))}
        {filteredPosts.length === 0 && (
          <p className="text-orange-600">No posts found for this tag.</p>
        )}
      </ul>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center space-x-2 mt-6">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-3 py-1 bg-orange-100 rounded disabled:opacity-50"
          >
            Previous
          </button>

          <span className="px-3 py-1 font-medium">{currentPage} / {totalPages}</span>

          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-3 py-1 bg-orange-100 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </main>
  );
}




