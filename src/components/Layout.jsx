import { Outlet } from "react-router-dom";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

// Wraps Home, About, House Rules, FAQ, and Tickets — Nav and Footer render
// once here instead of being duplicated inside every page component.
// Terms of Use and Privacy Policy stay OUTSIDE this layout on purpose
// (they use their own white background and no Footer).
export default function Layout() {
  return (
    <div className="min-h-screen bg-onyx text-paper-white">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}
