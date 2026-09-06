import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from '@/components/ScrollToTop';
import CookieBanner from '@/components/CookieBanner';
import SignUpModal from '@/components/SignUpModal';
import LegalModal from '@/components/LegalModal';
import Layout from '@/components/Layout';

import Home from '@/pages/Home';
import About from '@/pages/About';
import HouseRules from '@/pages/HouseRules';
import FAQ from '@/pages/FAQ';
import Tickets from '@/pages/Tickets';
import TermsOfUse from '@/pages/TermsOfUse';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import Admin from '@/pages/Admin';
import PageNotFound from '@/pages/PageNotFound';

/*!
 * ┌────────────────────────────────────────────┐
 * │      ✦  DESIGNED FOR DIAMANTINA  ✦          │
 * │      Custom-built, not off-the-shelf.       │
 * └────────────────────────────────────────────┘
 * If you're reading this in devtools — hi! This whole
 * site was built line by line for Diamantina. Come say hi:
 * instagram.com/diamantina.club
 */

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Nav + Footer render once in Layout, shared by all pages below */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
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
      <SignUpModal />
      <LegalModal />
      <img
        src="/ceiba.webp"
        alt=""
        aria-hidden="true"
        style={{
          position: "fixed",
          bottom: "-80px",
          right: "-280px",
          width: "560px",
          height: "auto",
          pointerEvents: "none",
          userSelect: "none",
          zIndex: 5,
          opacity: 0.9,
        }}
      />
    </Router>
  );
}

export default App;
