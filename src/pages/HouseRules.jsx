import Particles from "@/components/Particles";
import usePageTitle from "@/hooks/usePageTitle";
import { useLanguage } from "@/i18n/LanguageContext";

export default function HouseRules() {
  const { t } = useLanguage();
  usePageTitle(t("partyRules.kicker"), t("partyRules.metaDescription"));
  const rules = t("partyRules.rules");
  return (
    <main className="relative overflow-hidden px-4 md:px-6 pt-40 pb-48">
        <Particles />
        <div className="relative z-10">
        <p className="font-ak text-[12px] uppercase tracking-[0.06em] text-ink-40 mb-8">
          {t("partyRules.kicker")}
        </p>

        <h1 className="font-ak text-[48px] md:text-[72px] leading-[0.9] tracking-[-0.02em] max-w-[760px]">
          <strong className="font-bold">
            {t("partyRules.headingStrong1")}
          </strong>
          {t("partyRules.headingMid")}<strong className="font-bold">{t("partyRules.headingStrong2")}</strong>
          {t("partyRules.headingPost")}
        </h1>

        <div className="mt-24 flex flex-col">
          {rules.map((rule, i) => (
            <div
              key={i}
              className={`border border-ink-15 px-5 md:px-7 py-6 ${i === 0 ? "" : "-mt-px"}`}
            >
              <p className="flex items-center gap-3 font-ak text-[20px] md:text-[24px] leading-[1.1] tracking-[0.01em] font-bold uppercase text-paper-white">
                <span aria-hidden="true" className="text-diamantina spin-icon">✦</span>
                {rule.title}
              </p>
              {rule.body && (
                <div className="mt-2.5 pl-8 md:pl-9 max-w-[640px]">
                  {rule.body.map((p, j) => (
                    <p
                      key={j}
                      className={`font-ak text-[14px] md:text-[15px] leading-[1.5] text-ink-70 ${
                        j === 0 ? "" : "mt-1.5"
                      }`}
                    >
                      {p}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        </div>
      </main>
  );
}
