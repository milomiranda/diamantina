import { useState, useEffect } from "react";

function SignUpForm({ onSubscribed }) {
  const [form, setForm] = useState({ name: "", achternaam: "", email: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("sent");
      localStorage.setItem("diamantina-subscribed", "true");
      onSubscribed?.();
    } catch {
      setStatus("error");
    }
  };

  const fieldStyle =
    "font-ak text-[16px] text-paper-white bg-transparent border-none outline-none py-2 w-full";

  return (
    <div>
      <p className="flex items-center gap-3 font-gs text-[32px] leading-[1.15] font-bold tracking-[-0.01em] text-paper-white mb-4">
        <span aria-hidden="true" className="text-diamantina">✦</span>
        Come a little closer
      </p>
      <p className="font-ak text-[18px] leading-[1.33] text-ink-80 mb-6 max-w-[340px]">
        Find out what's coming, who's joining us, and where we're going next - before everyone else does.
      </p>

      {status === "sent" ? (
        <p className="font-ak text-[16px] text-paper-white">
          Thanks, {form.name || "you"}, you're on the list.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-[340px]">
          <div className="border-b border-ink-30">
            <input
              type="text"
              required
              disabled={status === "sending"}
              value={form.name}
              onChange={update("name")}
              placeholder="First name"
              className={fieldStyle}
            />
          </div>
          <div className="border-b border-ink-30">
            <input
              type="text"
              required
              disabled={status === "sending"}
              value={form.achternaam}
              onChange={update("achternaam")}
              placeholder="Achternaam"
              className={fieldStyle}
            />
          </div>
          <div className="border-b border-ink-30">
            <input
              type="email"
              required
              disabled={status === "sending"}
              value={form.email}
              onChange={update("email")}
              placeholder="Email"
              className={fieldStyle}
            />
          </div>
          <button
            type="submit"
            disabled={status === "sending"}
            className="text-left mt-1 font-ak text-[12px] font-bold uppercase tracking-[0.06em] text-paper-white hover:opacity-60 transition-opacity disabled:opacity-40"
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
  );
}

// Self-managing: checks localStorage on mount to decide whether to auto-open,
// and exposes window.openSignUp() so any component (like Footer's "Subscribe"
// link) can open it without prop drilling through every page.
export default function SignUpModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const subscribed = localStorage.getItem("diamantina-subscribed");
    if (!subscribed) setOpen(true);

    window.openSignUp = () => setOpen(true);
    return () => {
      delete window.openSignUp;
    };
  }, []);

  const onClose = () => setOpen(false);

  return (
    <div
      className="fixed inset-0 z-[90] items-center justify-center p-5"
      style={{ display: open ? "flex" : "none" }}
    >
      {/* Backdrop — intentionally has no onClick, so clicking it does nothing */}
      <div className="absolute inset-0 bg-ink-65" aria-hidden="true" />

      <div className="relative z-[91] bg-onyx w-full max-w-[420px] p-10">
        <button
          onClick={onClose}
          aria-label="Close sign up"
          className="absolute top-3 right-3 z-[92] w-9 h-9 rounded-full bg-paper-white text-onyx border-none text-base cursor-pointer flex items-center justify-center hover:opacity-60 transition-opacity"
        >
          ✕
        </button>
        <div className="mt-4">
          <SignUpForm onSubscribed={onClose} />
        </div>
      </div>
    </div>
  );
}
