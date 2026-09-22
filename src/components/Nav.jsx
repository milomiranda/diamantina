import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const DEFAULT_TICKETS_URL = "https://ticketapp.shop/kbfsr";
const LANGUAGES = ["NL", "EN", "ES"];

export default function Nav() {
  const { pathname } = useLocation();
  const [showCheckout, setShowCheckout] = useState(false);
  const [lang, setLang] = useState("EN");

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-onyx/80 backdrop-blur-sm">
      <nav className="nav-container flex flex-col md:flex-row items-center md:justify-between gap-3 md:gap-2 px-3 sm:px-4 md:px-6 py-3 md:py-4">
        <div className="nav-links-wrap flex items-center justify-center md:justify-start gap-2 sm:gap-3 md:gap-10 flex-wrap">
          <NavLink to="/" active={pathname === "/"}>Home</NavLink>
          <NavLink to="/about" active={pathname === "/about"}>About</NavLink>
          <a
            href="https://chat.whatsapp.com/DVetWZu8T3S6ZyDzUldse0?mode=gi_t"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link font-ak text-[13px] sm:text-[15px] md:text-[28px] uppercase tracking-[0.02em] md:tracking-[0.04em] text-paper-white transition-opacity whitespace-nowrap opacity-50 hover:opacity-100"
          >
            Community
          </a>
          <NavLink to="/house-rules" active={pathname === "/house-rules"}>Party Rules</NavLink>
          <NavLink to="/faq" active={pathname === "/faq"}>FAQ</NavLink>
          <NavLink to="/contact" active={pathname === "/contact"}>Contact</NavLink>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="flex flex-col items-center justify-center gap-1" style={{ padding: "2px 6px" }}>
            {LANGUAGES.map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setLang(code)}
                className={`font-ak text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.04em] leading-none text-paper-white transition-opacity ${
                  lang === code ? "opacity-100" : "opacity-40 hover:opacity-80"
                }`}
              >
                {code}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setShowCheckout((v) => !v)}
            className="nav-ticket-btn tickets-bounce font-ak text-[13px] sm:text-[15px] md:text-[18px] font-bold uppercase tracking-[0.02em] md:tracking-[0.04em] whitespace-nowrap shrink-0 inline-block text-onyx bg-paper-white hover:opacity-80 transition-opacity"
            style={{ padding: "10px 18px" }}
          >
            {showCheckout ? "Hide checkout ✕" : "Tickets"}
          </button>
        </div>
      </nav>

      {showCheckout && (
        <>
          <div className="fixed inset-0 z-[94]" onClick={() => setShowCheckout(false)} />
          <div
            className="absolute top-full inset-x-0 z-[95] flex justify-center px-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative bg-white w-full max-w-[480px] flex flex-col">
              <button
                onClick={() => setShowCheckout(false)}
                aria-label="Close checkout"
                className="absolute top-3 right-3 z-[97] w-8 h-8 rounded-full bg-[#101522] text-white border-none text-sm cursor-pointer flex items-center justify-center hover:opacity-60 transition-opacity"
              >
                ✕
              </button>
              <iframe
                src={DEFAULT_TICKETS_URL}
                title="Tickets"
                style={{ width: "100%", height: 700, border: "none", display: "block" }}
              />
              <div className="border-t border-ink-15 bg-onyx flex justify-center" style={{ padding: "10px 14px" }}>
                <a
                  href={DEFAULT_TICKETS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-ak text-[11px] uppercase tracking-[0.04em] underline underline-offset-2 hover:opacity-60 transition-opacity text-paper-white text-center"
                >
                  Trouble loading? Open checkout in a new tab ↗
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}

function NavLink({ to, active, children }) {
  return (
    <Link
      to={to}
      className={`nav-link font-ak text-[13px] sm:text-[15px] md:text-[28px] uppercase tracking-[0.02em] md:tracking-[0.04em] text-paper-white transition-opacity whitespace-nowrap ${
        active ? "opacity-100" : "opacity-50 hover:opacity-100"
      }`}
    >
      {children}
    </Link>
  );
}
