import { useParams } from "react-router-dom";
import ReactMarkdown from 'react-markdown';
import { useMarkdownData } from '../hooks/useMarkdownData';
import { REMARK_PLUGINS, REHYPE_PLUGINS } from '../config/markdownPlugins';
import { formatDate } from '../utils/formatDate';
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
    <article className="max-w-4xl mx-auto p-8 my-8 bg-surface-raised rounded-sm border border-border-subtle">
      <h1 className="font-display text-4xl font-semibold mb-3 text-text-primary">{project.title}</h1>
      {project.updated_date !== '' && (
        <p className="font-mono text-xs text-text-muted mb-1">Updated {formatDate(project.updated_date)}</p>
      )}
      <p className="font-mono text-xs text-text-muted mb-3">
        Published {formatDate(project.published_date)}
      </p>
      <hr></hr>
      <div className="prose max-w-none mt-2">
        <ReactMarkdown
          remarkPlugins={REMARK_PLUGINS}
          rehypePlugins={REHYPE_PLUGINS}
        >
          {project.content}
        </ReactMarkdown>
      </div>
    </article>
  );
}
