const FILMSTRIP_KEYFRAMES = `
  @keyframes stripScrollLeft  { from { transform: translateX(0);    } to { transform: translateX(-50%); } }
  @keyframes stripScrollRight { from { transform: translateX(-50%); } to { transform: translateX(0);    } }

  [data-film-frame]::before,
  [data-film-frame]::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    height: 12px;
    background: repeating-linear-gradient(
      90deg,
      transparent 0px, transparent 8px,
      rgba(0,0,0,0.8) 8px, rgba(0,0,0,0.8) 12px,
      transparent 12px, transparent 18px
    );
    z-index: 2;
  }
  [data-film-frame]::before { top: 0; }
  [data-film-frame]::after  { bottom: 0; }

  [data-film-frame]:nth-child(odd) [data-film-img] {
    filter: saturate(0.5) contrast(1.2) sepia(0.2);
  }
`

const TOTAL_PHOTOS = 9

// ─────────────────────────────────────────────
// Single frame
// ─────────────────────────────────────────────
const FilmFrame = ({ index, width = 220, height = 160 }) => (
  <div
    data-film-frame
    className="relative flex-shrink-0 border border-white/15 overflow-hidden bg-[#111]"
    style={{ width: `${width}px`, height: `${height}px` }}
  >
    <img
      data-film-img
      src={`/photos/frame-${(index % TOTAL_PHOTOS) + 1}.jpeg`}
      alt=""
      loading="lazy"
      className="w-full h-full object-cover"
      style={{ filter: 'saturate(0.7) contrast(1.1)', transition: 'filter 0.3s ease' }}
    />
  </div>
)

// ─────────────────────────────────────────────
// Single scrolling strip
// ─────────────────────────────────────────────
const FilmStripTrack = ({ direction = 'left', frameCount = 14, frameWidth = 220, frameHeight = 160 }) => {
  const allFrames = [...Array(frameCount).keys(), ...Array(frameCount).keys()]

  return (
    <div
      className="absolute flex items-stretch"
      style={{
        gap:       '6px',
        willChange: 'transform',
        ...(direction === 'left'
          ? { top: 0,    animation: 'stripScrollLeft  35s linear infinite' }
          : { bottom: 0, animation: 'stripScrollRight 40s linear infinite' }),
      }}
    >
      {allFrames.map((_, i) => (
        <FilmFrame
          key={i}
          index={i % frameCount}
          width={frameWidth}
          height={frameHeight}
          loading="lazy"
        />
      ))}
    </div>
  )
}

// ─────────────────────────────────────────────
// Main wrapper
// ─────────────────────────────────────────────
import { useState, useEffect } from 'react'

const calcDims = () => {
  const w = typeof window !== 'undefined' ? window.innerWidth : 1280
  return {
    frameH: w < 400 ? 100 : w < 540 ? 120 : 160,
    frameW: w < 400 ? 150 : w < 540 ? 180 : 220,
  }
}

export const FilmStrip = () => {
  // Stable state — never recalculates mid-animation, only updates on real resize
  const [dims, setDims] = useState(calcDims)
  useEffect(() => {
    const onResize = () => setDims(calcDims())
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <style>{FILMSTRIP_KEYFRAMES}</style>
      <FilmStripTrack direction="left"  frameHeight={dims.frameH} frameWidth={dims.frameW} />
      <FilmStripTrack direction="right" frameHeight={dims.frameH} frameWidth={dims.frameW} />
    </div>
  )
}