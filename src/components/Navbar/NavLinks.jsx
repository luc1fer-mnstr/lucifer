// components/Navbar/NavLinks.jsx
// Renders desktop nav links. Receives activeId from parent
// to highlight the currently visible section.

import { cn } from "../../utils/cn";
import { Link, useLocation } from "react-router-dom";

const NavLinks = ({ links, activeId, onLinkClick }) => {
  const { pathname } = useLocation();
  return <ul className="hidden md:flex items-center gap-7">
    {links.map(({ label, href }) => {
      const id = href.split("#")[1];
      const isActive = id ? pathname === "/" && activeId === id : pathname === href;

      return (
        <li key={label}>
          <Link
            to={href}
            aria-current={isActive ? "location" : undefined}
            onClick={() => onLinkClick?.(label)}
            className={cn(
              "text-sm pb-0.5 transition-colors duration-200 border-b-2",
              isActive
                ? "text-white font-semibold border-blue-500"
                : "text-slate-400 font-normal border-transparent hover:text-white"
            )}
          >
            {label}
          </Link>
        </li>
      );
    })}
  </ul>;
};

export default NavLinks;
