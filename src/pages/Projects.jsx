import ProjectCard from "../components/ProjectCard";
import { useMarkdownData } from '../hooks/useMarkdownData';
import MissingPage from '../components/MissingPage';
import { usePageMeta } from '../hooks/usePageMeta';

export default function ProjectsPage() {
  const projects = useMarkdownData("projects");

  usePageMeta({ title: 'Projects', path: '/projects' });

  if (projects.length === 0) {
    return <MissingPage pageName='Projects' />;
  }

  return (
    <article className="max-w-4xl mx-auto my-8 grid gap-4 grid-cols-2">
      <div className="page-background" aria-hidden="true"></div>
      {/* max-w-4xl mx-auto p-8 my-8 bg-gray-50 rounded shadow grid gap-6 grid-cols-2 */}
      {projects.map((project) => {
        // const relatedPosts = blogPosts.filter((post) =>
        //   post.projectSlug === project.slug
        // );

        return <ProjectCard key={project.slug} project={project} />;
      })}
    </article>


  );
}
