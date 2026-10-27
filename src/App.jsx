import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import BootIntro from './components/layout/BootIntro';
import Home from './pages/Home';
import Game from './pages/Game';
import Controls from './pages/Controls';
import Arcade from './pages/Arcade';
import Media from './pages/Media';
import DownloadPage from './pages/Download';
import Project from './pages/Project';
import NotFound from './pages/NotFound';
import { SoundProvider } from './context/SoundContext';

// Scroll to top on every route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const [showBootIntro, setShowBootIntro] = useState(() => {
    // Check if intro was already seen in this session
    return !sessionStorage.getItem('woc_intro_seen');
  });

  return (
    <SoundProvider>
      <BrowserRouter>
        {/* CRT Scanline Overlay */}
        <div className="crt-overlay" />

        {/* Skippable Opening Experience */}
        {showBootIntro && (
          <BootIntro onComplete={() => setShowBootIntro(false)} />
        )}

        <ScrollToTop />

        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', position: 'relative', zIndex: 2 }}>
          <Navbar />

          <main style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/game" element={<Game />} />
              <Route path="/controls" element={<Controls />} />
              <Route path="/arcade" element={<Arcade />} />
              <Route path="/media" element={<Media />} />
              <Route path="/download" element={<DownloadPage />} />
              <Route path="/project" element={<Project />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </BrowserRouter>
    </SoundProvider>
  );
}
