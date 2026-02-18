'use client';

import { useState, useEffect } from 'react';
import HeroSection from './components/HeroSection';
import TimelineSection from './components/TimelineSection';
import GallerySection from './components/GallerySection';
import WinnersSection from './components/WinnersSection';
import FooterSection from './components/FooterSection';
import MythopiaSection from './components/MythopiaSection';
import Stars from './components/Stars';

// ── Mythic glyphs (keep VERY subtle for luxury look) ──────────────────────────
const GLYPHS = [
  { symbol: '⚡', x: 4,  y: 3,  size: 420, opacity: 0.018, duration: 28 },
  { symbol: '🔱', x: 88, y: 8,  size: 380, opacity: 0.020, duration: 34 },
  { symbol: 'Ω',  x: 15, y: 18, size: 500, opacity: 0.016, duration: 22 },
  { symbol: '⚔',  x: 75, y: 24, size: 360, opacity: 0.018, duration: 40 },
  { symbol: 'Ψ',  x: 45, y: 32, size: 460, opacity: 0.016, duration: 30 },
  { symbol: '☽',  x: 8,  y: 42, size: 400, opacity: 0.018, duration: 26 },
  { symbol: '𓂀',  x: 82, y: 48, size: 440, opacity: 0.016, duration: 36 },
  { symbol: 'Δ',  x: 30, y: 55, size: 480, opacity: 0.014, duration: 32 },
  { symbol: '✦',  x: 65, y: 60, size: 300, opacity: 0.020, duration: 20 },
  { symbol: 'Σ',  x: 12, y: 67, size: 420, opacity: 0.016, duration: 38 },
  { symbol: '⚡', x: 90, y: 72, size: 360, opacity: 0.018, duration: 24 },
  { symbol: 'Λ',  x: 50, y: 78, size: 500, opacity: 0.014, duration: 44 },
  { symbol: '🔱', x: 22, y: 84, size: 380, opacity: 0.018, duration: 29 },
  { symbol: 'Ω',  x: 78, y: 88, size: 440, opacity: 0.016, duration: 33 },
  { symbol: '☽',  x: 40, y: 93, size: 400, opacity: 0.017, duration: 27 },
];

// ── Section divider ───────────────────────────────────────────────────────────
function GoldenDivider() {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '120px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2,
      }}
    >
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          height: '1px',
          background:
            'linear-gradient(to right, transparent 0%, rgba(212,175,55,0.12) 15%, rgba(212,175,55,0.35) 40%, rgba(212,175,55,0.55) 50%, rgba(212,175,55,0.35) 60%, rgba(212,175,55,0.12) 85%, transparent 100%)',
        }}
      />
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          alignItems: 'center',
          gap: '28px',
          background: 'transparent',
        }}
      >
        <div
          style={{
            width: '180px',
            height: '1px',
            background: 'linear-gradient(to left, rgba(212,175,55,0.45), transparent)',
          }}
        />
        <span
          style={{
            color: '#D4AF37',
            fontSize: '56px',
            opacity: 0.6,
            textShadow: '0 0 18px rgba(212,175,55,0.55)',
            lineHeight: 1,
          }}
        >
          ✦
        </span>
        <span
          style={{
            color: '#D4AF37',
            fontSize: '80px',
            opacity: 0.45,
            textShadow: '0 0 26px rgba(212,175,55,0.45)',
            lineHeight: 1,
          }}
        >
          ⚜
        </span>
        <span
          style={{
            color: '#D4AF37',
            fontSize: '56px',
            opacity: 0.6,
            textShadow: '0 0 18px rgba(212,175,55,0.55)',
            lineHeight: 1,
          }}
        >
          ✦
        </span>
        <div
          style={{
            width: '180px',
            height: '1px',
            background: 'linear-gradient(to right, rgba(212,175,55,0.45), transparent)',
          }}
        />
      </div>
    </div>
  );
}

export default function Desktop() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => setScale(window.innerWidth / 2560);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const DESIGN_W = 2560;
  const DESIGN_H = 12580;

  return (
    <div className="w-full min-h-screen overflow-x-hidden" style={{ background: '#000000' }}>
      <div
        style={{
          position: 'relative',
          width: `${DESIGN_W}px`,
          height: `${DESIGN_H}px`,
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
          marginBottom: `${-(1 - scale) * DESIGN_H}px`,
          overflow: 'visible',

          // ── Mythopia: gold + black (no purple) ─────────────────────────
          background: `
            radial-gradient(ellipse 120% 40% at 50% 0%, rgba(212,175,55,0.08) 0%, transparent 70%),
            radial-gradient(ellipse 80% 30% at 20% 30%, rgba(212,175,55,0.05) 0%, transparent 60%),
            radial-gradient(ellipse 80% 30% at 80% 60%, rgba(212,175,55,0.05) 0%, transparent 60%),
            radial-gradient(ellipse 100% 40% at 50% 75%, rgba(212,175,55,0.035) 0%, transparent 70%),
            linear-gradient(180deg, #000000 0%, #0a0a0a 40%, #050505 70%, #000000 100%)
          `,
        }}
      >
        {/* Stars */}
        <Stars />

        {/* Drifting glyphs */}
        {GLYPHS.map((g, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: `${g.x}%`,
              top: `${g.y}%`,
              fontSize: `${g.size}px`,
              opacity: g.opacity,
              color: '#D4AF37',
              pointerEvents: 'none',
              userSelect: 'none',
              zIndex: 0,
              animation: `mythicDrift${i % 3} ${g.duration}s ease-in-out infinite`,
              filter: 'blur(2px)',
              lineHeight: 1,
            }}
          >
            {g.symbol}
          </div>
        ))}

        {/* Noise texture overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 0,
            pointerEvents: 'none',
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            backgroundSize: '256px 256px',
            opacity: 0.02,
            mixBlendMode: 'overlay',
          }}
        />

        {/* Vignette edges */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 0,
            pointerEvents: 'none',
            background:
              'radial-gradient(ellipse 100% 100% at 50% 50%, transparent 58%, rgba(0,0,0,0.85) 100%)',
          }}
        />

        {/* Keyframes */}
        <style>{`
          @keyframes mythicDrift0 {
            0%,100% { transform: translate(0px,  0px)  rotate(0deg); }
            33%     { transform: translate(30px, 20px) rotate(3deg); }
            66%     { transform: translate(-20px,35px) rotate(-2deg); }
          }
          @keyframes mythicDrift1 {
            0%,100% { transform: translate(0px,  0px)  rotate(0deg); }
            33%     { transform: translate(-25px,30px) rotate(-4deg); }
            66%     { transform: translate(35px,-15px) rotate(2deg); }
          }
          @keyframes mythicDrift2 {
            0%,100% { transform: translate(0px,  0px)  rotate(0deg); }
            50%     { transform: translate(20px,-30px) rotate(5deg); }
          }
        `}</style>

        {/* Sections */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          <HeroSection />
          <GoldenDivider />
          <MythopiaSection />
          <GoldenDivider />
          <TimelineSection />
          <GoldenDivider />
          <GallerySection />
          <GoldenDivider />
          <WinnersSection />
          <GoldenDivider />
          <FooterSection />
        </div>
      </div>
    </div>
  );
}
