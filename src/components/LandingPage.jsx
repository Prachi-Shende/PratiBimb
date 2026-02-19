import { useRef, useState, useEffect } from 'react'
import { FilmStrip } from './FilmStrip'
import { HeroTitle } from './HeroTitle'

const LANDING_KEYFRAMES = `
  @keyframes bgPulse {
    0%,100% { opacity: 1; }
    50% { opacity: 0.85; }
  }

  @keyframes grainShift {
    0%   { transform: translate(0,0); }
    25%  { transform: translate(-5%,-10%); }
    50%  { transform: translate(-10%,5%); }
    75%  { transform: translate(5%,-5%); }
    100% { transform: translate(0,0); }
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes videoFadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`

export const LandingPage = ({ visible = false, onEnter }) => {
  const videoRef = useRef(null)

  const [muted, setMuted] = useState(true)
  const [videoReady, setVideoReady] = useState(false)
  const [videoErrored, setVideoErrored] = useState(false)

  // ─────────────────────────────────────────────
  // Imperatively attach src (prevents remount glitch)
  // ─────────────────────────────────────────────
  useEffect(() => {
    if (!visible) return
    const vid = videoRef.current
    if (!vid) return

    const t = setTimeout(() => {
      if (!vid.src) {
        vid.src = '/bg-vid.mp4'
        vid.load()
        vid.play().catch(() => {})
      }
    }, 300)

    return () => clearTimeout(t)
  }, [visible])

  // ─────────────────────────────────────────────
  // Pause video when hidden (prevents background decode load)
  // ─────────────────────────────────────────────
  useEffect(() => {
    const vid = videoRef.current
    if (!vid) return

    if (!visible) {
      vid.pause()
    } else {
      vid.play().catch(() => {})
    }
  }, [visible])

  // ─────────────────────────────────────────────
  // Video ready detection
  // ─────────────────────────────────────────────
  useEffect(() => {
    const vid = videoRef.current
    if (!vid) return

    const onReady = () => setVideoReady(true)
    const onError = () => setVideoErrored(true)

    if (vid.readyState >= 4) {
      onReady()
      return
    }

    vid.addEventListener('canplaythrough', onReady, { once: true })
    vid.addEventListener('error', onError, { once: true })

    return () => {
      vid.removeEventListener('canplaythrough', onReady)
      vid.removeEventListener('error', onError)
    }
  }, [])

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !muted
      setMuted(prev => !prev)
    }
  }

  return (
    <div
      className="fixed inset-0 overflow-hidden bg-[#0a0a0a]"
      style={{
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.8s ease',
        contentVisibility: 'auto'
      }}
    >
      <style>{LANDING_KEYFRAMES}</style>

      <div className="absolute inset-0 overflow-hidden">

        {/* Gradient fallback */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at 20% 50%, rgba(60,0,0,0.6) 0%, transparent 60%),
              radial-gradient(ellipse at 80% 50%, rgba(40,0,0,0.4) 0%, transparent 60%),
              radial-gradient(ellipse at 50% 100%, rgba(80,0,0,0.4) 0%, transparent 50%),
              #0a0a0a
            `,
            animation: 'bgPulse 8s ease-in-out infinite',
            willChange: 'opacity'
          }}
        />

        {/* Poster */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(/bg-poster.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(2px) brightness(0.35)',
            transform: 'scale(1.05) translateZ(0)',
            backfaceVisibility: 'hidden',
            willChange: 'opacity, transform',
            opacity: videoReady ? 0 : 1,
            transition: 'opacity 1s ease',
            pointerEvents: 'none'
          }}
        />

        {/* Video */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            filter: 'blur(2px) brightness(0.35)',
            transform: 'scale(1.05) translateZ(0)',
            backfaceVisibility: 'hidden',
            opacity: videoReady && !videoErrored ? 1 : 0,
            transition: 'opacity 1.2s ease',
            willChange: 'opacity, transform'
          }}
          muted={muted}
          autoPlay
          loop
          playsInline
          preload="none"
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.7) 100%)'
          }}
        />
        <div className="absolute inset-0 bg-black/55" />
      </div>

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 50%, transparent 40%, rgba(0,0,0,0.6) 100%)'
        }}
      />

      <FilmStrip />

      {/* Scanlines */}
      <div
        className="fixed inset-0 pointer-events-none z-[99]"
        style={{
          background:
            'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)',
          contentVisibility: 'auto'
        }}
      />

      {/* Center Hero */}
      <div
        className="absolute inset-0 flex items-center justify-center z-10 overflow-visible box-border"
        style={{
          paddingTop: 'clamp(120px, 20vh, 176px)',
          paddingBottom: 'clamp(120px, 20vh, 176px)'
        }}
      >
        <HeroTitle visible={visible} onEnter={onEnter} />
      </div>

      {visible && <MuteButton muted={muted} onToggle={toggleMute} />}

      {/* Optimized Grain */}
      <div
        className="fixed pointer-events-none z-[100]"
        style={{
          inset: '-50%',
          width: '200%',
          height: '200%',
          opacity: 0.03,
          willChange: 'transform',
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          animation: 'grainShift 1.2s steps(2) infinite'
        }}
      />
    </div>
  )
}

const MuteButton = ({ muted, onToggle }) => {
  const [hovered, setHovered] = useState(false)

  return (
    <button
      onClick={onToggle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="absolute bottom-6 right-6 z-30 flex items-center justify-center rounded-full cursor-pointer"
      style={{
        width: '42px',
        height: '42px',
        background: 'rgba(0,0,0,0.5)',
        border: `1px solid ${
          hovered ? '#dc2626' : 'rgba(255,255,255,0.2)'
        }`,
        backdropFilter: 'blur(8px)',
        transition: 'border-color 0.2s ease',
        animation: 'fadeIn 1s ease 2s both',
        transform: 'translateZ(0)'
      }}
      title={muted ? 'Unmute' : 'Mute'}
    >
      {muted ? (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
          stroke="rgba(255,255,255,0.7)" strokeWidth="2"
          strokeLinecap="round" strokeLinejoin="round">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
          <line x1="23" y1="9" x2="17" y2="15" />
          <line x1="17" y1="9" x2="23" y2="15" />
        </svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
          stroke="rgba(255,255,255,0.7)" strokeWidth="2"
          strokeLinecap="round" strokeLinejoin="round">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
        </svg>
      )}
    </button>
  )
}
