// import { getAllPosts } from '../utils/posts';

// export default function Blog() {
//   const posts = getAllPosts();

//   return (
//     <main className="max-w-4xl mx-auto px-4 py-8">
//       <h1 className="text-4xl font-bold mb-6">Blog</h1>
//       <ul className="space-y-6">
//         {posts.map((post) => (
//           <li key={post.slug} className="border-b pb-4">
//             <h2 className="text-2xl font-semibold text-orange-800">{post.title}</h2>
//             <p className="text-sm text-orange-600 mb-1">{post.date}</p>
//             <p className="text-base text-orange-700">{post.summary}</p>
//           </li>
//         ))}
//       </ul>
//     </main>
//   );
// }



// import PostList from '../components/PostList';

// export default function Blog() {
//   return (
//     <main className="max-w-4xl mx-auto p-4">
//       <h2 className="text-3xl font-bold mb-6">Blog</h2>
//       <PostList limit={10} /> {/* or whatever number you prefer */}
//     </main>
//   );
// }


// /////////// Filter at the top 
// import { Link } from 'react-router-dom';
// import { useState } from 'react';
// // import { getAllPosts } from '../utils/posts';

// export default function Blog() {
//   // const posts = getAllPosts(); // Have issue calling this
//   const posts = [
//     { slug: 'aws-deployment', title: 'Deploying a React App with Vercel', date: '2025-06-01', summary: 'test summary', tags: ['react', 'deployment'] },
//     { slug: 'aws-lambda', title: 'Using AWS Lambda for Automation', date: '2025-05-22', tags: ['aws', 'automation'] },
//     { slug: 'llms-healthcare', title: 'LLMs in Healthcare: What Works', date: '2025-05-15', tags: ['llm', 'healthcare'] },
//     { slug: 'testing-123', title: '123', date: '2025-04-15', tags: ['testing'] },
//     { slug: 'random-4234', title: '4234', date: '2025-03-15', tags: ['misc'] },
//     { slug: 'llmserw', title: 'LLMserw', date: '2025-02-15', tags: ['llm'] },
//     { slug: 'llms-dsfg', title: 'LLMs dsfg Works', date: '2025-01-15', tags: ['llm', 'test'] },
//     { slug: 'llms-healthcare-old', title: 'LLMs in Healthcare: What Works', date: '2024-05-15', tags: ['llm', 'healthcare'] },
//   ];

//   const postsPerPage = 5;
//   const [currentPage, setCurrentPage] = useState(1);
//   const [selectedTag, setSelectedTag] = useState('All');

//   const allTags = Array.from(new Set(posts.flatMap(post => post.tags || [])));

//   // Filter posts based on selectedTag
//   const filteredPosts = selectedTag === 'All'
//     ? posts
//     : posts.filter(post => post.tags?.includes(selectedTag));

//   const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
//   const indexOfLastPost = currentPage * postsPerPage;
//   const indexOfFirstPost = indexOfLastPost - postsPerPage;
//   const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

//   const handleTagClick = (tag) => {
//     setSelectedTag(tag);
//     setCurrentPage(1); // Reset to first page when changing tag
//   };

//   return (
//     <main className="max-w-4xl mx-auto p-4">
//       <h2 className="text-3xl font-bold mb-4">Blog</h2>

//       {/* Tag Filter */}
//       <div className="flex flex-wrap gap-2 mb-6">
//         <button
//           onClick={() => handleTagClick('All')}
//           className={`px-3 py-1 rounded ${selectedTag === 'All' ? 'bg-orange-400 text-white' : 'bg-orange-100'}`}
//         >
//           All
//         </button>
//         {allTags.map(tag => (
//           <button
//             key={tag}
//             onClick={() => handleTagClick(tag)}
//             className={`px-3 py-1 rounded ${selectedTag === tag ? 'bg-orange-400 text-white' : 'bg-orange-100'}`}
//           >
//             {tag}
//           </button>
//         ))}
//       </div>

//       {/* Posts List */}
//       <ul className="space-y-4">
//         {currentPosts.map(post => (
//           <li key={post.slug} className="border-b border-orange-300 pb-2">
//             <Link to={`/posts/${post.slug}`}>
//               <h3 className="text-xl font-semibold text-orange-800 hover:underline">{post.title}</h3>
//             </Link>
//             <p className="text-sm text-orange-600">{post.date}</p>
//             <p className="text-sm">{post.summary}</p>
//           </li>
//         ))}
//         {filteredPosts.length === 0 && (
//           <p className="text-orange-600">No posts found for this tag.</p>
//         )}
//       </ul>

//       {/* Pagination */}
//       {totalPages > 1 && (
//         <div className="flex justify-center items-center space-x-2 mt-6">
//           <button
//             onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
//             disabled={currentPage === 1}
//             className="px-3 py-1 bg-orange-100 rounded disabled:opacity-50"
//           >
//             Previous
//           </button>

//           <span className="px-3 py-1 font-medium">{currentPage} / {totalPages}</span>

//           <button
//             onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
//             disabled={currentPage === totalPages}
//             className="px-3 py-1 bg-orange-100 rounded disabled:opacity-50"
//           >
//             Next
//           </button>
//         </div>
//       )}
//     </main>
//   );
// }





// import { Link } from 'react-router-dom';
// import { useState } from 'react';
// // import { getAllprojects } from '../utils/projects';

// export default function Blog() {
//   // const projects = getAllProjects(); // Have issue calling this
//   const projects = [
//     { slug: 'aws-deployment', title: 'Deploying a React App with Vercel', date: '2025-06-01', summary: 'test summary', tags: ['react', 'deployment'] },
//     { slug: 'aws-lambda', title: 'Using AWS Lambda for Automation', date: '2025-05-22', tags: ['aws', 'automation'] },
//     { slug: 'llms-healthcare', title: 'LLMs in Healthcare: What Works', date: '2025-05-15', tags: ['llm', 'healthcare'] },
//     { slug: 'testing-123', title: '123', date: '2025-04-15', tags: ['testing'] },
//     { slug: 'random-4234', title: '4234', date: '2025-03-15', tags: ['misc'] },
//     { slug: 'llmserw', title: 'LLMserw', date: '2025-02-15', tags: ['llm'] },
//     { slug: 'llms-dsfg', title: 'LLMs dsfg Works', date: '2025-01-15', tags: ['llm', 'test'] },
//     { slug: 'llms-healthcare-old', title: 'LLMs in Healthcare: What Works', date: '2024-05-15', tags: ['llm', 'healthcare'] },
//   ];

//   const projectsPerPage = 5;
//   const [currentPage, setCurrentPage] = useState(1);
//   const [selectedTag, setSelectedTag] = useState(null);

//   // Generate a map of tag → count
//   const tagCounts = projects.reduce((acc, project) => {
//     (project.tags || []).forEach(tag => {
//       acc[tag] = (acc[tag] || 0) + 1;
//     });
//     return acc;
//   }, {});

//   // const allTags = [...new Set(projects.flatMap(post => post.tags || []))];
//   const allTags = Object.keys(tagCounts);

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
//               All Projects ({projects.length})
//             </button>
//           </li>
//           {allTags.map(tag => (
//             <li key={tag}>
//               <button
//                 onClick={() => handleTagClick(tag)}
//                 className={`text-left w-full ${selectedTag === tag ? 'font-bold text-orange-700' : 'text-gray-700'}`}
//               >
//                 {tag} ({tagCounts[tag]})
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

//         {currentProjects.length === 0 ? (
//           <p>No projects found for "{selectedTag}".</p>
//         ) : (
//           <ul className="space-y-4">
//             {currentProjects.map(project => (
//               <li key={project.slug} className="border-b border-orange-300 pb-2">
//                 <Link to={`/projects/${project.slug}`}>
//                   <h3 className="text-xl font-semibold text-orange-800 hover:underline">{project.title}</h3>
//                 </Link>
//                 <p className="text-sm text-orange-600">{project.date}</p>
//                 <p className="text-sm">{project.summary}</p>
//                 <div className="mt-1 space-x-2">
//                   {project.tags.map(tag => (
//                     <button
//                       key={tag}
//                       onClick={() => handleTagClick(tag)}
//                       className="inline-block text-xs text-gray-700 bg-gray-200 px-2 py-0.5 rounded hover:bg-gray-300"
//                     >
//                       {tag}
//                     </button>
//                   ))}
//                 </div>
//               </li>
//             ))}
//           </ul>
//         )}

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






import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllPosts } from '../utils/getAllPosts';

export default function Blog() {
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTag, setSelectedTag] = useState(null);

  useEffect(() => {
    const posts = getAllPosts();
    setProjects(posts);
  }, []);

  const projectsPerPage = 5;

  const tagCounts = projects.reduce((acc, project) => {
    (project.tags || []).forEach(tag => {
      acc[tag] = (acc[tag] || 0) + 1;
    });
    return acc;
  }, {});

  const allTags = Object.keys(tagCounts);

  const filteredProjects = selectedTag
    ? projects.filter(post => (post.tags || []).includes(selectedTag))
    : projects;

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const indexOfLastPost = currentPage * projectsPerPage;
  const indexOfFirstPost = indexOfLastPost - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstPost, indexOfLastPost);

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
              All Projects ({projects.length})
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
          {selectedTag ? `Projects tagged "${selectedTag}"` : 'All Projects'}
        </h2>

        {currentProjects.length === 0 ? (
          <p>No projects found{selectedTag ? ` for "${selectedTag}"` : ''}.</p>
        ) : (
          <ul className="space-y-4">
            {currentProjects.map(project => (
              <li key={project.slug} className="border-b border-orange-300 pb-2">
                <Link to={`/projects/${project.slug}`}>
                  <h3 className="text-xl font-semibold text-orange-800 hover:underline">{project.title}</h3>
                </Link>
                <p className="text-sm text-orange-600">{project.date}</p>
                <p className="text-sm">{project.summary}</p>
                <div className="mt-1 space-x-2">
                  {(project.tags || []).map(tag => (
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
