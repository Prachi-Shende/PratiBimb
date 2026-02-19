// import { useEffect, useState } from 'react'

// // Only @keyframes live here — no class names, no leakage
// const HEROTITLE_KEYFRAMES = `
//   @keyframes letterDrop {
//     from { opacity: 0; transform: translateY(-40px); }
//     to   { opacity: 1; transform: translateY(0); }
//   }
//   @keyframes dashExpand {
//     from { width: 0; opacity: 0; }
//     to   { width: 60px; opacity: 1; }
//   }
//   @keyframes gothicBreathe {
//     0%,100% { filter: drop-shadow(0 0 10px rgba(220,38,38,0.4)) drop-shadow(0 0 3px rgba(255,255,255,0.15)); }
//     50%     { filter: drop-shadow(0 0 26px rgba(220,38,38,0.8)) drop-shadow(0 0 10px rgba(255,160,160,0.35)); }
//   }
//   @keyframes gothicFlicker {
//     0%,88%,100% { opacity: 1; }
//     89%         { opacity: 0.78; }
//     89.4%       { opacity: 1; }
//     89.8%       { opacity: 0.65; }
//     90.2%       { opacity: 1; }
//     90.6%       { opacity: 0.85; }
//     91%         { opacity: 1; }
//   }
//   @keyframes rowGlitch {
//     0%,78%,100% { transform: translate(0,0) skewX(0deg); filter: none; }
//     79%  { transform: translate(-3px,1px) skewX(-1.5deg); filter: drop-shadow(4px 0 0 rgba(0,210,255,0.7)) drop-shadow(-4px 0 0 rgba(255,0,60,0.7)); }
//     80%  { transform: translate(4px,-1px) skewX(1.5deg);  filter: drop-shadow(-5px 0 0 rgba(0,210,255,0.8)) drop-shadow(5px 0 0 rgba(255,0,60,0.6)); }
//     81%  { transform: translate(-2px,0); filter: none; }
//     82%  { transform: translate(0,0);   filter: none; }
//     85%  { transform: translate(5px,0) skewX(2deg);   filter: drop-shadow(-5px 0 0 rgba(255,0,60,0.9)) drop-shadow(3px 0 0 rgba(0,210,255,0.65)) brightness(1.2); }
//     86%  { transform: translate(-3px,-1px) skewX(-1deg); filter: drop-shadow(4px 0 0 rgba(255,0,60,0.55)) drop-shadow(-3px 0 0 rgba(0,210,255,0.8)); }
//     87%  { transform: translate(0,0) skewX(0deg); filter: none; }
//     90%  { transform: translate(2px,0); filter: drop-shadow(-2px 0 0 rgba(220,38,38,0.9)) brightness(1.25); }
//     91%  { transform: translate(0,0); filter: none; }
//   }
//   @keyframes redGlowPulse {
//     0%,100% { text-shadow: 0 0 40px rgba(220,38,38,0.3), 0 0 80px rgba(220,38,38,0.1); }
//     50%     { text-shadow: 0 0 60px rgba(220,38,38,0.6), 0 0 100px rgba(220,38,38,0.2); }
//   }
//   @media (prefers-reduced-motion: reduce) {
//     [data-glitch-row], [data-gothic-wrap] { animation: none !important; }
//   }
// `

// const WORD    = 'Pratibimb'
// const LETTERS = WORD.split('')
// const STAGGER = 75

// // ─────────────────────────────────────────────
// // Responsive font size hook
// // ─────────────────────────────────────────────
// const useFontSize = () => {
//   const [fontSize, setFontSize] = useState(72)
//   useEffect(() => {
//     const calc = () => {
//       const w = window.innerWidth
//       if      (w < 360)  setFontSize(42)
//       else if (w < 480)  setFontSize(52)
//       else if (w < 640)  setFontSize(64)
//       else if (w < 768)  setFontSize(78)
//       else if (w < 1024) setFontSize(94)
//       else if (w < 1280) setFontSize(110)
//       else               setFontSize(126)
//     }
//     calc()
//     window.addEventListener('resize', calc)
//     return () => window.removeEventListener('resize', calc)
//   }, [])
//   return fontSize
// }

// // ─────────────────────────────────────────────
// // Gothic SVG word with red drip effect
// // ─────────────────────────────────────────────
// const InlineWord = ({ word, fontSize, allVisible }) => {
//   const estH = fontSize * 1.5

//   return (
//     <svg
//       width="100%"
//       height={estH}
//       viewBox={`0 0 900 ${estH}`}
//       preserveAspectRatio="xMidYMid meet"
//       style={{ display: 'block', overflow: 'visible', maxWidth: '100%' }}
//     >
//       <defs>
//         <style>{`
//           @import url('https://fonts.googleapis.com/css2?family=UnifrakturMaguntia&display=swap');
//           .gothic-text {
//             font-family: 'UnifrakturMaguntia', cursive;
//             font-weight: 400;
//             font-size: ${fontSize}px;
//             letter-spacing: ${fontSize * 0.01}px;
//           }
//         `}</style>

//         <linearGradient id="redDrip" x1="0%" y1="0%" x2="0%" y2="100%">
//           <stop offset="0%"   style={{ stopColor: '#565151', stopOpacity: 1 }} />
//           <stop offset="45%"  style={{ stopColor: '#ffffff', stopOpacity: 1 }} />
//           <stop offset="65%"  style={{ stopColor: '#ff0000', stopOpacity: 1 }} />
//           <stop offset="85%"  style={{ stopColor: '#cc0000', stopOpacity: 1 }} />
//           <stop offset="100%" style={{ stopColor: '#8b0000', stopOpacity: 0.9 }} />
//         </linearGradient>

//         <filter id="textShadow" x="-50%" y="-50%" width="200%" height="200%">
//           <feGaussianBlur stdDeviation="2" result="blur"/>
//           <feOffset in="blur" dx="2" dy="2" result="offsetBlur"/>
//           <feMerge><feMergeNode in="offsetBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
//         </filter>

//         <filter id="redGlow" x="-50%" y="-50%" width="200%" height="200%">
//           <feGaussianBlur stdDeviation="6" result="blur"/>
//           <feFlood floodColor="#cc0000" floodOpacity="0.5" result="color"/>
//           <feComposite in="color" in2="blur" operator="in" result="coloredBlur"/>
//           <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
//         </filter>
//       </defs>

//       {/* Shadow layer */}
//       <text className="gothic-text" x="50%" y={fontSize} textAnchor="middle"
//         fill="rgba(0,0,0,0.4)" filter="url(#textShadow)"
//         style={{ opacity: allVisible[0] ? 1 : 0, transition: 'opacity 0.5s ease' }}
//       >{word}</text>

//       {/* Main text */}
//       <text className="gothic-text" x="50%" y={fontSize} textAnchor="middle">
//         {word.split('').map((ch, i) => {
//           const hasDrip = [5, 6, 8].includes(i)
//           return (
//             <tspan
//               key={i}
//               fill={hasDrip ? 'url(#redDrip)' : 'white'}
//               filter={hasDrip ? 'url(#redGlow)' : undefined}
//               style={{ opacity: allVisible[i] ? 1 : 0, transition: `opacity 0.35s ease ${i * 0.07}s` }}
//             >{ch}</tspan>
//           )
//         })}
//       </text>
//     </svg>
//   )
// }

// // ─────────────────────────────────────────────
// // HeroTitle
// // ─────────────────────────────────────────────
// export const HeroTitle = ({ visible = false, onEnter }) => {
//   const fontSize = useFontSize()

//   const [lettersVisible, setLettersVisible] = useState(LETTERS.map(() => false))
//   const [yearVisible,    setYearVisible]    = useState(false)
//   const [taglineVisible, setTaglineVisible] = useState(false)
//   const [buttonsVisible, setButtonsVisible] = useState(false)

//   useEffect(() => {
//     if (!visible) return
//     const timers = LETTERS.map((_, i) =>
//       setTimeout(() => setLettersVisible(prev => { const n = [...prev]; n[i] = true; return n }), 150 + i * STAGGER)
//     )
//     const end = 150 + LETTERS.length * STAGGER
//     const t1  = setTimeout(() => setYearVisible(true),    end + 200)
//     const t2  = setTimeout(() => setTaglineVisible(true), end + 500)
//     const t3  = setTimeout(() => setButtonsVisible(true), end + 900)
//     return () => { [...timers, t1, t2, t3].forEach(clearTimeout) }
//   }, [visible])

//   if (!visible) return null

//   return (
//     <div className="relative z-10 flex flex-col items-center w-full" style={{ gap: 'clamp(8px,1.6vh,16px)' }}>
//       <style>{HEROTITLE_KEYFRAMES}</style>

//       {/* ── Title row with glitch ── */}
//       <div
//         data-glitch-row
//         className="flex items-center justify-center w-full overflow-visible"
//         style={{
//           padding:    '0 clamp(12px,4vw,48px)',
//           paddingTop: `${Math.round(fontSize * 0.12)}px`,
//           animation:  'rowGlitch 6s ease-in-out infinite',
//         }}
//       >
//         <div
//           data-gothic-wrap
//           className="w-full flex items-center justify-center"
//           style={{ animation: 'gothicBreathe 3.5s ease-in-out infinite, gothicFlicker 8s ease-in-out infinite' }}
//         >
//           <InlineWord word={WORD} fontSize={fontSize} allVisible={lettersVisible} />
//         </div>
//       </div>

//       {/* ── Year ── */}
//       <div
//         className="flex items-center justify-center gap-4"
//         style={{
//           opacity:    yearVisible ? 1 : 0,
//           transform:  yearVisible ? 'translateY(0)' : 'translateY(10px)',
//           transition: 'opacity 0.6s ease, transform 0.6s ease',
//         }}
//       >
//         <div style={{ width: '60px', height: '1px', background: 'linear-gradient(90deg,transparent,#dc2626,transparent)', animation: 'dashExpand 1s ease 1.5s both' }} />
//         <span style={{ fontFamily: "'Oswald',sans-serif", fontWeight: '200', fontSize: 'clamp(0.72rem,1.8vw,1rem)', color: 'rgba(177,169,169,0.6)', letterSpacing: '0.65em' }}>
//           2 0 2 6
//         </span>
//         <div style={{ width: '60px', height: '1px', background: 'linear-gradient(90deg,#dc2626,transparent)', animation: 'dashExpand 1s ease 1.5s both' }} />
//       </div>

//       {/* ── Tagline ── */}
//       <div
//         className="text-center px-4"
//         style={{
//           opacity:    taglineVisible ? 1 : 0,
//           transform:  taglineVisible ? 'translateY(0)' : 'translateY(8px)',
//           transition: 'opacity 0.6s ease, transform 0.6s ease',
//         }}
//       >
//         <p style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: '300', fontSize: 'clamp(0.5rem,1.2vw,0.72rem)', color: 'rgba(255,255,255,0.28)', letterSpacing: '0.42em', textTransform: 'uppercase', margin: 0 }}>
//           &nbsp;•&nbsp; Cultural Committee &nbsp;•&nbsp;
//         </p>
//       </div>

//       {/* ── Button ── */}
//       <div
//         className="flex flex-wrap justify-center gap-4 px-4"
//         style={{
//           marginTop:  'clamp(4px,1vh,12px)',
//           opacity:    buttonsVisible ? 1 : 0,
//           transform:  buttonsVisible ? 'translateY(0)' : 'translateY(20px)',
//           transition: 'opacity 0.7s ease, transform 0.7s ease',
//         }}
//       >
//         {/* onEnter from App → navigate('/') + unmount landing */}
//         <BtnPrati onClick={onEnter}>PRATI'26</BtnPrati>
//       </div>
//     </div>
//   )
// }

// // ─────────────────────────────────────────────
// // Buttons (self-contained, no global class names)
// // ─────────────────────────────────────────────
// export const BtnEnter = ({ children, onClick }) => {
//   const [hovered, setHovered] = useState(false)
//   return (
//     <button
//       onClick={onClick}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       className="relative overflow-hidden"
//       style={{
//         padding:       '14px 40px',
//         border:        '1.5px solid rgba(255,255,255,0.7)',
//         background:    'transparent',
//         color:         hovered ? '#0a0a0a' : 'white',
//         fontFamily:    "'Oswald',sans-serif",
//         fontSize:      '0.9rem',
//         fontWeight:    '400',
//         letterSpacing: '0.25em',
//         textTransform: 'uppercase',
//         cursor:        'pointer',
//         transition:    'color 0.3s ease',
//       }}
//     >
//       <span
//         aria-hidden
//         className="absolute inset-0 bg-white"
//         style={{ transform: hovered ? 'scaleX(1)' : 'scaleX(0)', transformOrigin: 'left', transition: 'transform 0.3s ease' }}
//       />
//       <span className="relative z-10">{children}</span>
//     </button>
//   )
// }

// export const BtnPrati = ({ children, onClick }) => {
//   const [hovered, setHovered] = useState(false)
//   return (
//     <button
//       onClick={onClick}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       className="relative overflow-hidden"
//       style={{
//         padding:       '14px 40px',
//         background:    '#dc2626',
//         color:         'white',
//         fontFamily:    "'Oswald',sans-serif",
//         fontSize:      '0.9rem',
//         fontWeight:    '400',
//         letterSpacing: '0.25em',
//         textTransform: 'uppercase',
//         cursor:        'pointer',
//         border:        'none',
//         transition:    'all 0.3s ease',
//       }}
//     >
//       <span
//         aria-hidden
//         className="absolute inset-0"
//         style={{ background: 'rgba(255,255,255,0.15)', transform: hovered ? 'scaleX(1)' : 'scaleX(0)', transformOrigin: 'right', transition: 'transform 0.3s ease' }}
//       />
//       <span className="relative z-10">{children}</span>
//     </button>
//   )
// }

import { useEffect, useState } from 'react'

// Only @keyframes live here — no class names, no leakage
const HEROTITLE_KEYFRAMES = `
  @keyframes letterDrop {
    from { opacity: 0; transform: translateY(-40px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes dashExpand {
    from { width: 0; opacity: 0; }
    to   { width: 60px; opacity: 1; }
  }
  @keyframes gothicBreathe {
    0%,100% { filter: drop-shadow(0 0 10px rgba(220,38,38,0.4)) drop-shadow(0 0 3px rgba(255,255,255,0.15)); }
    50%     { filter: drop-shadow(0 0 26px rgba(220,38,38,0.8)) drop-shadow(0 0 10px rgba(255,160,160,0.35)); }
  }
  @keyframes gothicFlicker {
    0%,88%,100% { opacity: 1; }
    89%         { opacity: 0.78; }
    89.4%       { opacity: 1; }
    89.8%       { opacity: 0.65; }
    90.2%       { opacity: 1; }
    90.6%       { opacity: 0.85; }
    91%         { opacity: 1; }
  }
  @keyframes rowGlitch {
    0%,78%,100% { transform: translate(0,0) skewX(0deg); filter: none; }
    79%  { transform: translate(-3px,1px) skewX(-1.5deg); filter: drop-shadow(4px 0 0 rgba(0,210,255,0.7)) drop-shadow(-4px 0 0 rgba(255,0,60,0.7)); }
    80%  { transform: translate(4px,-1px) skewX(1.5deg);  filter: drop-shadow(-5px 0 0 rgba(0,210,255,0.8)) drop-shadow(5px 0 0 rgba(255,0,60,0.6)); }
    81%  { transform: translate(-2px,0); filter: none; }
    82%  { transform: translate(0,0);   filter: none; }
    85%  { transform: translate(5px,0) skewX(2deg);   filter: drop-shadow(-5px 0 0 rgba(255,0,60,0.9)) drop-shadow(3px 0 0 rgba(0,210,255,0.65)) brightness(1.2); }
    86%  { transform: translate(-3px,-1px) skewX(-1deg); filter: drop-shadow(4px 0 0 rgba(255,0,60,0.55)) drop-shadow(-3px 0 0 rgba(0,210,255,0.8)); }
    87%  { transform: translate(0,0) skewX(0deg); filter: none; }
    90%  { transform: translate(2px,0); filter: drop-shadow(-2px 0 0 rgba(220,38,38,0.9)) brightness(1.25); }
    91%  { transform: translate(0,0); filter: none; }
  }
  @keyframes redGlowPulse {
    0%,100% { text-shadow: 0 0 40px rgba(220,38,38,0.3), 0 0 80px rgba(220,38,38,0.1); }
    50%     { text-shadow: 0 0 60px rgba(220,38,38,0.6), 0 0 100px rgba(220,38,38,0.2); }
  }
  @media (prefers-reduced-motion: reduce) {
    [data-glitch-row], [data-gothic-wrap] { animation: none !important; }
  }
`

const WORD    = 'Pratibimb'
const LETTERS = WORD.split('')
const STAGGER = 75

// ─────────────────────────────────────────────
// Responsive font size hook
// ─────────────────────────────────────────────
const useFontSize = () => {
  const [fontSize, setFontSize] = useState(72)
  useEffect(() => {
    const calc = () => {
      const w = window.innerWidth
      if      (w < 360)  setFontSize(52)
      else if (w < 480)  setFontSize(64)
      else if (w < 640)  setFontSize(76)
      else if (w < 768)  setFontSize(88)
      else if (w < 1024) setFontSize(94)
      else if (w < 1280) setFontSize(110)
      else               setFontSize(126)
    }
    calc()
    window.addEventListener('resize', calc)
    return () => window.removeEventListener('resize', calc)
  }, [])
  return fontSize
}

// ─────────────────────────────────────────────
// Gothic SVG word with red drip effect
// ─────────────────────────────────────────────
const InlineWord = ({ word, fontSize, allVisible }) => {
  const estH = fontSize * 1.5
  // Scale viewBox width proportionally so text fills available space on mobile
  const vbWidth = Math.round(fontSize * 7.2)

  return (
    <svg
      width="100%"
      height={estH}
      viewBox={`0 0 ${vbWidth} ${estH}`}
      preserveAspectRatio="xMidYMid meet"
      style={{ display: 'block', overflow: 'visible', maxWidth: '100%' }}
    >
      <defs>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=UnifrakturMaguntia&display=swap');
          .gothic-text {
            font-family: 'UnifrakturMaguntia', cursive;
            font-weight: 400;
            font-size: ${fontSize}px;
            letter-spacing: ${fontSize * 0.01}px;
          }
        `}</style>

        <linearGradient id="redDrip" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%"   style={{ stopColor: '#565151', stopOpacity: 1 }} />
          <stop offset="45%"  style={{ stopColor: '#ffffff', stopOpacity: 1 }} />
          <stop offset="65%"  style={{ stopColor: '#ff0000', stopOpacity: 1 }} />
          <stop offset="85%"  style={{ stopColor: '#cc0000', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#8b0000', stopOpacity: 0.9 }} />
        </linearGradient>

        <filter id="textShadow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="blur"/>
          <feOffset in="blur" dx="2" dy="2" result="offsetBlur"/>
          <feMerge><feMergeNode in="offsetBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>

        <filter id="redGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" result="blur"/>
          <feFlood floodColor="#cc0000" floodOpacity="0.5" result="color"/>
          <feComposite in="color" in2="blur" operator="in" result="coloredBlur"/>
          <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      {/* Shadow layer */}
      <text className="gothic-text" x="50%" y={fontSize} textAnchor="middle"
        fill="rgba(0,0,0,0.4)" filter="url(#textShadow)"
        style={{ opacity: allVisible[0] ? 1 : 0, transition: 'opacity 0.5s ease' }}
      >{word}</text>

      {/* Main text */}
      <text className="gothic-text" x="50%" y={fontSize} textAnchor="middle">
        {word.split('').map((ch, i) => {
          const hasDrip = [5, 6, 8].includes(i)
          return (
            <tspan
              key={i}
              fill={hasDrip ? 'url(#redDrip)' : 'white'}
              filter={hasDrip ? 'url(#redGlow)' : undefined}
              style={{ opacity: allVisible[i] ? 1 : 0, transition: `opacity 0.35s ease ${i * 0.07}s` }}
            >{ch}</tspan>
          )
        })}
      </text>
    </svg>
  )
}

// ─────────────────────────────────────────────
// HeroTitle
// ─────────────────────────────────────────────
export const HeroTitle = ({ visible = false, onEnter }) => {
  const fontSize = useFontSize()

  const [lettersVisible, setLettersVisible] = useState(LETTERS.map(() => false))
  const [yearVisible,    setYearVisible]    = useState(false)
  const [taglineVisible, setTaglineVisible] = useState(false)
  const [buttonsVisible, setButtonsVisible] = useState(false)

  useEffect(() => {
    if (!visible) return
    const timers = LETTERS.map((_, i) =>
      setTimeout(() => setLettersVisible(prev => { const n = [...prev]; n[i] = true; return n }), 150 + i * STAGGER)
    )
    const end = 150 + LETTERS.length * STAGGER
    const t1  = setTimeout(() => setYearVisible(true),    end + 200)
    const t2  = setTimeout(() => setTaglineVisible(true), end + 500)
    const t3  = setTimeout(() => setButtonsVisible(true), end + 900)
    return () => { [...timers, t1, t2, t3].forEach(clearTimeout) }
  }, [visible])

  if (!visible) return null

  return (
    <div className="relative z-10 flex flex-col items-center w-full" style={{ gap: 'clamp(8px,1.6vh,16px)' }}>
      <style>{HEROTITLE_KEYFRAMES}</style>

      {/* ── Title row with glitch ── */}
      <div
        data-glitch-row
        className="flex items-center justify-center w-full overflow-visible"
        style={{
          padding:    '0 clamp(12px,4vw,48px)',
          paddingTop: `${Math.round(fontSize * 0.12)}px`,
          animation:  'rowGlitch 6s ease-in-out infinite',
        }}
      >
        <div
          data-gothic-wrap
          className="w-full flex items-center justify-center"
          style={{ animation: 'gothicBreathe 3.5s ease-in-out infinite, gothicFlicker 8s ease-in-out infinite' }}
        >
          <InlineWord word={WORD} fontSize={fontSize} allVisible={lettersVisible} />
        </div>
      </div>

      {/* ── Year ── */}
      <div
        className="flex items-center justify-center gap-4"
        style={{
          opacity:    yearVisible ? 1 : 0,
          transform:  yearVisible ? 'translateY(0)' : 'translateY(10px)',
          transition: 'opacity 0.6s ease, transform 0.6s ease',
        }}
      >
        <div style={{ width: '60px', height: '1px', background: 'linear-gradient(90deg,transparent,#dc2626,transparent)', animation: 'dashExpand 1s ease 1.5s both' }} />
        <span style={{ fontFamily: "'Oswald',sans-serif", fontWeight: '200', fontSize: 'clamp(0.72rem,1.8vw,1rem)', color: 'rgba(177,169,169,0.6)', letterSpacing: '0.65em' }}>
          2 0 2 6
        </span>
        <div style={{ width: '60px', height: '1px', background: 'linear-gradient(90deg,#dc2626,transparent)', animation: 'dashExpand 1s ease 1.5s both' }} />
      </div>

      {/* ── Tagline ── */}
      <div
        className="text-center px-4"
        style={{
          opacity:    taglineVisible ? 1 : 0,
          transform:  taglineVisible ? 'translateY(0)' : 'translateY(8px)',
          transition: 'opacity 0.6s ease, transform 0.6s ease',
        }}
      >
        <p style={{ fontFamily: "'Montserrat',sans-serif", fontWeight: '300', fontSize: 'clamp(0.5rem,1.2vw,0.72rem)', color: 'rgba(255,255,255,0.28)', letterSpacing: '0.42em', textTransform: 'uppercase', margin: 0 }}>
          &nbsp;•&nbsp; Cultural Committee &nbsp;•&nbsp;
        </p>
      </div>

      {/* ── Button ── */}
      <div
        className="flex flex-wrap justify-center gap-4 px-4"
        style={{
          marginTop:  'clamp(4px,1vh,12px)',
          opacity:    buttonsVisible ? 1 : 0,
          transform:  buttonsVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.7s ease, transform 0.7s ease',
        }}
      >
        {/* onEnter from App → navigate('/') + unmount landing */}
        <BtnPrati onClick={onEnter}>PRATI'26</BtnPrati>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────
// Buttons (self-contained, no global class names)
// ─────────────────────────────────────────────
export const BtnEnter = ({ children, onClick }) => {
  const [hovered, setHovered] = useState(false)
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative overflow-hidden"
      style={{
        padding:       '14px 40px',
        border:        '1.5px solid rgba(255,255,255,0.7)',
        background:    'transparent',
        color:         hovered ? '#0a0a0a' : 'white',
        fontFamily:    "'Oswald',sans-serif",
        fontSize:      '0.9rem',
        fontWeight:    '400',
        letterSpacing: '0.25em',
        textTransform: 'uppercase',
        cursor:        'pointer',
        transition:    'color 0.3s ease',
      }}
    >
      <span
        aria-hidden
        className="absolute inset-0 bg-white"
        style={{ transform: hovered ? 'scaleX(1)' : 'scaleX(0)', transformOrigin: 'left', transition: 'transform 0.3s ease' }}
      />
      <span className="relative z-10">{children}</span>
    </button>
  )
}

export const BtnPrati = ({ children, onClick }) => {
  const [hovered, setHovered] = useState(false)
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative overflow-hidden"
      style={{
        padding:       '14px 40px',
        background:    '#dc2626',
        color:         'white',
        fontFamily:    "'Oswald',sans-serif",
        fontSize:      '0.9rem',
        fontWeight:    '400',
        letterSpacing: '0.25em',
        textTransform: 'uppercase',
        cursor:        'pointer',
        border:        'none',
        transition:    'all 0.3s ease',
      }}
    >
      <span
        aria-hidden
        className="absolute inset-0"
        style={{ background: 'rgba(255,255,255,0.15)', transform: hovered ? 'scaleX(1)' : 'scaleX(0)', transformOrigin: 'right', transition: 'transform 0.3s ease' }}
      />
      <span className="relative z-10">{children}</span>
    </button>
  )
}