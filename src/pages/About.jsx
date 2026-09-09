import Particles from "@/components/Particles";
import TiltOnMouse from "@/components/TiltOnMouse";
import usePageTitle from "@/hooks/usePageTitle";

export default function About() {
  usePageTitle(
    "About",
    "Diamantina is a queer-centered party series exploring Latin club and experimental sounds, born in the Netherlands."
  );
  return (
    <main className="relative overflow-hidden px-4 md:px-6 pt-40 pb-48">
        <Particles />

        <div
          className="absolute pointer-events-none select-none w-[240px] md:w-[460px]"
          style={{ left: "-40px", top: "-20px", zIndex: 0, opacity: 0.95 }}
        >
          <TiltOnMouse maxTilt={9}>
            <img src="/sol.webp" alt="" aria-hidden="true" className="w-full h-auto" />
          </TiltOnMouse>
        </div>

        <div className="relative z-10">
        <p
          className="font-ak text-[12px] uppercase tracking-[0.06em] mb-8 text-white"
          style={{ transition: "color 0.6s ease" }}
        >
          About
        </p>
        <h1
          className="font-ak text-[48px] md:text-[72px] leading-[0.9] tracking-[-0.02em] max-w-[760px] text-white"
          style={{ transition: "color 0.6s ease" }}
        >
          Diamantina is a{" "}
          <strong className="font-bold">
            queer-centered party series exploring Latin club and experimental sounds
          </strong>
          , born in the Netherlands, with a direct cultural and musical connection to the
          underground scene.
        </h1>

        <div className="mt-24 max-w-[620px] flex flex-col gap-8">
          <p className="font-ak text-[18px] leading-[1.33] text-ink-80">
            At its core, Diamantina is about music discovery, movement and curiosity. We create
            dance floors for sounds that move beyond the expected, from Latin club and Mexican
            underground to IDM, experimental club music and artists exploring the spaces between
            genres.
          </p>
        </div>

        <blockquote className="mt-32 font-gs text-[40px] md:text-[58px] leading-[1] tracking-[-0.02em] font-bold max-w-[900px]">
          "Every particle reflects differently. Every facet catches light differently. Together
          they become something brilliant."
        </blockquote>
        </div>
      </main>
  );
}
