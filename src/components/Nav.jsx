import { Link, useLocation } from "react-router-dom";

export default function Nav({ theme }) {
  const { pathname } = useLocation();
  const t = theme || { text: "#101522", bg: "#DDEEFF" };

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <nav className="flex items-center justify-between gap-2 px-3 sm:px-4 md:px-6 py-3 md:py-4 flex-wrap">
        <div className="flex items-center gap-2 sm:gap-3 md:gap-10 flex-wrap">
          <NavLink to="/" active={pathname === "/"} color={t.text}>Home</NavLink>
          <NavLink to="/about" active={pathname === "/about"} color={t.text}>About</NavLink>
          <NavLink to="/house-rules" active={pathname === "/house-rules"} color={t.text}>Party Rules</NavLink>
          <NavLink to="/faq" active={pathname === "/faq"} color={t.text}>FAQ</NavLink>
        </div>
        <button
          onClick={() => window.openTickets?.()}
          className="tickets-bounce font-ak text-[11px] sm:text-[13px] md:text-[18px] font-bold uppercase tracking-[0.02em] md:tracking-[0.04em] whitespace-nowrap shrink-0 border-none cursor-pointer"
          style={{
            color: t.bg,
            backgroundColor: t.text,
            padding: "10px 18px",
            transition: "background-color 0.1s linear, color 0.1s linear",
          }}
        >
          Tickets
        </button>
      </nav>
    </header>
  );
}

function NavLink({ to, active, children, color }) {
  return (
    <Link
      to={to}
      className={`font-ak text-[11px] sm:text-[13px] md:text-[28px] uppercase tracking-[0.02em] md:tracking-[0.04em] transition-opacity whitespace-nowrap ${
        active ? "opacity-100" : "opacity-50 hover:opacity-100"
      }`}
      style={{ color, transition: "color 0.1s linear" }}
    >
      {children}
    </Link>
  );
}
