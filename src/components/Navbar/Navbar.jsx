// components/Navbar/Navbar.jsx
// Fixed navbar — uses useScrollTop for blur effect on scroll
// and useScrollSpy to highlight the active section link.

import { useState } from "react";
import { useRouteLoaderData } from "react-router-dom";
import useScrollTop  from "../../hooks/useScrollTop";
import useScrollSpy  from "../../hooks/useScrollSpy";
import NavLinks      from "./NavLinks";
import MobileMenu    from "./MobileMenu";
import { cn }        from "../../utils/cn";

// Extract section IDs from nav links (strips the "#")
const Navbar = () => {
  const { portfolio: { data }, navLinks } = useRouteLoaderData("root");
  const sectionIds = navLinks.filter(({ href }) => href.includes("#")).map(({ href }) => href.split("#")[1]);
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled  = useScrollTop(20);
  const activeId  = useScrollSpy(sectionIds);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 transition-all duration-300",
        scrolled
          ? "backdrop-blur-md shadow-lg shadow-black/30"
          : "backdrop-blur-none"
      )}
      style={{
        background: scrolled ? "rgba(2,11,26,0.92)" : "rgba(2,11,26,0.7)",
        borderBottom: "1px solid rgba(59,130,246,0.15)",
      }}
    >
      {/* Logo */}
      <a href="/" className="flex items-center gap-2 select-none">
        <img src={data.heroData.logoUrl} alt="" className="h-9 w-9 rounded-lg object-cover" />
        <span className="text-white text-xl font-bold tracking-tight">{data.heroData.name || "Portfolio"}</span>
      </a>

      {/* Desktop nav links */}
      <NavLinks
        links={navLinks}
        activeId={activeId}
        onLinkClick={() => setMenuOpen(false)}
      />

      {/* Mobile hamburger */}
      <button
        className="md:hidden text-slate-300 hover:text-white text-xl transition-colors"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* Mobile menu dropdown */}
      <MobileMenu
        links={navLinks}
        isOpen={menuOpen}
        activeId={activeId}
        onClose={() => setMenuOpen(false)}
      />
    </nav>
  );
};

export default Navbar;
