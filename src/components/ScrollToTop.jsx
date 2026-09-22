import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (window.lenis) {
      window.lenis.scrollTo(0, {
        duration: 1.4,
        easing: (t) => 1 - Math.pow(1 - t, 3),
      });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

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
