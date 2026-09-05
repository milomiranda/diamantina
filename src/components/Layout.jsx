import { Outlet } from "react-router-dom";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

// Wraps Home, About, Party Rules, FAQ, and Tickets — Nav and Footer render
// once here instead of being duplicated inside every page component.
// Terms of Use and Privacy Policy stay OUTSIDE this layout on purpose
// (they use their own white background and no Footer).
//
// Colors are no longer JS-driven here — bg-onyx/text-paper-white etc. react
// automatically to day/night via CSS variables (see index.css + the script
// in index.html that sets the .night class before first paint).
export default function Layout() {
  return (
    <div className="min-h-screen bg-onyx text-paper-white">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}
