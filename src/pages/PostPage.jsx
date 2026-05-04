import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { useMarkdownData } from '../hooks/useMarkdownData';
import { formatDate } from '../utils/formatDate';
import MissingPage from '../components/MissingPage';
import LoadingSpinner from '../components/LoadingSpinner';
import { REMARK_PLUGINS, REHYPE_PLUGINS } from '../config/markdownPlugins';
import { usePageMeta } from '../hooks/usePageMeta';

export default function PostPage() {
  const { slug } = useParams();
  const posts = useMarkdownData('posts');
  const post = posts?.find(p => p.slug === slug);

  usePageMeta({
    title: post?.title,
    description: post?.description,
    path: post ? `/posts/${slug}` : '/posts',
  });

  if (!posts) {
    return <LoadingSpinner />;
  }

  if (!post) {
    return <MissingPage pageName='Post' />;
  }

  return (
    <article className="max-w-4xl mx-auto p-8 my-8 bg-gray-custom-bg rounded shadow">
      <div className="page-background" aria-hidden="true"></div>
      <h1 className="text-4xl font-bold mb-3 text-brand-text-main">{post.title}</h1>
      <p className="text-sm font-semibold text-brand-text-muted mb-1">{post.description}</p>
      <p className="text-sm text-brand-text-muted mb-3">
        Published on {formatDate(post.date)}
      </p>
      <hr></hr>
      <div className="prose max-w-none text-gray-700 mt-2">
        <ReactMarkdown
          remarkPlugins={REMARK_PLUGINS}
          rehypePlugins={REHYPE_PLUGINS}
        >
          {post.content}
        </ReactMarkdown>
      </div>
    </article>
  );
}
