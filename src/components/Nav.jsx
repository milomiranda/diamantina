import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";

const DEFAULT_TICKETS_URL = "https://ticketapp.shop/kbfsr";
const LANGUAGES = ["NL", "EN", "ES"];
const COMMUNITY_URL = "https://chat.whatsapp.com/DVetWZu8T3S6ZyDzUldse0?mode=gi_t";

export default function Nav() {
  const { pathname } = useLocation();
  const [showCheckout, setShowCheckout] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  const closeMenu = () => setMenuOpen(false);

  const languageSwitcher = (
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
  );

  const ticketsButton = (extraClass = "") => (
    <button
      type="button"
      onClick={() => setShowCheckout((v) => !v)}
      className={`nav-ticket-btn tickets-bounce font-ak text-[13px] sm:text-[15px] md:text-[18px] font-bold uppercase tracking-[0.02em] md:tracking-[0.04em] whitespace-nowrap shrink-0 inline-block text-onyx bg-paper-white hover:opacity-80 transition-opacity ${extraClass}`}
      style={{ padding: "10px 18px" }}
    >
      {showCheckout ? t("nav.hideCheckout") : t("nav.tickets")}
    </button>
  );

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-onyx/80 backdrop-blur-sm">
      {/* Mobile top bar: hamburger (left) — Tickets (center) — languages (right) */}
      <div className="flex md:hidden items-center justify-between px-4 py-3">
        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menu"
          aria-expanded={menuOpen}
          className="text-paper-white p-1"
        >
          {menuOpen ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M5 5L19 19M19 5L5 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M3 6H21M3 12H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </button>

        {ticketsButton()}

        {languageSwitcher}
      </div>

      {/* Mobile dropdown menu with the nav links, stacked vertically */}
      {menuOpen && (
        <>
          <div className="fixed inset-0 z-[93] md:hidden" onClick={closeMenu} />
          <div className="md:hidden absolute top-full inset-x-0 z-[94] bg-onyx border-t border-ink-15">
            <div className="flex flex-col items-center gap-6 px-6 py-8">
              <NavLink to="/" active={pathname === "/"} onClick={closeMenu} big>{t("nav.home")}</NavLink>
              <NavLink to="/about" active={pathname === "/about"} onClick={closeMenu} big>{t("nav.about")}</NavLink>
              <a
                href={COMMUNITY_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="font-ak text-[22px] uppercase tracking-[0.02em] text-paper-white transition-opacity whitespace-nowrap opacity-90 hover:opacity-100"
              >
                {t("nav.community")}
              </a>
              <NavLink to="/house-rules" active={pathname === "/house-rules"} onClick={closeMenu} big>{t("nav.partyRules")}</NavLink>
              <NavLink to="/faq" active={pathname === "/faq"} onClick={closeMenu} big>{t("nav.faq")}</NavLink>
              <NavLink to="/contact" active={pathname === "/contact"} onClick={closeMenu} big>{t("nav.contact")}</NavLink>
            </div>
          </div>
        </>
      )}

      {/* Desktop nav: unchanged, everything inline in one row */}
      <nav className="nav-container hidden md:flex items-center md:justify-between gap-2 px-6 py-4">
        <div className="nav-links-wrap flex items-center justify-start gap-10 flex-wrap">
          <NavLink to="/" active={pathname === "/"}>{t("nav.home")}</NavLink>
          <NavLink to="/about" active={pathname === "/about"}>{t("nav.about")}</NavLink>
          <a
            href={COMMUNITY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link font-ak text-[28px] uppercase tracking-[0.04em] text-paper-white transition-opacity whitespace-nowrap opacity-50 hover:opacity-100"
          >
            {t("nav.community")}
          </a>
          <NavLink to="/house-rules" active={pathname === "/house-rules"}>{t("nav.partyRules")}</NavLink>
          <NavLink to="/faq" active={pathname === "/faq"}>{t("nav.faq")}</NavLink>
          <NavLink to="/contact" active={pathname === "/contact"}>{t("nav.contact")}</NavLink>
        </div>
        <div className="flex items-center gap-3">
          {languageSwitcher}
          {ticketsButton()}
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
                aria-label={t("nav.closeCheckout")}
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
                  {t("nav.troubleLoading")}
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}

function NavLink({ to, active, children, onClick, big = false }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`nav-link font-ak uppercase tracking-[0.02em] md:tracking-[0.04em] text-paper-white transition-opacity whitespace-nowrap ${
        big ? "text-[22px]" : "text-[13px] sm:text-[15px] md:text-[28px]"
      } ${active ? "opacity-100" : big ? "opacity-90 hover:opacity-100" : "opacity-50 hover:opacity-100"}`}
    >
      {children}
    </Link>
  );
}
