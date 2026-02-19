// import { useEffect, useState, useRef, useCallback } from "react";
// // ─────────────────────────────────────────────────────────────
// //  🖼  IMAGE PATHS  — files live in /public/photos/
// //  Just rename these strings to match your actual filenames
// // ─────────────────────────────────────────────────────────────
// const IMAGES = {
//   hero:       "/photos/mid_obs.jpeg",
//   bandPhoto1: "/photos/topm_obs.jpg",
//   bandPhoto2: "/photos/band_insrru.png",
//   performers: "/photos/top_obs.jpeg",
// };
// // ─────────────────────────────────────────────────────────────

// /* ═══════════════════════════════════════
//    ANIMATED IMAGE BOX
//    real <img> + drift loop + hover effects
// ═══════════════════════════════════════ */
// export function ImgBox({ src, alt = "", style = {}, seed = 0 }) {
//   const [hovered, setHovered] = useState(false);
//   const [pos, setPos]         = useState({ x: 0, y: 0, rotate: 0 });
//   const intervalRef           = useRef(null);

//   const drift = useCallback(() => {
//     const r = (a, b) => a + Math.random() * (b - a);
//     setPos({ x: r(-9, 9), y: r(-7, 7), rotate: r(-1.8, 1.8) });
//   }, []);

//   useEffect(() => {
//     drift();
//     const delay = setTimeout(() => {
//       drift();
//       intervalRef.current = setInterval(drift, 2600 + seed * 350);
//     }, seed * 550);
//     return () => { clearTimeout(delay); clearInterval(intervalRef.current); };
//   }, [drift, seed]);

//   return (
//     <div
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       style={{
//         position:     "relative",
//         borderRadius: 10,
//         overflow:     "hidden",
//         cursor:       "pointer",
//         transform: hovered
//           ? "scale(1.038) translateY(-5px) rotate(0deg)"
//           : `translate(${pos.x}px, ${pos.y}px) rotate(${pos.rotate}deg)`,
//         transition: hovered
//           ? "transform 0.38s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s"
//           : "transform 2.5s cubic-bezier(0.45,0,0.55,1), box-shadow 0.3s",
//         boxShadow: hovered
//           ? "0 0 40px rgba(204,0,0,0.45), 0 12px 40px rgba(0,0,0,0.7)"
//           : "0 4px 20px rgba(0,0,0,0.5)",
//         ...style,
//       }}
//     >
//       <img
//         src={src}
//         alt={alt}
//         style={{
//           width: "100%", height: "100%",
//           objectFit: "cover", display: "block",
//           filter: hovered ? "brightness(1.1) contrast(1.02)" : "brightness(0.82)",
//           transition: "filter 0.4s ease",
//         }}
//       />

//       {/* red shimmer on hover */}
//       <div style={{
//         position: "absolute", inset: 0, pointerEvents: "none",
//         background: hovered
//           ? "linear-gradient(135deg,rgba(180,0,0,0.18) 0%,transparent 60%)"
//           : "transparent",
//         transition: "background 0.4s ease",
//       }} />

//       {/* red bar slides in from left */}
//       <div style={{
//         position: "absolute", bottom: 0, left: 0, right: 0, height: 3,
//         background: "#cc0000",
//         transform: hovered ? "scaleX(1)" : "scaleX(0)",
//         transformOrigin: "left",
//         transition: "transform 0.42s cubic-bezier(0.25,1,0.5,1)",
//       }} />
//     </div>
//   );
// }

// /* ── shared scroll fade-up (exported for ObsidianBottom) ── */
// export function useFadeUp(threshold = 0.12) {
//   const ref = useRef(null);
//   const [vis, setVis] = useState(false);
//   useEffect(() => {
//     const io = new IntersectionObserver(
//       ([e]) => e.isIntersecting && setVis(true),
//       { threshold }
//     );
//     if (ref.current) io.observe(ref.current);
//     return () => io.disconnect();
//   }, []);
//   return [ref, vis];
// }

// /* ═══════════════════════════════  HERO  ══════════════════════ */
// function Hero() {
//   const [show, setShow] = useState(false);
//   useEffect(() => { setTimeout(() => setShow(true), 80); }, []);

//   return (
//     <section style={{
//       background: "#000", minHeight: "100vh",
//       display: "flex", alignItems: "center",
//       padding: "100px 0 60px", position: "relative", overflow: "hidden",
//     }}>
//       {/* top-right glow */}
//       <div style={{
//         position: "absolute", right: 0, top: 0, width: 480, height: 480,
//         background: "radial-gradient(circle at top right,rgba(160,0,0,0.2) 0%,transparent 70%)",
//         pointerEvents: "none",
//       }} />

//       <div style={{
//         width: "100%", maxWidth: 1280, margin: "0 auto", padding: "0 48px",
//         display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center",
//       }}>
//         {/* LEFT — text */}
//         <div>
//           <div style={{
//             fontSize: "clamp(52px,7.5vw,100px)", fontWeight: 800,
//             fontFamily: "'Arial Black','Helvetica Neue',sans-serif",
//             lineHeight: 1.05, color: "#fff",
//             opacity: show ? 1 : 0,
//             transform: show ? "translateX(0)" : "translateX(-32px)",
//             transition: "opacity 0.65s ease 0s, transform 0.65s ease 0s",
//           }}>
//             <span style={{ color: "#cc0000" }}>O</span>bsidian
//           </div>

//           <div style={{
//             marginTop: 28, fontSize: "clamp(18px,2vw,26px)", fontWeight: 700,
//             fontFamily: "'Arial Black',sans-serif", color: "#fff", lineHeight: 1.5,
//             opacity: show ? 1 : 0,
//             transform: show ? "translateY(0)" : "translateY(16px)",
//             transition: "opacity 0.65s ease 0.2s, transform 0.65s ease 0.2s",
//           }}>
//             The Sound.<br />The Stage.<br />The Legacy.
//           </div>

//           <p style={{
//             marginTop: 20, fontSize: 15, color: "#999", lineHeight: 1.75, maxWidth: 480,
//             opacity: show ? 1 : 0,
//             transition: "opacity 0.65s ease 0.4s",
//           }}>
//             Obsidian — VJTI's Official College Band, founded in 2023 — has already made a
//             strong mark, driven by the belief that music can go beyond performance and become
//             a force for connection and change. Aiming high, experimenting boldly, one sound at a time.
//           </p>
//         </div>

//         {/* RIGHT — hero image */}
//         <div style={{
//           opacity: show ? 1 : 0,
//           transform: show ? "scale(1)" : "scale(0.96)",
//           transition: "opacity 0.8s ease 0.25s, transform 0.8s ease 0.25s",
//         }}>
//           <ImgBox
//             src={IMAGES.hero}
//             alt="Obsidian band"
//             seed={0}
//             style={{ width: "100%", height: "clamp(380px,55vh,560px)" }}
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ══════════════════════════  INFO CARDS  ═════════════════════ */
// function InfoCards() {
//   const [ref, vis] = useFadeUp();
//   const cards = [
//     { title: "Upcoming Gigs",    desc: "Catch Obsidian live at Pratibimb '26 and inter-college Battle of Bands events across Mumbai this season." },
//     { title: "Event Schedule",   desc: "Explore our packed calendar of performances, workshops, collaborations, and special appearances all year." },
//     { title: "Follow the Sound", desc: "Stay tuned for behind-the-scenes drops, performance reels, and live event updates on our socials." },
//   ];
//   return (
//     <section ref={ref} style={{ background: "#000", borderTop: "1px solid #1e1e1e" }}>
//       <div style={{
//         maxWidth: 1280, margin: "0 auto",
//         display: "grid", gridTemplateColumns: "repeat(3,1fr)",
//         opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(30px)",
//         transition: "opacity 0.6s ease, transform 0.6s ease",
//       }}>
//         {cards.map((c, i) => (
//           <div key={i} style={{
//             padding: "52px 40px", textAlign: "center",
//             borderRight: i < 2 ? "1px solid #1e1e1e" : "none",
//           }}>
//             <h3 style={{ fontFamily: "'Arial Black',sans-serif", fontWeight: 700, fontSize: 18, color: "#fff", marginBottom: 14 }}>{c.title}</h3>
//             <p style={{ fontSize: 14, color: "#777", lineHeight: 1.75 }}>{c.desc}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// /* ══════════════════════════  MEET THE BAND  ══════════════════ */
// function MeetTheBand() {
//   const [ref, vis] = useFadeUp();
//   return (
//     <section ref={ref} style={{ background: "#000", borderTop: "1px solid #1e1e1e", padding: "80px 0" }}>
//       <div style={{
//         maxWidth: 1280, margin: "0 auto", padding: "0 48px",
//         display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center",
//         opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(36px)",
//         transition: "opacity 0.7s ease, transform 0.7s ease",
//       }}>

//         {/* LEFT — text + 2 small photos */}
//         <div>
//           <h2 style={{ fontFamily: "'Arial Black',sans-serif", fontWeight: 800, fontSize: "clamp(28px,3.5vw,48px)", color: "#fff", marginBottom: 20 }}>
//             Meet the Band
//           </h2>
//           <p style={{ color: "#888", fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
//             Obsidian is built on passion, bold experimentation, and the conviction that music can
//             speak where words fall short. In just two years, the band has grown into one of VJTI's
//             most celebrated ensembles — multi-genre, multi-instrument, and unapologetically original.
//           </p>
//           <p style={{ color: "#888", fontSize: 15, lineHeight: 1.8 }}>
//             • Multi-instrument ensemble &nbsp;•&nbsp; Genre-defying fusions &nbsp;•&nbsp; Original compositions &nbsp;•&nbsp; One Band · One Beat · One VJTI
//           </p>
//           <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 28 }}>
//             <ImgBox src={IMAGES.bandPhoto1} alt="Band photo 1" seed={1} style={{ height: 160 }} />
//             <ImgBox src={IMAGES.bandPhoto2} alt="Band photo 2" seed={2} style={{ height: 160 }} />
//           </div>
//         </div>

//         {/* RIGHT — large red-tinted performers image */}
//         <div style={{ position: "relative" }}>
//           <ImgBox
//             src={IMAGES.performers}
//             alt="Band performers on stage"
//             seed={3}
//             style={{ width: "100%", height: "clamp(360px,50vh,540px)" }}
//           />
//           {/* red colour-grade overlay matching EDC style */}
//           <div style={{
//             position: "absolute", inset: 0, borderRadius: 10,
//             background: "rgba(160,0,0,0.42)",
//             mixBlendMode: "multiply",
//             pointerEvents: "none",
//           }} />
//         </div>
//       </div>
//     </section>
//   );
// }

// export default function ObsidianTop() {
//   return (
//     <>
//       <Hero />
//       <InfoCards />
//       <MeetTheBand />
//     </>
//   );
// }


import { useEffect, useState, useRef, useCallback } from "react";

// ─────────────────────────────────────────────────────────────
//  🖼  IMAGE PATHS — rename to match your actual filenames
// ─────────────────────────────────────────────────────────────
const IMAGES = {
  hero:       "/photos/mid_obs.jpeg",
  bandPhoto1: "/photos/topm_obs.jpg",
  bandPhoto2: "/photos/band_insrru.png",
  performers: "/photos/top_obs.jpeg",
};

/* ── responsive hook ── */
function useIsMobile(bp = 768) {
  const [mobile, setMobile] = useState(() => window.innerWidth < bp);
  useEffect(() => {
    const fn = () => setMobile(window.innerWidth < bp);
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, [bp]);
  return mobile;
}

/* ═══════════════════════════════════════
   ANIMATED IMAGE BOX — drift + hover
═══════════════════════════════════════ */
export function ImgBox({ src, alt = "", style = {}, seed = 0 }) {
  const [hovered, setHovered] = useState(false);
  const [pos, setPos]         = useState({ x: 0, y: 0, rotate: 0 });
  const intervalRef           = useRef(null);

  const drift = useCallback(() => {
    const r = (a, b) => a + Math.random() * (b - a);
    setPos({ x: r(-9, 9), y: r(-7, 7), rotate: r(-1.8, 1.8) });
  }, []);

  useEffect(() => {
    drift();
    const delay = setTimeout(() => {
      drift();
      intervalRef.current = setInterval(drift, 2600 + seed * 350);
    }, seed * 550);
    return () => { clearTimeout(delay); clearInterval(intervalRef.current); };
  }, [drift, seed]);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative", borderRadius: 10,
        overflow: "hidden", cursor: "pointer",
        transform: hovered
          ? "scale(1.038) translateY(-5px) rotate(0deg)"
          : `translate(${pos.x}px, ${pos.y}px) rotate(${pos.rotate}deg)`,
        transition: hovered
          ? "transform 0.38s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s"
          : "transform 2.5s cubic-bezier(0.45,0,0.55,1), box-shadow 0.3s",
        boxShadow: hovered
          ? "0 0 40px rgba(204,0,0,0.45), 0 12px 40px rgba(0,0,0,0.7)"
          : "0 4px 20px rgba(0,0,0,0.5)",
        ...style,
      }}
    >
      <img src={src} alt={alt} style={{
        width: "100%", height: "100%", objectFit: "cover", display: "block",
        filter: hovered ? "brightness(1.1) contrast(1.02)" : "brightness(0.82)",
        transition: "filter 0.4s ease",
      }} />
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: hovered ? "linear-gradient(135deg,rgba(180,0,0,0.18) 0%,transparent 60%)" : "transparent",
        transition: "background 0.4s ease",
      }} />
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: 3,
        background: "#cc0000",
        transform: hovered ? "scaleX(1)" : "scaleX(0)",
        transformOrigin: "left",
        transition: "transform 0.42s cubic-bezier(0.25,1,0.5,1)",
      }} />
    </div>
  );
}

/* ── scroll fade-up ── */
export function useFadeUp(threshold = 0.12) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setVis(true), { threshold }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return [ref, vis];
}

/* ═══════════════════════════════  HERO  ══════════════════════ */
function Hero() {
  const [show, setShow] = useState(false);
  const mobile = useIsMobile();
  useEffect(() => { setTimeout(() => setShow(true), 80); }, []);

  return (
    <section style={{
      background: "#000", minHeight: "100vh",
      display: "flex", alignItems: "center",
      padding: mobile ? "100px 0 60px" : "100px 0 60px",
      position: "relative", overflow: "hidden",
    }}>
      <div style={{
        position: "absolute", right: 0, top: 0, width: 480, height: 480,
        background: "radial-gradient(circle at top right,rgba(160,0,0,0.2) 0%,transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{
        width: "100%", maxWidth: 1280, margin: "0 auto",
        padding: mobile ? "0 24px" : "0 48px",
        display: "grid",
        gridTemplateColumns: mobile ? "1fr" : "1fr 1fr",
        gap: mobile ? 40 : 48,
        alignItems: "center",
      }}>
        {/* TEXT */}
        <div>
          <div style={{
            fontSize: "clamp(52px,7.5vw,100px)", fontWeight: 800,
            fontFamily: "'Arial Black','Helvetica Neue',sans-serif",
            lineHeight: 1.05, color: "#fff",
            opacity: show ? 1 : 0,
            transform: show ? "translateX(0)" : "translateX(-32px)",
            transition: "opacity 0.65s ease 0s, transform 0.65s ease 0s",
          }}>
            <span style={{ color: "#cc0000" }}>O</span>bsidian
          </div>
          <div style={{
            marginTop: 28, fontSize: "clamp(18px,2vw,26px)", fontWeight: 700,
            fontFamily: "'Arial Black',sans-serif", color: "#fff", lineHeight: 1.5,
            opacity: show ? 1 : 0,
            transform: show ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.65s ease 0.2s, transform 0.65s ease 0.2s",
          }}>
            The Sound.<br />The Stage.<br />The Legacy.
          </div>
          <p style={{
            marginTop: 20, fontSize: 15, color: "#999", lineHeight: 1.75,
            maxWidth: mobile ? "100%" : 480,
            opacity: show ? 1 : 0,
            transition: "opacity 0.65s ease 0.4s",
          }}>
            Obsidian — VJTI's Official College Band, founded in 2023 — has already made a
            strong mark, driven by the belief that music can go beyond performance and become
            a force for connection and change. Aiming high, experimenting boldly, one sound at a time.
          </p>
        </div>

        {/* HERO IMAGE */}
        <div style={{
          opacity: show ? 1 : 0,
          transform: show ? "scale(1)" : "scale(0.96)",
          transition: "opacity 0.8s ease 0.25s, transform 0.8s ease 0.25s",
        }}>
          <ImgBox
            src={IMAGES.hero} alt="Obsidian band" seed={0}
            style={{ width: "100%", height: mobile ? 280 : "clamp(380px,55vh,560px)" }}
          />
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════  INFO CARDS  ═════════════════════ */
function InfoCards() {
  const [ref, vis] = useFadeUp();
  const mobile = useIsMobile();
  const cards = [
    { title: "Upcoming Gigs",    desc: "Catch Obsidian live at Pratibimb '26 and inter-college Battle of Bands events across Mumbai this season." },
    { title: "Event Schedule",   desc: "Explore our packed calendar of performances, workshops, collaborations, and special appearances all year." },
    { title: "Follow the Sound", desc: "Stay tuned for behind-the-scenes drops, performance reels, and live event updates on our socials." },
  ];
  return (
    <section ref={ref} style={{ background: "#000", borderTop: "1px solid #1e1e1e" }}>
      <div style={{
        maxWidth: 1280, margin: "0 auto",
        display: "grid",
        gridTemplateColumns: mobile ? "1fr" : "repeat(3,1fr)",
        opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(30px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
      }}>
        {cards.map((c, i) => (
          <div key={i} style={{
            padding: mobile ? "36px 24px" : "52px 40px",
            textAlign: "center",
            borderRight: (!mobile && i < 2) ? "1px solid #1e1e1e" : "none",
            borderBottom: (mobile && i < 2) ? "1px solid #1e1e1e" : "none",
          }}>
            <h3 style={{ fontFamily: "'Arial Black',sans-serif", fontWeight: 700, fontSize: 18, color: "#fff", marginBottom: 14 }}>{c.title}</h3>
            <p style={{ fontSize: 14, color: "#777", lineHeight: 1.75 }}>{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ══════════════════════════  MEET THE BAND  ══════════════════ */
function MeetTheBand() {
  const [ref, vis] = useFadeUp();
  const mobile = useIsMobile();

  return (
    <section ref={ref} style={{ background: "#000", borderTop: "1px solid #1e1e1e", padding: mobile ? "60px 0" : "80px 0" }}>
      <div style={{
        maxWidth: 1280, margin: "0 auto",
        padding: mobile ? "0 24px" : "0 48px",
        display: "grid",
        gridTemplateColumns: mobile ? "1fr" : "1fr 1fr",
        gap: mobile ? 40 : 64,
        alignItems: "center",
        opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(36px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}>
        {/* TEXT + small photos */}
        <div>
          <h2 style={{ fontFamily: "'Arial Black',sans-serif", fontWeight: 800, fontSize: "clamp(28px,3.5vw,48px)", color: "#fff", marginBottom: 20 }}>
            Meet the Band
          </h2>
          <p style={{ color: "#888", fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            Obsidian is built on passion, bold experimentation, and the conviction that music can
            speak where words fall short. In just two years, the band has grown into one of VJTI's
            most celebrated ensembles — multi-genre, multi-instrument, and unapologetically original.
          </p>
          <p style={{ color: "#888", fontSize: 15, lineHeight: 1.8 }}>
            • Multi-instrument ensemble &nbsp;•&nbsp; Genre-defying fusions &nbsp;•&nbsp; Original compositions &nbsp;•&nbsp; One Band · One Beat · One VJTI
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 28 }}>
            <ImgBox src={IMAGES.bandPhoto1} alt="Band photo 1" seed={1} style={{ height: mobile ? 140 : 160 }} />
            <ImgBox src={IMAGES.bandPhoto2} alt="Band photo 2" seed={2} style={{ height: mobile ? 140 : 160 }} />
          </div>
        </div>

        {/* LARGE RED-TINTED IMAGE */}
        <div style={{ position: "relative" }}>
          <ImgBox
            src={IMAGES.performers} alt="Band performers on stage" seed={3}
            style={{ width: "100%", height: mobile ? 280 : "clamp(360px,50vh,540px)" }}
          />
          <div style={{
            position: "absolute", inset: 0, borderRadius: 10,
            background: "rgba(160,0,0,0.42)", mixBlendMode: "multiply", pointerEvents: "none",
          }} />
        </div>
      </div>
    </section>
  );
}

export default function ObsidianTop() {
  return (
    <>
      <Hero />
      <InfoCards />
      <MeetTheBand />
    </>
  );
}