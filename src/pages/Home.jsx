// import { useState, useEffect, useRef } from 'react';
// import { MapPin, Clock, Swords, Theater, Music, Landmark } from 'lucide-react';

// // ─── DATA ─────────────────────────────────────────────────────────────────────
// const ALL_EVENTS = [
//   { id: 1,  day: 1, title: "Clueminati",                 start: "9:00 AM",  end: "12:00 PM", venue: "Quadrangle",   category: "Competition" },
//   { id: 2,  day: 1, title: "Dance – Interbranch",        start: "1:00 PM",  end: "3:00 PM",  venue: "Audi",         category: "Performance" },
//   { id: 3,  day: 1, title: "Instrumental – Interbranch", start: "3:00 PM",  end: "5:00 PM",  venue: "Textile Hall", category: "Performance" },
//   { id: 4,  day: 1, title: "Opening Ceremony",           start: "5:30 PM",  end: "7:30 PM",  venue: "Quadrangle",   category: "Ceremony"    },
//   { id: 5,  day: 1, title: "Fashion Show",               start: "7:30 PM",  end: "9:30 PM",  venue: "Quadrangle",   category: "Performance" },
//   { id: 6,  day: 2, title: "Singing – Interbranch",      start: "9:00 AM",  end: "11:00 AM", venue: "Auditorium",   category: "Performance" },
//   { id: 7,  day: 2, title: "VJ GOT TALENT",              start: "11:00 AM", end: "3:00 PM",  venue: "Auditorium",   category: "Competition" },
//   { id: 8,  day: 2, title: "Stand Up",                   start: "11:00 AM", end: "1:00 PM",  venue: "Auditorium",   category: "Performance" },
//   { id: 9,  day: 2, title: "Rap Battle",                 start: "1:00 PM",  end: "3:00 PM",  venue: "Auditorium",   category: "Competition" },
//   { id: 10, day: 2, title: "Inter Branch Collab",        start: "2:00 PM",  end: "4:00 PM",  venue: "Textile Hall", category: "Performance" },
//   { id: 11, day: 2, title: "Intercollege – Group Dance", start: "11:00 AM", end: "1:00 PM",  venue: "Quadrangle",   category: "Competition" },
//   { id: 12, day: 2, title: "Intercollege – Band",        start: "1:00 PM",  end: "3:00 PM",  venue: "Quadrangle",   category: "Competition" },
//   { id: 13, day: 2, title: "FYD",                        start: "3:30 PM",  end: "6:30 PM",  venue: "Quadrangle",   category: "Performance" },
//   { id: 14, day: 2, title: "Concert",                    start: "7:30 PM",  end: "9:30 PM",  venue: "Quadrangle",   category: "Concert"     },
//   { id: 15, day: 3, title: "Talkshow & DJ",              start: "5:30 PM",  end: "8:30 PM",  venue: "Quadrangle",   category: "Performance" },
//   { id: 16, day: 3, title: "Closing Ceremony",           start: "9:00 PM",  end: "9:30 PM",  venue: "Quadrangle",   category: "Ceremony"    },
// ];

// const CATEGORY_CONFIG = {
//   Competition: { accent: "#ef4444", glow: "rgba(239,68,68,0.5)",   Icon: Swords,   desc: "Compete & conquer" },
//   Performance:  { accent: "#f97316", glow: "rgba(249,115,22,0.5)", Icon: Theater,  desc: "Take the stage"    },
//   Concert:      { accent: "#a855f7", glow: "rgba(168,85,247,0.5)", Icon: Music,    desc: "Feel the music"    },
//   Ceremony:     { accent: "#14b8a6", glow: "rgba(20,184,166,0.5)", Icon: Landmark, desc: "Witness history"   },
// };

// const CARD_BACKS = [
//   "linear-gradient(135deg,#1a0000 0%,#3b0000 50%,#1a0000 100%)",
//   "linear-gradient(135deg,#0d0d1a 0%,#1a0a2e 50%,#0d0d1a 100%)",
//   "linear-gradient(135deg,#001a00 0%,#0a2e0a 50%,#001a00 100%)",
//   "linear-gradient(135deg,#1a1000 0%,#2e1f00 50%,#1a1000 100%)",
// ];

// // ─── FLOATING ELEMENTS ────────────────────────────────────────────────────────
// // SVG music note paths
// const NOTE_PATHS = [
//   "M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z", // quarter note
//   "M9 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3H9zm8 0v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z", // double note
// ];

// // Seeded pseudo-random for consistent layout
// function seededRand(seed) {
//   let s = seed;
//   return () => {
//     s = (s * 16807 + 0) % 2147483647;
//     return (s - 1) / 2147483646;
//   };
// }

// function FloatingElements() {
//   // We render several layers:
//   // 1. Glowing geometric shards (triangles / diamonds)
//   // 2. Music notes
//   // 3. Pulsing ring orbs
//   // 4. Thin scanline / equalizer bars
//   // 5. Floating text tags

//   const rand = seededRand(42);

//   const shards = Array.from({ length: 12 }, (_, i) => ({
//     id: i,
//     x: rand() * 100,
//     y: rand() * 100,
//     size: 14 + rand() * 28,
//     rotation: rand() * 360,
//     duration: 14 + rand() * 18,
//     delay: rand() * 10,
//     opacity: 0.08 + rand() * 0.18,
//     shape: i % 3, // 0=triangle, 1=diamond, 2=hexagon
//     color: ['#ef4444','#f97316','#a855f7','#14b8a6','#ff6b35'][Math.floor(rand() * 5)],
//   }));

//   const notes = Array.from({ length: 9 }, (_, i) => ({
//     id: i,
//     x: rand() * 100,
//     startY: 80 + rand() * 20,
//     size: 18 + rand() * 22,
//     duration: 12 + rand() * 16,
//     delay: rand() * 12,
//     opacity: 0.12 + rand() * 0.22,
//     driftX: (rand() - 0.5) * 80,
//     noteIndex: i % 2,
//   }));

//   const orbs = Array.from({ length: 5 }, (_, i) => ({
//     id: i,
//     x: 10 + rand() * 80,
//     y: 10 + rand() * 80,
//     radius: 40 + rand() * 80,
//     duration: 20 + rand() * 25,
//     delay: rand() * 15,
//     color: ['rgba(220,38,38','rgba(249,115,22','rgba(168,85,247','rgba(239,68,68','rgba(255,80,0'][i],
//   }));

//   const eqBars = Array.from({ length: 6 }, (_, i) => ({
//     id: i,
//     x: 5 + i * 14,
//     duration: 0.6 + rand() * 0.8,
//     delay: rand() * 1.2,
//     maxH: 30 + rand() * 50,
//   }));

//   const tags = ['BEATS', 'CLASH', 'VIBE', 'GROOVE', 'WILD', 'LIT'];

//   return (
//     <div style={{ position:'absolute', inset:0, overflow:'hidden', pointerEvents:'none', zIndex:5 }}>

//       {/* ── Geometric shards ── */}
//       {shards.map(s => (
//         <div key={`shard-${s.id}`} className={`shard shard-${s.id}`} style={{
//           position:'absolute',
//           left:`${s.x}%`,
//           top:`${s.y}%`,
//           width:s.size,
//           height:s.size,
//           opacity:s.opacity,
//           animationDuration:`${s.duration}s`,
//           animationDelay:`-${s.delay}s`,
//           animationName:'shardFloat',
//           animationTimingFunction:'ease-in-out',
//           animationIterationCount:'infinite',
//           animationDirection:'alternate',
//         }}>
//           <svg viewBox="0 0 100 100" width="100%" height="100%">
//             {s.shape === 0 && (
//               <polygon points="50,5 95,90 5,90" fill="none" stroke={s.color}
//                 strokeWidth="3" style={{ filter:`drop-shadow(0 0 6px ${s.color})` }} />
//             )}
//             {s.shape === 1 && (
//               <polygon points="50,5 95,50 50,95 5,50" fill="none" stroke={s.color}
//                 strokeWidth="3" style={{ filter:`drop-shadow(0 0 6px ${s.color})` }} />
//             )}
//             {s.shape === 2 && (
//               <polygon points="50,5 90,27 90,73 50,95 10,73 10,27" fill="none" stroke={s.color}
//                 strokeWidth="3" style={{ filter:`drop-shadow(0 0 6px ${s.color})` }} />
//             )}
//           </svg>
//         </div>
//       ))}

//       {/* ── Floating music notes ── */}
//       {notes.map(n => (
//         <div key={`note-${n.id}`} style={{
//           position:'absolute',
//           left:`${n.x}%`,
//           bottom:`${100 - n.startY}%`,
//           width:n.size,
//           height:n.size,
//           opacity:n.opacity,
//           '--drift': `${n.driftX}px`,
//           animationName:'noteFloat',
//           animationDuration:`${n.duration}s`,
//           animationDelay:`-${n.delay}s`,
//           animationTimingFunction:'ease-in-out',
//           animationIterationCount:'infinite',
//         }}>
//           <svg viewBox="0 0 24 24" width="100%" height="100%" fill="rgba(255,80,0,0.8)"
//             style={{ filter:'drop-shadow(0 0 8px rgba(255,80,0,0.7))' }}>
//             {n.noteIndex === 0
//               ? <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
//               : <path d="M9 3v10.55c-.59-.34-1.27-.55-2-.55C4.79 13 3 14.79 3 17s1.79 4 4 4 4-1.79 4-4V7h6V3H9zm8 0v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
//             }
//           </svg>
//         </div>
//       ))}

//       {/* ── Pulsing ring orbs ── */}
//       {orbs.map(o => (
//         <div key={`orb-${o.id}`} style={{
//           position:'absolute',
//           left:`${o.x}%`,
//           top:`${o.y}%`,
//           width:o.radius * 2,
//           height:o.radius * 2,
//           transform:'translate(-50%,-50%)',
//           borderRadius:'50%',
//           border:`1px solid ${o.color},0.25)`,
//           boxShadow:`0 0 ${o.radius * 0.4}px ${o.color},0.15)`,
//           animationName:'orbPulse',
//           animationDuration:`${o.duration}s`,
//           animationDelay:`-${o.delay}s`,
//           animationTimingFunction:'ease-in-out',
//           animationIterationCount:'infinite',
//           animationDirection:'alternate',
//         }}>
//           {/* inner ring */}
//           <div style={{
//             position:'absolute', inset:'25%', borderRadius:'50%',
//             border:`1px solid ${o.color},0.1)`,
//           }}/>
//         </div>
//       ))}

//       {/* ── Equalizer bars (bottom-left corner) ── */}
//       <div style={{
//         position:'absolute', bottom:80, left:40,
//         display:'flex', alignItems:'flex-end', gap:4, opacity:0.25,
//       }}>
//         {eqBars.map(b => (
//           <div key={`eq-${b.id}`} style={{
//             width:6, background:'linear-gradient(to top,#ef4444,#f97316)',
//             borderRadius:3,
//             boxShadow:'0 0 8px rgba(239,68,68,0.6)',
//             animationName:'eqDance',
//             animationDuration:`${b.duration}s`,
//             animationDelay:`-${b.delay}s`,
//             animationTimingFunction:'ease-in-out',
//             animationIterationCount:'infinite',
//             animationDirection:'alternate',
//             '--maxH': `${b.maxH}px`,
//             height:`${b.maxH * 0.4}px`,
//           }}/>
//         ))}
//       </div>

//       {/* ── Equalizer bars (bottom-right corner) ── */}
//       <div style={{
//         position:'absolute', bottom:80, right:40,
//         display:'flex', alignItems:'flex-end', gap:4, opacity:0.25,
//         transform:'scaleX(-1)',
//       }}>
//         {eqBars.map(b => (
//           <div key={`eq2-${b.id}`} style={{
//             width:6, background:'linear-gradient(to top,#ef4444,#f97316)',
//             borderRadius:3,
//             boxShadow:'0 0 8px rgba(239,68,68,0.6)',
//             animationName:'eqDance',
//             animationDuration:`${b.duration * 1.2}s`,
//             animationDelay:`-${b.delay * 0.7}s`,
//             animationTimingFunction:'ease-in-out',
//             animationIterationCount:'infinite',
//             animationDirection:'alternate',
//             '--maxH': `${b.maxH}px`,
//             height:`${b.maxH * 0.4}px`,
//           }}/>
//         ))}
//       </div>

//       {/* ── Floating keyword tags ── */}
//       {tags.map((tag, i) => {
//         const tr = seededRand(i * 99 + 7);
//         return (
//           <div key={`tag-${i}`} style={{
//             position:'absolute',
//             left:`${8 + tr() * 84}%`,
//             top:`${10 + tr() * 75}%`,
//             fontFamily:'monospace',
//             fontSize:`${9 + tr() * 7}px`,
//             letterSpacing:'0.25em',
//             color:'rgba(239,68,68,0.18)',
//             fontWeight:900,
//             animationName:'tagDrift',
//             animationDuration:`${22 + tr() * 20}s`,
//             animationDelay:`-${tr() * 15}s`,
//             animationTimingFunction:'ease-in-out',
//             animationIterationCount:'infinite',
//             animationDirection:'alternate',
//             userSelect:'none',
//             whiteSpace:'nowrap',
//           }}>{tag}</div>
//         );
//       })}

//       {/* ── Thin diagonal accent lines ── */}
//       {[0,1,2].map(i => {
//         const lr = seededRand(i * 777);
//         const x1 = lr() * 100;
//         const opacity = 0.04 + lr() * 0.06;
//         return (
//           <div key={`line-${i}`} style={{
//             position:'absolute',
//             top:0, bottom:0,
//             left:`${x1}%`,
//             width:1,
//             background:`linear-gradient(to bottom,transparent,rgba(239,68,68,${opacity * 3}),transparent)`,
//             transform:`rotate(${-20 + lr() * 40}deg)`,
//             transformOrigin:'center',
//             opacity,
//             animationName:'lineShimmer',
//             animationDuration:`${18 + lr() * 12}s`,
//             animationDelay:`-${lr() * 10}s`,
//             animationTimingFunction:'ease-in-out',
//             animationIterationCount:'infinite',
//             animationDirection:'alternate',
//           }}/>
//         );
//       })}

//       <style>{`
//         @keyframes shardFloat {
//           0%   { transform: translate(0,0) rotate(0deg) scale(1); }
//           33%  { transform: translate(18px,-25px) rotate(45deg) scale(1.1); }
//           66%  { transform: translate(-12px,-15px) rotate(90deg) scale(0.9); }
//           100% { transform: translate(20px,-35px) rotate(135deg) scale(1.05); }
//         }
//         @keyframes noteFloat {
//           0%   { transform: translateY(0) translateX(0) rotate(-10deg); opacity: 0; }
//           10%  { opacity: var(--note-op, 0.2); }
//           90%  { opacity: var(--note-op, 0.2); }
//           100% { transform: translateY(-90vh) translateX(var(--drift)) rotate(15deg); opacity: 0; }
//         }
//         @keyframes orbPulse {
//           0%   { transform: translate(-50%,-50%) scale(0.85); opacity: 0.3; }
//           50%  { transform: translate(-50%,-50%) scale(1.05); opacity: 0.7; }
//           100% { transform: translate(-50%,-50%) scale(0.9); opacity: 0.4; }
//         }
//         @keyframes eqDance {
//           0%   { height: calc(var(--maxH) * 0.15); }
//           100% { height: var(--maxH); }
//         }
//         @keyframes tagDrift {
//           0%   { transform: translate(0, 0); }
//           50%  { transform: translate(12px, -20px); }
//           100% { transform: translate(-8px, 15px); }
//         }
//         @keyframes lineShimmer {
//           0%   { opacity: 0.02; }
//           50%  { opacity: 0.1; }
//           100% { opacity: 0.03; }
//         }
//       `}</style>
//     </div>
//   );
// }

// // ─── SHATTER INTRO ────────────────────────────────────────────────────────────
// function ShatterIntro({ onComplete }) {
//   const canvasRef = useRef(null);
//   const animRef   = useRef(null);

//   useEffect(() => {
//     document.body.style.overflow = 'hidden';
//     document.body.style.margin   = '0';
//     document.body.style.width    = '100%';
//     document.documentElement.style.overflow = 'hidden';
//     document.documentElement.style.width    = '100%';
//     return () => {
//       document.body.style.overflow = '';
//       document.body.style.width    = '';
//       document.documentElement.style.overflow = '';
//       document.documentElement.style.width    = '';
//     };
//   }, []);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext('2d');

//     canvas.width  = document.documentElement.clientWidth;
//     canvas.height = document.documentElement.clientHeight;
//     const W = canvas.width;
//     const H = canvas.height;

//     const rand    = (a, b) => a + Math.random() * (b - a);
//     const randInt = (a, b) => Math.floor(rand(a, b));

//     const seeds = Array.from({ length: 80 }, () => ({ x: rand(0, W), y: rand(0, H) }));
//     const cells = seeds.map(() => ({ pts: [] }));

//     for (let gx = 0; gx <= W; gx += 6) {
//       for (let gy = 0; gy <= H; gy += 6) {
//         let best = 0, bestD = Infinity;
//         for (let s = 0; s < seeds.length; s++) {
//           const dx = gx - seeds[s].x, dy = gy - seeds[s].y;
//           const d  = dx * dx + dy * dy;
//           if (d < bestD) { bestD = d; best = s; }
//         }
//         cells[best].pts.push([gx, gy]);
//       }
//     }

//     function cross(O, A, B) {
//       return (A[0]-O[0])*(B[1]-O[1]) - (A[1]-O[1])*(B[0]-O[0]);
//     }
//     function convexHull(pts) {
//       if (pts.length < 3) return pts;
//       const sorted = pts.slice().sort((a, b) => a[0] - b[0] || a[1] - b[1]);
//       const lower = [];
//       for (const p of sorted) {
//         while (lower.length >= 2 && cross(lower[lower.length-2], lower[lower.length-1], p) <= 0) lower.pop();
//         lower.push(p);
//       }
//       const upper = [];
//       for (let i = sorted.length - 1; i >= 0; i--) {
//         const p = sorted[i];
//         while (upper.length >= 2 && cross(upper[upper.length-2], upper[upper.length-1], p) <= 0) upper.pop();
//         upper.push(p);
//       }
//       upper.pop(); lower.pop();
//       return lower.concat(upper);
//     }

//     const shards = seeds.map((_, i) => {
//       const hull  = convexHull(cells[i].pts);
//       const cx    = hull.reduce((s, p) => s + p[0], 0) / (hull.length || 1);
//       const cy    = hull.reduce((s, p) => s + p[1], 0) / (hull.length || 1);
//       const angle = Math.atan2(cy - H/2, cx - W/2);
//       const speed = rand(4, 14);
//       return {
//         hull, cx, cy,
//         vx:   Math.cos(angle) * speed,
//         vy:   Math.sin(angle) * speed,
//         spin: rand(-0.06, 0.06),
//         fill: `hsl(${rand(0,8)},90%,${rand(15,55)}%)`,
//         edge: `hsl(${rand(0,5)},100%,${rand(60,90)}%)`,
//       };
//     });

//     const CRACK_T   = 700;
//     const EXPLODE_T = 1100;
//     const DONE_T    = 2000;

//     const cracks = Array.from({ length: 18 }, (_, i) => {
//       const angle  = (i / 18) * Math.PI * 2 + rand(-0.2, 0.2);
//       const length = rand(W * 0.3, W * 0.75);
//       const segs   = randInt(3, 6);
//       const pts    = [[W/2, H/2]];
//       let cx2 = W/2, cy2 = H/2;
//       for (let s = 0; s < segs; s++) {
//         const jitter = rand(-0.25, 0.25);
//         cx2 += Math.cos(angle + jitter) * (length / segs);
//         cy2 += Math.sin(angle + jitter) * (length / segs);
//         pts.push([cx2, cy2]);
//       }
//       return { pts, delay: rand(0, CRACK_T * 0.4) };
//     });

//     const START = performance.now();

//     const draw = (now) => {
//       const elapsed = now - START;
//       ctx.clearRect(0, 0, W, H);

//       if (elapsed < EXPLODE_T) {
//         ctx.fillStyle = '#000';
//         ctx.fillRect(0, 0, W, H);

//         const glowAlpha = Math.min(elapsed / CRACK_T, 1) * 0.7;
//         const grd = ctx.createRadialGradient(W/2, H/2, 0, W/2, H/2, W * 0.5);
//         grd.addColorStop(0,   `rgba(200,0,0,${glowAlpha})`);
//         grd.addColorStop(0.4, `rgba(100,0,0,${glowAlpha * 0.5})`);
//         grd.addColorStop(1,   'rgba(0,0,0,0)');
//         ctx.fillStyle = grd;
//         ctx.fillRect(0, 0, W, H);

//         cracks.forEach(crack => {
//           const ce = elapsed - crack.delay;
//           if (ce <= 0) return;
//           const progress = Math.min(ce / (CRACK_T * 0.8), 1);
//           const totalLen = crack.pts.reduce((sum, p, i) => {
//             if (i === 0) return 0;
//             return sum + Math.hypot(p[0]-crack.pts[i-1][0], p[1]-crack.pts[i-1][1]);
//           }, 0);
//           let remaining = totalLen * progress;

//           ctx.beginPath();
//           ctx.moveTo(crack.pts[0][0], crack.pts[0][1]);
//           for (let i = 1; i < crack.pts.length && remaining > 0; i++) {
//             const prev = crack.pts[i-1], curr = crack.pts[i];
//             const segLen = Math.hypot(curr[0]-prev[0], curr[1]-prev[1]);
//             if (remaining >= segLen) {
//               ctx.lineTo(curr[0], curr[1]); remaining -= segLen;
//             } else {
//               const t = remaining / segLen;
//               ctx.lineTo(prev[0]+(curr[0]-prev[0])*t, prev[1]+(curr[1]-prev[1])*t);
//               remaining = 0;
//             }
//           }
//           ctx.shadowColor = '#ff0000'; ctx.shadowBlur = 12;
//           ctx.strokeStyle = `rgba(255,60,0,${0.5 + progress * 0.4})`;
//           ctx.lineWidth = 2.5; ctx.stroke();
//           ctx.shadowBlur = 4;
//           ctx.strokeStyle = `rgba(255,180,100,${progress * 0.9})`;
//           ctx.lineWidth = 0.8; ctx.stroke();
//           ctx.shadowBlur = 0;
//         });
//       }

//       if (elapsed >= EXPLODE_T) {
//         const t = Math.min((elapsed - EXPLODE_T) / (DONE_T - EXPLODE_T), 1);
//         ctx.fillStyle = '#000';
//         ctx.fillRect(0, 0, W, H);

//         shards.forEach(s => {
//           const ease = 1 - Math.pow(1 - Math.min(t * 1.4, 1), 3);
//           const fade = Math.max(0, 1 - t * 1.6);
//           if (s.hull.length < 3 || fade <= 0) return;

//           ctx.save();
//           ctx.translate(s.cx + s.vx * ease * 120, s.cy + s.vy * ease * 120);
//           ctx.rotate(s.spin * ease * 40);
//           ctx.globalAlpha = fade;

//           const lh = s.hull.map(p => [p[0]-s.cx, p[1]-s.cy]);
//           ctx.beginPath();
//           ctx.moveTo(lh[0][0], lh[0][1]);
//           for (let i = 1; i < lh.length; i++) ctx.lineTo(lh[i][0], lh[i][1]);
//           ctx.closePath();
//           ctx.fillStyle = s.fill; ctx.fill();
//           ctx.shadowColor = '#ff2200'; ctx.shadowBlur = 8;
//           ctx.strokeStyle = s.edge; ctx.lineWidth = 1.2; ctx.stroke();
//           ctx.shadowBlur = 0;
//           ctx.restore();
//         });

//         ctx.globalAlpha = 1;
//         if (elapsed >= DONE_T) {
//           cancelAnimationFrame(animRef.current);
//           onComplete();
//           return;
//         }
//       }

//       animRef.current = requestAnimationFrame(draw);
//     };

//     animRef.current = requestAnimationFrame(draw);
//     return () => cancelAnimationFrame(animRef.current);
//   }, [onComplete]);

//   return (
//     <div style={{ position:'fixed', inset:0, zIndex:100, background:'#000', width:'100vw', height:'100vh', overflow:'hidden' }}>
//       <canvas ref={canvasRef} style={{ display:'block', width:'100%', height:'100%' }} />
//       <div style={{
//         position:'absolute', inset:0, display:'flex', alignItems:'center', justifyContent:'center',
//         zIndex:10, pointerEvents:'none', animation:'titleAppear 1.4s ease-out 0.65s both',
//       }}>
//         <div style={{ textAlign:'center' }}>
//           <div style={{ fontFamily:'Georgia, serif', lineHeight:0.9 }}>
//             {['POP','meets','PARADOX'].map((word, i) => (
//               <div key={word} style={{ overflow:'hidden' }}>
//                 <span style={{
//                   display:'inline-block',
//                   fontSize: word === 'meets' ? 'clamp(2rem,6vw,5rem)' : 'clamp(4rem,12vw,11rem)',
//                   fontWeight: word === 'meets' ? 300 : 900,
//                   fontStyle: word === 'meets' ? 'italic' : 'normal',
//                   letterSpacing: word === 'meets' ? 'normal' : '-0.02em',
//                   color: word === 'meets' ? 'rgba(255,180,130,0.9)' : '#fff',
//                   textShadow: word === 'meets'
//                     ? '0 0 20px rgba(255,80,0,0.8)'
//                     : '0 0 60px rgba(255,40,0,1), 0 0 120px rgba(200,0,0,0.8)',
//                   animation:`crackIn 0.5s cubic-bezier(0.16,1,0.3,1) ${0.65 + i*0.13}s both`,
//                 }}>{word}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       <style>{`
//         @keyframes titleAppear { from{opacity:0} to{opacity:1} }
//         @keyframes crackIn {
//           from{opacity:0;transform:scale(1.15) skewX(-3deg);filter:blur(8px)}
//           to{opacity:1;transform:scale(1) skewX(0deg);filter:blur(0)}
//         }
//       `}</style>
//     </div>
//   );
// }

// // ─── FLIP CARD ────────────────────────────────────────────────────────────────
// function FlipCard({ event, index }) {
//   const [flipped, setFlipped] = useState(false);
//   const cfg = CATEGORY_CONFIG[event.category];
//   const { Icon } = cfg;
//   const bg  = CARD_BACKS[index % CARD_BACKS.length];

//   return (
//     <div onClick={() => setFlipped(f => !f)} style={{ perspective:'1000px', cursor:'pointer', height:220 }}>
//       <div style={{
//         position:'relative', width:'100%', height:'100%',
//         transformStyle:'preserve-3d',
//         transition:'transform 0.65s cubic-bezier(0.23,1,0.32,1)',
//         transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
//       }}>
//         {/* FRONT */}
//         <div style={{
//           position:'absolute', inset:0, backfaceVisibility:'hidden',
//           background:bg, border:'1px solid rgba(255,255,255,0.07)',
//           borderTop:`2px solid ${cfg.accent}`, padding:'26px 22px',
//           display:'flex', flexDirection:'column', justifyContent:'space-between', overflow:'hidden',
//         }}>
//           <div style={{ position:'absolute', top:-40, right:-40, width:120, height:120, borderRadius:'50%', background:cfg.glow, filter:'blur(40px)', opacity:0.35, pointerEvents:'none' }} />
//           <div>
//             <div style={{ fontSize:11, letterSpacing:'0.2em', fontFamily:'monospace', color:cfg.accent, marginBottom:12, display:'flex', alignItems:'center', gap:6 }}>
//               <Icon size={12} color={cfg.accent} />{event.category.toUpperCase()}
//             </div>
//             <h3 style={{ fontSize:'clamp(1rem,2vw,1.25rem)', fontWeight:800, lineHeight:1.25, margin:0, color:'#fff', fontFamily:"'Georgia',serif", letterSpacing:'-0.01em' }}>
//               {event.title}
//             </h3>
//           </div>
//           <div style={{ display:'flex', flexDirection:'column', gap:8 }}>
//             <div style={{ display:'flex', alignItems:'center', gap:8, color:'rgba(255,255,255,0.45)', fontSize:12, fontFamily:'monospace' }}>
//               <Clock size={11} color={cfg.accent} />{event.start} – {event.end}
//             </div>
//             <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
//               <div style={{ display:'flex', alignItems:'center', gap:8, color:'rgba(255,255,255,0.45)', fontSize:12, fontFamily:'monospace' }}>
//                 <MapPin size={11} color={cfg.accent} />{event.venue}
//               </div>
//               <span style={{ fontSize:9, color:'rgba(255,255,255,0.2)', fontFamily:'monospace', letterSpacing:'0.1em' }}>TAP ↻</span>
//             </div>
//           </div>
//           <div style={{ position:'absolute', bottom:0, left:0, height:2, width:'40%', background:`linear-gradient(to right,${cfg.accent},transparent)` }} />
//         </div>

//         {/* BACK */}
//         <div style={{
//           position:'absolute', inset:0, backfaceVisibility:'hidden',
//           transform:'rotateY(180deg)',
//           background:`radial-gradient(ellipse at center,${cfg.glow.replace('0.5','0.2')} 0%,#050505 70%)`,
//           border:`1px solid ${cfg.accent}`,
//           boxShadow:`0 0 30px ${cfg.glow}, inset 0 0 30px rgba(0,0,0,0.5)`,
//           padding:'22px 20px',
//           display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center',
//           textAlign:'center', gap:14, overflow:'hidden',
//         }}>
//           <div style={{ position:'absolute', inset:-1, border:`1px solid ${cfg.accent}`, animation:'pulseRing 2s ease-in-out infinite', pointerEvents:'none' }} />
//           <Icon size={28} color={cfg.accent} style={{ filter:`drop-shadow(0 0 8px ${cfg.accent})` }} />
//           <div>
//             <div style={{ fontSize:10, letterSpacing:'0.2em', color:cfg.accent, fontFamily:'monospace', marginBottom:6 }}>{cfg.desc.toUpperCase()}</div>
//             <h3 style={{ fontSize:'clamp(1rem,2.5vw,1.35rem)', fontWeight:900, color:'#fff', fontFamily:'Georgia,serif', letterSpacing:'-0.01em', margin:0, textShadow:`0 0 20px ${cfg.accent}` }}>
//               {event.title}
//             </h3>
//           </div>
//           <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:10, width:'100%' }}>
//             {[
//               { label:'START', value:event.start, icon:<Clock size={9} /> },
//               { label:'END',   value:event.end,   icon:<Clock size={9} /> },
//               { label:'VENUE', value:event.venue,  icon:<MapPin size={9} />, span:true },
//             ].map(item => (
//               <div key={item.label} style={{
//                 gridColumn:item.span ? '1 / -1' : 'auto',
//                 background:'rgba(0,0,0,0.5)', border:'1px solid rgba(255,255,255,0.07)',
//                 borderLeft:`2px solid ${cfg.accent}`, padding:'7px 10px', textAlign:'left',
//               }}>
//                 <div style={{ fontSize:9, color:cfg.accent, fontFamily:'monospace', letterSpacing:'0.15em', marginBottom:2, display:'flex', alignItems:'center', gap:4 }}>
//                   {item.icon}{item.label}
//                 </div>
//                 <div style={{ fontSize:11, color:'#fff', fontFamily:'monospace', fontWeight:700 }}>{item.value}</div>
//               </div>
//             ))}
//           </div>
//           <span style={{ fontSize:9, color:'rgba(255,255,255,0.2)', letterSpacing:'0.15em', fontFamily:'monospace' }}>TAP TO FLIP BACK ↺</span>
//         </div>
//       </div>
//     </div>
//   );
// }

// // ─── MAIN PAGE ────────────────────────────────────────────────────────────────
// export default function EventPage() {
//   const [introComplete, setIntroComplete] = useState(false);
//   const [cursorPos,     setCursorPos]     = useState({ x: 0, y: 0 });
//   const [activeDay,     setActiveDay]     = useState(1);

//   useEffect(() => {
//     const move = (e) => setCursorPos({ x: e.clientX, y: e.clientY });
//     window.addEventListener('mousemove', move);
//     return () => window.removeEventListener('mousemove', move);
//   }, []);

//   const dayEvents = ALL_EVENTS.filter(e => e.day === activeDay);

//   if (!introComplete) {
//     return <ShatterIntro onComplete={() => setIntroComplete(true)} />;
//   }

//   return (
//     <div style={{ minHeight:'100vh', background:'#000', color:'#fff', margin:0, padding:0, width:'100vw', maxWidth:'100vw', overflowX:'hidden', position:'relative', left:0 }}>

//       {/* Cursor glow */}
//       <div style={{
//         position:'fixed', width:300, height:300, pointerEvents:'none', zIndex:9999,
//         background:'radial-gradient(circle,rgba(255,0,0,0.15) 0%,transparent 70%)',
//         transform:'translate(-50%,-50%)', transition:'left 0.1s ease-out, top 0.1s ease-out',
//         left:cursorPos.x, top:cursorPos.y,
//       }} />

//       {/* ── HERO ── */}
//       <div style={{
//         position:'relative', minHeight:'100vh', width:'100%',
//         display:'flex', alignItems:'center', justifyContent:'center', overflow:'hidden',
//         background:'radial-gradient(ellipse at center,rgba(139,0,0,0.3) 0%,black 70%)',
//       }}>
//         {/* Original particles */}
//         <div style={{ position:'absolute', inset:0, overflow:'hidden' }}>
//           {[...Array(20)].map((_,i) => <div key={i} className='particle' style={{ '--i':i }} />)}
//         </div>
//         {/* Original embers */}
//         <div style={{ position:'absolute', inset:0, overflow:'hidden', pointerEvents:'none' }}>
//           {[...Array(15)].map((_,i) => (
//             <div key={i} className='ember' style={{ '--delay': (i*0.5) + 's', '--x': ((i*6.67)%100) + '%' }} />
//           ))}
//         </div>

//         {/* ── NEW: Themed floating elements ── */}
//         <FloatingElements />

//         <div style={{ position:'relative', zIndex:10, textAlign:'center', padding:'128px 24px' }}>
//           <div style={{ fontFamily:'Georgia, serif', lineHeight:0.9 }}>
//             {['POP','meets','PARADOX'].map((word) => (
//               <div key={word}>
//                 <span
//                   style={{
//                     display:'inline-block',
//                     fontSize: word === 'meets' ? 'clamp(2rem,6vw,5rem)' : 'clamp(4rem,12vw,11rem)',
//                     fontWeight: word === 'meets' ? 300 : 900,
//                     fontStyle: word === 'meets' ? 'italic' : 'normal',
//                     letterSpacing: word === 'meets' ? 'normal' : '-0.02em',
//                     color: word === 'meets' ? 'rgba(255,180,130,0.9)' : '#fff',
//                     textShadow: word === 'meets'
//                       ? '0 0 20px rgba(255,80,0,0.7)'
//                       : '0 0 40px rgba(255,80,0,0.9), 0 0 80px rgba(255,40,0,0.6), 0 0 120px rgba(200,0,0,0.4)',
//                     margin: word === 'meets' ? '16px 0' : 0,
//                     cursor:'default', transition:'transform 0.4s',
//                   }}
//                   onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.08)'}
//                   onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
//                 >{word}</span>
//               </div>
//             ))}
//           </div>

//           {/* ── NEW: Subtitle / date strip ── */}
//           <div style={{
//             marginTop:40,
//             display:'flex', flexDirection:'column', alignItems:'center', gap:12,
//             animation:'fadeUpIn 1s ease-out 0.3s both',
//           }}>
//             <div style={{
//               display:'flex', alignItems:'center', gap:16,
//               fontFamily:'monospace', fontSize:'clamp(9px,1.5vw,12px)',
//               letterSpacing:'0.3em', color:'rgba(255,255,255,0.3)',
//             }}>
//               <span style={{ width:40, height:1, background:'rgba(239,68,68,0.4)', display:'inline-block' }} />
//               21 – 23 FEBRUARY 2026
//               <span style={{ width:40, height:1, background:'rgba(239,68,68,0.4)', display:'inline-block' }} />
//             </div>
//             <div style={{
//               display:'flex', gap:24, flexWrap:'wrap', justifyContent:'center',
//             }}>
//               {['MUSIC','DANCE','COMEDY','FASHION','BATTLE'].map((tag) => (
//                 <span key={tag} style={{
//                   fontSize:'clamp(8px,1.2vw,10px)',
//                   letterSpacing:'0.25em',
//                   fontFamily:'monospace',
//                   color:'rgba(239,68,68,0.45)',
//                   borderBottom:'1px solid rgba(239,68,68,0.2)',
//                   paddingBottom:2,
//                 }}>{tag}</span>
//               ))}
//             </div>
//           </div>
//         </div>

//         <div style={{ position:'absolute', bottom:40, left:'50%', transform:'translateX(-50%)', zIndex:10, animation:'heroBounce 1.5s ease-in-out infinite' }}>
//           <div style={{ width:24, height:40, border:'2px solid #ef4444', borderRadius:12, display:'flex', justifyContent:'center', paddingTop:8 }}>
//             <div style={{ width:4, height:12, background:'#ef4444', borderRadius:2, animation:'heroPulse 1.5s ease-in-out infinite' }} />
//           </div>
//         </div>
//       </div>

//       {/* ── EVENTS ── */}
//       <div style={{ padding:'80px 5%', background:'linear-gradient(to bottom,#000,rgba(69,0,0,0.2))', width:'100%', boxSizing:'border-box' }}>
//         <div style={{ maxWidth:'80rem', margin:'0 auto' }}>

//           <div style={{ marginBottom:48 }}>
//             <h2 style={{ fontSize:'clamp(2.5rem,6vw,5rem)', fontWeight:900, fontFamily:'Georgia,serif', margin:'0 0 8px', lineHeight:1 }}>
//               UPCOMING <span style={{ color:'#dc2626', textShadow:'0 0 20px rgba(220,38,38,0.8),0 0 40px rgba(220,38,38,0.5)' }}>EVENTS</span>
//             </h2>
//             <p style={{ color:'#52525b', fontSize:12, letterSpacing:'0.15em', fontFamily:'monospace', margin:'8px 0 16px' }}>CLICK ANY CARD TO REVEAL DETAILS</p>
//             <div style={{ height:1, width:128, background:'#dc2626', boxShadow:'0 0 20px rgba(220,38,38,0.6)' }} />
//           </div>

//           <div style={{ display:'flex', gap:12, marginBottom:32, flexWrap:'wrap' }}>
//             {[1,2,3].map(d => (
//               <button key={d} onClick={() => setActiveDay(d)} style={{
//                 padding:'12px 28px', fontWeight:700, fontSize:12, letterSpacing:'0.15em',
//                 cursor:'pointer', border:'1px solid', fontFamily:'monospace',
//                 borderColor: activeDay === d ? '#dc2626' : 'rgba(220,38,38,0.25)',
//                 background:  activeDay === d ? '#dc2626' : 'transparent',
//                 color:'#fff',
//                 boxShadow:   activeDay === d ? '0 0 24px rgba(220,38,38,0.5)' : 'none',
//                 transition:'all 0.25s',
//               }}>
//                 <div style={{ fontSize:9, opacity:0.65, marginBottom:3 }}>
//                   {d === 1 ? '21 FEBRUARY 2026' : d === 2 ? '22 FEBRUARY 2026' : '23 FEBRUARY 2026'}
//                 </div>
//                 DAY {d} — {d === 1 ? 5 : d === 2 ? 9 : 2} EVENTS
//               </button>
//             ))}
//           </div>

//           <div style={{ display:'flex', gap:20, flexWrap:'wrap', marginBottom:32 }}>
//             {Object.entries(CATEGORY_CONFIG).map(([cat, cfg]) => {
//               const { Icon } = cfg;
//               return (
//                 <div key={cat} style={{ display:'flex', alignItems:'center', gap:8 }}>
//                   <Icon size={13} color={cfg.accent} />
//                   <span style={{ fontSize:11, color:cfg.accent, fontFamily:'monospace', letterSpacing:'0.08em' }}>{cat.toUpperCase()}</span>
//                 </div>
//               );
//             })}
//           </div>

//           <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))', gap:16 }}>
//             {dayEvents.map((event, i) => <FlipCard key={event.id} event={event} index={i} />)}
//           </div>

//           <p style={{ color:'#3f3f46', fontSize:11, fontFamily:'monospace', letterSpacing:'0.1em', marginTop:32 }}>
//             {dayEvents.length} EVENTS · DAY {activeDay} · POP MEETS PARADOX
//           </p>
//         </div>
//       </div>

//       <style>{`
//         *, *::before, *::after { box-sizing:border-box; }
//         html, body { margin:0; padding:0; width:100%; max-width:100%; overflow-x:hidden; position:relative; left:0; }

//         @keyframes pulseRing { 0%,100%{opacity:0.4} 50%{opacity:1} }
//         @keyframes fadeUpIn {
//           from { opacity:0; transform:translateY(20px); }
//           to   { opacity:1; transform:translateY(0); }
//         }

//         .particle {
//           position:absolute; width:2px; height:2px;
//           background:rgba(255,0,0,0.8); border-radius:50%;
//           animation:floatPart 20s infinite;
//           animation-delay:calc(var(--i) * 0.5s);
//         }
//         @keyframes floatPart {
//           0%,100%{transform:translate(0,0);opacity:0}
//           10%{opacity:1} 90%{opacity:1}
//           100%{transform:translate(calc(100vw*(var(--i)*0.1)),calc(-100vh*(var(--i)*0.05)));opacity:0}
//         }
//         .ember {
//           position:absolute; width:4px; height:4px; border-radius:50%;
//           background:radial-gradient(circle,rgba(255,100,0,1) 0%,rgba(255,0,0,0.5) 50%,transparent 100%);
//           bottom:-10px; left:var(--x);
//           animation:emberRise 8s ease-in infinite;
//           animation-delay:var(--delay);
//           box-shadow:0 0 10px rgba(255,100,0,0.8);
//         }
//         @keyframes emberRise {
//           0%{transform:translateY(0) translateX(0);opacity:1}
//           100%{transform:translateY(-100vh) translateX(50px);opacity:0}
//         }
//         @keyframes heroBounce {
//           0%,100%{transform:translateX(-50%) translateY(0)}
//           50%{transform:translateX(-50%) translateY(-8px)}
//         }
//         @keyframes heroPulse {
//           0%,100%{opacity:1} 50%{opacity:0.3}
//         }
//       `}</style>
//     </div>
//   );
// }
import { useState, useEffect, useRef } from 'react';
import { MapPin, Clock, Swords, Theater, Music, Landmark, Image } from 'lucide-react';

// ─── DATA ─────────────────────────────────────────────────────────────────────
const ALL_EVENTS = [
  // DAY 1 — 21 February 2026
  { id: 1,  day: 1, title: "Clueminati",                  start: "8:00 AM",  end: "11:00 AM", venue: "Quadrangle",  category: "Competition" },
  { id: 2,  day: 1, title: "Singing – Interbranch",       start: "1:00 PM",  end: "3:00 PM",  venue: "Audi",        category: "Performance" },
  { id: 3,  day: 1, title: "Instrumental – Interbranch",  start: "3:00 PM",  end: "5:00 PM",  venue: "Audi",        category: "Performance" },
  { id: 4,  day: 1, title: "OLT",                         start: "11:00 AM", end: "1:00 PM",  venue: "Classroom",   category: "Competition" },
  { id: 5,  day: 1, title: "Intercollege – Band",         start: "12:00 PM", end: "3:00 PM",  venue: "Quadrangle",  category: "Competition" },
  { id: 6,  day: 1, title: "VJ GOT TALENT",               start: "3:00 PM",  end: "5:00 PM",  venue: "Quadrangle",  category: "Competition" },
  { id: 7,  day: 1, title: "Opening Ceremony",            start: "5:00 PM",  end: "6:30 PM",  venue: "Quadrangle",  category: "Ceremony"    },
  { id: 8,  day: 1, title: "Fashion Show",                start: "7:00 PM",  end: "9:30 PM",  venue: "Quadrangle",  category: "Performance" },

  // DAY 2 — 22 February 2026
  { id: 9,  day: 2, title: "Surprise Event",              start: "9:00 AM",  end: "11:00 AM", venue: "Auditorium",  category: "Performance" },
  { id: 10, day: 2, title: "Intercollege – Group Dance",  start: "11:00 AM", end: "1:00 PM",  venue: "Quadrangle",  category: "Competition" },
  { id: 11, day: 2, title: "Dance – Interbranch",         start: "11:00 AM", end: "1:00 PM",  venue: "Auditorium",  category: "Performance" },
  { id: 12, day: 2, title: "Stand Up",                    start: "11:00 AM", end: "1:00 PM",  venue: "Classroom",   category: "Performance" },
  { id: 13, day: 2, title: "Rap Battle",                  start: "1:00 PM",  end: "3:00 PM",  venue: "Auditorium",  category: "Competition" },
  { id: 14, day: 2, title: "Inter Branch Collab",         start: "2:00 PM",  end: "4:00 PM",  venue: "Classroom",   category: "Performance" },
  { id: 15, day: 2, title: "DC/SR Wars",                  start: "4:00 PM",  end: "6:00 PM",  venue: "Classroom",   category: "Competition" },
  { id: 16, day: 2, title: "FYD",                         start: "3:30 PM",  end: "6:30 PM",  venue: "Quadrangle",  category: "Performance" },
  { id: 17, day: 2, title: "Concert",                     start: "7:30 PM",  end: "9:30 PM",  venue: "Quadrangle",  category: "Concert"     },

  // DAY 3 — 23 February 2026
  { id: 18, day: 3, title: "Talk Show & DJ",              start: "5:30 PM",  end: "8:30 PM",  venue: "Quadrangle",  category: "Performance" },
  { id: 19, day: 3, title: "Closing Ceremony",            start: "9:00 PM",  end: "9:30 PM",  venue: "Quadrangle",  category: "Ceremony"    },
];

const EVENT_IMAGES = {
  1:  "/clueminati.jpeg", 4:  "/olt.jpeg", 5:  "/intercollege-band.jpeg", 6:  "/vj-got-talent.jpeg", 10: "/intercollege-groupdance.jpeg", 13: "/rap-battle.jpeg", 15: "/dc-sr_wars.jpeg",
  2:  "/singing-interbranch.jpeg", 3:  "/instrumental-interbranch.jpeg", 8:  "/fashion-show.jpeg", 9:  "/surprise-event.jpeg", 11: "/dance-interbranch.jpeg", 12: "/standup.jpeg", 14: "/interbranch-colab.jpeg", 16: "/fyd.jpeg", 18: "/talkshow&dj.png",
  17: "/concert.jpeg",
  7:  "/opening.jpeg", 19: "/closing.jpeg",
};

const CATEGORY_CONFIG = {
  Competition: { accent: "#ef4444", glow: "rgba(239,68,68,0.5)",   Icon: Swords,   desc: "Compete & Conquer",  placeholderHue: "0"   },
  Performance: { accent: "#f97316", glow: "rgba(249,115,22,0.5)",  Icon: Theater,  desc: "Take the Stage",     placeholderHue: "25"  },
  Concert:     { accent: "#a855f7", glow: "rgba(168,85,247,0.5)",  Icon: Music,    desc: "Feel the Music",     placeholderHue: "270" },
  Ceremony:    { accent: "#14b8a6", glow: "rgba(20,184,166,0.5)",  Icon: Landmark, desc: "Witness History",    placeholderHue: "170" },
};

// ─── FRAUNCES FONT FAMILY CONSTANT ───────────────────────────────────────────
const FRAUNCES = "'Fraunces', Georgia, serif";

// ─── PLACEHOLDER IMAGE ────────────────────────────────────────────────────────
function PlaceholderImage({ event }) {
  const cfg = CATEGORY_CONFIG[event.category];
  const { Icon } = cfg;
  return (
    <div style={{
      width:'100%', height:'100%',
      background:`radial-gradient(ellipse at 40% 40%, ${cfg.glow.replace('0.5','0.35')} 0%, #0a0a0a 70%)`,
      display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:10,
      position:'relative', overflow:'hidden',
    }}>
      <div style={{
        position:'absolute', inset:0, opacity:0.07,
        backgroundImage:`repeating-linear-gradient(0deg,${cfg.accent} 0,${cfg.accent} 1px,transparent 1px,transparent 32px),
                         repeating-linear-gradient(90deg,${cfg.accent} 0,${cfg.accent} 1px,transparent 1px,transparent 32px)`,
      }}/>
      <Icon size={32} color={cfg.accent} style={{ filter:`drop-shadow(0 0 12px ${cfg.accent})`, position:'relative', zIndex:1 }} />
      <span style={{
        fontSize:9, letterSpacing:'0.25em', fontFamily:'monospace',
        color:'rgba(255,255,255,0.25)', position:'relative', zIndex:1,
      }}>ADD IMAGE</span>
    </div>
  );
}

// ─── FLOATING ELEMENTS ────────────────────────────────────────────────────────
function seededRand(seed) {
  let s = seed;
  return () => { s = (s * 16807 + 0) % 2147483647; return (s - 1) / 2147483646; };
}

function FloatingElements() {
  const rand = seededRand(42);
  const shards = Array.from({ length: 12 }, (_, i) => ({
    id:i, x:rand()*100, y:rand()*100, size:14+rand()*28, rotation:rand()*360,
    duration:14+rand()*18, delay:rand()*10,
    opacity:0.25+rand()*0.30, shape:i%3,
    color:['#ef4444','#f97316','#a855f7','#14b8a6','#ff6b35'][Math.floor(rand()*5)],
  }));
  const notes = Array.from({ length: 9 }, (_, i) => ({
    id:i, x:rand()*100, startY:80+rand()*20, size:18+rand()*22,
    duration:12+rand()*16, delay:rand()*12,
    opacity:0.30+rand()*0.30,
    driftX:(rand()-0.5)*80, noteIndex:i%2,
  }));
  const eqBars = Array.from({ length: 6 }, (_, i) => ({
    id:i, duration:0.6+rand()*0.8, delay:rand()*1.2, maxH:30+rand()*50,
  }));
  const tags = ['BEATS','CLASH','VIBE','GROOVE','WILD','LIT'];

  return (
    <div style={{ position:'absolute', inset:0, overflow:'hidden', pointerEvents:'none', zIndex:5 }}>
      {shards.map(s => (
        <div key={`shard-${s.id}`} style={{
          position:'absolute', left:`${s.x}%`, top:`${s.y}%`,
          width:s.size, height:s.size, opacity:s.opacity,
          animationDuration:`${s.duration}s`, animationDelay:`-${s.delay}s`,
          animationName:'shardFloat', animationTimingFunction:'ease-in-out',
          animationIterationCount:'infinite', animationDirection:'alternate',
        }}>
          <svg viewBox="0 0 100 100" width="100%" height="100%">
            {s.shape===0 && <polygon points="50,5 95,90 5,90" fill="none" stroke={s.color} strokeWidth="3" style={{filter:`drop-shadow(0 0 8px ${s.color})`}}/>}
            {s.shape===1 && <polygon points="50,5 95,50 50,95 5,50" fill="none" stroke={s.color} strokeWidth="3" style={{filter:`drop-shadow(0 0 8px ${s.color})`}}/>}
            {s.shape===2 && <polygon points="50,5 90,27 90,73 50,95 10,73 10,27" fill="none" stroke={s.color} strokeWidth="3" style={{filter:`drop-shadow(0 0 8px ${s.color})`}}/>}
          </svg>
        </div>
      ))}
      {notes.map(n => (
        <div key={`note-${n.id}`} style={{
          position:'absolute', left:`${n.x}%`, bottom:`${100-n.startY}%`,
          width:n.size, height:n.size, opacity:n.opacity, '--drift':`${n.driftX}px`,
          animationName:'noteFloat', animationDuration:`${n.duration}s`,
          animationDelay:`-${n.delay}s`, animationTimingFunction:'ease-in-out',
          animationIterationCount:'infinite',
        }}>
          <svg viewBox="0 0 24 24" width="100%" height="100%" fill="rgba(255,80,0,0.9)"
            style={{filter:'drop-shadow(0 0 10px rgba(255,80,0,0.85))'}}>
            {n.noteIndex===0
              ? <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
              : <path d="M9 3v10.55c-.59-.34-1.27-.55-2-.55C4.79 13 3 14.79 3 17s1.79 4 4 4 4-1.79 4-4V7h6V3H9zm8 0v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>}
          </svg>
        </div>
      ))}
      <div style={{position:'absolute',bottom:80,left:40,display:'flex',alignItems:'flex-end',gap:4,opacity:0.5}}>
        {eqBars.map(b => (
          <div key={`eq-${b.id}`} style={{
            width:6, background:'linear-gradient(to top,#ef4444,#f97316)', borderRadius:3,
            boxShadow:'0 0 10px rgba(239,68,68,0.8)', animationName:'eqDance',
            animationDuration:`${b.duration}s`, animationDelay:`-${b.delay}s`,
            animationTimingFunction:'ease-in-out', animationIterationCount:'infinite',
            animationDirection:'alternate', '--maxH':`${b.maxH}px`, height:`${b.maxH*0.4}px`,
          }}/>
        ))}
      </div>
      <div style={{position:'absolute',bottom:80,right:40,display:'flex',alignItems:'flex-end',gap:4,opacity:0.5,transform:'scaleX(-1)'}}>
        {eqBars.map(b => (
          <div key={`eq2-${b.id}`} style={{
            width:6, background:'linear-gradient(to top,#ef4444,#f97316)', borderRadius:3,
            boxShadow:'0 0 10px rgba(239,68,68,0.8)', animationName:'eqDance',
            animationDuration:`${b.duration*1.2}s`, animationDelay:`-${b.delay*0.7}s`,
            animationTimingFunction:'ease-in-out', animationIterationCount:'infinite',
            animationDirection:'alternate', '--maxH':`${b.maxH}px`, height:`${b.maxH*0.4}px`,
          }}/>
        ))}
      </div>
      {tags.map((tag, i) => {
        const tr = seededRand(i*99+7);
        return (
          <div key={`tag-${i}`} style={{
            position:'absolute', left:`${8+tr()*84}%`, top:`${10+tr()*75}%`,
            fontFamily:'monospace', fontSize:`${9+tr()*7}px`, letterSpacing:'0.25em',
            color:`rgba(239,68,68,0.40)`, fontWeight:900,
            animationName:'tagDrift', animationDuration:`${22+tr()*20}s`,
            animationDelay:`-${tr()*15}s`, animationTimingFunction:'ease-in-out',
            animationIterationCount:'infinite', animationDirection:'alternate',
            userSelect:'none', whiteSpace:'nowrap',
            textShadow:'0 0 12px rgba(239,68,68,0.4)',
          }}>{tag}</div>
        );
      })}
      <style>{`
        @keyframes shardFloat {
          0%{transform:translate(0,0) rotate(0deg) scale(1)}
          100%{transform:translate(20px,-35px) rotate(135deg) scale(1.05)}
        }
        @keyframes noteFloat {
          0%{transform:translateY(0) translateX(0) rotate(-10deg);opacity:0}
          10%{opacity:0.4} 90%{opacity:0.4}
          100%{transform:translateY(-90vh) translateX(var(--drift)) rotate(15deg);opacity:0}
        }
        @keyframes eqDance {
          0%{height:calc(var(--maxH)*0.15)} 100%{height:var(--maxH)}
        }
        @keyframes tagDrift {
          0%{transform:translate(0,0)} 50%{transform:translate(12px,-20px)} 100%{transform:translate(-8px,15px)}
        }
      `}</style>
    </div>
  );
}

// ─── SHATTER INTRO ────────────────────────────────────────────────────────────
function ShatterIntro({ onComplete }) {
  const canvasRef = useRef(null);
  const animRef   = useRef(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width  = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;
    const W = canvas.width, H = canvas.height;
    const rand    = (a,b) => a + Math.random()*(b-a);
    const randInt = (a,b) => Math.floor(rand(a,b));
    const seeds = Array.from({length:80},()=>({x:rand(0,W),y:rand(0,H)}));
    const cells = seeds.map(()=>({pts:[]}));
    for (let gx=0;gx<=W;gx+=6) for (let gy=0;gy<=H;gy+=6) {
      let best=0,bestD=Infinity;
      for (let s=0;s<seeds.length;s++){const dx=gx-seeds[s].x,dy=gy-seeds[s].y,d=dx*dx+dy*dy;if(d<bestD){bestD=d;best=s;}}
      cells[best].pts.push([gx,gy]);
    }
    function cross(O,A,B){return(A[0]-O[0])*(B[1]-O[1])-(A[1]-O[1])*(B[0]-O[0]);}
    function convexHull(pts){
      if(pts.length<3)return pts;
      const sorted=pts.slice().sort((a,b)=>a[0]-b[0]||a[1]-b[1]);
      const lower=[];for(const p of sorted){while(lower.length>=2&&cross(lower[lower.length-2],lower[lower.length-1],p)<=0)lower.pop();lower.push(p);}
      const upper=[];for(let i=sorted.length-1;i>=0;i--){const p=sorted[i];while(upper.length>=2&&cross(upper[upper.length-2],upper[upper.length-1],p)<=0)upper.pop();upper.push(p);}
      upper.pop();lower.pop();return lower.concat(upper);
    }
    const shards = seeds.map((_,i)=>{
      const hull=convexHull(cells[i].pts);
      const cx=hull.reduce((s,p)=>s+p[0],0)/(hull.length||1);
      const cy=hull.reduce((s,p)=>s+p[1],0)/(hull.length||1);
      const angle=Math.atan2(cy-H/2,cx-W/2),speed=rand(4,14);
      return{hull,cx,cy,vx:Math.cos(angle)*speed,vy:Math.sin(angle)*speed,spin:rand(-0.06,0.06),
             fill:`hsl(${rand(0,8)},90%,${rand(15,55)}%)`,edge:`hsl(${rand(0,5)},100%,${rand(60,90)}%)`};
    });
    const CRACK_T=700,EXPLODE_T=1100,DONE_T=2000;
    const cracks=Array.from({length:18},(_,i)=>{
      const angle=(i/18)*Math.PI*2+rand(-0.2,0.2),length=rand(W*0.3,W*0.75),segs=randInt(3,6);
      const pts=[[W/2,H/2]];let cx2=W/2,cy2=H/2;
      for(let s=0;s<segs;s++){const j=rand(-0.25,0.25);cx2+=Math.cos(angle+j)*(length/segs);cy2+=Math.sin(angle+j)*(length/segs);pts.push([cx2,cy2]);}
      return{pts,delay:rand(0,CRACK_T*0.4)};
    });
    const START=performance.now();
    const draw=(now)=>{
      const elapsed=now-START;
      ctx.clearRect(0,0,W,H);
      if(elapsed<EXPLODE_T){
        ctx.fillStyle='#000';ctx.fillRect(0,0,W,H);
        const grd=ctx.createRadialGradient(W/2,H/2,0,W/2,H/2,W*0.5);
        const ga=Math.min(elapsed/CRACK_T,1)*0.7;
        grd.addColorStop(0,`rgba(200,0,0,${ga})`);grd.addColorStop(0.4,`rgba(100,0,0,${ga*0.5})`);grd.addColorStop(1,'rgba(0,0,0,0)');
        ctx.fillStyle=grd;ctx.fillRect(0,0,W,H);
        cracks.forEach(crack=>{
          const ce=elapsed-crack.delay;if(ce<=0)return;
          const progress=Math.min(ce/(CRACK_T*0.8),1);
          const totalLen=crack.pts.reduce((sum,p,i)=>i===0?0:sum+Math.hypot(p[0]-crack.pts[i-1][0],p[1]-crack.pts[i-1][1]),0);
          let remaining=totalLen*progress;
          ctx.beginPath();ctx.moveTo(crack.pts[0][0],crack.pts[0][1]);
          for(let i=1;i<crack.pts.length&&remaining>0;i++){
            const prev=crack.pts[i-1],curr=crack.pts[i],segLen=Math.hypot(curr[0]-prev[0],curr[1]-prev[1]);
            if(remaining>=segLen){ctx.lineTo(curr[0],curr[1]);remaining-=segLen;}
            else{const t=remaining/segLen;ctx.lineTo(prev[0]+(curr[0]-prev[0])*t,prev[1]+(curr[1]-prev[1])*t);remaining=0;}
          }
          ctx.shadowColor='#ff0000';ctx.shadowBlur=12;ctx.strokeStyle=`rgba(255,60,0,${0.5+progress*0.4})`;ctx.lineWidth=2.5;ctx.stroke();
          ctx.shadowBlur=4;ctx.strokeStyle=`rgba(255,180,100,${progress*0.9})`;ctx.lineWidth=0.8;ctx.stroke();ctx.shadowBlur=0;
        });
      }
      if(elapsed>=EXPLODE_T){
        const t=Math.min((elapsed-EXPLODE_T)/(DONE_T-EXPLODE_T),1);
        ctx.fillStyle='#000';ctx.fillRect(0,0,W,H);
        shards.forEach(s=>{
          const ease=1-Math.pow(1-Math.min(t*1.4,1),3),fade=Math.max(0,1-t*1.6);
          if(s.hull.length<3||fade<=0)return;
          ctx.save();ctx.translate(s.cx+s.vx*ease*120,s.cy+s.vy*ease*120);ctx.rotate(s.spin*ease*40);ctx.globalAlpha=fade;
          const lh=s.hull.map(p=>[p[0]-s.cx,p[1]-s.cy]);
          ctx.beginPath();ctx.moveTo(lh[0][0],lh[0][1]);for(let i=1;i<lh.length;i++)ctx.lineTo(lh[i][0],lh[i][1]);ctx.closePath();
          ctx.fillStyle=s.fill;ctx.fill();ctx.shadowColor='#ff2200';ctx.shadowBlur=8;ctx.strokeStyle=s.edge;ctx.lineWidth=1.2;ctx.stroke();ctx.shadowBlur=0;ctx.restore();
        });
        ctx.globalAlpha=1;
        if(elapsed>=DONE_T){cancelAnimationFrame(animRef.current);onComplete();return;}
      }
      animRef.current=requestAnimationFrame(draw);
    };
    animRef.current=requestAnimationFrame(draw);
    return ()=>cancelAnimationFrame(animRef.current);
  }, [onComplete]);

  return (
    <div style={{position:'fixed',inset:0,zIndex:100,background:'#000',width:'100vw',height:'100vh',overflow:'hidden'}}>
      <canvas ref={canvasRef} style={{display:'block',width:'100%',height:'100%'}}/>
      <div style={{
        position:'absolute',inset:0,display:'flex',alignItems:'center',justifyContent:'center',
        zIndex:10,pointerEvents:'none',animation:'titleAppear 1.4s ease-out 0.65s both',
      }}>
        <div style={{textAlign:'center'}}>
          {/* Fraunces for ShatterIntro title */}
          <div style={{fontFamily:FRAUNCES,lineHeight:0.9}}>
            {['POP','meets','PARADOX'].map((word,i)=>(
              <div key={word} style={{overflow:'hidden'}}>
                <span style={{
                  display:'inline-block',
                  fontSize:word==='meets'?'clamp(1.5rem,4.5vw,3.5rem)':'clamp(3rem,9vw,8rem)',
                  fontWeight:word==='meets'?300:900,fontStyle:word==='meets'?'italic':'normal',
                  letterSpacing:word==='meets'?'normal':'-0.02em',
                  color:word==='meets'?'rgba(255,180,130,0.9)':'#fff',
                  textShadow:word==='meets'?'0 0 20px rgba(255,80,0,0.8)':'0 0 60px rgba(255,40,0,1),0 0 120px rgba(200,0,0,0.8)',
                  animation:`crackIn 0.5s cubic-bezier(0.16,1,0.3,1) ${0.65+i*0.13}s both`,
                }}>{word}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes titleAppear{from{opacity:0}to{opacity:1}}
        @keyframes crackIn{from{opacity:0;transform:scale(1.15) skewX(-3deg);filter:blur(8px)}to{opacity:1;transform:scale(1) skewX(0);filter:blur(0)}}
      `}</style>
    </div>
  );
}

// ─── FLIP CARD ────────────────────────────────────────────────────────────────
function FlipCard({ event, index }) {
  const [flipped, setFlipped] = useState(false);
  const cfg = CATEGORY_CONFIG[event.category];
  const { Icon } = cfg;
  const imageSrc = EVENT_IMAGES[event.id];

  return (
    <div
      onClick={() => setFlipped(f => !f)}
      style={{ perspective:'1200px', cursor:'pointer', height:420 }}
    >
      <div style={{
        position:'relative', width:'100%', height:'100%',
        transformStyle:'preserve-3d',
        transition:'transform 0.7s cubic-bezier(0.23,1,0.32,1)',
        transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
      }}>

        {/* ── FRONT ── */}
        <div style={{
          position:'absolute', inset:0, backfaceVisibility:'hidden', overflow:'hidden',
          borderRadius:2, border:`1px solid rgba(255,255,255,0.07)`,
          borderTop:`2px solid ${cfg.accent}`,
        }}>
          <div style={{ position:'absolute', inset:0 }}>
            {imageSrc
              ? <img src={imageSrc} alt={event.title} style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}}/>
              : <PlaceholderImage event={event} />
            }
          </div>
          <div style={{
            position:'absolute', inset:0,
            background:'linear-gradient(to top, rgba(0,0,0,0.97) 0%, rgba(0,0,0,0.85) 30%, rgba(0,0,0,0.4) 55%, transparent 100%)',
          }}/>
          <div style={{
            position:'absolute', top:12, left:12,
            display:'flex', alignItems:'center', gap:5,
            background:'rgba(0,0,0,0.65)', backdropFilter:'blur(6px)',
            border:`1px solid ${cfg.accent}`, padding:'4px 9px', borderRadius:2,
          }}>
            <Icon size={10} color={cfg.accent}/>
            <span style={{fontSize:9,letterSpacing:'0.2em',fontFamily:'monospace',color:cfg.accent,fontWeight:700}}>
              {event.category.toUpperCase()}
            </span>
          </div>
          <span style={{
            position:'absolute', top:14, right:12,
            fontSize:9, color:'rgba(255,255,255,0.25)', fontFamily:'monospace', letterSpacing:'0.1em',
          }}>TAP ↻</span>
          <div style={{ position:'absolute', bottom:0, left:0, right:0, padding:'14px 16px' }}>
            <h3 style={{
              margin:'0 0 8px',
              fontSize:'clamp(0.95rem,2vw,1.2rem)', fontWeight:900,
              fontFamily:FRAUNCES, color:'#fff', lineHeight:1.2,
              letterSpacing:'-0.01em',
              textShadow:`0 2px 12px rgba(0,0,0,0.8), 0 0 20px ${cfg.glow.replace('0.5','0.6')}`,
            }}>{event.title}</h3>
            <div style={{display:'flex',gap:12,flexWrap:'wrap'}}>
              <div style={{display:'flex',alignItems:'center',gap:5,color:'rgba(255,255,255,0.6)',fontSize:11,fontFamily:'monospace'}}>
                <Clock size={10} color={cfg.accent}/>{event.start}
              </div>
              <div style={{display:'flex',alignItems:'center',gap:5,color:'rgba(255,255,255,0.6)',fontSize:11,fontFamily:'monospace'}}>
                <MapPin size={10} color={cfg.accent}/>{event.venue}
              </div>
            </div>
          </div>
          <div style={{position:'absolute',bottom:0,left:0,height:2,width:'50%',background:`linear-gradient(to right,${cfg.accent},transparent)`}}/>
        </div>

        {/* ── BACK ── */}
        <div style={{
          position:'absolute', inset:0, backfaceVisibility:'hidden',
          transform:'rotateY(180deg)',
          background:`radial-gradient(ellipse at center,${cfg.glow.replace('0.5','0.18')} 0%,#050505 70%)`,
          border:`1px solid ${cfg.accent}`,
          boxShadow:`0 0 30px ${cfg.glow}, inset 0 0 30px rgba(0,0,0,0.5)`,
          padding:'20px 18px',
          display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center',
          textAlign:'center', gap:12, overflow:'hidden', borderRadius:2,
        }}>
          <div style={{position:'absolute',inset:-1,border:`1px solid ${cfg.accent}`,animation:'pulseRing 2s ease-in-out infinite',pointerEvents:'none'}}/>
          <Icon size={26} color={cfg.accent} style={{filter:`drop-shadow(0 0 10px ${cfg.accent})`}}/>
          <div>
            <div style={{fontSize:9,letterSpacing:'0.2em',color:cfg.accent,fontFamily:'monospace',marginBottom:5}}>{cfg.desc.toUpperCase()}</div>
            <h3 style={{
              fontSize:'clamp(0.95rem,2.5vw,1.2rem)',fontWeight:900,color:'#fff',
              fontFamily:FRAUNCES,letterSpacing:'-0.01em',margin:0,
              textShadow:`0 0 20px ${cfg.accent}`,
            }}>{event.title}</h3>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:8,width:'100%'}}>
            {[
              {label:'START', value:event.start,  icon:<Clock size={9}/>},
              {label:'END',   value:event.end,     icon:<Clock size={9}/>},
              {label:'VENUE', value:event.venue,   icon:<MapPin size={9}/>, span:true},
              {label:'DAY',   value:`Day ${event.day} · ${event.day===1?'21 Feb':event.day===2?'22 Feb':'23 Feb'}`, icon:<Landmark size={9}/>, span:true},
            ].map(item=>(
              <div key={item.label} style={{
                gridColumn:item.span?'1 / -1':'auto',
                background:'rgba(0,0,0,0.5)',border:'1px solid rgba(255,255,255,0.06)',
                borderLeft:`2px solid ${cfg.accent}`,padding:'7px 10px',textAlign:'left',
              }}>
                <div style={{fontSize:9,color:cfg.accent,fontFamily:'monospace',letterSpacing:'0.15em',marginBottom:2,display:'flex',alignItems:'center',gap:4}}>
                  {item.icon}{item.label}
                </div>
                <div style={{fontSize:11,color:'#fff',fontFamily:'monospace',fontWeight:700}}>{item.value}</div>
              </div>
            ))}
          </div>
          <span style={{fontSize:9,color:'rgba(255,255,255,0.2)',letterSpacing:'0.15em',fontFamily:'monospace'}}>TAP TO FLIP BACK ↺</span>
        </div>
      </div>
    </div>
  );
}

// ─── MAIN PAGE ────────────────────────────────────────────────────────────────
export default function EventPage() {
  const [introComplete, setIntroComplete] = useState(false);
  const [cursorPos,     setCursorPos]     = useState({x:0,y:0});
  const [activeDay,     setActiveDay]     = useState(1);

  useEffect(()=>{
    const move=(e)=>setCursorPos({x:e.clientX,y:e.clientY});
    window.addEventListener('mousemove',move);
    return ()=>window.removeEventListener('mousemove',move);
  },[]);

  const DAY_COUNTS = [1,2,3].map(d => ALL_EVENTS.filter(e=>e.day===d).length);
  const DAY_DATES  = ['21 FEBRUARY 2026','22 FEBRUARY 2026','23 FEBRUARY 2026'];
  const dayEvents  = ALL_EVENTS.filter(e=>e.day===activeDay);

  if (!introComplete) return <ShatterIntro onComplete={()=>setIntroComplete(true)}/>;

  return (
    <div style={{minHeight:'100vh',background:'#000',color:'#fff',margin:0,padding:0,width:'100vw',maxWidth:'100vw',overflowX:'hidden',position:'relative'}}>

      {/* Cursor glow */}
      <div style={{
        position:'fixed',width:300,height:300,pointerEvents:'none',zIndex:9999,
        background:'radial-gradient(circle,rgba(255,0,0,0.15) 0%,transparent 70%)',
        transform:'translate(-50%,-50%)',transition:'left 0.1s ease-out,top 0.1s ease-out',
        left:cursorPos.x,top:cursorPos.y,
      }}/>

      {/* ── HERO ── */}
      <div style={{
        position:'relative',minHeight:'100vh',width:'100%',
        display:'flex',alignItems:'center',justifyContent:'center',overflow:'hidden',
        background:'radial-gradient(ellipse at center,rgba(139,0,0,0.3) 0%,black 70%)',
      }}>
        <div style={{position:'absolute',inset:0,overflow:'hidden'}}>
          {[...Array(20)].map((_,i)=><div key={i} className='particle' style={{'--i':i}}/>)}
        </div>
        <div style={{position:'absolute',inset:0,overflow:'hidden',pointerEvents:'none'}}>
          {[...Array(15)].map((_,i)=>(
            <div key={i} className='ember' style={{'--delay':(i*0.5)+'s','--x':((i*6.67)%100)+'%'}}/>
          ))}
        </div>
        <FloatingElements/>

        {/*  HERO TITLE  */}
        <div style={{position:'relative',zIndex:10,textAlign:'center',padding:'128px 24px'}}>
          <div style={{fontFamily:FRAUNCES,lineHeight:0.9}}>
            {['POP','meets','PARADOX'].map((word)=>(
              <div key={word}>
                <span
                  style={{
                    display:'inline-block',
                    fontSize:word==='meets'?'clamp(1.5rem,4vw,3.5rem)':'clamp(3rem,8vw,7.5rem)',
                    fontWeight:word==='meets'?300:900,fontStyle:word==='meets'?'italic':'normal',
                    letterSpacing:word==='meets'?'normal':'-0.02em',
                    color:word==='meets'?'rgba(255,180,130,0.9)':'#fff',
                    textShadow:word==='meets'?'0 0 20px rgba(255,80,0,0.7)':'0 0 40px rgba(255,80,0,0.9),0 0 80px rgba(255,40,0,0.6),0 0 120px rgba(200,0,0,0.4)',
                    margin:word==='meets'?'12px 0':0,cursor:'default',transition:'transform 0.4s',
                  }}
                  onMouseEnter={e=>e.currentTarget.style.transform='scale(1.08)'}
                  onMouseLeave={e=>e.currentTarget.style.transform='scale(1)'}
                >{word}</span>
              </div>
            ))}
          </div>

          <div style={{marginTop:40,display:'flex',flexDirection:'column',alignItems:'center',gap:12,animation:'fadeUpIn 1s ease-out 0.3s both'}}>
            <div style={{display:'flex',alignItems:'center',gap:16,fontFamily:'monospace',fontSize:'clamp(9px,1.5vw,12px)',letterSpacing:'0.3em',color:'rgba(255,255,255,0.3)'}}>
              <span style={{width:40,height:1,background:'rgba(239,68,68,0.4)',display:'inline-block'}}/>
              21 – 23 FEBRUARY 2026
              <span style={{width:40,height:1,background:'rgba(239,68,68,0.4)',display:'inline-block'}}/>
            </div>
            <div style={{display:'flex',gap:24,flexWrap:'wrap',justifyContent:'center'}}>
              {['MUSIC','DANCE','COMEDY','FASHION','BATTLE'].map(tag=>(
                <span key={tag} style={{fontSize:'clamp(8px,1.2vw,10px)',letterSpacing:'0.25em',fontFamily:'monospace',color:'rgba(239,68,68,0.45)',borderBottom:'1px solid rgba(239,68,68,0.2)',paddingBottom:2}}>{tag}</span>
              ))}
            </div>
          </div>
        </div>

        <div style={{position:'absolute',bottom:40,left:'50%',transform:'translateX(-50%)',zIndex:10,animation:'heroBounce 1.5s ease-in-out infinite'}}>
          <div style={{width:24,height:40,border:'2px solid #ef4444',borderRadius:12,display:'flex',justifyContent:'center',paddingTop:8}}>
            <div style={{width:4,height:12,background:'#ef4444',borderRadius:2,animation:'heroPulse 1.5s ease-in-out infinite'}}/>
          </div>
        </div>
      </div>

      {/* ── EVENTS ── */}
      <div style={{padding:'80px 5%',background:'linear-gradient(to bottom,#000,rgba(69,0,0,0.2))',width:'100%',boxSizing:'border-box'}}>
        <div style={{maxWidth:'80rem',margin:'0 auto'}}>

          <div style={{marginBottom:48}}>
            {/* Fraunces for section heading */}
            <h2 style={{fontSize:'clamp(2.5rem,6vw,5rem)',fontWeight:900,fontFamily:FRAUNCES,margin:'0 0 8px',lineHeight:1}}>
              UPCOMING <span style={{color:'#dc2626',textShadow:'0 0 20px rgba(220,38,38,0.8),0 0 40px rgba(220,38,38,0.5)'}}>EVENTS</span>
            </h2>
            <p style={{color:'#52525b',fontSize:12,letterSpacing:'0.15em',fontFamily:'monospace',margin:'8px 0 16px'}}>CLICK ANY CARD TO REVEAL DETAILS</p>
            <div style={{height:1,width:128,background:'#dc2626',boxShadow:'0 0 20px rgba(220,38,38,0.6)'}}/>
          </div>

          {/* Day tabs */}
          <div style={{display:'flex',gap:12,marginBottom:32,flexWrap:'wrap'}}>
            {[1,2,3].map(d=>(
              <button key={d} onClick={()=>setActiveDay(d)} style={{
                padding:'12px 28px',fontWeight:700,fontSize:12,letterSpacing:'0.15em',
                cursor:'pointer',border:'1px solid',fontFamily:'monospace',
                borderColor:activeDay===d?'#dc2626':'rgba(220,38,38,0.25)',
                background:activeDay===d?'#dc2626':'transparent',color:'#fff',
                boxShadow:activeDay===d?'0 0 24px rgba(220,38,38,0.5)':'none',
                transition:'all 0.25s',
              }}>
                <div style={{fontSize:9,opacity:0.65,marginBottom:3}}>{DAY_DATES[d-1]}</div>
                DAY {d} — {DAY_COUNTS[d-1]} EVENTS
              </button>
            ))}
          </div>

          {/* Legend */}
          <div style={{display:'flex',gap:20,flexWrap:'wrap',marginBottom:32}}>
            {Object.entries(CATEGORY_CONFIG).map(([cat,cfg])=>{
              const {Icon}=cfg;
              return(
                <div key={cat} style={{display:'flex',alignItems:'center',gap:8}}>
                  <Icon size={13} color={cfg.accent}/>
                  <span style={{fontSize:11,color:cfg.accent,fontFamily:'monospace',letterSpacing:'0.08em'}}>{cat.toUpperCase()}</span>
                </div>
              );
            })}
          </div>

          {/* Cards grid */}
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(360px,1fr))',gap:20}}>
            {dayEvents.map((event,i)=><FlipCard key={event.id} event={event} index={i}/>)}
          </div>

          <p style={{color:'#3f3f46',fontSize:11,fontFamily:'monospace',letterSpacing:'0.1em',marginTop:32}}>
            {dayEvents.length} EVENTS · DAY {activeDay} · POP MEETS PARADOX
          </p>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,100..900;1,9..144,100..900&display=swap');
        *,*::before,*::after{box-sizing:border-box}
        html,body{margin:0;padding:0;width:100%;max-width:100%;overflow-x:hidden}
        @keyframes pulseRing{0%,100%{opacity:0.4}50%{opacity:1}}
        @keyframes fadeUpIn{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
        .particle{position:absolute;width:2px;height:2px;background:rgba(255,0,0,0.8);border-radius:50%;animation:floatPart 20s infinite;animation-delay:calc(var(--i)*0.5s)}
        @keyframes floatPart{0%,100%{transform:translate(0,0);opacity:0}10%{opacity:1}90%{opacity:1}100%{transform:translate(calc(100vw*(var(--i)*0.1)),calc(-100vh*(var(--i)*0.05)));opacity:0}}
        .ember{position:absolute;width:4px;height:4px;border-radius:50%;background:radial-gradient(circle,rgba(255,100,0,1) 0%,rgba(255,0,0,0.5) 50%,transparent 100%);bottom:-10px;left:var(--x);animation:emberRise 8s ease-in infinite;animation-delay:var(--delay);box-shadow:0 0 10px rgba(255,100,0,0.8)}
        @keyframes emberRise{0%{transform:translateY(0) translateX(0);opacity:1}100%{transform:translateY(-100vh) translateX(50px);opacity:0}}
        @keyframes heroBounce{0%,100%{transform:translateX(-50%) translateY(0)}50%{transform:translateX(-50%) translateY(-8px)}}
        @keyframes heroPulse{0%,100%{opacity:1}50%{opacity:0.3}}
      `}</style>
    </div>
  );
}

