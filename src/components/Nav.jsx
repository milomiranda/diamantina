import { Link, useLocation } from "react-router-dom";

export default function Nav() {
  const { pathname } = useLocation();

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <nav className="flex items-center justify-between gap-2 px-3 sm:px-4 md:px-6 py-3 md:py-4 flex-wrap">
        <div className="flex items-center gap-2 sm:gap-3 md:gap-10 flex-wrap">
          <NavLink to="/" active={pathname === "/"}>Home</NavLink>
          <NavLink to="/about" active={pathname === "/about"}>About</NavLink>
          <NavLink to="/house-rules" active={pathname === "/house-rules"}>Party Rules</NavLink>
          <NavLink to="/faq" active={pathname === "/faq"}>FAQ</NavLink>
        </div>
        <a
          href="https://ticketapp.shop/kbfsr"
          target="_blank"
          rel="noopener noreferrer"
          className="tickets-bounce font-ak text-[13px] sm:text-[15px] md:text-[18px] font-bold uppercase tracking-[0.02em] md:tracking-[0.04em] whitespace-nowrap shrink-0 inline-block text-onyx bg-paper-white hover:opacity-80 transition-opacity"
          style={{ padding: "10px 18px" }}
        >
          Tickets
        </a>
      </nav>
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
