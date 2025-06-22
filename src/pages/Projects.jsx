import ProjectCard from "../components/ProjectCard";
// import blogPosts from "../data/blogPosts.json";
import { getMarkDown } from '../utils/getMarkdown';
import MissingPage from '../components/MissingPage';

export default function ProjectsPage() {
  const projects = getMarkDown("projects")
  console.log("projects", projects)

  if (projects.length === 0){
    return <MissingPage pageName='Projects' />;
  }

  return (
    // <section className="max-w-4xl mx-auto p-8 my-8 bg-gray-50 rounded shadow">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 p-4">
        {projects.map((project) => {
          // const relatedPosts = blogPosts.filter((post) =>
          //   post.projectSlug === project.slug
          // );

          return <ProjectCard key={project.id} project={project} />;
        })}
      </div>
    // </section>


  );
}
