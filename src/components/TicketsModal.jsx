import { useState, useEffect } from "react";

// Self-managing like SignUpModal — exposes window.openTickets() so Nav can
// open it without prop drilling. Closed by default; only the X closes it,
// the backdrop intentionally has no onClick.
export default function TicketsModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.openTickets = () => setOpen(true);
    return () => {
      delete window.openTickets;
    };
  }, []);

  useEffect(() => {
    // Load the Ticketapp integration script once. The shop div below stays
    // mounted in the DOM at all times (just hidden via display:none when
    // closed), so the script only ever needs to initialize it once.
    if (!document.getElementById("ticketapp-shop-script")) {
      const script = document.createElement("script");
      script.id = "ticketapp-shop-script";
      script.src = "https://shop.ticketapp.com/js/integration.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const onClose = () => setOpen(false);

  return (
    <div
      className="fixed inset-0 z-[100] items-center justify-center p-5"
      style={{ display: open ? "flex" : "none" }}
    >
      {/* Backdrop — intentionally has no onClick, so clicking it does nothing */}
      <div className="absolute inset-0 bg-paper-white/65" aria-hidden="true" />

      <div className="relative z-[101] bg-onyx w-full max-w-[640px] max-h-[85vh] overflow-y-auto p-8">
        <button
          onClick={onClose}
          aria-label="Close tickets"
          className="absolute top-3 right-3 z-[102] w-9 h-9 rounded-full bg-paper-white text-onyx border-none text-base cursor-pointer flex items-center justify-center hover:opacity-60 transition-opacity"
        >
          ✕
        </button>
        <div className="mt-7" data-shop-url="https://ticketapp.shop/kbfsr"></div>
      </div>
    </div>
  );
}
