import { Outlet, useLocation } from "react-router-dom";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import useScrollTheme from "@/hooks/useScrollTheme";

// Wraps Home, About, Party Rules, FAQ, and Tickets — Nav and Footer render
// once here instead of being duplicated inside every page component.
// Terms of Use and Privacy Policy stay OUTSIDE this layout on purpose
// (they use their own white background and no Footer).
export default function Layout() {
  const { pathname } = useLocation();
  const theme = useScrollTheme(pathname === "/"); // only animates on Home

  return (
    <div className="min-h-screen" style={{ backgroundColor: theme.bg, color: theme.text, transition: "background-color 0.1s linear" }}>
      <Nav theme={theme} />
      <Outlet context={theme} />
      <Footer theme={theme} />
    </div>
  );
}
