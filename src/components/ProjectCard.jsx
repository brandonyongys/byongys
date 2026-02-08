import { Link } from "react-router-dom";
import { formatDate } from "../utils/formatDate";

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
        <h2 className="text-2xl font-bold mb-2 text-orange-800">{project.title}</h2>
        {project.updated_date !== '' && (
          <p className="text-sm font-semibold text-orange-600 mb-0.5"><i>
            Updated on {formatDate(project.updated_date)}
          </i></p>
        )}
        <p className="text-sm mb-2 text-orange-600">
          Published on {formatDate(project.published_date)}
        </p>
        <p className="text-sm text-gray-700 mt-2">{project.description}</p>


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
