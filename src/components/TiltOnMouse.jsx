import { useEffect, useRef } from "react";

// Tilts its children in 3D based on the mouse position anywhere on the
// page — not just while hovering the element itself.
export default function TiltOnMouse({ children, maxTilt = 14, className = "", style = {} }) {
  const innerRef = useRef(null);

  useEffect(() => {
    // Respect reduced-motion preferences — no tilt for people who asked for it.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const handleMove = (e) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      const rotateY = (x * maxTilt * 2).toFixed(2);
      const rotateX = (-y * maxTilt * 2).toFixed(2);
      if (innerRef.current) {
        innerRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      }
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [maxTilt]);

  return (
    <div className={className} style={{ perspective: 1000, ...style }}>
      <div
        ref={innerRef}
        style={{
          transformStyle: "preserve-3d",
          transition: "transform 0.15s ease-out",
        }}
      >
        {children}
      </div>
    </div>
  );
}
