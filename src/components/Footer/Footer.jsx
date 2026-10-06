import { Link, useRouteLoaderData } from "react-router-dom";
import usePortfolioData from "../../hooks/usePortfolioData";

const SOCIALS = [
  {
    key: "github",
    label: "GitHub",
    path: "M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z",
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
];

const Footer = () => {
  const { contactData, heroData } = usePortfolioData();
  const { navLinks } = useRouteLoaderData("root");
  const name = heroData.name || "Portfolio";
  const availableSocials = SOCIALS.filter(({ key }) => {
    const url = heroData.socials?.[key];
    return url && !url.includes("yourusername");
  });
  const quickLinks = navLinks
    .filter(({ label }) => label !== "Contact")
    .slice(0, 6);

  return (
    <footer className="relative isolate overflow-hidden border-t border-white/[0.08] bg-[#030916]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-36 left-1/2 -z-10 h-72 w-[min(80vw,900px)] -translate-x-1/2 rounded-full bg-blue-500/[0.09] blur-[100px]"
      />

      <div className="mx-auto max-w-7xl px-6 py-16 md:px-16 md:py-20">
        <section className="relative overflow-hidden rounded-3xl border border-sky-200/10 bg-gradient-to-br from-white/[0.07] via-white/[0.035] to-blue-400/[0.07] p-8 shadow-2xl shadow-blue-950/20 sm:p-12 md:p-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-24 h-72 w-72 rounded-full border border-sky-200/[0.08] sm:right-10 sm:top-1/2 sm:-translate-y-1/2"
          >
            <div className="absolute inset-8 rounded-full border border-dashed border-sky-200/[0.08]" />
          </div>
          <div className="relative flex flex-col items-start justify-between gap-10 md:flex-row md:items-end md:gap-12">
            <div className="max-w-2xl">
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-200/10 bg-sky-200/[0.06] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-sky-200">
                <span className="h-1.5 w-1.5 rounded-full bg-sky-300 shadow-[0_0_10px_rgba(125,211,252,0.8)]" />
                Let’s connect
              </p>
              <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
                Have an idea in mind?
                <span className="mt-1 block bg-gradient-to-r from-sky-300 to-indigo-300 bg-clip-text text-transparent">
                  Let’s make it real.
                </span>
              </h2>
              <p className="mt-6 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
                I’m always happy to talk about thoughtful projects, useful
                ideas, and new opportunities.
              </p>
            </div>

            <Link
              to="/contact"
              className="group inline-flex shrink-0 items-center gap-3 rounded-xl bg-sky-300 px-5 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-950/30 transition duration-200 hover:-translate-y-0.5 hover:bg-sky-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-200"
            >
              Start a conversation
              <span
                aria-hidden="true"
                className="text-base transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              >
                ↗
              </span>
            </Link>
          </div>
        </section>

        <div className="grid gap-12 border-b border-white/[0.08] py-14 sm:grid-cols-2 md:grid-cols-[1.5fr_1fr_1fr] md:gap-16 md:py-16">
          <div>
            <Link
              to="/"
              className="group inline-flex items-center gap-3 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300"
            >
              <img
                src={heroData.logoUrl}
                alt=""
                className="h-11 w-11 rounded-xl object-cover transition group-hover:brightness-110"
              />
              <span className="text-lg font-bold tracking-tight text-white">
                {name}
              </span>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-7 text-slate-400">
              {heroData.title || "Building useful things for the web."}
            </p>
            {availableSocials.length > 0 && (
              <div className="mt-7 flex items-center gap-3">
                {availableSocials.map(({ key, label, path }) => (
                  <a
                    key={key}
                    href={heroData.socials[key]}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.035] text-slate-400 transition hover:border-sky-300/25 hover:bg-sky-300/[0.08] hover:text-sky-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      className="h-4 w-4"
                      fill="currentColor"
                    >
                      <path d={path} />
                    </svg>
                  </a>
                ))}
              </div>
            )}
          </div>

          <nav aria-label="Footer navigation">
            <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Explore
            </h3>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-4 sm:grid-cols-1">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    to={href}
                    className="text-sm text-slate-400 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              Get in touch
            </h3>
            <div className="space-y-4 text-sm">
              {contactData.email && (
                <a
                  href={`mailto:${contactData.email}`}
                  className="block break-all text-slate-300 transition hover:text-sky-200"
                >
                  {contactData.email}
                </a>
              )}
              {contactData.location && (
                <p className="text-slate-500">{contactData.location}</p>
              )}
              <Link
                to="/contact"
                className="inline-flex items-center gap-1 pt-1 font-medium text-sky-300 transition hover:text-sky-200"
              >
                Contact page <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 pt-8 text-xs text-slate-500 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {name}. All rights reserved.
          </p>
          <a
            href="#main-content"
            className="inline-flex items-center gap-1.5 text-slate-400 transition hover:text-sky-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
          >
            Back to top{" "}
            <span aria-hidden="true" className="text-sky-300">
              ↑
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
