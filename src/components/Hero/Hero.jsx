// components/Hero/Hero.jsx
// Assembles HeroText (left) + HeroPhoto (right) into the full
// banner section with background glow and dot grid decoration.

import HeroText  from "./HeroText";
import HeroPhoto from "./HeroPhoto";

const Hero = () => (
  <section
    id="home"
    className="relative min-h-[calc(100svh-4rem)] flex items-center overflow-hidden scroll-mt-16"
    style={{
      background: "linear-gradient(135deg,#020b1a 0%,#040f24 50%,#080d2e 100%)",
    }}
  >
    {/* Background radial glows */}
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <div
        className="absolute top-1/4 right-1/3 w-96 h-96 rounded-full"
        style={{ background: "radial-gradient(circle,rgba(59,130,246,0.15) 0%,transparent 70%)" }}
      />
      <div
        className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full"
        style={{ background: "radial-gradient(circle,rgba(99,102,241,0.1) 0%,transparent 70%)" }}
      />
    </div>

    {/* Dot grid decoration */}
    <div
      className="absolute top-16 right-8 grid gap-2 opacity-20 pointer-events-none"
      style={{ gridTemplateColumns: "repeat(6,1fr)" }}
      aria-hidden="true"
    >
      {Array.from({ length: 36 }).map((_, i) => (
        <div key={i} className="w-1 h-1 rounded-full bg-blue-400" />
      ))}
    </div>

    {/* Main content */}
    <div className="w-full max-w-7xl mx-auto px-6 md:px-16 flex min-h-[calc(100svh-4rem)] flex-col md:flex-row items-center justify-between gap-12">
      <HeroText />
      <HeroPhoto />
    </div>
  </section>
);

export default Hero;
