// This page is used to display the project page

import { useParams } from 'react-router-dom';
import { getMarkDown } from '../utils/getMarkdown';

export default function ProjectPage() {
  const { slug } = useParams();
  const projects = getMarkDown('projects');
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <article className="max-w-3xl mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <p className="text-sm text-gray-500 mb-6">{new Date(project.date).toLocaleDateString('en-GB')}</p>
      <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: project.content }} />
    </article>
  );
}
