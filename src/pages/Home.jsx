import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Image } from "@/components/ui/image";

const events = [
  {
    name: "Eclipse Sonoro",
    date: "12 · 09 · 2026",
    location: "Sala Diamantina - CDMX",
    category: "(sound) performance",
    image: "https://media.base44.com/images/public/6a8dbc58be48457f3f2606a0/e56f75cb6_generated_1408ad38.png",
  },
  {
    name: "Mármol Vivo",
    date: "03 · 10 · 2026",
    location: "Pabellón Norte - MTY",
    category: "sculpture / live",
    image: "https://media.base44.com/images/public/6a8dbc58be48457f3f2606a0/b5ce88d4e_generated_4e4fe231.png",
  },
  {
    name: "Facetas",
    date: "21 · 11 · 2026",
    location: "Galería Cero - GDL",
    category: "immersion",
    image: "https://media.base44.com/images/public/6a8dbc58be48457f3f2606a0/5dac6048b_generated_669caca5.png",
  },
  {
    name: "Contraluz",
    date: "18 · 12 · 2026",
    location: "Foro Obsidiana - CDMX",
    category: "portrait / live",
    image: "https://media.base44.com/images/public/6a8dbc58be48457f3f2606a0/cd221db9c_generated_0c1a4ede.png",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-onyx text-paper-white overflow-x-hidden">
      <Nav />

      <section className="relative pt-32 pb-16 px-4 md:px-6 flex flex-col items-center">
        <Image
          src="https://media.base44.com/images/public/6a8dbc58be48457f3f2606a0/2a0dfc331_Logotipo.png"
          alt="Diamantina"
          fittingType="fit"
          originWidth={1600}
          originHeight={500}
          className="w-full max-w-[1100px]"
        />
        <p className="mt-12 max-w-xs text-center font-ak text-[12px] uppercase tracking-[0.06em] leading-[1.56] text-paper-white/60">
          Curated events as permanent visual legacy.
        </p>
      </section>

      <section className="px-4 md:px-6 pt-48 pb-32">
        <div className="flex items-center justify-between mb-16">
          <span className="font-ak text-[12px] uppercase tracking-[0.06em] text-paper-white/40">
            UPCOMING EVENTS
          </span>
        </div>
        <div className="flex flex-col gap-8">
          {events.map((ev, i) => (
            <ArchiveRow key={i} event={ev} />
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

function ArchiveRow({ event }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="border-t border-paper-white/15 cursor-pointer"
      onClick={() => setOpen((v) => !v)}
    >
      <div className="grid grid-cols-12 items-baseline gap-3 md:gap-6 py-8">
        <span className="col-span-12 md:col-span-6 font-gs text-[48px] md:text-[72px] leading-[0.9] tracking-[-0.02em] text-paper-white">
          {event.name}
        </span>
        <span className="col-span-6 md:col-span-2 font-ak text-[12px] uppercase tracking-[0.06em] text-paper-white/60">
          {event.date}
        </span>
        <span className="col-span-6 md:col-span-2 font-ak text-[12px] uppercase tracking-[0.06em] text-paper-white/60">
          {event.category}
        </span>
        <span className="col-span-12 md:col-span-2 md:text-right font-ak text-[12px] uppercase tracking-[0.06em] text-paper-white">
          {event.location}
        </span>
      </div>
      <div
        className={`grid transition-all duration-500 ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="pb-10 grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-7 md:col-start-6 relative aspect-[4/3] overflow-hidden bg-faint-white">
              <Image
                src={event.image}
                alt={event.name}
                fittingType="fill"
                className="absolute inset-0 w-full h-full object-cover opacity-55 grayscale"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
