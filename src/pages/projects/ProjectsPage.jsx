import { Link } from "react-router-dom";
import Projects from "../../components/Projects/Projects";

const ProjectsPage = () => (
  <>
    <div className="mx-auto max-w-7xl px-6 pt-10 md:px-16">
      <Link to="/" className="text-sm text-blue-400 hover:text-blue-300">← Back home</Link>
      <div className="pt-10">
        <h1 className="text-3xl font-bold text-white md:text-4xl">Work &amp; Impact<span className="text-blue-400">.</span></h1>
        <p className="mt-3 max-w-2xl text-slate-400">A collection of digital projects, professional experience, and community work where I put my skills into practice.</p>
      </div>
    </div>
    <Projects />
  </>
);

export default ProjectsPage;
