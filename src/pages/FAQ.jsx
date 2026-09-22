import { useState } from "react";
import Particles from "@/components/Particles";
import usePageTitle from "@/hooks/usePageTitle";
import { useLanguage } from "@/i18n/LanguageContext";

const inputClass =
  "font-ak text-[14px] text-paper-white bg-transparent border border-ink-25 px-2.5 py-2 focus:outline-none focus:border-ink-60";

function LostItemForm({ t }) {
  const fields = [
    { name: "firstName", label: t("faq.lostItem.fields.firstName"), type: "text" },
    { name: "lastName", label: t("faq.lostItem.fields.lastName"), type: "text" },
    { name: "email", label: t("faq.lostItem.fields.email"), type: "email" },
    { name: "eventDate", label: t("faq.lostItem.fields.eventDate"), type: "text" },
    { name: "item", label: t("faq.lostItem.fields.item"), type: "text" },
    { name: "color", label: t("faq.lostItem.fields.color"), type: "text" },
    { name: "contents", label: t("faq.lostItem.fields.contents"), type: "text" },
    { name: "description", label: t("faq.lostItem.fields.description"), type: "textarea" },
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
        {t("faq.lostItem.thanks")}
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
          {status === "sending" ? t("faq.lostItem.sending") : t("faq.lostItem.sendReport")}
        </button>
        {status === "error" && (
          <p className="font-ak text-[13px] text-diamantina mt-2">
            {t("faq.lostItem.error")}
          </p>
        )}
      </div>
    </form>
  );
}

function LostItemQuestion({ t }) {
  const [openForm, setOpenForm] = useState(false);
  return (
    <>
      <p className="font-ak text-[16px] leading-[1.5] text-ink-70 text-justify mb-4">
        {t("faq.lostItem.intro")}
      </p>
      <button
        onClick={() => setOpenForm((v) => !v)}
        className="font-ak text-[12px] font-bold uppercase tracking-[0.06em] text-paper-white border border-ink-30 px-[18px] py-[10px] hover:opacity-60 transition-opacity"
      >
        {openForm ? t("faq.lostItem.closeButton") : t("faq.lostItem.reportButton")}
      </button>
      <div
        className={`grid grid-cols-1 transition-all duration-500 ${
          openForm ? "grid-rows-[1fr] opacity-100 mt-5" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <LostItemForm t={t} />
        </div>
      </div>
    </>
  );
}

function FAQItem({ item, index, t }) {
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
              <LostItemQuestion t={t} />
            ) : (
              <>
                <p className="font-ak text-[16px] leading-[1.5] text-ink-70 text-justify">
                  {item.a}
                </p>
                {item.linkLabel && (
                  <a
                    href="https://ticketapp.shop/kbfsr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 font-ak text-[12px] font-bold uppercase tracking-[0.06em] text-paper-white underline underline-offset-[3px] hover:opacity-60 transition-opacity"
                  >
                    {item.linkLabel} →
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
  const { t } = useLanguage();
  usePageTitle(t("faq.kicker"), t("faq.metaDescription"));
  const faqs = t("faq.items");
  return (
    <main className="relative overflow-hidden px-4 md:px-6 pt-40 pb-48">
        <Particles />
        <div className="relative z-10">
        <p className="font-ak text-[12px] uppercase tracking-[0.06em] text-ink-40 mb-8">
          {t("faq.kicker")}
        </p>
        <h1 className="font-ak text-[48px] md:text-[72px] leading-[0.9] tracking-[-0.02em] max-w-[760px]">
          {t("faq.headingPre")}<strong className="font-bold">{t("faq.headingStrong")}</strong>{t("faq.headingPost")}
        </h1>

        <div className="mt-24 flex flex-col">
          {faqs.map((item, i) => (
            <FAQItem key={i} item={item} index={i} t={t} />
          ))}
        </div>
        </div>
      </main>
  );
}
