'use client';

import { useState, useEffect } from 'react';
import HeroSection from './components/HeroSection';
import TimelineSection from './components/TimelineSection';
import GallerySection from './components/GallerySection';
import WinnersSection from './components/WinnersSection';
import FooterSection from './components/FooterSection';
import MythopiaSection from './components/MythopiaSection';

import Stars from './components/Stars';

export default function Desktop() {
  const [scale, setScale] = useState(1);
  useEffect(() => {
    const handleResize = () => {
      // Calculate scale based on 2560px design width
      const newScale = window.innerWidth / 2560;
      setScale(newScale);
    };

    // Initial calculation
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="w-full min-h-screen overflow-x-hidden bg-[#0a0a0a]">
      <div
        className="bg-[radial-gradient(50%_50%_at_50%_50%,#1A1A1A_0%,#000_99.99%)] relative overflow-hidden origin-top-left"
        style={{
          width: '2560px',
          height: '12580px', // Identifying intended height from Figma export
          transform: `scale(${scale})`,
          marginBottom: `-${(1 - scale) * 12580}px` // Compensate for vertical whitespace if needed
        }}
      >
        <Stars />
        <HeroSection />
        <MythopiaSection />
        <TimelineSection />
        <GallerySection />
        <WinnersSection />
        <FooterSection />
      </div>
    </div>
  );
}
