// components/Hero/HeroText.jsx
// Left side of hero — greeting, name, title, description,
// CTA buttons, and social links.

import usePortfolioData from "../../hooks/usePortfolioData";
import { useEffect, useState } from "react";

const SOCIALS = [
  {
    key: "github",
    label: "GitHub",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    key: "twitter",
    label: "Twitter",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M23.953 4.57a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.06a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.936 4.936 0 0 0 4.604 3.417 9.867 9.867 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0 0 24 4.59z" />
      </svg>
    ),
  },
  {
    key: "instagram",
    label: "Instagram",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
];

const HeroText = () => {
  const { heroData, projectsData } = usePortfolioData();
  const names = ["Wai Yan Min", "Lucifer"];
  const [nameIndex, setNameIndex] = useState(0);
  const [typedTitle, setTypedTitle] = useState("");
  const [deletingTitle, setDeletingTitle] = useState(false);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motion.matches) return;
    const timer = window.setInterval(() => setNameIndex((index) => (index + 1) % names.length), 3200);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const fullTitle = "Frontend Developer & IT Specialist";
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motion.matches) {
      setTypedTitle(fullTitle);
      return;
    }
    if (!deletingTitle && typedTitle === fullTitle) {
      const timer = window.setTimeout(() => setDeletingTitle(true), 1500);
      return () => window.clearTimeout(timer);
    }
    if (deletingTitle && typedTitle === "") {
      const timer = window.setTimeout(() => setDeletingTitle(false), 450);
      return () => window.clearTimeout(timer);
    }
    const timer = window.setTimeout(() => {
      setTypedTitle((value) => deletingTitle ? value.slice(0, -1) : fullTitle.slice(0, value.length + 1));
    }, deletingTitle ? 42 : 82);
    return () => window.clearTimeout(timer);
  }, [typedTitle, deletingTitle]);

  return (
    <div className="z-10 max-w-xl">
      {/* Greeting badge */}
      <div
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-slate-300 text-sm mb-5"
        style={{
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        👋 Hi, I'm
      </div>

      {/* Name */}
      <h1
        className="text-white font-extrabold leading-tight mb-2"
        style={{ fontSize: "clamp(3rem,6vw,5rem)", letterSpacing: "-1px" }}
      >
        <span key={names[nameIndex]} className="hero-name-swap">{names[nameIndex]}</span>
      </h1>

      {/* Animated title with gradient */}
      <h2
        className="font-bold mb-5"
        style={{
          fontSize: "clamp(1.5rem,2.7vw,2.2rem)",
          background: "linear-gradient(90deg,#3b82f6,#818cf8)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          letterSpacing: "-0.5px",
        }}
      >
        <span className="hero-typing" aria-label="Frontend Developer & IT Specialist">{typedTitle}</span>
      </h2>

      {/* Description */}
      {heroData.description && (
        <p className="text-slate-400 text-base leading-relaxed mb-8 max-w-sm">
          {heroData.description}
        </p>
      )}

      {/* CTA Buttons */}
      <div className="flex flex-wrap items-center gap-4 mb-10">
        {projectsData.length > 0 && (
          <a
            href="/project"
            className="flex items-center gap-2 px-6 py-3 rounded-lg text-white font-semibold text-sm transition-transform hover:scale-105"
            style={{
              background: "linear-gradient(135deg,#2563eb,#3b82f6)",
              boxShadow: "0 0 30px rgba(59,130,246,0.4)",
            }}
          >
            View My Work →
          </a>
        )}
        {heroData.cvLink && (
          <a
            href={heroData.cvLink}
            download
            className="rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-slate-300 transition-colors hover:text-white"
          >
            Download CV ↓
          </a>
        )}
        <a
          href="/contact"
          className="flex items-center gap-2 px-6 py-3 rounded-lg text-slate-300 font-medium text-sm transition-colors hover:text-white hover:border-blue-500"
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.15)",
          }}
        >
          💬 Contact Me
        </a>
      </div>

      {/* Social Links */}
      <div className="flex items-center gap-3">
        {Object.values(heroData.socials).some(Boolean) && (
          <span className="text-slate-500 text-sm">Follow me on</span>
        )}
        {SOCIALS.filter(({ key }) => heroData.socials[key]).map(
          ({ key, label, svg }) => (
            <a
              key={key}
              href={heroData.socials[key]}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="w-9 h-9 flex items-center justify-center rounded-lg text-slate-400 hover:text-white transition-colors"
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              {svg}
            </a>
          ),
        )}
      </div>
    </div>
  );
};

export default HeroText;
