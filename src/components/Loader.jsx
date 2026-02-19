
// import { useEffect, useState } from 'react'

// // Minimal SVG spinner
// const Spinner = () => (
//   <div className="loader-spinner" />
// )

// // Spotlight beams
// const Spotlights = () => (
//   <div className="spotlight-container">
//     {/* Wide atmospheric beams */}
//     <div className="spotlight spotlight-wide spotlight-wide-1" />
//     <div className="spotlight spotlight-wide spotlight-wide-2" />
//     <div className="spotlight spotlight-wide spotlight-wide-3" />
//     {/* Thin sharp beams */}
//     <div className="spotlight spotlight-1" />
//     <div className="spotlight spotlight-2" />
//     <div className="spotlight spotlight-3" />
//     <div className="spotlight spotlight-4" />
//     <div className="spotlight spotlight-5" />
//     {/* Floor glow */}
//     <div
//       style={{
//         position: 'absolute',
//         bottom: 0,
//         left: '50%',
//         transform: 'translateX(-50%)',
//         width: '60%',
//         height: '4px',
//         background: 'linear-gradient(90deg, transparent, rgba(220,38,38,0.4), transparent)',
//         filter: 'blur(8px)',
//         animation: 'redGlowPulse 3s ease-in-out infinite',
//       }}
//     />
//   </div>
// )

// // Animated "P" logo SVG (inline)
// // ─── Drop your logo at /public/logo.png ───
// // PNG with transparent background works best
// const PratibimbPLogo = ({ size = 120, animated = false, style = {} }) => (
//   <div
//     style={{
//       width:          size,
//       height:         size,
//       position:       'relative',
//       display:        'flex',
//       alignItems:     'center',
//       justifyContent: 'center',
//       flexShrink:     0,
//       ...style,
//     }}
//   >


//     {/* The actual logo image */}
//     <img
//       src="/logo.png"
//       alt="Pratibimb"
//       draggable={false}
//       style={{
//         width:      '100%',
//         height:     '100%',
//         objectFit:  'contain',
//         borderRadius: '0',
//         position:   'relative',
//         zIndex:     1,
//         // Red + white drop-shadow for the image itself
//         filter:     'drop-shadow(0 0 6px rgba(220,38,38,0.7)) drop-shadow(0 0 2px rgba(255,255,255,0.5))',
//         // Entry animation
//         opacity:    animated ? 0 : 1,
//         transform:  animated ? 'scale(0.4) rotate(-15deg)' : 'scale(1) rotate(0deg)',
//         animation:  animated ? 'logoReveal 1.2s cubic-bezier(0.16,1,0.3,1) forwards' : 'none',
//         userSelect: 'none',
//       }}
//     />
//   </div>
// )

// export const LoaderScreen = ({ onComplete }) => {
//   const [phase, setPhase] = useState('spotlight') // 'spotlight' | 'logo' | 'text' | 'exit'

//   useEffect(() => {
//     // Phase 1: Show spotlights with spinner (1.8s)
//     const t1 = setTimeout(() => setPhase('logo'), 1800)
//     // Phase 2: Animate logo in (1.5s)
//     const t2 = setTimeout(() => setPhase('text'), 3300)
//     // Phase 3: Show full text (1s)
//     const t3 = setTimeout(() => setPhase('exit'), 4600)
//     // Phase 4: Fade out loader
//     const t4 = setTimeout(() => onComplete(), 5400)

//     return () => {
//       clearTimeout(t1)
//       clearTimeout(t2)
//       clearTimeout(t3)
//       clearTimeout(t4)
//     }
//   }, [onComplete])

//   return (
//     <div
//       className={`loader-screen ${phase === 'exit' ? 'loader-fadeout' : ''}`}
//       style={{ zIndex: 9999 }}
//     >
//       <Spotlights />

//       {/* Center content */}
//       <div
//         style={{
//           position: 'relative',
//           zIndex: 10,
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//           gap: '24px',
//         }}
//       >
//         {/* Spinner phase */}
//         {phase === 'spotlight' && (
//           <div
//             style={{
//               display: 'flex',
//               flexDirection: 'column',
//               alignItems: 'center',
//               gap: '20px',
//               animation: 'fadeIn 0.5s ease both',
//             }}
//           >
//             <Spinner />
//             <p
//               style={{
//                 fontFamily: "'Oswald', sans-serif",
//                 color: 'rgba(255,255,255,0.3)',
//                 letterSpacing: '0.4em',
//                 fontSize: '0.7rem',
//                 textTransform: 'uppercase',
//               }}
//             >
//               Loading
//             </p>
//           </div>
//         )}

//         {/* Logo phase */}
//         {(phase === 'logo' || phase === 'text' || phase === 'exit') && (
//           <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
//             <PratibimbPLogo size={110} animated={true} />

//             {/* Pulsing ring */}
//             <div
//               style={{
//                 position: 'absolute',
//                 width: '160px',
//                 height: '160px',
//                 border: '1px solid rgba(220,38,38,0.3)',
//                 borderRadius: '50%',
//                 animation: 'ringPulse 1.5s ease-out infinite',
//               }}
//             />
//           </div>
//         )}

//         {/* Text phase */}
//         {(phase === 'text' || phase === 'exit') && (
//           <div
//             style={{
//               display: 'flex',
//               flexDirection: 'column',
//               alignItems: 'center',
//               gap: '8px',
//               animation: 'fadeInUp 0.8s cubic-bezier(0.16,1,0.3,1) both',
//             }}
//           >
//             <h1 className="loader-text">PRATIBIMB</h1>
//             <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
//               <div
//                 style={{
//                   width: '40px',
//                   height: '1px',
//                   background: 'linear-gradient(90deg, transparent, #dc2626)',
//                 }}
//               />
//               <span
//                 style={{
//                   fontFamily: "'Oswald', sans-serif",
//                   color: 'rgba(255,255,255,0.4)',
//                   letterSpacing: '0.5em',
//                   fontSize: '0.75rem',
//                 }}
//               >
//                 2026
//               </span>
//               <div
//                 style={{
//                   width: '40px',
//                   height: '1px',
//                   background: 'linear-gradient(90deg, #dc2626, transparent)',
//                 }}
//               />
//             </div>
//             <p
//               style={{
//                 fontFamily: "'Montserrat', sans-serif",
//                 color: 'rgba(255,255,255,0.25)',
//                 letterSpacing: '0.35em',
//                 fontSize: '0.6rem',
//                 textTransform: 'uppercase',
//                 fontWeight: '300',
//               }}
//             >
//               Cultural Committee
//             </p>
//           </div>
//         )}
//       </div>

//       {/* Bottom red line */}
//       <div
//         style={{
//           position: 'absolute',
//           bottom: 0,
//           left: 0,
//           right: 0,
//           height: '2px',
//           background: 'linear-gradient(90deg, transparent, #dc2626, transparent)',
//           animation: 'lineGrow 2s ease-in-out infinite',
//         }}
//       />

//       <style>{`
//         @keyframes ringPulse {
//           0% { transform: scale(1); opacity: 0.6; }
//           100% { transform: scale(1.8); opacity: 0; }
//         }
//         @keyframes lineGrow {
//           0%, 100% { opacity: 0.3; }
//           50% { opacity: 0.8; }
//         }
//       `}</style>
//     </div>
//   )
// }

// export { PratibimbPLogo }







import { useEffect, useState } from 'react'

// Only keyframes & pseudo-selectors live here — no leakable class names
const LOADER_KEYFRAMES = `
  @keyframes spin            { to { transform: rotate(360deg); } }
  @keyframes logoReveal      { 0%   { opacity: 0; transform: scale(0.3) rotate(-15deg); }
                               60%  { opacity: 1; transform: scale(1.1) rotate(5deg); }
                               100% { opacity: 1; transform: scale(1) rotate(0deg); } }
  @keyframes loaderFadeOut   { from { opacity: 1; } to { opacity: 0; pointer-events: none; } }
  @keyframes textFadeIn      { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes spotlightSweep1 { 0%,100% { transform: rotate(-15deg); opacity: 0.6; } 50% { transform: rotate(15deg); opacity: 1; } }
  @keyframes spotlightSweep2 { 0%,100% { transform: rotate(10deg); opacity: 0.4; } 50% { transform: rotate(-20deg); opacity: 0.9; } }
  @keyframes spotlightSweep3 { 0%,100% { transform: rotate(-5deg); opacity: 0.7; } 50% { transform: rotate(20deg); opacity: 0.5; } }
  @keyframes spotlightWide1  { 0%,100% { transform: rotate(-20deg); opacity: 0.3; } 50% { transform: rotate(20deg); opacity: 0.6; } }
  @keyframes spotlightWide2  { 0%,100% { transform: translateX(-50%) rotate(-10deg); opacity: 0.2; } 50% { transform: translateX(-50%) rotate(10deg); opacity: 0.5; } }
  @keyframes ringPulse       { 0% { transform: scale(1); opacity: 0.6; } 100% { transform: scale(1.8); opacity: 0; } }
  @keyframes lineGrow        { 0%,100% { opacity: 0.3; } 50% { opacity: 0.8; } }
  @keyframes loaderRedGlow   { 0%,100% { opacity: 0.4; } 50% { opacity: 1; } }
  @keyframes fadeInUp        { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes fadeIn          { from { opacity: 0; } to { opacity: 1; } }
`

// ─────────────────────────────────────────────
// Spinner
// ─────────────────────────────────────────────
const Spinner = () => (
  <div
    style={{
      width: '60px',
      height: '60px',
      border: '2px solid rgba(220,38,38,0.2)',
      borderTopColor: '#dc2626',
      borderRadius: '50%',
      animation: 'spin 0.8s linear infinite',
    }}
  />
)

// ─────────────────────────────────────────────
// Spotlight beam — fully inline, no class names
// ─────────────────────────────────────────────
const Beam = ({ style }) => (
  <div style={{ position: 'absolute', top: '-20%', borderRadius: '50%', ...style }} />
)

const Spotlights = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Wide atmospheric beams */}
    <Beam style={{ left: '10%',  width: '80px', height: '120vh', filter: 'blur(20px)', background: 'linear-gradient(180deg,transparent 0%,rgba(220,38,38,0.08) 30%,rgba(220,38,38,0.04) 70%,transparent 100%)', animation: 'spotlightWide1 7s ease-in-out infinite', transformOrigin: 'top center' }} />
    <Beam style={{ left: '50%',  width: '80px', height: '120vh', filter: 'blur(20px)', background: 'linear-gradient(180deg,transparent 0%,rgba(220,38,38,0.08) 30%,rgba(220,38,38,0.04) 70%,transparent 100%)', animation: 'spotlightWide2 8s ease-in-out infinite', animationDelay: '-2s', transformOrigin: 'top center' }} />
    <Beam style={{ right: '10%', width: '80px', height: '120vh', filter: 'blur(20px)', background: 'linear-gradient(180deg,transparent 0%,rgba(220,38,38,0.08) 30%,rgba(220,38,38,0.04) 70%,transparent 100%)', animation: 'spotlightWide1 7s ease-in-out infinite', animationDelay: '-4s', transformOrigin: 'top center' }} />
    {/* Thin sharp beams */}
    <Beam style={{ left: '15%', width: '3px', height: '120vh', filter: 'blur(8px)', background: 'linear-gradient(180deg,transparent 0%,rgba(220,38,38,0.15) 20%,rgba(255,255,255,0.08) 50%,transparent 100%)', animation: 'spotlightSweep1 4s ease-in-out infinite', transformOrigin: 'top center' }} />
    <Beam style={{ left: '30%', width: '3px', height: '120vh', filter: 'blur(8px)', background: 'linear-gradient(180deg,transparent 0%,rgba(220,38,38,0.15) 20%,rgba(255,255,255,0.08) 50%,transparent 100%)', animation: 'spotlightSweep2 5s ease-in-out infinite', animationDelay: '-1s', transformOrigin: 'top center' }} />
    <Beam style={{ left: '50%', width: '3px', height: '120vh', filter: 'blur(8px)', background: 'linear-gradient(180deg,transparent 0%,rgba(220,38,38,0.15) 20%,rgba(255,255,255,0.08) 50%,transparent 100%)', animation: 'spotlightSweep3 4.5s ease-in-out infinite', animationDelay: '-2s', transformOrigin: 'top center' }} />
    <Beam style={{ left: '65%', width: '3px', height: '120vh', filter: 'blur(8px)', background: 'linear-gradient(180deg,transparent 0%,rgba(220,38,38,0.15) 20%,rgba(255,255,255,0.08) 50%,transparent 100%)', animation: 'spotlightSweep2 6s ease-in-out infinite', animationDelay: '-0.5s', transformOrigin: 'top center' }} />
    <Beam style={{ left: '80%', width: '3px', height: '120vh', filter: 'blur(8px)', background: 'linear-gradient(180deg,transparent 0%,rgba(220,38,38,0.15) 20%,rgba(255,255,255,0.08) 50%,transparent 100%)', animation: 'spotlightSweep1 5s ease-in-out infinite', animationDelay: '-3s', transformOrigin: 'top center' }} />
    {/* Floor glow */}
    <div className="absolute bottom-0 left-1/2" style={{ transform: 'translateX(-50%)', width: '60%', height: '4px', background: 'linear-gradient(90deg,transparent,rgba(220,38,38,0.4),transparent)', filter: 'blur(8px)', animation: 'loaderRedGlow 3s ease-in-out infinite' }} />
  </div>
)

// ─────────────────────────────────────────────
// Logo
// ─────────────────────────────────────────────
const PratibimbPLogo = ({ size = 120, animated = false, style = {} }) => (
  <div style={{ width: size, height: size, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, ...style }}>
    <img
      src="/logo.png"
      alt="Pratibimb"
      draggable={false}
      style={{
        width: '100%', height: '100%', objectFit: 'contain',
        position: 'relative', zIndex: 1,
        filter: 'drop-shadow(0 0 6px rgba(220,38,38,0.7)) drop-shadow(0 0 2px rgba(255,255,255,0.5))',
        opacity:    animated ? 0 : 1,
        transform:  animated ? 'scale(0.4) rotate(-15deg)' : 'scale(1) rotate(0deg)',
        animation:  animated ? 'logoReveal 1.2s cubic-bezier(0.16,1,0.3,1) forwards' : 'none',
        userSelect: 'none',
      }}
    />
  </div>
)

// ─────────────────────────────────────────────
// Cinematic letter-by-letter title
// ─────────────────────────────────────────────
const TITLE         = 'PRATIBIMB'
const TITLE_LETTERS = TITLE.split('')

const CinematicTitle = ({ trigger }) => {
  const [visible,     setVisible]     = useState(TITLE_LETTERS.map(() => false))
  const [lineVisible, setLineVisible] = useState(false)

  useEffect(() => {
    if (!trigger) return
    TITLE_LETTERS.forEach((_, i) =>
      setTimeout(() => setVisible(prev => { const n = [...prev]; n[i] = true; return n }), i * 80)
    )
    setTimeout(() => setLineVisible(true), TITLE_LETTERS.length * 80 + 200)
  }, [trigger])

  return (
    <div className="flex flex-col items-center gap-[10px]" style={{ animation: 'fadeInUp 0.5s cubic-bezier(0.16,1,0.3,1) both' }}>

      {/* Letters */}
      <div className="flex items-end gap-[2px]">
        {TITLE_LETTERS.map((letter, i) => (
          <span
            key={i}
            style={{
              display:         'inline-block',
              fontFamily:      "'Bebas Neue', 'Oswald', sans-serif",
              fontWeight:      '400',
              fontSize:        'clamp(2.2rem, 7vw, 4rem)',
              lineHeight:      1,
              letterSpacing:   '0.06em',
              color:           visible[i] ? '#ffffff' : 'transparent',
              opacity:         visible[i] ? 1 : 0,
              transform:       visible[i] ? 'translateY(0) rotateX(0deg) scaleY(1)' : 'translateY(-48px) rotateX(-70deg) scaleY(0.5)',
              transformOrigin: 'center bottom',
              transition:      `opacity 0.4s ease ${i*0.055}s, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${i*0.055}s, color 0.3s ease ${i*0.055}s`,
              textShadow:      visible[i] ? '0 0 20px rgba(220,38,38,0.6), 0 0 40px rgba(220,38,38,0.25), 0 0 8px rgba(255,255,255,0.3)' : 'none',
              willChange:      'transform, opacity',
            }}
          >{letter}</span>
        ))}
      </div>

      {/* Year line */}
      <div
        className="flex items-center gap-3"
        style={{
          opacity:    lineVisible ? 1 : 0,
          transform:  lineVisible ? 'translateY(0) scaleX(1)' : 'translateY(6px) scaleX(0.4)',
          transition: 'opacity 0.6s ease, transform 0.7s cubic-bezier(0.16,1,0.3,1)',
        }}
      >
        <div style={{ width: '36px', height: '1px', background: 'linear-gradient(90deg,transparent,#dc2626)' }} />
        <span style={{ fontFamily: "'Oswald',sans-serif", color: 'rgba(255,255,255,0.45)', letterSpacing: '0.5em', fontSize: 'clamp(0.6rem,2vw,0.78rem)' }}>2026</span>
        <div style={{ width: '36px', height: '1px', background: 'linear-gradient(90deg,#dc2626,transparent)' }} />
      </div>

      {/* Tagline */}
      <p style={{
        fontFamily:    "'Montserrat',sans-serif",
        color:         'rgba(255,255,255,0.25)',
        letterSpacing: '0.35em',
        fontSize:      'clamp(0.45rem,1.5vw,0.6rem)',
        textTransform: 'uppercase',
        fontWeight:    '300',
        opacity:       lineVisible ? 1 : 0,
        transform:     lineVisible ? 'translateY(0)' : 'translateY(4px)',
        transition:    'opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s',
        margin:        0,
      }}>
        Cultural Committee
      </p>
    </div>
  )
}

// ─────────────────────────────────────────────
// LoaderScreen
// ─────────────────────────────────────────────
export const LoaderScreen = ({ onComplete }) => {
  const [phase, setPhase] = useState('spotlight')

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('logo'),  1800)
    const t2 = setTimeout(() => setPhase('text'),  3300)
    const t3 = setTimeout(() => setPhase('exit'),  4600)
    const t4 = setTimeout(() => onComplete(),      5400)
    return () => { [t1,t2,t3,t4].forEach(clearTimeout) }
  }, [onComplete])

  return (
    <div
      className="fixed inset-0 flex flex-col items-center justify-center bg-[#0a0a0a]"
      style={{
        zIndex:    9999,
        animation: phase === 'exit' ? 'loaderFadeOut 0.8s ease forwards' : 'none',
      }}
    >
      <style>{LOADER_KEYFRAMES}</style>

      <Spotlights />

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center gap-6">

        {/* Phase 1 — Spinner */}
        {phase === 'spotlight' && (
          <div className="flex flex-col items-center gap-5" style={{ animation: 'fadeIn 0.5s ease both' }}>
            <Spinner />
            <p style={{ fontFamily: "'Oswald',sans-serif", color: 'rgba(255,255,255,0.3)', letterSpacing: '0.4em', fontSize: '0.7rem', textTransform: 'uppercase' }}>
              Loading
            </p>
          </div>
        )}

        {/* Phase 2 — Logo */}
        {(phase === 'logo' || phase === 'text' || phase === 'exit') && (
          <div className="flex flex-col items-center gap-4">
            <PratibimbPLogo size={110} animated />
            <div className="absolute" style={{ width: '160px', height: '160px', border: '1px solid rgba(220,38,38,0.3)', borderRadius: '50%', animation: 'ringPulse 1.5s ease-out infinite' }} />
          </div>
        )}

        {/* Phase 3 — Cinematic title */}
        {(phase === 'text' || phase === 'exit') && <CinematicTitle trigger />}
      </div>

      {/* Bottom red line */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{ height: '2px', background: 'linear-gradient(90deg,transparent,#dc2626,transparent)', animation: 'lineGrow 2s ease-in-out infinite' }}
      />
    </div>
  )
}

export { PratibimbPLogo }

