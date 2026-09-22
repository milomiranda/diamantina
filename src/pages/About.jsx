import Particles from "@/components/Particles";
import usePageTitle from "@/hooks/usePageTitle";
import { useLanguage } from "@/i18n/LanguageContext";

export default function About() {
  const { t } = useLanguage();
  usePageTitle(t("about.kicker"), t("about.metaDescription"));
  return (
    <main className="relative overflow-hidden px-4 md:px-6 pt-40 pb-48">
        <Particles />

        <div className="relative z-10">
        <p className="font-ak text-[12px] uppercase tracking-[0.06em] mb-8 text-ink-40">
          {t("about.kicker")}
        </p>
        <h1 className="font-ak text-[48px] md:text-[72px] leading-[0.9] tracking-[-0.02em] max-w-[760px]">
          {t("about.headingPre")}{" "}
          <strong className="font-bold">
            {t("about.headingStrong")}
          </strong>
          {t("about.headingPost")}
        </h1>

        <div className="mt-24 max-w-[620px] flex flex-col gap-8">
          <p className="font-ak text-[18px] leading-[1.33] text-ink-80">
            {t("about.body")}
          </p>
        </div>

        <blockquote className="mt-32 font-gs text-[40px] md:text-[58px] leading-[1] tracking-[-0.02em] font-bold max-w-[900px]">
          {t("about.quote")}
        </blockquote>
        </div>
      </main>
  );
}
