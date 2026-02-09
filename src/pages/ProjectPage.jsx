import { useParams } from "react-router-dom";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import { useMarkdownData } from '../hooks/useMarkdownData';
import { formatDate } from '../utils/formatDate';
import MissingPage from '../components/MissingPage';

export default function ProjectPostPage() {
  const { slug } = useParams();
  const projects = useMarkdownData('projects');
  const project = projects.find((p) => p.slug === slug);

  // const relatedPosts = blogPosts.filter((post) => post.projectSlug === slug);

  if (!project) {
    return <MissingPage pageName='Project' />;
  }

  return (
    <article className="max-w-4xl mx-auto p-8 my-8 bg-gray-custom-bg rounded shadow">
      <div className="page-background" aria-hidden="true"></div>
      <h1 className="text-4xl font-bold mb-3 text-brand-text-main">{project.title}</h1>
      {/* <p className="text-m font-semibold text-brand-text-accent mb-3">{project.description}</p> */}
      {
        project.updated_date !== '' && (
          <p className="text-sm font-semibold text-brand-text-muted mb-1"><i>
            Updated on {formatDate(project.updated_date)}
          </i></p>
        )}
      <p className="text-sm text-brand-text-muted mb-3">
        Published on {formatDate(project.published_date)}
      </p>
      <hr></hr>
      <div className="prose max-w-none text-gray-700 mt-2">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw, rehypeSanitize]}
        >
          {project.content}
        </ReactMarkdown>
      </div>
    </article>
  );
}
