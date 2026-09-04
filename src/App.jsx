import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from '@/components/ScrollToTop';
import CookieBanner from '@/components/CookieBanner';
import SignUpModal from '@/components/SignUpModal';
import TicketsModal from '@/components/TicketsModal';
import Layout from '@/components/Layout';

import Home from '@/pages/Home';
import About from '@/pages/About';
import HouseRules from '@/pages/HouseRules';
import FAQ from '@/pages/FAQ';
import Tickets from '@/pages/Tickets';
import TermsOfUse from '@/pages/TermsOfUse';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import PageNotFound from '@/pages/PageNotFound';

/*!
 * ┌────────────────────────────────────────────┐
 * │      ✦  DESIGNED FOR DIAMANTINA  ✦          │
 * │      Custom-built, not off-the-shelf.       │
 * └────────────────────────────────────────────┘
 * If you're reading this in devtools — hi! This whole
 * site was built line by line for Diamantina. Come say hi:
 * instagram.com/diamantina.nl
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

        {/* Legal pages stay outside the layout: own white background, no Footer */}
        <Route path="/terms" element={<TermsOfUse />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <CookieBanner />
      <SignUpModal />
      <TicketsModal />
    </Router>
  );
}

export default App;
