import ReactMarkdown from 'react-markdown';
import { useMarkdownData } from '../hooks/useMarkdownData';
import { REMARK_PLUGINS, REHYPE_PLUGINS } from '../config/markdownPlugins';
import MissingPage from '../components/MissingPage';
import { usePageMeta } from '../hooks/usePageMeta';
import profilePic from '../assets/20260427_185402.jpg';
import { PROFILE_PIC } from '../config/constants';

export default function About() {
  const MarkdownData = useMarkdownData('config');
  const markdown = MarkdownData.find(p => p.slug === "about");

  usePageMeta({ title: 'About Me', path: '/about' });

  if (!markdown) {
    return <MissingPage pageName='About' />;
  }

  const isCircle = PROFILE_PIC.STYLE === 'circle';

  return (
    <section className="max-w-4xl mx-auto p-8 my-8 bg-surface-raised rounded-sm border border-border-subtle">
      <h2 className="font-display text-4xl font-semibold mb-4 text-text-primary">About Me</h2>
      <article className="prose max-w-none">
        <div
          className={[
            'float-right ml-6 mb-4 overflow-hidden flex-shrink-0',
            isCircle ? 'w-28 h-28 rounded-full' : `${PROFILE_PIC.WIDTH} ${PROFILE_PIC.HEIGHT} rounded-md`,
          ].join(' ')}
        >
          <img
            src={profilePic}
            alt="Profile"
            className={['w-full h-full object-cover', PROFILE_PIC.SCALE].join(' ')}
            style={{ objectPosition: PROFILE_PIC.OBJECT_POSITION }}
          />
        </div>
        <ReactMarkdown
          remarkPlugins={REMARK_PLUGINS}
          rehypePlugins={REHYPE_PLUGINS}
        >
          {markdown.content}
        </ReactMarkdown>
      </article>
    </section>
  );
}
