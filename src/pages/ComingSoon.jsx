import TiltOnMouse from "@/components/TiltOnMouse";
import { useLanguage } from "@/i18n/LanguageContext";

const LANGUAGES = ["NL", "EN", "ES"];

export default function ComingSoon() {
  const { lang, setLang, t } = useLanguage();
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-onyx text-paper-white px-6 text-center gap-10">
      <div className="absolute top-6 right-6 flex items-center gap-2">
        {LANGUAGES.map((code) => (
          <button
            key={code}
            type="button"
            onClick={() => setLang(code)}
            className={`font-ak text-[11px] font-bold uppercase tracking-[0.04em] transition-opacity ${
              lang === code ? "opacity-100" : "opacity-40 hover:opacity-80"
            }`}
          >
            {code}
          </button>
        ))}
      </div>
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
        {t("comingSoon.text")}
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
