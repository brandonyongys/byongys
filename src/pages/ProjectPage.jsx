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
      <h1 className="text-4xl font-bold mb-4 text-orange-800">{project.title}</h1>
      {/* <img src={project.image} alt={project.title} className="rounded-xl mb-4" /> */}
      <p className="text-m font-semibold text-orange-700">{project.description}</p>
      {/* <p className="text-sm font-semibold text-orange-600 mb-6">First created: {new Date(project.date).toLocaleDateString('en-GB')}</p> */}
      <p className="text-sm font-semibold text-orange-600 mb-6">Last updated on {new Date(project.updated_date).toLocaleDateString('en-GB')}</p>
      <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: project.content }} />
    </article>
  );
}
