import { useParams } from "react-router-dom";
import { getMarkDown } from '../utils/getMarkdown';
import MissingPage from '../components/MissingPage'

export default function ProjectPostPage() {
  const { slug } = useParams();
  const projects = getMarkDown('projects')
  const project = projects.find((p) => p.slug === slug);

  // const relatedPosts = blogPosts.filter((post) => post.projectSlug === slug);

  if (!project) {
    return <MissingPage pageName='Project' />;
  }

  return (
    <article className="max-w-3xl mx-auto p-8 my-8 bg-gray-50 rounded shadow">
      <h1 className="text-4xl font-bold mb-3 text-orange-800">{project.title}</h1>
      {/* <p className="text-m font-semibold text-orange-700 mb-3">{project.description}</p> */}
      {
        project.updated_date !== '' && (
        <p className="text-sm font-semibold text-orange-600 mb-1"><i>
        Updated on {new Date(project.updated_date).toLocaleDateString('en-GB', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
          })}
        </i></p>
      )}
      <p className="text-sm text-orange-600 mb-3">
        Published on {new Date(project.published_date).toLocaleDateString('en-GB', {
          day: '2-digit',
          month: 'short',
          year: 'numeric',
        })}
      </p>
      <hr></hr>
      <div className="prose max-w-none mt-2" dangerouslySetInnerHTML={{ __html: project.content }} />
    </article>
  );
}
