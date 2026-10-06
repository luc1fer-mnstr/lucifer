// components/Projects/Projects.jsx
import usePortfolioData from "../../hooks/usePortfolioData";
import { SectionTitle } from "../ui";
import ProjectCard      from "./ProjectCard";
import { Link } from "react-router-dom";

const Projects = ({ preview = false }) => {
  const { projectsData } = usePortfolioData();
  return projectsData.length > 0 && (
  <section id="projects" className="py-20 px-6 md:px-16 max-w-7xl mx-auto">
    <SectionTitle
      title={preview ? "Featured Projects" : "Selected Work & Experience"}
      withEndDot
    />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {(preview ? projectsData.slice(0, 3) : projectsData).map((project) => (
        <ProjectCard key={project.slug} project={project} compact={preview} />
      ))}
    </div>
    {preview && <Link to="/project" className="mt-8 inline-flex text-sm font-semibold text-blue-400 hover:text-blue-300">All work &amp; impact →</Link>}
  </section>
  );
};

export default Projects;
