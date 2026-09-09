import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    window.lenis?.scrollTo(0, { immediate: true });

    // Keep the canonical tag pointing at the actual current page, not just
    // the homepage — Google flagged the site as "duplicate, no canonical
    // declared" without this.
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = `https://diamantina.club${pathname === "/" ? "" : pathname}`;
  }, [pathname]);

  return null;
}
