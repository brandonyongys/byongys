import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <div className="rounded-2xl shadow-lg p-4 bg-white">
      <Link to={`/projects/${project.slug}`}>
        {/* <img src={project.image} alt={project.title} className="rounded-xl" /> */}
        <h2 className="text-xl font-bold mt-2">{project.title}</h2>
        <p className="text-gray-600">{project.description}</p>
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
