// components/Experience/Experience.jsx
import usePortfolioData from "../../hooks/usePortfolioData";
import { SectionTitle }   from "../ui";
import { Link } from "react-router-dom";

const TimelineItem = ({ item, isLast }) => (
  <div className="flex gap-4">
    <div className="flex flex-col items-center">
      <div className="mt-1 h-3 w-3 flex-shrink-0 rounded-full bg-blue-500 ring-2 ring-blue-400 ring-offset-2 ring-offset-[#020b1a]" />
      {!isLast && <div className="w-px flex-1 mt-1 bg-blue-900/60" />}
    </div>
    <div className="pb-8">
      <div className="flex flex-wrap items-center gap-3 mb-1">
        {(item.status || item.institution) && <span
          className="px-2 py-0.5 rounded text-xs font-semibold text-blue-300"
          style={{ background: "rgba(59,130,246,0.15)", border: "1px solid rgba(59,130,246,0.3)" }}
        >
          {item.status || item.institution}
        </span>}
        <h3 className="text-white font-semibold">{item.degree || item.title}</h3>
        {(item.year || item.period) && <span className="text-slate-500 text-xs ml-auto">{item.year || item.period}</span>}
      </div>
      {item.description && <p className={`text-slate-400 text-sm leading-relaxed ${isLast && item.preview ? "line-clamp-2" : ""}`}>{item.description}</p>}
    </div>
  </div>
);

const Experience = ({ preview = false }) => {
  const { educationData } = usePortfolioData();
  return educationData.length > 0 && (
  <section id="education" className="scroll-mt-24 py-20 px-6 md:px-16 max-w-7xl mx-auto">
    <SectionTitle title="Education" />
    <div className="max-w-2xl">
      {(preview ? educationData.slice(0, 3) : educationData).map((item, i, list) => (
        <TimelineItem key={item.degree || item.title} item={{ ...item, preview }} isLast={i === list.length - 1} />
      ))}
    </div>
    {preview && <Link to="/education" className="mt-2 inline-flex text-sm font-semibold text-blue-400 hover:text-blue-300">Education details →</Link>}
  </section>
  );
};

export default Experience;
