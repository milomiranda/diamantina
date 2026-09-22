import Particles from "@/components/Particles";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const igLink = "https://www.instagram.com/diamantina.club";
  const soundcloudLink = "https://soundcloud.com/diamantinaclub";

  return (
    <footer className="relative overflow-hidden bg-onyx text-paper-white">
      <Particles />
      <div className="relative z-10 px-4 md:px-6 pt-12 md:pt-20 pb-16">
        <div className="flex flex-col gap-8 md:gap-12">
          <FooterBig href={igLink} external>Instagram</FooterBig>
          <FooterBig href={soundcloudLink} external>SoundCloud</FooterBig>
        </div>
        <div className="mt-12 md:mt-20 pt-8 flex flex-col items-start gap-3">
          <a
            href="mailto:home@diamantina.club"
            className="font-ak text-[12px] uppercase tracking-[0.06em] text-ink-60 hover:opacity-70 transition-opacity"
          >
            home@diamantina.club
          </a>
          <p className="font-ak text-[12px] uppercase tracking-[0.06em] text-ink-60">
            <button
              onClick={() => window.openSignUp?.()}
              className="uppercase hover:opacity-70 transition-opacity bg-transparent border-none cursor-pointer p-0"
              style={{ font: "inherit", color: "inherit" }}
            >
              {t("footer.subscribe")}
            </button>
            {" · "}
            <button
              onClick={() => window.openLegal?.("terms")}
              className="uppercase hover:opacity-70 transition-opacity bg-transparent border-none cursor-pointer p-0"
              style={{ font: "inherit", color: "inherit" }}
            >
              {t("footer.termsOfUse")}
            </button>
            {" · "}
            <button
              onClick={() => window.openLegal?.("privacy")}
              className="uppercase hover:opacity-70 transition-opacity bg-transparent border-none cursor-pointer p-0"
              style={{ font: "inherit", color: "inherit" }}
            >
              {t("footer.privacyPolicy")}
            </button>
          </p>
          <span className="font-ak text-[12px] uppercase tracking-[0.06em] text-diamantina">
            Diamantina
          </span>
        </div>
      </div>
    </footer>
  );
}

function FooterBig({ href, children, external }) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="block w-fit font-gs text-[58px] md:text-[72px] leading-[0.9] tracking-[-0.02em] text-paper-white hover:opacity-60 transition-opacity"
    >
      {children}
    </a>
  );
}
