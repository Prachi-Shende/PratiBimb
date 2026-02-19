// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import Home from './pages/Home';
// import AboutUs from './pages/AboutUs';
// import ObsidianPage from './pages/Obisidian';
// import EDCPage from './pages/Edc';

// // // Placeholder pages (create these later)
// // const EDCPage = () => (
// //   <div className="bg-black text-white min-h-screen pt-32 flex items-center justify-center">
// //     <div className="text-center">
// //       <p className="text-red-600 text-xs font-black tracking-widest uppercase mb-4">Clubs</p>
// //       <h1 className="text-6xl font-black text-white">EDC</h1>
// //       <p className="text-gray-500 mt-4">Entrepreneurship Development Cell — Coming Soon</p>
// //     </div>
// //   </div>
// // );

// // const ObsidianPage = () => (
// //   <div className="bg-black text-white min-h-screen pt-32 flex items-center justify-center">
// //     <div className="text-center">
// //       <p className="text-red-600 text-xs font-black tracking-widest uppercase mb-4">Clubs</p>
// //       <h1 className="text-6xl font-black text-white">OBSIDIAN</h1>
// //       <p className="text-gray-500 mt-4">The Design & Photography Club — Coming Soon</p>
// //     </div>
// //   </div>
// // );

// const Prati25Page = () => (
//   <div className="bg-black text-white min-h-screen pt-32 flex items-center justify-center">
//     <div className="text-center">
//       <p className="text-red-600 text-xs font-black tracking-widest uppercase mb-4">The Past</p>
//       <h1 className="text-6xl font-black text-white">PRATI<span className="text-red-600">'25</span></h1>
//       <p className="text-gray-500 mt-4">Metamorphosis Edition — Coming Soon</p>
//     </div>
//   </div>
// );

// const NotFoundPage = () => (
//   <div className="bg-black text-white min-h-screen pt-32 flex items-center justify-center">
//     <div className="text-center">
//       <p className="text-[180px] font-black text-white/5 leading-none select-none">404</p>
//       <h1 className="text-4xl font-black text-white -mt-16 relative z-10">Page Not Found</h1>
//       <p className="text-gray-500 mt-4 mb-8">The mirror has no reflection here.</p>
//       <a href="/" className="inline-flex items-center gap-2 border border-red-600 text-red-500 hover:bg-red-600 hover:text-white px-6 py-3 text-xs font-black tracking-widest uppercase transition-all duration-300">
//         Return Home
//       </a>
//     </div>
//   </div>
// );

// function App() {
//   return (
//     <Router>
//       <div className="bg-black min-h-screen flex flex-col">
//         {/* Navbar is fixed, rendered on all pages */}
//         <Navbar />

//         {/* Page Content */}
//         <main className="flex-1">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/about" element={<AboutUs />} />
//             <Route path="/clubs/edc" element={<EDCPage />} />
//             <Route path="/clubs/obsidian" element={<ObsidianPage />} />
//             <Route path="/past/prati25" element={<Prati25Page />} />
//             <Route path="*" element={<NotFoundPage />} />
//           </Routes>
//         </main>

//         {/* Footer is rendered on all pages */}
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;

// import { useState, useCallback } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import { LoaderScreen } from './components/Loader';
// import { LandingPage } from './components/LandingPage';

// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import Home from './pages/Home';
// import AboutUs from './pages/AboutUs';
// import ObsidianPage from './pages/Obisidian';
// import EDCPage from './pages/Edc';

// const Prati25Page = () => (
//   <div className="bg-black text-white min-h-screen pt-32 flex items-center justify-center">
//     <div className="text-center">
//       <p className="text-red-600 text-xs font-black tracking-widest uppercase mb-4">The Past</p>
//       <h1 className="text-6xl font-black text-white">PRATI<span className="text-red-600">'25</span></h1>
//       <p className="text-gray-500 mt-4">Metamorphosis Edition — Coming Soon</p>
//     </div>
//   </div>
// );

// const NotFoundPage = () => (
//   <div className="bg-black text-white min-h-screen pt-32 flex items-center justify-center">
//     <div className="text-center">
//       <p className="text-[180px] font-black text-white/5 leading-none select-none">404</p>
//       <h1 className="text-4xl font-black text-white -mt-16 relative z-10">Page Not Found</h1>
//       <p className="text-gray-500 mt-4 mb-8">The mirror has no reflection here.</p>
//       <a href="/" className="inline-flex items-center gap-2 border border-red-600 text-red-500 hover:bg-red-600 hover:text-white px-6 py-3 text-xs font-black tracking-widest uppercase transition-all duration-300">
//         Return Home
//       </a>
//     </div>
//   </div>
// );

// // ─── Two-phase state ──────────────────────────────────────────
// // Phase 1: loaderDone=false  → show <LoaderScreen>
// // Phase 2: loaderDone=true, landingDone=false → show <LandingPage>
// // Phase 3: landingDone=true  → show full site (Router + Navbar + Routes + Footer)

// export default function App() {
//   const [loaderDone,  setLoaderDone]  = useState(false);
//   const [landingDone, setLandingDone] = useState(false);

//   const handleLoaderComplete  = useCallback(() => setLoaderDone(true),  []);
//   const handleLandingComplete = useCallback(() => setLandingDone(true), []);

//   return (
//     <>
//       {/* ── PHASE 1: Loader ── */}
//       {!loaderDone && (
//         <LoaderScreen onComplete={handleLoaderComplete} />
//       )}

//       {/* ── PHASE 2: Landing page (fades in after loader) ── */}
//       {loaderDone && !landingDone && (
//         <LandingPage
//           visible={loaderDone}
//           onComplete={handleLandingComplete}   // wire this up inside LandingPage
//         />
//       )}

//       {/* ── PHASE 3: Full site (fades in after landing) ── */}
//       {landingDone && (
//         <div
//           style={{
//             opacity: landingDone ? 1 : 0,
//             transition: 'opacity 0.6s ease',
//           }}
//         >
//           <Router>
//             <div className="bg-black min-h-screen flex flex-col">
//               <Navbar />
//               <main className="flex-1">
//                 <Routes>
//                   <Route path="/"                element={<Home />} />
//                   <Route path="/about"           element={<AboutUs />} />
//                   <Route path="/clubs/edc"       element={<EDCPage />} />
//                   <Route path="/clubs/obsidian"  element={<ObsidianPage />} />
//                   <Route path="/past/prati25"    element={<Prati25Page />} />
//                   <Route path="*"                element={<NotFoundPage />} />
//                 </Routes>
//               </main>
//               <Footer />
//             </div>
//           </Router>
//         </div>
//       )}
//     </>
//   );
// }

import { useState, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

import { LoaderScreen } from './components/Loader';
import { LandingPage } from './components/LandingPage';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ObsidianPage from './pages/Obisidian';
import EDCPage from './pages/Edc';
import Prati_25 from './pages/Prati_25';
import Theme from './pages/Theme';
// const Prati25Page = () => (
//   <div className="bg-black text-white min-h-screen pt-32 flex items-center justify-center">
//     <div className="text-center">
//       <p className="text-red-600 text-xs font-black tracking-widest uppercase mb-4">The Past</p>
//       <h1 className="text-6xl font-black text-white">PRATI<span className="text-red-600">'25</span></h1>
//       <p className="text-gray-500 mt-4">Metamorphosis Edition — Coming Soon</p>
//     </div>
//   </div>
// );

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

// ─── AppInner lives inside <Router> so useNavigate works ───
const AppInner = () => {
  const navigate = useNavigate();

  const [loaderDone,  setLoaderDone]  = useState(false);
  const [landingDone, setLandingDone] = useState(false);
  

  const handleLoaderComplete = useCallback(() => setLoaderDone(true), []);

  // Called when PRATI'26 is clicked — navigate to home, then unmount landing
  const handleLandingComplete = useCallback(() => {
    navigate('/');          // go to home
    setLandingDone(true);   // unmount landing page
  }, [navigate]);

  return (
    <>
      {/* ── PHASE 1: Loader ── */}
      {!loaderDone && (
        <LoaderScreen onComplete={handleLoaderComplete} />
      )}

      {/* ── PHASE 2: Landing page (fades in after loader) ── */}
      {loaderDone && !landingDone && (
        <LandingPage
          visible={loaderDone}
          onEnter={handleLandingComplete}
        />
      )}

      {/* ── PHASE 3: Full site (after landing dismissed) ── */}
      {landingDone && (
        <div className="bg-black min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/"               element={<Home />} />
              <Route path="/about"          element={<AboutUs />} />
              <Route path="/clubs/edc"      element={<EDCPage />} />
              <Route path="/clubs/obsidian" element={<ObsidianPage />} />
              <Route path="/past/prati25"   element={<Prati_25 />} />
              <Route path="/theme"   element={<Theme />} />
              <Route path="*"               element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      )}
    </>
  );
};

// ── Router wraps everything so useNavigate is available in AppInner ──
export default function App() {
  return (
    <Router>
      <AppInner />
    </Router>
  );
}