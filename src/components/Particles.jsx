const PARTICLE_POSITIONS = [
  { left: "6%", top: "18%", delay: "0s", duration: "6s" },
  { left: "14%", top: "62%", delay: "1.2s", duration: "7s" },
  { left: "27%", top: "35%", delay: "2.4s", duration: "5.5s" },
  { left: "41%", top: "78%", delay: "0.6s", duration: "6.5s" },
  { left: "58%", top: "22%", delay: "3s", duration: "7.5s" },
  { left: "69%", top: "55%", delay: "1.8s", duration: "6s" },
  { left: "82%", top: "30%", delay: "0.3s", duration: "8s" },
  { left: "91%", top: "68%", delay: "2.1s", duration: "5s" },
  { left: "35%", top: "12%", delay: "4s", duration: "6.8s" },
  { left: "75%", top: "85%", delay: "1.5s", duration: "7.2s" },
];

// Drifting red dots, purely decorative. Parent must have position:relative
// and overflow:hidden for these to stay contained.
export default function Particles() {
  return (
    <>
      {PARTICLE_POSITIONS.map((p, i) => (
        <span
          key={i}
          className="footer-particle"
          style={{
            left: p.left,
            top: p.top,
            animationDelay: p.delay,
            animationDuration: p.duration,
            pointerEvents: "none",
          }}
        />
      ))}
    </>
  );
}
