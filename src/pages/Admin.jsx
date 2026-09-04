import { useState, useEffect } from "react";

const EVENTS_JSON_URL = "https://raw.githubusercontent.com/milomiranda/diamantina-content/main/events.json";

const emptyEvent = {
  id: "",
  name: "",
  date: "",
  time: "",
  location: "",
  category: "",
  description: "",
  flyer: "",
  ticketsUrl: "",
  djs: [],
};

function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export default function Admin() {
  const [password, setPassword] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [events, setEvents] = useState([]);
  const [form, setForm] = useState(emptyEvent);
  const [imageFile, setImageFile] = useState(null);
  const [status, setStatus] = useState("idle"); // idle | saving | saved | error
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (!unlocked) return;
    fetch(EVENTS_JSON_URL)
      .then((r) => (r.ok ? r.json() : { events: [] }))
      .then((data) => setEvents(data.events || []))
      .catch(() => setEvents([]));
  }, [unlocked, status]);

  const update = (field) => (e) => {
    const value = e.target.value;
    setForm((f) => {
      const next = { ...f, [field]: value };
      if (field === "name" && !f.id) next.id = slugify(value);
      return next;
    });
  };

  const updateDj = (index, field) => (e) => {
    const value = e.target.value;
    setForm((f) => {
      const djs = [...(f.djs || [])];
      djs[index] = { ...djs[index], [field]: value };
      return { ...f, djs };
    });
  };

  const addDj = () => {
    setForm((f) => ({ ...f, djs: [...(f.djs || []), { name: "", link1: "", link2: "" }] }));
  };

  const removeDj = (index) => {
    setForm((f) => ({ ...f, djs: f.djs.filter((_, i) => i !== index) }));
  };

  const loadEvent = (ev) => {
    setForm({ ...emptyEvent, ...ev, djs: ev.djs || [] });
    setImageFile(null);
    setStatus("idle");
  };

  const startNew = () => {
    setForm(emptyEvent);
    setImageFile(null);
    setStatus("idle");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("saving");
    setErrorMsg("");
    try {
      let imageBase64 = null;
      let imageFilename = null;
      if (imageFile) {
        imageBase64 = await fileToBase64(imageFile);
        imageFilename = imageFile.name;
      }

      const res = await fetch("/api/admin-save-event", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password, event: form, imageBase64, imageFilename }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed");

      setStatus("saved");
      setForm(data.event);
      setImageFile(null);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message || "Something went wrong.");
    }
  };

  const inputClass =
    "font-ak text-[14px] text-paper-white bg-transparent border border-paper-white/25 px-3 py-2 w-full focus:outline-none focus:border-paper-white/60";
  const labelClass = "font-ak text-[11px] uppercase tracking-[0.06em] text-paper-white/50";

  if (!unlocked) {
    return (
      <div className="min-h-screen bg-onyx text-paper-white flex items-center justify-center px-6">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setUnlocked(true);
          }}
          className="w-full max-w-[320px] flex flex-col gap-4"
        >
          <p className="font-gs text-[28px] font-bold">✦ Admin</p>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className={inputClass}
          />
          <button
            type="submit"
            className="font-ak text-[12px] font-bold uppercase tracking-[0.06em] text-onyx bg-paper-white px-5 py-3 hover:opacity-80 transition-opacity"
          >
            Enter
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-onyx text-paper-white px-4 md:px-6 py-16">
      <div className="max-w-[900px] mx-auto">
        <p className="font-gs text-[32px] font-bold mb-8">✦ Diamantina Admin</p>

        {/* Existing events list */}
        <div className="mb-10">
          <p className={labelClass + " mb-3"}>Existing events</p>
          <div className="flex flex-wrap gap-2 mb-3">
            {events.map((ev) => (
              <button
                key={ev.id}
                onClick={() => loadEvent(ev)}
                className="font-ak text-[12px] uppercase tracking-[0.04em] border border-paper-white/25 px-3 py-2 hover:bg-paper-white/10 transition-colors"
              >
                {ev.name || ev.id}
              </button>
            ))}
          </div>
          <button
            onClick={startNew}
            className="font-ak text-[12px] font-bold uppercase tracking-[0.06em] underline underline-offset-2"
          >
            + New event
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col gap-1.5">
            <label className={labelClass}>Event name</label>
            <input required value={form.name} onChange={update("name")} className={inputClass} />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className={labelClass}>ID (auto from name, editable)</label>
            <input required value={form.id} onChange={update("id")} className={inputClass} />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className={labelClass}>Date (e.g. 09 · 10 · 2026)</label>
            <input required value={form.date} onChange={update("date")} className={inputClass} />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className={labelClass}>Time (e.g. 22:00 - 04:00)</label>
            <input value={form.time} onChange={update("time")} className={inputClass} />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className={labelClass}>Location</label>
            <input required value={form.location} onChange={update("location")} className={inputClass} />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className={labelClass}>Category</label>
            <input value={form.category} onChange={update("category")} className={inputClass} />
          </div>
          <div className="md:col-span-2 flex flex-col gap-1.5">
            <label className={labelClass}>Description</label>
            <textarea rows={4} value={form.description} onChange={update("description")} className={inputClass + " resize-y"} />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className={labelClass}>Tickets URL</label>
            <input value={form.ticketsUrl} onChange={update("ticketsUrl")} className={inputClass} placeholder="https://ticketapp.shop/..." />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className={labelClass}>Flyer image</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImageFile(e.target.files?.[0] || null)}
              className={inputClass}
            />
            {form.flyer && !imageFile && (
              <p className="font-ak text-[11px] text-paper-white/50 mt-1">Current: {form.flyer}</p>
            )}
          </div>

          {/* DJs / line-up */}
          <div className="md:col-span-2 mt-4">
            <div className="flex items-center justify-between mb-3">
              <label className={labelClass}>Line-up (DJs / artists)</label>
              <button
                type="button"
                onClick={addDj}
                className="font-ak text-[11px] font-bold uppercase tracking-[0.06em] underline underline-offset-2"
              >
                + Add DJ
              </button>
            </div>
            <div className="flex flex-col gap-3">
              {(form.djs || []).map((dj, i) => (
                <div key={i} className="grid grid-cols-1 md:grid-cols-[2fr_2fr_2fr_auto] gap-2 items-end border border-paper-white/15 p-3">
                  <div className="flex flex-col gap-1">
                    <label className={labelClass}>Name</label>
                    <input value={dj.name} onChange={updateDj(i, "name")} className={inputClass} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className={labelClass}>Link 1 (optional)</label>
                    <input value={dj.link1} onChange={updateDj(i, "link1")} className={inputClass} placeholder="https://instagram.com/..." />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className={labelClass}>Link 2 (optional)</label>
                    <input value={dj.link2} onChange={updateDj(i, "link2")} className={inputClass} placeholder="https://soundcloud.com/..." />
                  </div>
                  <button
                    type="button"
                    onClick={() => removeDj(i)}
                    className="font-ak text-[11px] uppercase tracking-[0.06em] text-diamantina border border-diamantina/30 px-3 py-2 hover:bg-diamantina/10 transition-colors"
                  >
                    Remove
                  </button>
                </div>
              ))}
              {(!form.djs || form.djs.length === 0) && (
                <p className="font-ak text-[13px] text-paper-white/40">No DJs added yet.</p>
              )}
            </div>
          </div>

          <div className="md:col-span-2 flex items-center gap-4 mt-4">
            <button
              type="submit"
              disabled={status === "saving"}
              className="font-ak text-[12px] font-bold uppercase tracking-[0.06em] text-onyx bg-paper-white px-6 py-3 hover:opacity-80 transition-opacity disabled:opacity-40"
            >
              {status === "saving" ? "Saving..." : "Save event"}
            </button>
            {status === "saved" && (
              <p className="font-ak text-[13px] text-paper-white">Saved ✦ live on the site in a moment.</p>
            )}
            {status === "error" && (
              <p className="font-ak text-[13px] text-diamantina">{errorMsg}</p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
