import ProjectCard from "../components/ProjectCard";
// import blogPosts from "../data/blogPosts.json";
import { getMarkDown } from '../utils/getMarkdown';
import MissingPage from '../components/MissingPage';

export default function ProjectsPage() {
  const projects = getMarkDown("projects")

  if (projects.length === 0){
    return <MissingPage pageName='Projects' />;
  }

  return (
    <article className="max-w-4xl mx-auto my-4 grid gap-3 grid-cols-2 my-12">
      
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
