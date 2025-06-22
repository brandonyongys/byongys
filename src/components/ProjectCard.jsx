import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <div className="relative rounded-2xl shadow-lg p-4 bg-gray-50 overflow-hidden">
      {/* Make the project image as the background, if any */}
      {project.image !== '' && (
        <div
          className="absolute inset-x-0 top-0 h-full bg-top bg-cover opacity-10 pointer-events-none"
          style={{ backgroundImage: `url(${project.image})` }}
        />
      )}

      <Link to={`/projects/${project.slug}`} className="relative">
        <h2 className="text-2xl font-bold mb-4 text-orange-800">{project.title}</h2>
        <p className="text-m text-gray-700 mb-2">{project.description}</p>
        {project.updated_date !== '' && (
          <p className="text-sm">
            Updated on {new Date(project.updated_date).toLocaleDateString('en-GB', {
          day: '2-digit',
          month: 'short',
          year: 'numeric',
        })}
          </p>
        )}
        <p className="text-sm mb-1">
          Published on {new Date(project.published_date).toLocaleDateString('en-GB', {
          day: '2-digit',
          month: 'short',
          year: 'numeric',
        })}
        </p>

      </Link>


      {/* Related Blog Posts
      <div className="mt-3 text-sm">
        <h3 className="font-semibold">Related Posts:</h3>
        <ul className="list-disc list-inside">
          {relatedPosts.map((post) => (
            <li key={post.id}>
              <Link to={`/blog/${post.slug}`} className="text-blue-500 hover:underline">
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </div> */}
    </div>
  );
}
