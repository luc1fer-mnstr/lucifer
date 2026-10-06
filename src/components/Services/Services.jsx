import usePortfolioData from "../../hooks/usePortfolioData";
import { SectionTitle } from "../ui";
import { Link } from "react-router-dom";

const Services = ({ preview = false }) => {
  const { servicesData } = usePortfolioData();
  return servicesData.length > 0 && (
  <section id="services" className="mx-auto max-w-7xl scroll-mt-24 px-6 py-20 md:px-16">
    <SectionTitle title="What I can help with" />
    <div className="grid gap-4 sm:grid-cols-2">
      {(preview ? servicesData.slice(0, 2) : servicesData).map((service) => (
        <article key={service.title} className="rounded-xl border border-blue-400/15 bg-white/[0.03] p-5">
          <h3 className="mb-2 font-semibold text-white">{service.title}</h3>
          <p className="text-sm leading-relaxed text-slate-400">{service.description}</p>
        </article>
      ))}
    </div>
    {preview && <Link to="/services" className="mt-7 inline-flex text-sm font-semibold text-blue-400 hover:text-blue-300">All services →</Link>}
  </section>
  );
};

export default Services;
