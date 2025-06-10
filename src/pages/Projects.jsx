import { Link } from 'react-router-dom';
import { useState } from 'react';
import { getMarkDown } from '../utils/getMarkdown';

export default function Projects() {
  const projects = getMarkDown('projects'); 

  const projectsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedTag, setSelectedTag] = useState('All');

  const allTags = Array.from(new Set(projects.flatMap(project => project.tags || [])));

  // Filter projects based on selectedTag
  const filteredProjects = selectedTag === 'All'
    ? projects
    : projects.filter(project => project.tags?.includes(selectedTag));

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);

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

      {/* Projects List */}
      <ul className="space-y-4">
        {currentProjects.map(project => (
          <li key={project.slug} className="border-b border-orange-300 pb-2">
            <Link to={`/projects/${project.slug}`}>
              <h3 className="text-xl font-semibold text-orange-800 hover:underline">{project.title}</h3>
            </Link>
            <p className="text-sm text-orange-600">{new Date(project.date).toLocaleDateString('en-GB')}</p>
            <p className="text-sm">{project.summary}</p>
          </li>
        ))}
        {filteredProjects.length === 0 && (
          <p className="text-orange-600">No projects found for this tag.</p>
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




