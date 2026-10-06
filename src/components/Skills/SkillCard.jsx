const SkillCard = ({ skill }) => (
  <div className="flex flex-col items-center gap-3 rounded-xl border border-blue-400/20 bg-white/[0.04] p-5 text-center transition-transform hover:-translate-y-1">
    {skill.icon && (
      <span className="flex h-14 w-14 items-center justify-center rounded-xl text-2xl font-bold" style={{ color: skill.color || "#93c5fd", background: `${skill.color || "#3b82f6"}22` }} aria-hidden="true">
        {skill.icon}
      </span>
    )}
    <span className="text-sm font-semibold text-white">{skill.name}</span>
    {skill.level && <span className="text-xs text-slate-400">{skill.level}</span>}
  </div>
);

export default SkillCard;
