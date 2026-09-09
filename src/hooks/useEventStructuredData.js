import { useEffect } from "react";

// Injects schema.org Event structured data (JSON-LD) for the next upcoming
// event. Since the whole site lives on one URL (no per-event pages), this is
// the main lever Google has to understand "there's an event happening here"
// and potentially show it as a rich result. Pass null to remove it (e.g. when
// there's no upcoming event).
const SCRIPT_ID = "diamantina-event-jsonld";

export default function useEventStructuredData(event) {
  useEffect(() => {
    // Clean up whenever the event changes or the component unmounts.
    const existing = document.getElementById(SCRIPT_ID);
    if (existing) existing.remove();

    if (!event) return;

    const data = {
      "@context": "https://schema.org",
      "@type": "Event",
      name: event.name,
      startDate: event.eventDateISO || undefined,
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      eventStatus: "https://schema.org/EventScheduled",
      location: event.location
        ? {
            "@type": "Place",
            name: event.location,
          }
        : undefined,
      image: event.flyer ? [event.flyer] : undefined,
      description: event.description || undefined,
      organizer: {
        "@type": "Organization",
        name: "Diamantina",
        url: "https://diamantina.club",
      },
      offers: event.ticketsUrl
        ? {
            "@type": "Offer",
            url: event.ticketsUrl,
            availability: "https://schema.org/InStock",
          }
        : undefined,
    };

    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);

    return () => {
      document.getElementById(SCRIPT_ID)?.remove();
    };
  }, [event]);
}
