// components/Testimonials/Testimonials.jsx
import usePortfolioData from "../../hooks/usePortfolioData";
import { SectionTitle }     from "../ui";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

const TestimonialCard = ({ testimonial }) => (
  <div
    className="flex-shrink-0 w-72 p-5 rounded-2xl flex flex-col gap-3"
    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(59,130,246,0.2)" }}
  >
    <span className="text-blue-400 text-3xl leading-none">"</span>
    <p className="text-slate-300 text-sm leading-relaxed flex-1">{testimonial.quote || testimonial.text}</p>
    <div className="flex items-center gap-3 pt-2 border-t border-white/5">
      {testimonial.image ? (
        <img
          src={testimonial.image}
          alt={`${testimonial.name} profile`}
          className="w-9 h-9 rounded-full object-cover flex-shrink-0"
        />
      ) : (
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
          {testimonial.name.charAt(0)}
        </div>
      )}
      <div>
        <p className="text-white text-sm font-semibold">{testimonial.name}</p>
        <p className="text-slate-500 text-xs">{testimonial.role}</p>
      </div>
    </div>
  </div>
);

const Testimonials = ({ preview = false }) => {
  const { testimonialsData } = usePortfolioData();
  const trackRef = useRef(null);

  useEffect(() => {
    if (preview || testimonialsData.length < 2) return undefined;

    const interval = window.setInterval(() => {
      const track = trackRef.current;
      if (!track || track.dataset.paused === "true") return;
      const card = track.querySelector("[data-testimonial-card]");
      if (!card) return;
      const gap = Number.parseFloat(window.getComputedStyle(track).columnGap) || 0;
      const step = card.getBoundingClientRect().width + gap;
      const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 2;
      track.scrollTo({ left: atEnd ? 0 : track.scrollLeft + step, behavior: "smooth" });
    }, 4000);

    return () => window.clearInterval(interval);
  }, [preview]);

  const move = (direction) => {
    const track = trackRef.current;
    const card = track?.querySelector("[data-testimonial-card]");
    if (!track || !card) return;
    const gap = Number.parseFloat(window.getComputedStyle(track).columnGap) || 0;
    track.scrollBy({ left: direction * (card.getBoundingClientRect().width + gap), behavior: "smooth" });
  };

  if (!testimonialsData.length) return null;

  return (
    <section id="testimonials" className="py-20 px-6 md:px-16 max-w-7xl mx-auto">
      <div className="flex items-center justify-between gap-4">
        <SectionTitle title="Testimonials" withEndDot />
        {!preview && testimonialsData.length > 1 && (
          <div className="flex gap-2 pb-6" aria-label="Testimonial controls">
            <button type="button" onClick={() => move(-1)} aria-label="Previous testimonials" className="h-10 w-10 rounded-full border border-blue-400/30 text-blue-300 hover:bg-blue-500/15 transition-colors">←</button>
            <button type="button" onClick={() => move(1)} aria-label="Next testimonials" className="h-10 w-10 rounded-full border border-blue-400/30 text-blue-300 hover:bg-blue-500/15 transition-colors">→</button>
          </div>
        )}
      </div>
      <div
        ref={trackRef}
        className={`flex gap-5 overflow-x-auto pb-3 scrollbar-hide ${preview ? "" : "testimonial-carousel"}`}
        onMouseEnter={(event) => { if (!preview) event.currentTarget.dataset.paused = "true"; }}
        onMouseLeave={(event) => { if (!preview) delete event.currentTarget.dataset.paused; }}
        onFocus={(event) => { if (!preview) event.currentTarget.dataset.paused = "true"; }}
        onBlur={(event) => { if (!preview) delete event.currentTarget.dataset.paused; }}
        aria-label="Testimonials"
      >
        {(preview ? testimonialsData.slice(0, 3) : testimonialsData).map((t, i) => (
          <div data-testimonial-card key={i} className={preview ? "flex-shrink-0 w-72" : "testimonial-slide"}>
            <TestimonialCard testimonial={t} />
          </div>
        ))}
      </div>
      {preview && <Link to="/testimonials" className="mt-7 inline-flex text-sm font-semibold text-blue-400 hover:text-blue-300">All testimonials →</Link>}
    </section>
  );
};

export default Testimonials;
