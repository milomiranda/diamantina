import { useState, useEffect } from "react";
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
  const [events, setEvents] = useState(fallbackEvents);

  useEffect(() => {
    fetch(`${EVENTS_JSON_URL}?t=${Date.now()}`)
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (data?.events?.length) setEvents(data.events);
      })
      .catch(() => {
        // Keep the fallback event on screen if the fetch fails for any reason
      });
  }, []);

  const todayISO = new Date().toISOString().slice(0, 10);
  const upcomingEvents = events.filter((ev) => !ev.eventDateISO || ev.eventDateISO >= todayISO);
  const pastEvents = events.filter((ev) => ev.eventDateISO && ev.eventDateISO < todayISO);

  return (
    <>
      <section className="relative flex flex-col items-center px-6" style={{ paddingTop: 80, paddingBottom: 40 }}>
        <img src="/logo.webp" alt="Diamantina" className="w-full logo-glow" style={{ maxWidth: 1000 }} />
      </section>

      <section className="relative overflow-hidden px-4 md:px-6 pt-48 pb-32">
        <Particles />
        <div className="relative z-10">
          <div className="marquee-wrap border-t border-b border-ink-15 mb-8" style={{ padding: "12px 0" }}>
            <div className="marquee-track" style={{ display: "flex" }}>
              {[0, 1].map((half) => (
                <span
                  key={half}
                  className="font-ak text-[12px] uppercase tracking-[0.06em] text-ink-40"
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
            {upcomingEvents.map((ev) => (
              <ArchiveRow key={ev.id} event={ev} />
            ))}
          </div>
        </div>
      </section>

      {pastEvents.length > 0 && (
        <section className="relative overflow-hidden px-4 md:px-6 pb-32">
          <div className="relative z-10">
            <p className="font-ak text-[12px] uppercase tracking-[0.06em] text-ink-40 mb-8">
              Past events
            </p>
            <div className="flex flex-col gap-8">
              {pastEvents.map((ev) => (
                <ArchiveRow key={ev.id} event={ev} defaultOpen={false} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

function ToggleLine({ open, onClick }) {
  return (
    <div
      onClick={onClick}
      className="relative cursor-pointer w-full flex items-center"
      style={{ gap: 12, marginTop: 8, marginBottom: 8 }}
    >
      <span className="font-ak text-[12px] uppercase tracking-[0.06em] text-ink-60 shrink-0">
        {open ? "Hide event details ↑" : "View event details ↓"}
      </span>
      <div style={{ flex: 1, height: 14, position: "relative" }}>
        <svg
          width="200%" height="14" viewBox="0 0 200 14" preserveAspectRatio="none"
          style={{ display: "block", position: "absolute", inset: 0, opacity: open ? 0 : 1, transition: "opacity 0.3s ease" }}
        >
          <path d="M0,7 L200,7" fill="none" className="stroke-ink-60" strokeWidth="2" />
        </svg>
        <svg
          width="200%" height="14" viewBox="0 0 200 14" preserveAspectRatio="none"
          style={{ display: "block", position: "absolute", inset: 0, opacity: open ? 1 : 0, transition: "opacity 0.3s ease" }}
        >
          <path
            d="M0,7 Q3.5,2 7.0,7 T14.0,7 T21.0,7 T28.0,7 T35.0,7 T42.0,7 T49.0,7 T56.0,7 T63.0,7 T70.0,7 T77.0,7 T84.0,7 T91.0,7 T98.0,7 T105.0,7 T112.0,7 T119.0,7 T126.0,7 T133.0,7 T140.0,7 T147.0,7 T154.0,7 T161.0,7 T168.0,7 T175.0,7 T182.0,7 T189.0,7 T196.0,7 T203.0,7"
            fill="none"
            className="stroke-ink-60"
            strokeWidth="2"
          />
        </svg>
      </div>
    </div>
  );
}

function ArchiveRow({ event, defaultOpen = true }) {
  const [open, setOpen] = useState(defaultOpen);
  const toggle = () => setOpen((v) => !v);

  return (
    <div className="border-t border-ink-15">
      <div
        className="grid grid-cols-12 items-baseline gap-3 md:gap-6 cursor-pointer"
        style={{ paddingTop: 32 }}
        onClick={toggle}
      >
        <span className="col-span-12 md:col-span-4 font-gs text-[48px] md:text-[72px] leading-[0.9] tracking-[-0.02em] text-paper-white">
          {event.name}
        </span>
        <span
          className="col-span-6 md:col-span-2 font-ak text-[12px] uppercase tracking-[0.06em] text-ink-60 archive-fade"
          style={{ opacity: open ? 0 : 1, filter: open ? "blur(6px)" : "blur(0px)" }}
        >
          {event.date}
        </span>
        <span
          className="col-span-6 md:col-span-2 font-ak text-[12px] uppercase tracking-[0.06em] text-ink-60 archive-fade"
          style={{ opacity: open ? 0 : 1, filter: open ? "blur(6px)" : "blur(0px)" }}
        >
          {event.time}
        </span>
        <span
          className="col-span-12 md:col-span-2 font-ak text-[12px] uppercase tracking-[0.06em] text-ink-60 archive-fade"
          style={{ opacity: open ? 0 : 1, filter: open ? "blur(6px)" : "blur(0px)" }}
        >
          {event.category}
        </span>
        <span
          className="col-span-10 md:col-span-1 md:text-right font-ak text-[12px] uppercase tracking-[0.06em] text-paper-white archive-fade"
          style={{ opacity: open ? 0 : 1, filter: open ? "blur(6px)" : "blur(0px)" }}
        >
          {event.location}
        </span>
        <span className="col-span-2 md:col-span-1 text-right font-ak text-[14px] text-paper-white">
          {open ? "−" : "+"}
        </span>
      </div>

      <div style={{ padding: "8px 0" }}>
        <ToggleLine open={open} onClick={toggle} />
      </div>

      <div
        className={`grid grid-cols-1 transition-all duration-500 ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="pb-12">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
              <div className="order-2 md:order-1 md:col-span-6">
                {event.description && (
                  <div className="border border-ink-15 mb-7" style={{ padding: "24px 28px" }}>
                    <p className="font-ak text-[12px] uppercase tracking-[0.06em] mb-3 text-ink-60">
                      Event description
                    </p>
                    <p className="font-ak text-[16px] leading-[1.6] text-paper-white">
                      {event.description}
                    </p>
                  </div>
                )}
                {event.time && (
                  <>
                    <p className="font-ak text-[12px] uppercase tracking-[0.06em] mb-2 text-ink-60">
                      Time
                    </p>
                    <p className="font-ak text-[16px] leading-[1.4] mb-1 text-paper-white">
                      {event.time}
                    </p>
                  </>
                )}
                {event.location && (
                  <p className="font-ak text-[16px] leading-[1.4] mb-7 text-paper-white">
                    {event.location}
                  </p>
                )}
                {event.djs && event.djs.length > 0 && (
                  <>
                    <p className="font-ak text-[12px] uppercase tracking-[0.06em] mb-3 text-ink-60">
                      Line-up
                    </p>
                    <div className="flex flex-col gap-2.5 mb-7">
                      {event.djs.map((dj, i) => {
                        const links = dj.links || [
                          dj.link1 ? { url: dj.link1, label: dj.link1Label } : null,
                          dj.link2 ? { url: dj.link2, label: dj.link2Label } : null,
                        ].filter(Boolean);
                        return (
                          <div key={i} className="flex items-baseline gap-3 flex-wrap">
                            <span className="font-ak text-[16px] font-bold text-paper-white">{dj.name}</span>
                            {links.map((link, li) => (
                              <a
                                key={li}
                                href={link.url} target="_blank" rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="font-ak text-[12px] uppercase tracking-[0.04em] underline underline-offset-2 hover:opacity-60 transition-opacity text-ink-60"
                              >
                                {link.label || "Link"}
                              </a>
                            ))}
                          </div>
                        );
                      })}
                    </div>
                  </>
                )}
                <a
                  href={event.ticketsUrl || DEFAULT_TICKETS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="tickets-bounce inline-block font-ak text-[12px] font-bold uppercase tracking-[0.06em] text-onyx bg-paper-white"
                  style={{ padding: "14px 32px" }}
                >
                  Tickets
                </a>
              </div>
              {event.flyer && (
                <div className="order-1 md:order-2 md:col-span-6 mx-auto" style={{ width: "100%", maxWidth: 360 }}>
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
