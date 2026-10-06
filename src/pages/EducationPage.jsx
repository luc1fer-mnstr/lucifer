import { Link } from "react-router-dom";
import usePortfolioData from "../hooks/usePortfolioData";
import educationPhoto from "../assets/education.jpg";

const EducationPage = () => {
  const { educationData } = usePortfolioData();
  return (
  <main className="mx-auto max-w-7xl px-6 pb-20 pt-10 md:px-16">
    <Link
      to="/"
      className="text-sm text-blue-400 transition hover:text-blue-300"
    >
      ← Back home
    </Link>

    <header className="mb-12 mt-10 max-w-2xl">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-cyan-300">
        Learning journey
      </p>
      <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
        Education <span className="text-blue-400">& Growth</span>
      </h1>
      <p className="mt-4 text-base leading-relaxed text-slate-400">
        A collection of the studies and training that continue to shape my work
        in technology.
      </p>
    </header>

    <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(300px,0.78fr)] lg:gap-16">
      <section
        aria-label="Education history"
        className="rounded-3xl border border-white/10 bg-slate-950/50 p-6 sm:p-8"
      >
        <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-5">
          <h2 className="text-lg font-semibold text-white">
            Academic background
          </h2>
          <span className="rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-xs font-medium text-blue-200">
            {educationData.length} entries
          </span>
        </div>
        <div className="max-w-2xl">
          {educationData.map((item, index) => (
            <article key={item.degree || item.title} className="flex gap-4">
              <div className="flex flex-col items-center">
                <span className="mt-1 h-3 w-3 shrink-0 rounded-full bg-blue-400 ring-4 ring-blue-400/10" />
                {index < educationData.length - 1 && (
                  <span className="mt-2 w-px flex-1 bg-gradient-to-b from-blue-400/50 to-slate-700/30" />
                )}
              </div>
              <div className="pb-8">
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  {(item.year || item.period) && (
                    <span className="inline-flex rounded-full border border-cyan-300/25 bg-cyan-300/10 px-2.5 py-1 text-xs font-semibold tracking-wide text-cyan-200">
                      {item.year || item.period}
                    </span>
                  )}
                  {(item.institution || item.status) && (
                    <span className="text-xs text-slate-400">
                      {item.institution || item.status}
                    </span>
                  )}
                </div>
                <h3 className="font-semibold leading-snug text-white">
                  {item.degree || item.title}
                </h3>
                {item.description && (
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {item.description}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <aside className="relative overflow-hidden rounded-3xl border border-blue-300/15 bg-gradient-to-br from-blue-950/70 via-slate-950 to-slate-950 lg:sticky lg:top-28">
        <div
          aria-hidden="true"
          className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl"
        />
        <div className="relative flex min-h-[380px] flex-col items-center justify-end px-6 pt-8 sm:min-h-[460px]">
          <div className="absolute left-6 top-7 z-20 max-w-[190px]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-200/70">
              Curiosity in motion
            </p>
            <p className="mt-2 text-xl font-semibold leading-snug text-white">
              Always learning, always building.
            </p>
          </div>
          <img
            src={educationPhoto}
            alt="Wai Yan Min wearing graduation attire"
            className="relative z-10 max-h-[430px] w-full object-contain object-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.45)]"
          />
        </div>
        <div className="relative border-t border-white/10 px-6 py-4 text-sm text-slate-400">
          From foundational studies to modern web development.
        </div>
      </aside>
    </div>
  </main>
  );
};

export default EducationPage;
