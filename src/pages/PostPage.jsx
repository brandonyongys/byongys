// import { useParams } from 'react-router-dom';

// export default function Post() {
//   const { slug } = useParams();

//   return (
//     <div className="max-w-3xl mx-auto py-8">
//       <h1 className="text-3xl font-bold mb-4">Post: {slug}</h1>
//       {/* Render content here */}
//     </div>
//   );
// }


// This page is used to display the post page

import { useParams } from 'react-router-dom';
// import { getAllPosts } from '../utils/posts';

export default function PostPage() {
  const { slug } = useParams();
//   const posts = getAllPosts();
  const posts = [
    { slug: 'aws-deployment', title: 'Deploying a React App with Vercel', date: '2025-06-01', summary: 'test summary', content: 'THIS A TEST CONTENT HELLOW!' },
    { slug: 'aws-lambda', title: 'Using AWS Lambda for Automation', date: '2025-05-22' },
    { slug: 'llms-healthcare', title: 'LLMs in Healthcare: What Works', date: '2025-05-15' },
    { slug: 'testing-123', title: '123', date: '2025-04-15' },
    { slug: 'random-4234', title: '4234', date: '2025-03-15' },
    { slug: 'llmserw', title: 'LLMserw', date: '2025-02-15' },
    { slug: 'llms-dsfg', title: 'LLMs dsfg Works', date: '2025-01-15' },
    { slug: 'llms-healthcare-old', title: 'LLMs in Healthcare: What Works', date: '2024-05-15' },
  ];
  const post = posts.find(p => p.slug === slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <article className="max-w-3xl mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-6">{new Date(post.date).toLocaleDateString()}</p>
      <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
}
