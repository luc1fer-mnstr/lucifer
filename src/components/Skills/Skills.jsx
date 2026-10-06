// components/Skills/Skills.jsx
import usePortfolioData from "../../hooks/usePortfolioData";
import { SectionTitle } from "../ui";
import SkillCard        from "./SkillCard";
import { Link } from "react-router-dom";

const Skills = ({ preview = false }) => {
  const { skillsData } = usePortfolioData();
  return skillsData.length > 0 && (
  <section id="skills" className="py-20 px-6 md:px-16 max-w-7xl mx-auto">
    <SectionTitle title="Skills" />
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
      {(preview ? skillsData.slice(0, 5) : skillsData).map((skill) => (
        <SkillCard key={skill.name} skill={skill} />
      ))}
    </div>
    {preview && <Link to="/skills" className="mt-7 inline-flex text-sm font-semibold text-blue-400 hover:text-blue-300">All skills →</Link>}
  </section>
  );
};

export default Skills;
