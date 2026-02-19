import { useState, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

// Components
import { LoaderScreen } from './components/Loader';
import { LandingPage } from './components/LandingPage';
import ScrollToTop from './components/ScrollToTop'; // Ensure this file exists
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ObsidianPage from './pages/Obisidian';
import EDCPage from './pages/Edc';
import Prati_25 from './pages/Prati_25';
import Theme from './pages/Theme';

// 404 Page Component
const NotFoundPage = () => (
  <div className="bg-black text-white min-h-screen pt-32 flex items-center justify-center">
    <div className="text-center">
      <p className="text-[180px] font-black text-white/5 leading-none select-none">404</p>
      <h1 className="text-4xl font-black text-white -mt-16 relative z-10">Page Not Found</h1>
      <p className="text-gray-500 mt-4 mb-8">The mirror has no reflection here.</p>
      <a href="/" className="inline-flex items-center gap-2 border border-red-600 text-red-500 hover:bg-red-600 hover:text-white px-6 py-3 text-xs font-black tracking-widest uppercase transition-all duration-300">
        Return Home
      </a>
    </div>
  </div>
);

// ─── AppInner: Lives inside <Router> ───
const AppInner = () => {
  const navigate = useNavigate();

  const [loaderDone, setLoaderDone] = useState(false);
  const [landingDone, setLandingDone] = useState(false);

  const handleLoaderComplete = useCallback(() => setLoaderDone(true), []);

  // Called when PRATI'26 is clicked — navigate to home, then unmount landing
  const handleLandingComplete = useCallback(() => {
    navigate('/');          // Navigate to home
    setLandingDone(true);   // Transition to full site
  }, [navigate]);

  return (
    <>
      {/* ScrollToTop must be inside AppInner to listen to the Router's navigate events */}
      <ScrollToTop />

      {/* ── PHASE 1: Loader ── */}
      {!loaderDone && (
        <LoaderScreen onComplete={handleLoaderComplete} />
      )}

      {/* ── PHASE 2: Landing Page ── */}
      {loaderDone && !landingDone && (
        <LandingPage
          visible={loaderDone}
          onEnter={handleLandingComplete}
        />
      )}

      {/* ── PHASE 3: Full Site ── */}
      {landingDone && (
        <div className="bg-black min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/clubs/edc" element={<EDCPage />} />
              <Route path="/clubs/obsidian" element={<ObsidianPage />} />
              <Route path="/past/prati25" element={<Prati_25 />} />
              <Route path="/theme" element={<Theme />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      )}
    </>
  );
};

// ── Root App Component ──
export default function App() {
  return (
    <Router>
      <AppInner />
    </Router>
  );
}