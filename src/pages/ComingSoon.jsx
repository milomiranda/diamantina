import TiltOnMouse from "@/components/TiltOnMouse";

export default function ComingSoon() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-onyx text-paper-white px-6 text-center gap-10">
      <TiltOnMouse className="w-full" style={{ maxWidth: 480 }}>
        <img
          src="/logo.webp"
          srcSet="/logo-mobile.webp 700w, /logo.webp 1200w"
          sizes="(max-width: 767px) 80vw, 480px"
          alt="Diamantina"
          width="1200"
          height="768"
          className="w-full logo-glow"
        />
      </TiltOnMouse>
      <p className="font-ak text-[13px] md:text-[14px] uppercase tracking-[0.12em] text-ink-60 max-w-md">
        <span aria-hidden="true" className="text-diamantina mr-2">✦</span>
        We're building something beautiful. Come back soon.
      </p>
      <div className="flex items-center gap-6">
        <a
          href="https://www.instagram.com/diamantina.club"
          target="_blank"
          rel="noopener noreferrer"
          className="font-gs text-[20px] md:text-[24px] text-paper-white hover:opacity-60 transition-opacity"
        >
          Instagram
        </a>
        <a
          href="https://soundcloud.com/diamantinaclub"
          target="_blank"
          rel="noopener noreferrer"
          className="font-gs text-[20px] md:text-[24px] text-paper-white hover:opacity-60 transition-opacity"
        >
          SoundCloud
        </a>
      </div>
    </div>
  );
}
