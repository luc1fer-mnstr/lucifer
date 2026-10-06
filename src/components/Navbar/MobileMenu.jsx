// components/Navbar/MobileMenu.jsx
// Slide-down mobile menu shown when hamburger is toggled.

import { cn } from "../../utils/cn";
import { Link, useLocation } from "react-router-dom";

const MobileMenu = ({ links, isOpen, activeId, onClose }) => {
  const { pathname } = useLocation();
  if (!isOpen) return null;

  return (
    <div
      id="mobile-navigation"
      className="absolute top-full left-0 right-0 flex flex-col items-center gap-5 py-7 md:hidden"
      style={{
        background: "rgba(2,11,26,0.98)",
        borderBottom: "1px solid rgba(59,130,246,0.15)",
        backdropFilter: "blur(12px)",
      }}
    >
      {links.map(({ label, href }) => {
        const id = href.split("#")[1];
        const isActive = id ? pathname === "/" && activeId === id : pathname === href;

        return (
          <Link
            key={label}
            to={href}
            aria-current={isActive ? "location" : undefined}
            onClick={onClose}
            className={cn(
              "text-sm transition-colors",
              isActive ? "text-white font-semibold" : "text-slate-400 hover:text-white"
            )}
          >
            {label}
          </Link>
        );
      })}

    </div>
  );
};

export default MobileMenu;
