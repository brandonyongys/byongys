import { useParams } from "react-router-dom";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { useMarkdownData } from '../context/MarkdownContext';
import MissingPage from '../components/MissingPage';

export default function MarkdownPage() {
  const { slug } = useParams();
  const projects = useMarkdownData('projects');
  const project = projects.find((p) => p.slug === slug);

  // const relatedPosts = blogPosts.filter((post) => post.projectSlug === slug);

  if (!project) {
    return <MissingPage pageName='Project' />;
  }

  return (
    <article className="max-w-4xl mx-auto p-8 my-8 bg-gray-50 rounded shadow">
      <div className="page-background" aria-hidden="true"></div>
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
      <div className="prose max-w-none text-gray-700 mt-2">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{project.content}</ReactMarkdown>
      </div>
    </article>
  );
}
