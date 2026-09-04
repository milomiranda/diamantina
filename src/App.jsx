import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from '@/components/ScrollToTop';
import CookieBanner from '@/components/CookieBanner';
import SignUpModal from '@/components/SignUpModal';

import Home from '@/pages/Home';
import About from '@/pages/About';
import HouseRules from '@/pages/HouseRules';
import FAQ from '@/pages/FAQ';
import Tickets from '@/pages/Tickets';
import TermsOfUse from '@/pages/TermsOfUse';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import PageNotFound from '@/pages/PageNotFound';

function App() {
  const [signUpOpen, setSignUpOpen] = useState(true);

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/house-rules" element={<HouseRules />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/terms" element={<TermsOfUse />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <CookieBanner />
      <SignUpModal open={signUpOpen} onClose={() => setSignUpOpen(false)} />
    </Router>
  );
}

export default App;
