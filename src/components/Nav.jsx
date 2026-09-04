import { Link, useLocation } from "react-router-dom";

export default function Nav() {
  const { pathname } = useLocation();
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <nav className="flex items-center justify-between px-4 md:px-6 py-4">
        <div className="flex items-center gap-4 md:gap-10">
          <NavLink to="/" active={pathname === "/"}>Home</NavLink>
          <NavLink to="/about" active={pathname === "/about"}>About</NavLink>
          <NavLink to="/house-rules" active={pathname === "/house-rules"}>House Rules</NavLink>
          <NavLink to="/faq" active={pathname === "/faq"}>FAQ</NavLink>
        </div>
        <Link
          to="/tickets"
          className="font-ak text-[15px] md:text-[28px] font-bold uppercase tracking-[0.04em] text-paper-white hover:opacity-60 transition-opacity whitespace-nowrap"
        >
          Tickets
        </Link>
      </nav>
    </header>
  );
}

function NavLink({ to, active, children }) {
  return (
    <Link
      to={to}
      className={`font-ak text-[15px] md:text-[28px] uppercase tracking-[0.04em] text-paper-white transition-opacity whitespace-nowrap ${
        active ? "opacity-100" : "opacity-50 hover:opacity-100"
      }`}
    >
      {children}
    </Link>
  );
}
