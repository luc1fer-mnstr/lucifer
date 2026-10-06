// hooks/useScrollTop.js
// Returns true when user has scrolled past a given threshold.
// Used by Navbar to apply background blur on scroll.

import { useEffect, useState } from "react";

const useScrollTop = (threshold = 20) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
};

export default useScrollTop;
