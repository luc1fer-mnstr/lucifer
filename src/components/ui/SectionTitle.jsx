const SectionTitle = ({ title, withEndDot = false, action }) => (
  <div className="mb-10 flex items-end justify-between gap-4">
    <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
      {title}{withEndDot && <span className="text-blue-400">.</span>}
    </h2>
    {action}
  </div>
);

export default SectionTitle;
