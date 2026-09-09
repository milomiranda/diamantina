import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from '@/components/ScrollToTop';
import SmoothScroll from '@/components/SmoothScroll';
import CookieBanner from '@/components/CookieBanner';
import LegalModal from '@/components/LegalModal';
import SignUpPopup from '@/components/SignUpPopup';
import TiltOnMouse from '@/components/TiltOnMouse';
import Layout from '@/components/Layout';

import Home from '@/pages/Home';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import HouseRules from '@/pages/HouseRules';
import FAQ from '@/pages/FAQ';
import Tickets from '@/pages/Tickets';
import TermsOfUse from '@/pages/TermsOfUse';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import Admin from '@/pages/Admin';
import PageNotFound from '@/pages/PageNotFound';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <SmoothScroll />
      <Routes>
        {/* Nav + Footer render once in Layout, shared by all pages below */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/house-rules" element={<HouseRules />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/tickets" element={<Tickets />} />
        </Route>

        {/* Terms of Use and Privacy Policy are separate documents again,
            each with its own route. Footer/CookieBanner open them with
            target="_blank" so they land in a new tab. */}
        <Route path="/terms" element={<TermsOfUse />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />

        {/* Not linked anywhere in the nav — only reachable by typing the URL */}
        <Route path="/admin" element={<Admin />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <CookieBanner />
      <LegalModal />
      <SignUpPopup />
      <div
        className="fixed z-[5] pointer-events-none w-[300px] right-[-150px] bottom-[-60px] sm:w-[420px] sm:right-[-210px] sm:bottom-[-70px] md:w-[560px] md:right-[-280px] md:bottom-[-85px] lg:w-[720px] lg:right-[-360px] lg:bottom-[-100px]"
      >
        <TiltOnMouse maxTilt={10}>
          <img
            src="/ceiba.webp"
            alt=""
            aria-hidden="true"
            width="900"
            height="750"
            className="tree-glow"
            style={{
              width: "100%",
              height: "auto",
              userSelect: "none",
              opacity: 0.9,
            }}
          />
        </TiltOnMouse>
      </div>
    </Router>
  );
}

export default App;
