import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ComingSoonPopup } from './components/UI';
import { Home } from './pages/Home';
import { ModelLibrary } from './pages/ModelLibrary';
import { Documentation } from './pages/Documentation';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfUse } from './pages/TermsOfUse';

import { CLITools } from './pages/CLITools';

// ScrollToTop Component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Layout = ({ children, onComingSoon }) => (
  <>
    <Navbar />
    {children}
    <Footer onComingSoon={onComingSoon} />
  </>
);

const App = () => {
  const [showComingSoon, setShowComingSoon] = useState(false);

  const handleComingSoon = () => setShowComingSoon(true);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-black text-white font-sans selection:bg-[#BBB791] selection:text-black overflow-x-hidden">
        {showComingSoon && <ComingSoonPopup onClose={() => setShowComingSoon(false)} />}

        <Layout onComingSoon={handleComingSoon}>
          <Routes>
            <Route path="/" element={<Home onComingSoon={handleComingSoon} />} />
            <Route path="/models" element={<ModelLibrary />} />
            <Route path="/docs" element={<Documentation />} />
            <Route path="/cli" element={<CLITools />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfUse />} />
          </Routes>
        </Layout>
      </div>
    </BrowserRouter>
  );
};

export default App;