import { useState, useEffect } from "react";

const COLORS = {
  onyx: "#DDEEFF",
  paperWhite: "#101522",
  diamantina: "#D50000",
};

function ink(opacity) {
  return `rgba(16,21,34,${opacity})`;
}

function lerpHex(hexA, hexB, t) {
  const a = [1, 3, 5].map((i) => parseInt(hexA.slice(i, i + 2), 16));
  const b = [1, 3, 5].map((i) => parseInt(hexB.slice(i, i + 2), 16));
  const c = a.map((v, i) => Math.round(v + (b[i] - v) * t));
  return `rgb(${c[0]},${c[1]},${c[2]})`;
}
function lerpRgba(hexA, hexB, t, alpha) {
  const a = [1, 3, 5].map((i) => parseInt(hexA.slice(i, i + 2), 16));
  const b = [1, 3, 5].map((i) => parseInt(hexB.slice(i, i + 2), 16));
  const c = a.map((v, i) => Math.round(v + (b[i] - v) * t));
  return `rgba(${c[0]},${c[1]},${c[2]},${alpha})`;
}

// Automatic (not scroll-linked) — eases from onyx to black once, over
// `durationMs`, then stays black. Only active while `active` is true
// (Layout passes true only while on the Home route).
export default function useScrollTheme(active) {
  const [t, setT] = useState(0);

  useEffect(() => {
    if (!active) {
      setT(0);
      return;
    }
    let rafId;
    const start = performance.now();
    const durationMs = 6000;
    const animate = (now) => {
      const progress = Math.min(1, (now - start) / durationMs);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out
      setT(eased);
      if (progress < 1) rafId = requestAnimationFrame(animate);
    };
    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [active]);

  if (!active) {
    return {
      bg: COLORS.onyx,
      text: COLORS.paperWhite,
      text60: ink(0.6),
      text40: ink(0.4),
      accent: COLORS.diamantina,
    };
  }

  return {
    bg: lerpHex(COLORS.onyx, "#000000", t),
    text: lerpHex(COLORS.paperWhite, "#FFFFFF", t),
    text60: lerpRgba(COLORS.paperWhite, "#FFFFFF", t, 0.6),
    text40: lerpRgba(COLORS.paperWhite, "#FFFFFF", t, 0.4),
    accent: lerpHex(COLORS.diamantina, COLORS.onyx, t),
  };
}
