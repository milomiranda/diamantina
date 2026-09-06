import { useEffect } from "react";

// Vite/React SPAs don't render per-route <title>/<meta> tags server-side, so
// there's no real per-page SEO here — but this at least gives every page its
// own browser-tab title and description, instead of every page saying just
// "Diamantina". Call it once near the top of each page component.
export default function usePageTitle(title, description) {
  useEffect(() => {
    document.title = title ? `${title} — Diamantina` : "Diamantina";

    if (description) {
      let meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement("meta");
        meta.name = "description";
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", description);
    }
  }, [title, description]);
}
