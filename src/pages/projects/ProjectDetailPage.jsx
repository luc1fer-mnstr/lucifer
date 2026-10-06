import { Link, useParams } from "react-router-dom";
import NotFound from "../NotFound";
import usePortfolioData from "../../hooks/usePortfolioData";
import { Tag } from "../../components/ui";

const DetailSection = ({ title, children }) => (
  <section className="border-t border-white/10 py-8">
    <h2 className="text-lg font-semibold text-white">{title}</h2>
    <div className="mt-3 text-sm leading-7 text-slate-400">{children}</div>
  </section>
);

const detailSectionsFor = (item) => {
  if (item.sections?.length) return item.sections;

  return [
    { title: item.overviewTitle || "Overview", content: item.overview || item.summary || item.description },
    item.challenge && { title: "Challenge", content: item.challenge },
    item.solution && { title: item.approachTitle || "Approach", content: item.solution },
    item.responsibilities && { title: "Responsibilities", content: item.responsibilities },
    item.outcome && { title: "Outcome", content: item.outcome },
  ].filter(Boolean);
};

const DetailContent = ({ content }) => {
  if (Array.isArray(content)) {
    return (
      <ul className="list-disc space-y-2 pl-5 marker:text-blue-400">
        {content.map((entry) => <li key={entry}>{entry}</li>)}
      </ul>
    );
  }
  return content;
};

const ProjectDetailPage = () => {
  const { slug } = useParams();
  const { projectsData } = usePortfolioData();
  const project = projectsData.find((item) => item.slug === slug);

  if (!project) return <NotFound />;

  const sections = detailSectionsFor(project);
  const tags = project.technologies || project.focusAreas || project.skills || project.tags || [];
  const tagHeading = project.tagHeading || (project.technologies ? "Technologies" : "Focus areas");
  const category = project.category || (project.type === "experience" ? "Experience" : "Web & Digital Project");
  const metadata = [
    ["Role", project.role],
    ["Organization", project.organization],
    ["Period", project.period],
    ["Location", project.location],
  ].filter(([, value]) => value);
  const hasSidebar = tags.length > 0 || project.link || project.liveUrl || project.github || project.repoUrl;

  return (
    <article className="mx-auto max-w-5xl px-6 pb-20 pt-10 md:px-16">
      <Link to="/project" className="text-sm text-blue-400 transition hover:text-blue-300">
        ← Back to Work &amp; Impact
      </Link>

      <header className="mb-10 mt-10">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">{category}</p>
        <h1 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
          {project.title}<span className="text-blue-400">.</span>
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-400">
          {project.summary || project.description}
        </p>
      </header>

      <div className="mb-10 flex min-h-56 items-center justify-center overflow-hidden rounded-3xl border border-blue-400/20 bg-gradient-to-br from-blue-950 to-slate-950 md:min-h-96">
        {project.image ? (
          <img src={project.image} alt={project.title} className="h-full max-h-[480px] w-full object-cover" />
        ) : (
          <div className="px-6 py-16 text-center">
            <span className="text-5xl font-bold text-blue-300/40">{project.title.slice(0, 1)}</span>
            <p className="mt-3 text-sm text-slate-500">{category}</p>
          </div>
        )}
      </div>

      <div className={`grid gap-10 ${hasSidebar ? "md:grid-cols-[minmax(0,1fr)_260px]" : "md:grid-cols-1"}`}>
        <div>
          {metadata.length > 0 && (
            <dl className="mb-8 grid gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:grid-cols-2">
              {metadata.map(([label, value]) => (
                <div key={label}>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">{label}</dt>
                  <dd className="mt-1 text-sm text-slate-200">{value}</dd>
                </div>
              ))}
            </dl>
          )}
          {sections.map((section) => (
            <DetailSection key={section.title} title={section.title}>
              <DetailContent content={section.content} />
            </DetailSection>
          ))}
        </div>

        {hasSidebar && <aside className="h-fit rounded-2xl border border-white/10 bg-white/[0.03] p-5 md:mt-8">
          {tags.length > 0 && (
            <>
              <h2 className="text-sm font-semibold text-white">{tagHeading}</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((tag) => <Tag key={tag} label={tag} />)}
              </div>
            </>
          )}
          {(project.link || project.liveUrl || project.github || project.repoUrl) && (
            <div className="mt-6 flex flex-col gap-3 border-t border-white/10 pt-5">
              {(project.link || project.liveUrl) && (
                <a href={project.link || project.liveUrl} target="_blank" rel="noreferrer" className="text-sm text-blue-300 hover:text-white">
                  Live demo ↗
                </a>
              )}
              {(project.github || project.repoUrl) && (
                <a href={project.github || project.repoUrl} target="_blank" rel="noreferrer" className="text-sm text-slate-300 hover:text-white">
                  Source code ↗
                </a>
              )}
            </div>
          )}
        </aside>}
      </div>
    </article>
  );
};

export default ProjectDetailPage;
