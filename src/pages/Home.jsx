import { useState, useEffect, useRef } from "react";
import Particles from "@/components/Particles";
import NewsletterInline from "@/components/NewsletterInline";
import TiltOnMouse from "@/components/TiltOnMouse";
import usePageTitle from "@/hooks/usePageTitle";
import useEventStructuredData from "@/hooks/useEventStructuredData";
import { useLanguage } from "@/i18n/LanguageContext";

const EVENTS_JSON_URL = "https://raw.githubusercontent.com/milomiranda/diamantina-content/main/events.json";
const DEFAULT_TICKETS_URL = "https://ticketapp.shop/kbfsr";

function getCategories(event) {
  if (Array.isArray(event.categories)) return event.categories;
  if (event.category) return [event.category];
  return [];
}

function CategoryBoxes({ categories, align = "left" }) {
  if (!categories.length) return null;
  return (
    <div className={`flex flex-wrap gap-1.5 ${align === "right" ? "justify-end" : ""}`}>
      {categories.map((cat, i) => (
        <span
          key={i}
          className="inline-block border border-ink-25 px-2 py-0.5 font-ak text-[10px] uppercase tracking-[0.04em] text-ink-60 whitespace-nowrap"
        >
          {cat}
        </span>
      ))}
    </div>
  );
}

export default function Home() {
  const { t } = useLanguage();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch(`${EVENTS_JSON_URL}?t=${Date.now()}`)
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (data?.events) setEvents(data.events);
      })
      .catch(() => {
        // No events.json yet, or the fetch failed — show nothing rather than a fake example
      });
  }, []);

  const todayISO = new Date().toISOString().slice(0, 10);
  const [pastOpen, setPastOpen] = useState(false);
  const indexedEvents = events.map((ev, i) => ({ ...ev, _blobIndex: i }));
  const upcomingEvents = indexedEvents
    .filter((ev) => !ev.eventDateISO || ev.eventDateISO >= todayISO)
    .sort((a, b) => (a.eventDateISO || "9999-99-99").localeCompare(b.eventDateISO || "9999-99-99"));
  const pastEvents = indexedEvents
    .filter((ev) => ev.eventDateISO && ev.eventDateISO < todayISO)
    .sort((a, b) => b.eventDateISO.localeCompare(a.eventDateISO));

  const nextEvent = upcomingEvents[0] || null;
  const [activeEvent, setActiveEvent] = useState(null);

  usePageTitle(
    activeEvent ? `${activeEvent.name}${activeEvent.date ? ` — ${activeEvent.date}` : ""}` : null,
    activeEvent
      ? `${activeEvent.name} at Diamantina${activeEvent.location ? `, ${activeEvent.location}` : ""}${activeEvent.date ? ` — ${activeEvent.date}` : ""}. Get your tickets now.`
      : t("home.metaDescription")
  );
  useEventStructuredData(nextEvent);

  return (
    <>
      <section className="relative flex flex-col items-center justify-center md:justify-start px-6 pt-[100px] md:pt-20 min-h-[100dvh] md:min-h-0" style={{ paddingBottom: 40 }}>
        <TiltOnMouse className="w-full" style={{ maxWidth: 1000 }}>
          <img
            src="/logo.webp"
            srcSet="/logo-mobile.webp 700w, /logo.webp 1200w"
            sizes="(max-width: 767px) 100vw, 1000px"
            alt="Diamantina"
            width="1200"
            height="768"
            fetchPriority="high"
            className="w-full logo-glow"
            style={{ maxWidth: 1000 }}
          />
        </TiltOnMouse>
      </section>

      <NewsletterInline />

      <section className="relative overflow-hidden px-4 md:px-6 pt-48 pb-8">
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
                    <span key={i}>{t("home.upcomingEvents")} &nbsp;·&nbsp; </span>
                  ))}
                </span>
              ))}
            </div>
          </div>
          {upcomingEvents.length > 0 ? (
            <div className="flex flex-col gap-8">
              {upcomingEvents.map((ev, i) => (
                <ArchiveRow
                  key={ev.id}
                  event={ev}
                  defaultOpen={i === 0}
                  blobIndex={ev._blobIndex}
                  onToggleOpen={(isOpen) => setActiveEvent(isOpen ? ev : null)}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center text-center" style={{ paddingTop: 40, paddingBottom: 56 }}>
              <p className="font-gs text-[28px] md:text-[40px] leading-[1.15] tracking-[-0.01em] text-paper-white max-w-[560px]">
                {t("home.comingSoon")}
              </p>
            </div>
          )}
        </div>
      </section>

      {pastEvents.length > 0 && (
        <section className="relative overflow-hidden px-4 md:px-6 pb-32">
          <div className="relative z-10">
            <button
              type="button"
              onClick={() => setPastOpen((v) => !v)}
              className="font-ak text-[12px] uppercase tracking-[0.06em] text-ink-40 mb-8 flex items-center gap-2"
            >
              {t("home.pastEvents")} {pastOpen ? "↑" : "↓"}
            </button>
            {pastOpen && (
              <div className="flex flex-col gap-4">
                {pastEvents.map((ev) => (
                  <ArchiveRow
                    key={ev.id}
                    event={ev}
                    defaultOpen={false}
                    blobIndex={ev._blobIndex}
                    pastEvent
                    onToggleOpen={(isOpen) => setActiveEvent(isOpen ? ev : null)}
                  />
                ))}
              </div>
            )}
          </div>
        </section>
      )}
    </>
  );
}

function ToggleLine({ open, onClick, t }) {
  return (
    <div
      onClick={onClick}
      className="relative cursor-pointer w-full flex items-center"
      style={{ gap: 12, marginTop: 8, marginBottom: 8 }}
    >
      <span className="font-ak text-[12px] uppercase tracking-[0.06em] text-ink-60 shrink-0">
        {open ? t("home.hideEventDetails") : t("home.viewEventDetails")}
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

function ShareButton({ event, t }) {
  const [copied, setCopied] = useState(false);

  const handleShare = async (e) => {
    e.stopPropagation();
    const shareData = {
      title: event.name,
      text: `${event.name}${event.date ? ` — ${event.date}` : ""} at Diamantina`,
      url: "https://diamantina.club/",
    };
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        // user cancelled the native share sheet — nothing to do
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareData.url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch {
        // clipboard blocked — fail silently
      }
    }
  };

  return (
    <button
      type="button"
      onClick={handleShare}
      className="inline-flex items-center gap-1.5 font-ak text-[12px] uppercase tracking-[0.06em] text-ink-60 hover:opacity-70 transition-opacity mb-4"
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="shrink-0">
        <circle cx="18" cy="5" r="3" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="6" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="18" cy="19" r="3" stroke="currentColor" strokeWidth="1.8" />
        <path d="M8.6 10.5L15.4 6.5M8.6 13.5L15.4 17.5" stroke="currentColor" strokeWidth="1.8" />
      </svg>
      {copied ? t("home.linkCopied") : t("home.share")}
    </button>
  );
}

function ArchiveRow({ event, defaultOpen = true, blobIndex = 0, pastEvent = false, onToggleOpen }) {
  const { t } = useLanguage();
  const [open, setOpen] = useState(defaultOpen);
  const rowRef = useRef(null);
  const toggle = () => {
    setOpen((v) => {
      const next = !v;
      onToggleOpen?.(next);
      if (!next) {
        // Closing: jump back up to the event's title instead of leaving the
        // person stranded in blank space where the collapsed content used to be.
        requestAnimationFrame(() => {
          if (window.lenis) {
            window.lenis.scrollTo(rowRef.current, {
              offset: -90,
              duration: 1.4,
              easing: (t) => 1 - Math.pow(1 - t, 3),
            });
          } else {
            rowRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        });
      }
      return next;
    });
  };
  const ticketsHref = event.ticketsUrl || DEFAULT_TICKETS_URL;

  return (
    <div ref={rowRef} className="border-t border-ink-15">
      {/* Mobile layout: name left, compact info list right */}
      <div
        className="flex md:hidden flex-wrap items-start justify-between gap-3 cursor-pointer"
        style={{ paddingTop: pastEvent ? 16 : 32 }}
        onClick={toggle}
      >
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <span
            className={`font-gs leading-[0.9] tracking-[-0.02em] uppercase ${
              pastEvent ? "text-[20px] text-ink-30" : "text-[48px] text-paper-white"
            }`}
          >
            {event.name}
          </span>
        </div>
        <div
          className="flex flex-col items-end gap-1.5 shrink-0 archive-fade"
          style={{ opacity: open ? 0 : 1, filter: open ? "blur(6px)" : "blur(0px)" }}
        >
          <span className="font-ak text-[11px] uppercase tracking-[0.06em] text-ink-60 whitespace-nowrap">
            {event.date}
          </span>
          <span className="font-ak text-[11px] uppercase tracking-[0.06em] text-ink-60 whitespace-nowrap">
            {event.time}
          </span>
          <CategoryBoxes categories={getCategories(event)} align="right" />
          <span className="font-ak text-[11px] uppercase tracking-[0.06em] text-paper-white whitespace-nowrap">
            {event.location}
          </span>
        </div>
        <span className="shrink-0 font-ak text-[14px] text-paper-white">
          {open ? "−" : "+"}
        </span>
      </div>

      {/* Desktop layout: all fields in one row */}
      <div
        className="hidden md:grid grid-cols-12 items-baseline gap-6 cursor-pointer"
        style={{ paddingTop: pastEvent ? 16 : 32 }}
        onClick={toggle}
      >
        <div className="md:col-span-4 flex items-center gap-4 min-w-0">
          <span
            className={`font-gs leading-[0.9] tracking-[-0.02em] uppercase ${
              pastEvent ? "text-[32px] text-ink-30" : "text-[72px] text-paper-white"
            }`}
          >
            {event.name}
          </span>
        </div>
        <span
          className="md:col-span-2 font-ak text-[12px] uppercase tracking-[0.06em] text-ink-60 archive-fade"
          style={{ opacity: open ? 0 : 1, filter: open ? "blur(6px)" : "blur(0px)" }}
        >
          {event.date}
        </span>
        <span
          className="md:col-span-2 font-ak text-[12px] uppercase tracking-[0.06em] text-ink-60 archive-fade"
          style={{ opacity: open ? 0 : 1, filter: open ? "blur(6px)" : "blur(0px)" }}
        >
          {event.time}
        </span>
        <div
          className="md:col-span-2 archive-fade"
          style={{ opacity: open ? 0 : 1, filter: open ? "blur(6px)" : "blur(0px)" }}
        >
          <CategoryBoxes categories={getCategories(event)} />
        </div>
        <span
          className="md:col-span-1 md:text-right font-ak text-[12px] uppercase tracking-[0.06em] text-paper-white archive-fade"
          style={{ opacity: open ? 0 : 1, filter: open ? "blur(6px)" : "blur(0px)" }}
        >
          {event.location}
        </span>
        <span className="md:col-span-1 text-right font-ak text-[14px] text-paper-white">
          {open ? "−" : "+"}
        </span>
      </div>

      <div style={{ padding: "8px 0" }}>
        <ToggleLine open={open} onClick={toggle} t={t} />
      </div>

      <div
        className={`grid grid-cols-1 transition-all duration-500 ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="pb-12">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
              <div className="order-2 md:col-span-6">
                <ShareButton event={event} t={t} />
                {event.description && (
                  <div className="border border-ink-15 mb-7" style={{ padding: "24px 28px" }}>
                    <p className="font-ak text-[12px] uppercase tracking-[0.06em] mb-3 text-ink-60">
                      {t("home.eventDescription")}
                    </p>
                    <p
                      className="font-ak text-[16px] leading-[1.6] text-paper-white break-words"
                      style={{ whiteSpace: "pre-line", overflowWrap: "anywhere" }}
                    >
                      {event.description}
                    </p>
                  </div>
                )}
                {getCategories(event).length > 0 && (
                  <>
                    <p className="font-ak text-[12px] uppercase tracking-[0.06em] mb-2 text-ink-60">
                      {t("home.category")}
                    </p>
                    <div className="mb-7">
                      <CategoryBoxes categories={getCategories(event)} />
                    </div>
                  </>
                )}
                {event.time && (
                  <>
                    <p className="font-ak text-[12px] uppercase tracking-[0.06em] mb-2 text-ink-60">
                      {t("home.time")}
                    </p>
                    <p className="font-ak text-[16px] leading-[1.4] mb-1 text-paper-white">
                      {event.time}
                    </p>
                  </>
                )}
                {event.location && (
                  event.locationUrl ? (
                    <a
                      href={event.locationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 font-ak text-[16px] leading-[1.4] mb-7 text-paper-white hover:opacity-70 transition-opacity underline underline-offset-2"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="shrink-0">
                        <path
                          d="M12 22s7-7.58 7-12.5C19 5.36 15.87 2 12 2S5 5.36 5 9.5C5 14.42 12 22 12 22z"
                          stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
                        />
                        <circle cx="12" cy="9.5" r="2.5" stroke="currentColor" strokeWidth="1.8" />
                      </svg>
                      {event.location}
                    </a>
                  ) : (
                    <p className="font-ak text-[16px] leading-[1.4] mb-7 text-paper-white">
                      {event.location}
                    </p>
                  )
                )}
                {event.djs && event.djs.length > 0 && (
                  <>
                    <p className="font-ak text-[12px] uppercase tracking-[0.06em] mb-3 text-ink-60">
                      {t("home.lineUp")}
                    </p>
                    <div className="flex flex-col gap-2.5 mb-7">
                      {event.djs.map((dj, i) => {
                        const links = dj.links || [
                          dj.link1 ? { url: dj.link1, label: dj.link1Label } : null,
                          dj.link2 ? { url: dj.link2, label: dj.link2Label } : null,
                        ].filter(Boolean);
                        return (
                          <div key={i} className="flex flex-col gap-1 md:flex-row md:items-baseline md:gap-3 md:flex-wrap">
                            <span className="font-ak text-[16px] font-bold text-paper-white">{dj.name}</span>
                            <div className="flex flex-wrap gap-x-3 gap-y-1">
                              {links.map((link, li) => (
                                <a
                                  key={li}
                                  href={link.url} target="_blank" rel="noopener noreferrer"
                                  onClick={(e) => e.stopPropagation()}
                                  className="font-ak text-[12px] uppercase tracking-[0.04em] underline underline-offset-2 hover:opacity-60 transition-opacity text-ink-60"
                                >
                                  {link.label || t("home.link")}
                                </a>
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </>
                )}
                {event.ticketTiers && event.ticketTiers.length > 0 && (
                  <div className="flex flex-col gap-2 mb-7">
                    <p className="font-ak text-[12px] uppercase tracking-[0.06em] text-ink-60">
                      {t("home.tickets")}
                    </p>
                    {event.ticketTiers.map((tier, i) => (
                      <div key={i} className="flex items-baseline justify-between gap-4 max-w-[360px]">
                        <span className="font-ak text-[15px] text-paper-white">{tier.label}</span>
                        <span className="font-ak text-[15px] text-ink-60 whitespace-nowrap">
                          {tier.currency === "MXN" ? "$" : "€"}
                          {tier.price}
                          {tier.currency === "MXN" ? " MXN" : ""}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
                {!pastEvent && (
                  <div className="relative border border-ink-15 w-full" style={{ maxWidth: 480 }}>
                    <iframe
                      src={ticketsHref}
                      title={`Tickets — ${event.name}`}
                      style={{ width: "100%", height: 700, border: "none", display: "block" }}
                    />
                    <div className="border-t border-ink-15 bg-onyx flex justify-center" style={{ padding: "10px 14px" }}>
                      <a
                        href={ticketsHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="font-ak text-[11px] uppercase tracking-[0.04em] underline underline-offset-2 hover:opacity-60 transition-opacity text-paper-white text-center"
                      >
                        {t("home.troubleLoading")}
                      </a>
                    </div>
                  </div>
                )}
              </div>
              {event.flyer && (
                <div className="order-1 md:col-span-6 mx-auto" style={{ width: "100%", maxWidth: 360 }}>
                  <div className="relative aspect-[4/5] overflow-hidden bg-faint-white" style={{ width: "100%" }}>
                    <img src={event.flyer} alt={event.name} className="absolute inset-0 w-full h-full object-cover" />
                  </div>
                </div>
              )}
            </div>
            <div style={{ paddingTop: 24 }}>
              <ToggleLine open={open} onClick={toggle} t={t} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
