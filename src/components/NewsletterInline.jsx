import { useState } from "react";

// Inline, single-line newsletter form — lives permanently on the Home page
// instead of an interrupting popup. Same copy/backend as before.
export default function NewsletterInline() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

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
    } catch {
      setStatus("error");
    }
  };

  return (
    <div id="subscribe" className="flex flex-col items-center px-6 text-center" style={{ paddingBottom: 56 }}>
      <p className="font-ak text-[14px] md:text-[16px] leading-[1.4] text-ink-70 mb-4 max-w-[520px]">
        <span aria-hidden="true" className="text-diamantina">✦</span>{" "}
        Come a little closer — find out what's coming, who's joining us, and where
        we're going next, before everyone else does.
      </p>

      {status === "sent" ? (
        <p className="font-ak text-[14px] text-paper-white">Thanks, you're on the list.</p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex items-center gap-3 w-full max-w-[420px] border-b border-ink-30 pb-1"
        >
          <input
            type="email"
            required
            disabled={status === "sending"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="flex-1 font-ak text-[14px] text-paper-white bg-transparent border-none outline-none py-1.5 min-w-0"
          />
          <button
            type="submit"
            disabled={status === "sending"}
            className="shrink-0 font-ak text-[12px] font-bold uppercase tracking-[0.06em] text-paper-white hover:opacity-60 transition-opacity disabled:opacity-40"
          >
            {status === "sending" ? "Sending..." : "Join →"}
          </button>
        </form>
      )}
      {status === "error" && (
        <p className="font-ak text-[12px] text-diamantina mt-2">
          Something went wrong. Please try again.
        </p>
      )}
    </div>
  );
}
