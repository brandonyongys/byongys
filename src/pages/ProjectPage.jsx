// This page is used to display the project page

import { useParams } from 'react-router-dom';
// import { getAllPosts } from '../utils/posts';

export default function ProjectPage() {
  const { slug } = useParams();
//   const projects = getAllProjects();
  const projects = [
    { slug: 'aws-deployment', title: 'PROJECT a React App with Vercel', date: '2025-06-01', summary: 'test summary', content: 'THIS A TEST CONTENT HELLOW!' },
    { slug: 'aws-lambda', title: 'PROJECT AWS Lambda for Automation', date: '2025-05-22' },
    { slug: 'llms-healthcare', title: 'PROJECT in Healthcare: What Works', date: '2025-05-15' },
    { slug: 'testing-123', title: 'PROJECT3423 ', date: '2025-04-15' },
    { slug: 'random-4234', title: 'PROJECT 12', date: '2025-03-15' },
    { slug: 'llmserw', title: 'PROJECT', date: '2025-02-15' },
    { slug: 'llms-dsfg', title: 'PROJECTs dsfg Works', date: '2025-01-15' },
    { slug: 'llms-healthcare-old', title: 'PROJECT in Healthcare: What Works', date: '2024-05-15' },
  ];
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <article className="max-w-3xl mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <p className="text-sm text-gray-500 mb-6">{new Date(project.date).toLocaleDateString()}</p>
      <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: project.content }} />
    </article>
  );
}
