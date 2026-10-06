import usePortfolioData from "../../hooks/usePortfolioData";
import localPortrait from "../../assets/profile.png";
import { SectionTitle } from "../ui";
import { Link } from "react-router-dom";

const About = ({ preview = false }) => {
  const { aboutData, heroData } = usePortfolioData();
  if (!aboutData.paragraphs.length) return null;

  if (preview) {
    return (
      <section id="about" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-20 md:px-16">
        <SectionTitle title={aboutData.heading} withEndDot />
        <div className="max-w-3xl space-y-4 text-base leading-relaxed text-slate-300">
          {aboutData.paragraphs.slice(0, 1).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <Link to="/about" className="mt-6 inline-flex text-sm font-semibold text-blue-400 hover:text-blue-300">More about me →</Link>
      </section>
    );
  }

  return (
    <section id="about" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-12 md:px-16 md:py-16">
      <SectionTitle title={aboutData.heading} withEndDot />
      <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(300px,0.85fr)] lg:gap-12">
        <article className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#0b1930] to-[#071225] p-6 sm:p-8 md:p-10">
          <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
          <p className="relative mb-7 text-xs font-semibold uppercase tracking-[0.24em] text-sky-300">My story <span className="text-slate-600">/</span> 01</p>
          <div className="relative space-y-6 text-[15px] leading-7 text-slate-300 md:text-base">
            {aboutData.paragraphs.map((paragraph, index) => (
              <p key={`${index}-${paragraph.slice(0, 32)}`} className={index === 0 ? "text-lg leading-8 text-white md:text-xl" : undefined}>
                {paragraph}
              </p>
            ))}
          </div>
        </article>

        <aside className="relative lg:sticky lg:top-28">
          <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-cyan-300/20 via-blue-500/10 to-indigo-500/20 blur-xl" aria-hidden="true" />
          <figure className="relative isolate overflow-hidden rounded-[1.75rem] border border-sky-200/15 bg-[#08162b]">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_34%,rgba(56,189,248,0.2),transparent_55%),linear-gradient(155deg,rgba(30,64,175,0.12),transparent_58%)]" aria-hidden="true" />
            <div className="absolute -right-20 top-12 h-64 w-64 rounded-full border border-white/[0.07]" aria-hidden="true" />
            <div className="absolute -right-10 top-24 h-44 w-44 rounded-full border border-dashed border-sky-200/10" aria-hidden="true" />
            <img
              src={aboutData.photoUrl || heroData.photoUrl || localPortrait}
              alt={`Portrait of ${heroData.name || "the portfolio owner"} working at a laptop`}
              className="relative z-10 block h-[420px] w-full object-cover object-[center_62%] sm:h-[500px]"
            />
            <figcaption className="relative z-20 -mt-2 border-t border-white/10 bg-slate-950/60 px-6 py-5 backdrop-blur-md sm:px-7">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">Curiosity in practice</p>
              <p className="mt-1 text-sm text-slate-300">Learning, building, and supporting the people around me.</p>
            </figcaption>
          </figure>
          <div className="relative mt-4 grid grid-cols-2 gap-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
              <p className="text-xs uppercase tracking-wider text-slate-500">Focus</p>
              <p className="mt-1 text-sm font-medium text-white">Web &amp; IT</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
              <p className="text-xs uppercase tracking-wider text-slate-500">Based in</p>
              <p className="mt-1 text-sm font-medium text-white">Myanmar</p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default About;
