import { useState } from "react";
import Particles from "@/components/Particles";

const faqs = [
  {
    q: "So, is Diamantina a gay party?",
    a: "Yes and no. Diamantina comes from queer culture and is created with a queer crowd in mind, but we don't want to put the night, or the people in it, inside a box. What brings us together is a shared appetite for great music, unexpected sounds and a really good dance floor. We want people to come because they're excited to hear something different, lose themselves in the music and have a fucking good time. Queer, straight, somewhere in between or nowhere at all, you're welcome. Respect the room, respect each other, and enjoy the ride.",
  },
  {
    q: "Where do I buy tickets?",
    a: "Presale happens online through our ticketshop. Limited door sale is also available, but it depends on how close the event is to capacity, so we can't guarantee tickets will still be available on the night. We recommend buying in advance if you don't want to risk it.",
    link: { label: "Go to ticketshop", href: "https://ticketapp.shop/kbfsr" },
  },
  { q: "I've lost an item at Diamantina.", type: "lost-item" },
  {
    q: "Is there a minimum age?",
    a: "18+. Valid photo ID is required at the entrance, no exceptions, so don't forget it.",
  },
  {
    q: "Where can I find my ticket?",
    a: "Once you've completed your purchase, your ticket is sent straight to your email. Make sure to have it ready to show at the entrance. Door tickets are also available, subject to availability.",
  },
  {
    q: "Can I change or cancel the ticket I bought?",
    a: "Only if you selected ticket protection at checkout. If you did, reach out to Ticketapp directly to sort it out.",
  },
  {
    q: "Are there rules I need to know before entering Diamantina?",
    a: "Yes, check our Party Rules before you come. Anything not covered there, send us an email and we'll help.",
  },
];

const inputClass =
  "font-ak text-[14px] text-paper-white bg-transparent border border-ink-25 px-2.5 py-2 focus:outline-none focus:border-ink-60";

function LostItemForm() {
  const fields = [
    { name: "firstName", label: "First name", type: "text" },
    { name: "lastName", label: "Last name", type: "text" },
    { name: "email", label: "Your email", type: "email" },
    { name: "eventDate", label: "Which event / date", type: "text" },
    { name: "item", label: "What did you lose", type: "text" },
    { name: "color", label: "Color (if applicable)", type: "text" },
    { name: "contents", label: "What's inside (if applicable)", type: "text" },
    { name: "description", label: "Description of the object", type: "textarea" },
  ];

  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", eventDate: "",
    item: "", color: "", contents: "", description: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/lost-item", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <p className="font-ak text-[16px] text-paper-white">
        Thanks — we've got your report and will reach out if we find it.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[640px]">
      {fields.map((f) => (
        <div key={f.name} className={`flex flex-col gap-1.5 ${f.type === "textarea" ? "md:col-span-2" : ""}`}>
          <label className="font-ak text-[11px] uppercase tracking-[0.06em] text-ink-50">
            {f.label}
          </label>
          {f.type === "textarea" ? (
            <textarea
              rows={3}
              required
              disabled={status === "sending"}
              value={form[f.name]}
              onChange={update(f.name)}
              className={`${inputClass} resize-y`}
            />
          ) : (
            <input
              type={f.type}
              required={["firstName", "lastName", "email", "item"].includes(f.name)}
              disabled={status === "sending"}
              value={form[f.name]}
              onChange={update(f.name)}
              className={inputClass}
            />
          )}
        </div>
      ))}
      <div className="md:col-span-2 mt-1">
        <button
          type="submit"
          disabled={status === "sending"}
          className="font-ak text-[12px] font-bold uppercase tracking-[0.06em] text-onyx bg-paper-white px-6 py-3 hover:opacity-80 transition-opacity disabled:opacity-40"
        >
          {status === "sending" ? "Sending..." : "Send report"}
        </button>
        {status === "error" && (
          <p className="font-ak text-[13px] text-diamantina mt-2">
            Something went wrong. Please try again.
          </p>
        )}
      </div>
    </form>
  );
}

function LostItemQuestion() {
  const [openForm, setOpenForm] = useState(false);
  return (
    <>
      <p className="font-ak text-[16px] leading-[1.5] text-ink-70 text-justify mb-4">
        Fill out the form below and it'll come straight to us.
      </p>
      <button
        onClick={() => setOpenForm((v) => !v)}
        className="font-ak text-[12px] font-bold uppercase tracking-[0.06em] text-paper-white border border-ink-30 px-[18px] py-[10px] hover:opacity-60 transition-opacity"
      >
        {openForm ? "Close form" : "Report lost item"}
      </button>
      <div
        className={`grid grid-cols-1 transition-all duration-500 ${
          openForm ? "grid-rows-[1fr] opacity-100 mt-5" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <LostItemForm />
        </div>
      </div>
    </>
  );
}

function FAQItem({ item, index }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`border border-ink-15 px-5 md:px-7 py-6 ${index === 0 ? "" : "-mt-px"}`}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-6 text-left"
      >
        <span className="flex items-baseline gap-4">
          <span className="font-ak text-[12px] uppercase tracking-[0.06em] text-ink-40 shrink-0">
            0{index + 1}
          </span>
          <span className="font-gs text-[22px] md:text-[28px] leading-[1.2] tracking-[-0.01em] text-paper-white">
            {item.q}
          </span>
        </span>
        <span className="font-ak text-[18px] text-paper-white shrink-0">{open ? "−" : "+"}</span>
      </button>
      <div
        className={`grid grid-cols-1 transition-all duration-500 ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="pt-5 pl-6 pr-6">
            {item.type === "lost-item" ? (
              <LostItemQuestion />
            ) : (
              <>
                <p className="font-ak text-[16px] leading-[1.5] text-ink-70 text-justify">
                  {item.a}
                </p>
                {item.link && (
                  <a
                    href={item.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 font-ak text-[12px] font-bold uppercase tracking-[0.06em] text-paper-white underline underline-offset-[3px] hover:opacity-60 transition-opacity"
                  >
                    {item.link.label} →
                  </a>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <main className="relative overflow-hidden px-4 md:px-6 pt-40 pb-48">
        <Particles />
        <div className="relative z-10">
        <p className="font-ak text-[12px] uppercase tracking-[0.06em] text-ink-40 mb-8">
          FAQ
        </p>
        <h1 className="font-ak text-[48px] md:text-[72px] leading-[0.9] tracking-[-0.02em] max-w-[760px]">
          You have questions? Here are the answers.
        </h1>

        <div className="mt-24 flex flex-col">
          {faqs.map((item, i) => (
            <FAQItem key={i} item={item} index={i} />
          ))}
        </div>
        </div>
      </main>
  );
}
