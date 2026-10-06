// hooks/useScrollSpy.js
// Tracks which section is currently visible in the viewport.
// Used by Navbar to highlight the active nav link on scroll.

import { useEffect, useState } from "react";

const useScrollSpy = (sectionIds = [], offset = 80) => {
  const [activeId, setActiveId] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      {
        rootMargin: `-${offset}px 0px -40% 0px`,
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds, offset]);

  return activeId;
};

export default useScrollSpy;
