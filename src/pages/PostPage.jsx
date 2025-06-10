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
import { getAllPosts } from '../utils/getAllPosts';

export default function PostPage() {
  const { slug } = useParams();
  const posts = getAllPosts();
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
