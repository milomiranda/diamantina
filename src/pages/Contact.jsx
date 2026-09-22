import Particles from "@/components/Particles";
import usePageTitle from "@/hooks/usePageTitle";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  usePageTitle(t("contact.kicker"), t("contact.metaDescription"));
  return (
    <main className="relative overflow-hidden px-4 md:px-6 pt-40 pb-48">
      <Particles />

      <div
        className="absolute pointer-events-none select-none w-[180px] md:w-[320px]"
        style={{ right: "-20px", top: "60px", zIndex: 0, opacity: 0.95 }}
      >
        <img src="/star.webp" alt="" aria-hidden="true" width="601" height="640" className="w-full h-auto" />
      </div>

      <div className="relative z-10">
        <p className="font-ak text-[12px] uppercase tracking-[0.06em] text-ink-40 mb-8">
          {t("contact.kicker")}
        </p>
        <h1 className="font-ak text-[48px] md:text-[72px] leading-[0.9] tracking-[-0.02em] max-w-[760px]">
          <strong className="font-bold">{t("contact.heading")}</strong>
        </h1>

        <div className="mt-24 max-w-[620px] flex flex-col gap-8">
          <p className="font-ak text-[18px] leading-[1.33] text-ink-80">
            {t("contact.emailIntro")}{" "}
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
