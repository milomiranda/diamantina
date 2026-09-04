import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("diamantina-cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = visible ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  const respond = (choice) => {
    localStorage.setItem("diamantina-cookie-consent", choice);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <>
      <div className="fixed inset-0 z-[55] bg-paper-white/40" aria-hidden="true" />

      <div className="fixed bottom-0 inset-x-0 z-[60] bg-onyx text-paper-white border-t border-paper-white/15">
        <div className="px-4 md:px-6 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="font-ak text-[12px] leading-[1.5] uppercase tracking-[0.06em] text-paper-white/70 max-w-xl">
            We use cookies to run this site and understand how it's used. See our{" "}
            <a
              href="/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-paper-white hover:opacity-60 transition-opacity underline underline-offset-2"
            >
              Privacy Policy
            </a>
            .
          </p>
          <div className="flex items-center gap-6 shrink-0">
            <button
              onClick={() => respond("declined")}
              className="font-ak text-[12px] uppercase tracking-[0.06em] text-paper-white/60 hover:text-paper-white transition-colors"
            >
              Decline
            </button>
            <button
              onClick={() => respond("accepted")}
              className="font-ak text-[12px] font-bold uppercase tracking-[0.06em] text-onyx bg-paper-white px-5 py-3 hover:opacity-80 transition-opacity"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
