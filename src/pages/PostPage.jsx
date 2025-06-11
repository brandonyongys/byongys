import { useParams } from 'react-router-dom';
import { getMarkDown } from '../utils/getMarkdown';

export default function PostPage() {
  const { slug } = useParams();
  const posts = getMarkDown('posts');
  const post = posts.find(p => p.slug === slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <article className="max-w-3xl mx-auto p-8 my-8 bg-gray-50 rounded shadow">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-6">{new Date(post.date).toLocaleDateString('en-GB')}</p>
      <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
}
