import Particles from "@/components/Particles";

const rules = [
  { title: "Come as you are", body: null },
  { title: "Queer-centered, allies welcome", body: null },
  {
    title: "Respect every facet",
    body: [
      "Everyone reflects light differently.",
      "There is no place at Diamantina for racism, homophobia, transphobia, sexism, ableism, xenophobia, body-shaming or discrimination of any kind.",
      "Respect people's identities, bodies, boundaries and ways of expressing themselves.",
    ],
  },
  { title: "Consent, always", body: ["No means no. Silence isn't yes."] },
  { title: "Look after each other", body: null },
  {
    title: "No aggression, harassment or predatory behavior",
    body: ["If your behavior compromises the safety of the community, you may be asked to leave."],
  },
];

export default function HouseRules() {
  return (
    <main className="relative overflow-hidden px-4 md:px-6 pt-40 pb-48">
        <Particles />
        <div className="relative z-10">
        <p className="font-ak text-[12px] uppercase tracking-[0.06em] text-ink-40 mb-8">
          Party Rules
        </p>
        <h1 className="font-ak text-[48px] md:text-[72px] leading-[0.9] tracking-[-0.02em] max-w-[760px]">
          A home for everyone.
        </h1>

        <div className="mt-16 md:mt-24 max-w-[620px] flex flex-col gap-8">
          <p className="font-ak text-[18px] leading-[1.33] text-ink-80">
            Diamantina is a home for everyone, centered around our queer community.
          </p>
          <p className="font-ak text-[18px] leading-[1.33] text-ink-80">
            We come together for music, movement, discovery and each other. We want the dance
            floor to feel free, euphoric and welcoming.
          </p>
        </div>

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
