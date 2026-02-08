import ProjectCard from "../components/ProjectCard";
// import blogPosts from "../data/blogPosts.json";
import { useMarkdownData } from '../context/MarkdownContext';
import MissingPage from '../components/MissingPage';

export default function ProjectsPage() {
  const projects = useMarkdownData("projects");

  if (projects.length === 0) {
    return <MissingPage pageName='Projects' />;
  }

  return (
    <article className="max-w-4xl mx-auto my-8 grid gap-4 grid-cols-2 my-12">
      <div className="page-background" aria-hidden="true"></div>
      {/* max-w-4xl mx-auto p-8 my-8 bg-gray-50 rounded shadow grid gap-6 grid-cols-2 */}
      {projects.map((project) => {
        // const relatedPosts = blogPosts.filter((post) =>
        //   post.projectSlug === project.slug
        // );

        return <ProjectCard key={project.id} project={project} />;
      })}
    </article>


  );
}
