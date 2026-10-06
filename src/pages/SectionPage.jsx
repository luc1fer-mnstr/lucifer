import { Link } from "react-router-dom";

const SectionPage = ({ children }) => (
  <>
    <div className="mx-auto max-w-7xl px-6 pt-10 md:px-16">
      <Link to="/" className="text-sm text-blue-400 hover:text-blue-300">← Back home</Link>
    </div>
    {children}
  </>
);

export default SectionPage;
