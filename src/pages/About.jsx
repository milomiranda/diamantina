import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen bg-onyx text-paper-white">
      <Nav />
      <main className="px-4 md:px-6 pt-40 pb-48">
        <p className="font-ak text-[12px] uppercase tracking-[0.06em] text-paper-white/40 mb-8">
          About
        </p>
        <h1 className="font-ak text-[48px] md:text-[72px] leading-[0.9] tracking-[-0.02em] max-w-[760px]">
          Diamantina is a{" "}
          <strong className="font-bold">
            queer-centered party series, cultural platform and community
          </strong>{" "}
          born in the Netherlands, with a direct cultural and musical connection to Latin
          America's underground scene.
        </h1>

        <div className="mt-24 max-w-[620px] flex flex-col gap-8">
          <p className="font-ak text-[18px] leading-[1.33] text-paper-white/80">
            At its core, Diamantina is about music discovery, movement and curiosity. We create
            dance floors for sounds that move beyond the expected, from Latin club and Mexican
            underground to IDM, experimental club music and artists exploring the spaces between
            genres.
          </p>
          <p className="font-ak text-[18px] leading-[1.33] text-paper-white/80">
            Rather than reproducing familiar nightlife formulas, Diamantina looks for new
            rhythms, unexpected combinations and artists with something distinctive to say.
          </p>
          <p className="font-ak text-[18px] leading-[1.33] text-paper-white/80">
            It is not interested in reproducing another techno night, circuit party, or
            conventional queer club format. The purpose is to introduce novelty, curiosity and
            musical exploration to the dance floor.
          </p>
        </div>

        <blockquote className="mt-32 font-gs text-[40px] md:text-[58px] leading-[1] tracking-[-0.02em] font-bold max-w-[900px]">
          "Every particle reflects differently. Every facet catches light differently. Together
          they become something brilliant."
        </blockquote>
      </main>
      <Footer />
    </div>
  );
}
