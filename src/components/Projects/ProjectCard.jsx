// components/Projects/ProjectCard.jsx
import { Tag } from "../ui";
import { Link } from "react-router-dom";

const ProjectCard = ({ project, compact = false }) => (
  <Link
    to={`/project/${project.slug}/detail`}
    aria-label={`View details for ${project.title}`}
    className="group rounded-2xl overflow-hidden flex flex-col transition-transform duration-200 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(59,130,246,0.2)" }}
  >
    {/* Thumbnail */}
    <div
      className="w-full h-44 flex items-center justify-center relative"
      style={{ background: "linear-gradient(135deg,#0a1628,#0d1f3c)" }}
    >
      {project.image ? (
        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
      ) : (
        <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12 opacity-20">
          <rect x="6" y="10" width="36" height="28" rx="3" stroke="#94a3b8" strokeWidth="2" />
          <path d="M6 34l10-10 8 8 6-6 12 12" stroke="#94a3b8" strokeWidth="2" strokeLinejoin="round" />
          <circle cx="18" cy="20" r="3" stroke="#94a3b8" strokeWidth="2" />
        </svg>
      )}
      <div className="absolute left-3 top-3 flex flex-wrap gap-2">
        <span className="rounded bg-slate-950/80 px-2 py-0.5 text-xs font-medium text-cyan-200">
          {project.category || (project.type === "experience" ? "Experience" : project.type) || "Web & Digital Project"}
        </span>
        {project.featured && (
          <span className="rounded bg-blue-600 px-2 py-0.5 text-xs font-semibold text-white">Featured</span>
        )}
      </div>
    </div>

    {/* Content */}
    <div className="p-5 flex flex-col gap-2 flex-1">
      <h3 className="text-white font-semibold group-hover:text-blue-300">{project.title}</h3>
      <p className={`text-slate-400 text-sm leading-relaxed flex-1 ${compact ? "line-clamp-3" : ""}`}>{project.summary || project.description}</p>
      <div className="flex flex-wrap gap-2 mt-2">
        {(project.technologies || project.focusAreas || project.skills || project.tags || []).map((tag) => <Tag key={tag} label={tag} />)}
      </div>
      <span className="mt-3 text-xs font-semibold text-blue-400">View details →</span>
    </div>
  </Link>
);

export default ProjectCard;
