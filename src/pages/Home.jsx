import { useState, useEffect } from "react";
import { useOutletContext } from "react-router-dom";
import Particles from "@/components/Particles";

const EVENTS_JSON_URL = "https://raw.githubusercontent.com/milomiranda/diamantina-content/main/events.json";
const DEFAULT_TICKETS_URL = "https://ticketapp.shop/kbfsr";

// Shown until the real events.json loads (or if the fetch fails), so the
// page never looks empty.
const fallbackEvents = [
  {
    id: "diamantina-first-light",
    name: "DIAMANTINA: FIRST LIGHT",
    date: "09 · 10 · 2026",
    time: "",
    location: "TBD - Den Haag",
    category: "(sound) performance",
    description: "",
    flyer: "",
    ticketsUrl: "",
    djs: [],
  },
];

export default function Home() {
  const theme = useOutletContext();
  const [events, setEvents] = useState(fallbackEvents);

  useEffect(() => {
    fetch(EVENTS_JSON_URL)
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (data?.events?.length) setEvents(data.events);
      })
      .catch(() => {
        // Keep the fallback event on screen if the fetch fails for any reason
      });
  }, []);

  return (
    <>
      <section className="relative flex flex-col items-center px-6" style={{ paddingTop: 80, paddingBottom: 40 }}>
        <img src="/logo.webp" alt="Diamantina" className="w-full logo-glow" style={{ maxWidth: 1000 }} />
      </section>

      <section className="relative overflow-hidden px-4 md:px-6 pt-48 pb-32">
        <Particles />
        <div className="relative z-10">
          <div className="marquee-wrap border-t border-b border-paper-white/15 mb-8" style={{ padding: "12px 0" }}>
            <div className="marquee-track" style={{ display: "flex" }}>
              {[0, 1].map((half) => (
                <span
                  key={half}
                  className="font-ak text-[12px] uppercase tracking-[0.06em] text-paper-white/40"
                  style={{ flexShrink: 0 }}
                >
                  {Array.from({ length: 12 }).map((_, i) => (
                    <span key={i}>UPCOMING EVENTS &nbsp;·&nbsp; </span>
                  ))}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-8">
            {events.map((ev) => (
              <ArchiveRow key={ev.id} event={ev} theme={theme} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ToggleLine({ open, color, bg, onClick }) {
  return (
    <div
      onClick={onClick}
      className="relative cursor-pointer w-full flex items-center"
      style={{ gap: 12, marginTop: 8, marginBottom: 8 }}
    >
      <span
        className="font-ak text-[12px] uppercase tracking-[0.06em] shrink-0"
        style={{ color, backgroundColor: bg, paddingRight: 4 }}
      >
        {open ? "Hide event details ↑" : "View event details ↓"}
      </span>
      <div style={{ flex: 1, height: 14, overflow: "hidden" }}>
        <svg width="200%" height="14" viewBox="0 0 200 14" preserveAspectRatio="none" style={{ display: "block" }}>
          <path
            d="M0,7 Q3.5,2 7.0,7 T14.0,7 T21.0,7 T28.0,7 T35.0,7 T42.0,7 T49.0,7 T56.0,7 T63.0,7 T70.0,7 T77.0,7 T84.0,7 T91.0,7 T98.0,7 T105.0,7 T112.0,7 T119.0,7 T126.0,7 T133.0,7 T140.0,7 T147.0,7 T154.0,7 T161.0,7 T168.0,7 T175.0,7 T182.0,7 T189.0,7 T196.0,7 T203.0,7"
            fill="none"
            stroke={color}
            strokeWidth="2"
          />
        </svg>
      </div>
    </div>
  );
}

function ArchiveRow({ event, theme }) {
  const [open, setOpen] = useState(true);
  const t = theme || { text: "#101522", text60: "rgba(16,21,34,0.6)", bg: "#DDEEFF" };
  const toggle = () => setOpen((v) => !v);

  return (
    <div className="border-t border-paper-white/15">
      <div
        className="grid grid-cols-12 items-baseline gap-3 md:gap-6 cursor-pointer"
        style={{ paddingTop: 32 }}
        onClick={toggle}
      >
        <span
          className="col-span-12 md:col-span-5 font-gs text-[48px] md:text-[72px] leading-[0.9] tracking-[-0.02em]"
          style={{ color: t.text, transition: "color 0.1s linear" }}
        >
          {event.name}
        </span>
        <span className="col-span-6 md:col-span-2 font-ak text-[12px] uppercase tracking-[0.06em]" style={{ color: t.text60, transition: "color 0.1s linear" }}>
          {event.date}
        </span>
        <span className="col-span-6 md:col-span-2 font-ak text-[12px] uppercase tracking-[0.06em]" style={{ color: t.text60, transition: "color 0.1s linear" }}>
          {event.category}
        </span>
        <span className="col-span-10 md:col-span-2 md:text-right font-ak text-[12px] uppercase tracking-[0.06em]" style={{ color: t.text, transition: "color 0.1s linear" }}>
          {event.location}
        </span>
        <span className="col-span-2 md:col-span-1 text-right font-ak text-[14px]" style={{ color: t.text, transition: "color 0.1s linear" }}>
          {open ? "−" : "+"}
        </span>
      </div>

      <div style={{ padding: "8px 0" }}>
        <ToggleLine open={open} color={t.text60} bg={t.bg} onClick={toggle} />
      </div>

      <div
        className={`grid grid-cols-1 transition-all duration-500 ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="pb-12">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
              <div className="md:col-span-7">
                {event.description && (
                  <>
                    <p className="font-ak text-[12px] uppercase tracking-[0.06em] mb-2" style={{ color: t.text60 }}>
                      Event description
                    </p>
                    <p className="font-ak text-[16px] leading-[1.6] mb-7" style={{ color: t.text }}>
                      {event.description}
                    </p>
                  </>
                )}
                {event.time && (
                  <>
                    <p className="font-ak text-[12px] uppercase tracking-[0.06em] mb-2" style={{ color: t.text60 }}>
                      Time
                    </p>
                    <p className="font-ak text-[16px] leading-[1.4] mb-1" style={{ color: t.text }}>
                      {event.time}
                    </p>
                  </>
                )}
                {event.location && (
                  <p className="font-ak text-[16px] leading-[1.4] mb-7" style={{ color: t.text }}>
                    {event.location}
                  </p>
                )}
                {event.djs && event.djs.length > 0 && (
                  <>
                    <p className="font-ak text-[12px] uppercase tracking-[0.06em] mb-3" style={{ color: t.text60 }}>
                      Line-up
                    </p>
                    <div className="flex flex-col gap-2.5 mb-7">
                      {event.djs.map((dj, i) => (
                        <div key={i} className="flex items-baseline gap-3 flex-wrap">
                          <span className="font-ak text-[16px] font-bold" style={{ color: t.text }}>{dj.name}</span>
                          {dj.link1 && (
                            <a
                              href={dj.link1} target="_blank" rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="font-ak text-[12px] uppercase tracking-[0.04em] underline underline-offset-2 hover:opacity-60 transition-opacity"
                              style={{ color: t.text60 }}
                            >
                              link
                            </a>
                          )}
                          {dj.link2 && (
                            <a
                              href={dj.link2} target="_blank" rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="font-ak text-[12px] uppercase tracking-[0.04em] underline underline-offset-2 hover:opacity-60 transition-opacity"
                              style={{ color: t.text60 }}
                            >
                              link
                            </a>
                          )}
                        </div>
                      ))}
                    </div>
                  </>
                )}
                <a
                  href={event.ticketsUrl || DEFAULT_TICKETS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="tickets-bounce inline-block font-ak text-[12px] font-bold uppercase tracking-[0.06em]"
                  style={{ color: t.bg, backgroundColor: t.text, padding: "14px 32px" }}
                >
                  Tickets
                </a>
              </div>
              {event.flyer && (
                <div className="md:col-span-5" style={{ width: "100%", maxWidth: 360, marginLeft: "auto" }}>
                  <div className="relative aspect-[4/5] overflow-hidden bg-faint-white" style={{ width: "100%" }}>
                    <img src={event.flyer} alt={event.name} className="absolute inset-0 w-full h-full object-cover" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
