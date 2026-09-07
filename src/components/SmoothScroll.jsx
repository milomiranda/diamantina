import { useEffect } from "react";
import Lenis from "lenis";

// Adds the same kind of eased, momentum-based smooth scroll used on sites
// like vetsocial.nl (which runs on Lenis too). Mounted once at the App root
// so it applies everywhere, not per-page.
export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return null;
}
