import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from '@/components/ScrollToTop';
import SmoothScroll from '@/components/SmoothScroll';
import CookieBanner from '@/components/CookieBanner';
import TiltOnMouse from '@/components/TiltOnMouse';
import Layout from '@/components/Layout';
import { LanguageProvider } from '@/i18n/LanguageContext';
import ComingSoon from '@/pages/ComingSoon';

// Flip this back to false whenever the site's ready to go fully live again —
// nothing else needs to change, all the real pages/routes below stay intact.
const UNDER_CONSTRUCTION = true;

import Home from '@/pages/Home';

// Lazy-loaded: these ship as separate chunks the browser only downloads if
// someone actually visits them, instead of bundling everything into the one
// file everyone has to download just to see the Home page.
const About = lazy(() => import('@/pages/About'));
const Contact = lazy(() => import('@/pages/Contact'));
const HouseRules = lazy(() => import('@/pages/HouseRules'));
const FAQ = lazy(() => import('@/pages/FAQ'));
const Tickets = lazy(() => import('@/pages/Tickets'));
const TermsOfUse = lazy(() => import('@/pages/TermsOfUse'));
const PrivacyPolicy = lazy(() => import('@/pages/PrivacyPolicy'));
const Admin = lazy(() => import('@/pages/Admin'));
const PageNotFound = lazy(() => import('@/pages/PageNotFound'));
const LegalModal = lazy(() => import('@/components/LegalModal'));
const SignUpPopup = lazy(() => import('@/components/SignUpPopup'));

function App() {
  return (
    <LanguageProvider>
    <Router>
      <ScrollToTop />
      <SmoothScroll />
      <Suspense fallback={null}>
        <Routes>
          {UNDER_CONSTRUCTION ? (
            <>
              {/* Admin stays fully working during "under construction" so
                  events can still be managed behind the scenes. */}
              <Route path="/admin" element={<Admin />} />
              <Route path="*" element={<ComingSoon />} />
            </>
          ) : (
            <>
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
            </>
          )}
        </Routes>
      </Suspense>
      {!UNDER_CONSTRUCTION && (
        <>
          <CookieBanner />
          <Suspense fallback={null}>
            <LegalModal />
            <SignUpPopup />
          </Suspense>
          <div
            className="fixed z-[5] pointer-events-none w-[300px] right-[-150px] bottom-[-60px] sm:w-[420px] sm:right-[-210px] sm:bottom-[-70px] md:w-[560px] md:right-[-280px] md:bottom-[-85px] lg:w-[720px] lg:right-[-360px] lg:bottom-[-100px]"
          >
            <TiltOnMouse maxTilt={10}>
              <img
                src="/ceiba.webp"
                srcSet="/ceiba-mobile.webp 450w, /ceiba.webp 900w"
                sizes="(max-width: 767px) 300px, 720px"
                alt=""
                aria-hidden="true"
                width="900"
                height="750"
                style={{
                  width: "100%",
                  height: "auto",
                  userSelect: "none",
                  opacity: 0.9,
                }}
              />
            </TiltOnMouse>
          </div>
        </>
      )}
    </Router>
    </LanguageProvider>
  );
}

export default App;
