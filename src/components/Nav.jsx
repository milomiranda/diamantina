import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const DEFAULT_TICKETS_URL = "https://ticketapp.shop/kbfsr";

export default function Nav() {
  const { pathname } = useLocation();
  const [showCheckout, setShowCheckout] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <nav className="flex flex-col md:flex-row items-center md:justify-between gap-3 md:gap-2 px-3 sm:px-4 md:px-6 py-3 md:py-4">
        <div className="flex items-center justify-center md:justify-start gap-2 sm:gap-3 md:gap-10 flex-wrap">
          <NavLink to="/" active={pathname === "/"}>Home</NavLink>
          <NavLink to="/about" active={pathname === "/about"}>About</NavLink>
          <NavLink to="/house-rules" active={pathname === "/house-rules"}>Party Rules</NavLink>
          <NavLink to="/faq" active={pathname === "/faq"}>FAQ</NavLink>
          <NavLink to="/contact" active={pathname === "/contact"}>Contact</NavLink>
        </div>
        <button
          type="button"
          onClick={() => setShowCheckout(true)}
          className="tickets-bounce font-ak text-[13px] sm:text-[15px] md:text-[18px] font-bold uppercase tracking-[0.02em] md:tracking-[0.04em] whitespace-nowrap shrink-0 inline-block text-onyx bg-paper-white hover:opacity-80 transition-opacity"
          style={{ padding: "10px 18px" }}
        >
          Tickets
        </button>
      </nav>

      {showCheckout && (
        <div className="fixed inset-0 z-[95] flex items-center justify-center p-5">
          <div className="absolute inset-0 bg-ink-65" aria-hidden="true" onClick={() => setShowCheckout(false)} />
          <div className="relative z-[96] bg-white w-full max-w-[480px] flex flex-col">
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
      )}
    </header>
  );
}

function NavLink({ to, active, children }) {
  return (
    <Link
      to={to}
      className={`font-ak text-[13px] sm:text-[15px] md:text-[28px] uppercase tracking-[0.02em] md:tracking-[0.04em] text-paper-white transition-opacity whitespace-nowrap ${
        active ? "opacity-100" : "opacity-50 hover:opacity-100"
      }`}
    >
      {children}
    </Link>
  );
}
