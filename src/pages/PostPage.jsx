import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import { useMarkdownData } from '../context/MarkdownContext';
import MissingPage from '../components/MissingPage';

export default function PostPage() {
  const { slug } = useParams();
  const posts = useMarkdownData('posts');
  const post = posts.find(p => p.slug === slug);

  if (!post) {
    return <MissingPage pageName='Post' />;
  }

  return (
    <article className="max-w-4xl mx-auto p-8 my-8 bg-gray-50 rounded shadow">
      <div className="page-background" aria-hidden="true"></div>
      <h1 className="text-4xl font-bold mb-3 text-orange-800">{post.title}</h1>
      <p className="text-sm font-semibold text-orange-600 mb-1">{post.description}</p>
      <p className="text-sm text-orange-600 mb-3">
        Published on {new Date(post.date).toLocaleDateString('en-GB', {
          day: '2-digit',
          month: 'short',
          year: 'numeric',
        })}
      </p>
      <hr></hr>
      <div className="prose max-w-none text-gray-700 mt-2">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw, rehypeSanitize]}
        >
          {post.content}
        </ReactMarkdown>
      </div>
    </article>
  );
}
