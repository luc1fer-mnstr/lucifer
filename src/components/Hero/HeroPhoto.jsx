// components/Hero/HeroPhoto.jsx
// Transparent portrait composition for the hero banner.
import usePortfolioData from "../../hooks/usePortfolioData";
import localPortrait from "../../assets/profile.png";

const HeroPhoto = ({ src, alt }) => {
  const { heroData } = usePortfolioData();
  return (
  <div className="relative z-10 flex w-full flex-1 items-end justify-center self-stretch md:min-h-[560px]">
    {/* Soft halo and orbit lines sit behind the transparent portrait. */}
    <div
      aria-hidden="true"
      className="hero-photo-halo absolute bottom-[13%] left-1/2 aspect-square w-[min(76vw,410px)] -translate-x-1/2 rounded-full border border-sky-300/15 bg-[radial-gradient(circle_at_50%_42%,rgba(56,189,248,0.2),rgba(37,99,235,0.1)_43%,rgba(2,11,26,0)_72%)] shadow-[0_0_100px_rgba(37,99,235,0.16)]"
    >
      <div className="absolute inset-[7%] rounded-full border border-dashed border-blue-300/15" />
      <div className="absolute -right-2 top-[22%] h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.9)]" />
      <div className="absolute -left-1 bottom-[28%] h-1.5 w-1.5 rounded-full bg-blue-300 shadow-[0_0_14px_rgba(147,197,253,0.9)]" />
    </div>

    <div aria-hidden="true" className="hero-photo-glow absolute bottom-[9%] left-1/2 h-10 w-[min(78vw,440px)] -translate-x-1/2 rounded-[50%] bg-blue-500/25 blur-2xl" />

    <img
      src={src || heroData.photoUrl || localPortrait}
      alt={alt || `Portrait of ${heroData.name || "the portfolio owner"}`}
      fetchPriority="high"
      className="hero-portrait relative z-10 block h-auto w-[min(100vw,650px)] object-contain drop-shadow-[0_24px_48px_rgba(0,0,0,0.48)]"
    />
  </div>
  );
};

export default HeroPhoto;
