import { useState } from "react";
import { Image } from "@/components/ui/image";

const events = [
  {
    name: "DIAMANTINA: FIRST LIGHT",
    date: "09 · 10 · 2026",
    location: "TBD - Den Haag",
    category: "(sound) performance",
    image: "https://media.base44.com/images/public/6a8dbc58be48457f3f2606a0/e56f75cb6_generated_1408ad38.png",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative pt-32 pb-16 px-4 md:px-6 flex flex-col items-center">
        <Image
          src="https://media.base44.com/images/public/6a8dbc58be48457f3f2606a0/2a0dfc331_Logotipo.png"
          alt="Diamantina"
          fittingType="fit"
          originWidth={1600}
          originHeight={500}
          className="w-full max-w-[1100px]"
        />
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
    </>
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
