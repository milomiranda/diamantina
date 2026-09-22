import { useState, useEffect } from "react";

// Temporary promo popup for the first event — Milo plans to remove this
// again once it's no longer needed. Shows once per browser (localStorage),
// and its background follows the site's day/night colors like everything else.
const STORAGE_KEY = "diamantina-promo-popup-seen";

export default function SignUpPopup() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY) || localStorage.getItem("diamantina-subscribed")) return;
    const timer = setTimeout(() => setOpen(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Lets other components (like the Footer's "Subscribe" link) open this
    // popup on demand, the same way window.openLegal works for Terms/Privacy.
    window.openSignUp = () => setOpen(true);
    return () => {
      delete window.openSignUp;
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => {
    localStorage.setItem(STORAGE_KEY, "true");
    setOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("sent");
      localStorage.setItem(STORAGE_KEY, "true");
      localStorage.setItem("diamantina-subscribed", "true");
    } catch {
      setStatus("error");
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center p-5">
      <div className="absolute inset-0 bg-ink-65" aria-hidden="true" onClick={close} />
      <div className="relative z-[91] bg-onyx text-paper-white w-full max-w-[420px]" style={{ padding: 40 }}>
        <button
          onClick={close}
          aria-label="Close"
          className="absolute top-3 right-3 w-9 h-9 rounded-full bg-paper-white text-onyx border-none text-base cursor-pointer flex items-center justify-center hover:opacity-70 transition-opacity"
        >
          ✕
        </button>

        <p className="flex items-center gap-3 font-gs text-[32px] leading-[1.15] font-bold tracking-[-0.01em] mb-4">
          <span aria-hidden="true" className="text-diamantina">✦</span>
          Come a little closer
        </p>
        <p className="font-ak text-[16px] leading-[1.4] text-ink-80 mb-6">
          Our first night is taking shape. Get on the list to hear about it before everyone else does.
        </p>

        {status === "sent" ? (
          <p className="font-ak text-[16px]">Thanks, you're on the list.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div className="border-b border-ink-30">
              <input
                type="email"
                required
                disabled={status === "sending"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="font-ak text-[16px] bg-transparent border-none outline-none py-2 w-full"
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="text-left mt-1 font-ak text-[12px] font-bold uppercase tracking-[0.06em] hover:opacity-60 transition-opacity disabled:opacity-40"
            >
              {status === "sending" ? "Sending..." : "Join →"}
            </button>
            {status === "error" && (
              <p className="font-ak text-[13px] text-diamantina mt-1">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        )}
      </div>
    </div>
  );
}
