import Particles from "@/components/Particles";
import TiltOnMouse from "@/components/TiltOnMouse";
import usePageTitle from "@/hooks/usePageTitle";

export default function Contact() {
  usePageTitle("Contact", "Get in touch with Diamantina.");
  return (
    <main className="relative overflow-hidden px-4 md:px-6 pt-40 pb-48">
      <Particles />

      <div
        className="absolute pointer-events-none select-none w-[220px] md:w-[420px]"
        style={{ right: "-40px", top: "40px", zIndex: 0, opacity: 0.95 }}
      >
        <TiltOnMouse maxTilt={9}>
          <img src="/flor.webp" alt="" aria-hidden="true" className="w-full h-auto" />
        </TiltOnMouse>
      </div>

      <div className="relative z-10">
        <p className="font-ak text-[12px] uppercase tracking-[0.06em] text-ink-40 mb-8">
          Contact
        </p>
        <h1 className="font-ak text-[48px] md:text-[72px] leading-[0.9] tracking-[-0.02em] max-w-[760px]">
          Contact
        </h1>

        <div className="mt-24 max-w-[620px] flex flex-col gap-8">
          <p className="font-ak text-[18px] leading-[1.33] text-ink-80">
            Our email address is:{" "}
            <a
              href="mailto:home@diamantina.club"
              className="text-paper-white underline underline-offset-2 hover:opacity-70 transition-opacity"
            >
              home@diamantina.club
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
