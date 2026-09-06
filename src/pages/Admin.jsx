import { useState, useEffect } from "react";
import Particles from "@/components/Particles";

const EVENTS_JSON_URL = "https://raw.githubusercontent.com/milomiranda/diamantina-content/main/events.json";

const emptyEvent = {
  id: "",
  name: "",
  date: "",
  eventDateISO: "",
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

// Resizes + re-encodes the flyer as JPEG so uploads stay well under Vercel's
// request size limit, even for large phone-camera photos or screenshots.
function compressImage(file, maxDimension = 1600, quality = 0.82) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const reader = new FileReader();
    reader.onload = () => {
      img.onload = () => {
        let { width, height } = img;
        if (width > maxDimension || height > maxDimension) {
          const scale = maxDimension / Math.max(width, height);
          width = Math.round(width * scale);
          height = Math.round(height * scale);
        }
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, width, height);
        resolve({
          dataUrl: canvas.toDataURL("image/jpeg", quality),
          filename: file.name.replace(/\.[^.]+$/, "") + ".jpg",
        });
      };
      img.onerror = reject;
      img.src = reader.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export default function Admin() {
  const [password, setPassword] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [checkingPassword, setCheckingPassword] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [events, setEvents] = useState([]);
  const [form, setForm] = useState(emptyEvent);
  const [imageFile, setImageFile] = useState(null);
  const [status, setStatus] = useState("idle"); // idle | saving | saved | error
  const [errorMsg, setErrorMsg] = useState("");

  const checkPassword = async (e) => {
    e.preventDefault();
    setCheckingPassword(true);
    setLoginError("");
    try {
      const res = await fetch("/api/admin-save-event", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password, action: "verify" }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Incorrect password");
      setUnlocked(true);
    } catch (err) {
      setLoginError(err.message || "Incorrect password");
    } finally {
      setCheckingPassword(false);
    }
  };

  useEffect(() => {
    if (!unlocked) return;
    fetch(`${EVENTS_JSON_URL}?t=${Date.now()}`)
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

  const normalizeDj = (dj) => {
    if (dj.links) return dj;
    const links = [];
    if (dj.link1) links.push({ url: dj.link1, label: dj.link1Label || "" });
    if (dj.link2) links.push({ url: dj.link2, label: dj.link2Label || "" });
    return { name: dj.name || "", links };
  };

  const updateDj = (index, field) => (e) => {
    const value = e.target.value;
    setForm((f) => {
      const djs = [...(f.djs || [])];
      djs[index] = { ...djs[index], [field]: value };
      return { ...f, djs };
    });
  };

  const updateDjLink = (djIndex, linkIndex, field) => (e) => {
    const value = e.target.value;
    setForm((f) => {
      const djs = [...(f.djs || [])];
      const links = [...(djs[djIndex].links || [])];
      links[linkIndex] = { ...links[linkIndex], [field]: value };
      djs[djIndex] = { ...djs[djIndex], links };
      return { ...f, djs };
    });
  };

  const addDjLink = (djIndex) => {
    setForm((f) => {
      const djs = [...(f.djs || [])];
      djs[djIndex] = { ...djs[djIndex], links: [...(djs[djIndex].links || []), { url: "", label: "" }] };
      return { ...f, djs };
    });
  };

  const removeDjLink = (djIndex, linkIndex) => {
    setForm((f) => {
      const djs = [...(f.djs || [])];
      djs[djIndex] = { ...djs[djIndex], links: (djs[djIndex].links || []).filter((_, i) => i !== linkIndex) };
      return { ...f, djs };
    });
  };

  const addDj = () => {
    setForm((f) => ({
      ...f,
      djs: [...(f.djs || []), { name: "", links: [] }],
    }));
  };

  const removeDj = (index) => {
    setForm((f) => ({ ...f, djs: f.djs.filter((_, i) => i !== index) }));
  };

  const loadEvent = (ev) => {
    setForm({ ...emptyEvent, ...ev, djs: (ev.djs || []).map(normalizeDj) });
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
        const compressed = await compressImage(imageFile);
        imageBase64 = compressed.dataUrl;
        imageFilename = compressed.filename;
      }

      const res = await fetch("/api/admin-save-event", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password, event: form, imageBase64, imageFilename }),
      });

      let data;
      try {
        data = await res.json();
      } catch {
        throw new Error(
          res.status === 413
            ? "The flyer image is too large. Try a smaller image."
            : `Server error (${res.status}). Please try again.`
        );
      }
      if (!res.ok) throw new Error(data.error || "Failed");

      setStatus("saved");
      setForm(data.event);
      setImageFile(null);
      setEvents((prev) => {
        const idx = prev.findIndex((e) => e.id === data.event.id);
        if (idx >= 0) {
          const next = [...prev];
          next[idx] = data.event;
          return next;
        }
        return [...prev, data.event];
      });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message || "Something went wrong.");
    }
  };

  const deleteEvent = async (ev) => {
    if (!window.confirm(`Delete "${ev.name || ev.id}"? This can't be undone.`)) return;
    setStatus("saving");
    setErrorMsg("");
    try {
      const res = await fetch("/api/admin-save-event", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password, action: "delete", eventId: ev.id }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed");

      setEvents((prev) => prev.filter((e) => e.id !== ev.id));
      if (form.id === ev.id) setForm(emptyEvent);
      setStatus("idle");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message || "Something went wrong.");
    }
  };

  const todayISO = new Date().toISOString().slice(0, 10);
  const upcomingEvents = events.filter((ev) => !ev.eventDateISO || ev.eventDateISO >= todayISO);
  const pastEvents = events.filter((ev) => ev.eventDateISO && ev.eventDateISO < todayISO);

  const inputClass =
    "font-ak text-[14px] text-paper-white bg-transparent border border-ink-25 px-3 py-2.5 w-full focus:outline-none focus:border-diamantina transition-colors";
  const labelClass = "font-ak text-[11px] uppercase tracking-[0.06em] text-ink-50";
  const sectionLabelClass = "font-ak text-[12px] uppercase tracking-[0.06em] text-diamantina mb-3";

  // ---------- Locked screen ----------
  if (!unlocked) {
    return (
      <div className="relative min-h-screen bg-onyx text-paper-white flex items-center justify-center px-6 overflow-hidden">
        <Particles />
        <form
          onSubmit={checkPassword}
          className="relative z-10 w-full max-w-[340px] flex flex-col items-center gap-6"
        >
          <img src="/logo.webp" alt="Diamantina" className="w-full" style={{ maxWidth: 340 }} />
          <div className="w-full flex flex-col gap-1 text-center">
            <p className="font-ak text-[11px] uppercase tracking-[0.06em] text-ink-40">
              Internal tool · Private
            </p>
            <p className="font-ak text-[13px] text-ink-60">
              Not part of the public site. For Diamantina's own use only.
            </p>
          </div>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className={inputClass + " text-center"}
          />
          {loginError && (
            <p className="font-ak text-[12px] text-diamantina text-center">{loginError}</p>
          )}
          <button
            type="submit"
            disabled={checkingPassword}
            className="font-ak text-[12px] font-bold uppercase tracking-[0.06em] text-onyx bg-paper-white px-6 py-3 hover:opacity-80 transition-opacity disabled:opacity-40 w-full"
          >
            {checkingPassword ? "Checking..." : "Enter"}
          </button>
        </form>
      </div>
    );
  }

  // ---------- Dashboard ----------
  return (
    <div className="relative min-h-screen bg-onyx text-paper-white overflow-hidden">
      <Particles />
      <div className="relative z-10 px-4 md:px-6 py-16">
        <div className="max-w-[960px] mx-auto">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-2">
            <img src="/logo.webp" alt="Diamantina" style={{ height: 72, width: "auto" }} />
            <p className="font-ak text-[11px] uppercase tracking-[0.06em] text-ink-40">
              Internal tool · Private
            </p>
          </div>
          <p className="font-gs text-[28px] font-bold mb-10">✦ Event manager</p>

          {status === "saving" && (
            <p className="font-ak text-[13px] text-ink-60 mb-6">Working...</p>
          )}
          {status === "error" && (
            <p className="font-ak text-[13px] text-diamantina mb-6">⚠ {errorMsg}</p>
          )}

          {/* Existing events list */}
          <div className="border border-ink-15 p-5 mb-10">
            <p className={sectionLabelClass}>Upcoming events</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {upcomingEvents.length === 0 && (
                <p className="font-ak text-[13px] text-ink-40">No upcoming events.</p>
              )}
              {upcomingEvents.map((ev) => (
                <div key={ev.id} className="flex items-stretch border border-ink-25">
                  <button
                    onClick={() => loadEvent(ev)}
                    className="font-ak text-[12px] uppercase tracking-[0.04em] px-3 py-2 hover:bg-ink-10 transition-colors"
                  >
                    {ev.name || ev.id}
                  </button>
                  <button
                    onClick={() => deleteEvent(ev)}
                    aria-label={`Delete ${ev.name || ev.id}`}
                    className="font-ak text-[12px] px-2.5 border-l border-ink-25 text-diamantina hover:bg-diamantina/10 transition-colors"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>

            <p className={sectionLabelClass}>Past events (archived)</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {pastEvents.length === 0 && (
                <p className="font-ak text-[13px] text-ink-40">No past events yet.</p>
              )}
              {pastEvents.map((ev) => (
                <div key={ev.id} className="flex items-stretch border border-ink-15 opacity-60">
                  <button
                    onClick={() => loadEvent(ev)}
                    className="font-ak text-[12px] uppercase tracking-[0.04em] px-3 py-2 hover:bg-ink-10 transition-colors"
                  >
                    {ev.name || ev.id}
                  </button>
                  <button
                    onClick={() => deleteEvent(ev)}
                    aria-label={`Delete ${ev.name || ev.id}`}
                    className="font-ak text-[12px] px-2.5 border-l border-ink-15 text-diamantina hover:bg-diamantina/10 transition-colors"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>

            <button
              onClick={startNew}
              className="font-ak text-[12px] font-bold uppercase tracking-[0.06em] text-diamantina underline underline-offset-2"
            >
              + New event
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="border border-ink-15 p-5">
            <p className={sectionLabelClass}>{form.id ? "Edit event" : "New event"}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
                <label className={labelClass}>Event date (used to auto-archive past events)</label>
                <input required type="date" value={form.eventDateISO} onChange={update("eventDateISO")} className={inputClass} />
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
                  <p className="font-ak text-[11px] text-ink-40 mt-1 truncate">Current: {form.flyer}</p>
                )}
              </div>
            </div>

            {/* DJs / line-up */}
            <div className="mt-8">
              <div className="flex items-center justify-between mb-3">
                <label className={labelClass}>Line-up (DJs / artists)</label>
                <button
                  type="button"
                  onClick={addDj}
                  className="font-ak text-[11px] font-bold uppercase tracking-[0.06em] text-diamantina underline underline-offset-2"
                >
                  + Add DJ
                </button>
              </div>
              <div className="flex flex-col gap-3">
                {(form.djs || []).map((dj, i) => (
                  <div key={i} className="flex flex-col gap-2 border border-ink-15 p-3">
                    <div className="flex items-end gap-2">
                      <div className="flex flex-col gap-1 flex-1">
                        <label className={labelClass}>Name</label>
                        <input value={dj.name} onChange={updateDj(i, "name")} className={inputClass} />
                      </div>
                      <button
                        type="button"
                        onClick={() => removeDj(i)}
                        className="font-ak text-[11px] uppercase tracking-[0.06em] text-diamantina border border-diamantina/30 px-3 py-2.5 hover:bg-diamantina/10 transition-colors shrink-0"
                      >
                        Remove
                      </button>
                    </div>
                    <div className="flex flex-col gap-2">
                      {(dj.links || []).map((link, li) => (
                        <div key={li} className="grid grid-cols-1 md:grid-cols-[2fr_2fr_auto] gap-2 items-end">
                          <div className="flex flex-col gap-1">
                            <label className={labelClass}>Link URL</label>
                            <input value={link.url} onChange={updateDjLink(i, li, "url")} className={inputClass} placeholder="https://instagram.com/..." />
                          </div>
                          <div className="flex flex-col gap-1">
                            <label className={labelClass}>Link name (e.g. Instagram)</label>
                            <input value={link.label || ""} onChange={updateDjLink(i, li, "label")} className={inputClass} placeholder="Instagram" />
                          </div>
                          <button
                            type="button"
                            onClick={() => removeDjLink(i, li)}
                            className="font-ak text-[11px] uppercase tracking-[0.06em] text-diamantina border border-diamantina/30 px-3 py-2.5 hover:bg-diamantina/10 transition-colors"
                          >
                            Remove
                          </button>
                        </div>
                      ))}
                      {(!dj.links || dj.links.length === 0) && (
                        <p className="font-ak text-[12px] text-ink-40">No links added yet.</p>
                      )}
                      <button
                        type="button"
                        onClick={() => addDjLink(i)}
                        className="font-ak text-[11px] font-bold uppercase tracking-[0.06em] text-diamantina underline underline-offset-2 self-start"
                      >
                        + Add link
                      </button>
                    </div>
                  </div>
                ))}
                {(!form.djs || form.djs.length === 0) && (
                  <p className="font-ak text-[13px] text-ink-40">No DJs added yet.</p>
                )}
              </div>
            </div>

            <div className="flex items-center gap-4 mt-8">
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
    </div>
  );
}
