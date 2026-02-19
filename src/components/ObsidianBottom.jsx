import { useEffect, useState, useRef, useCallback } from "react";

// ─────────────────────────────────────────────────────────────
//  🖼  IMAGE PATHS — rename to match your actual filenames
// ─────────────────────────────────────────────────────────────
const IMAGES = {
  performance: "/photos/per-0.jpg",
  gallery1:    "/photos/gal_obs-1.jpg",   // top-left
  gallery2:    "/photos/gal_obs-2.jpeg",   // centre tall (spans 2 rows)
  gallery3:    "/photos/gal_obs-3.jpg",   // top-right
  gallery4:    "/photos/gal_obs-4.JPG",   // bottom-left
  gallery5:    "/photos/gal_obs-5.jpeg",   // bottom-right
};

const HIGHLIGHT_SLIDES = [
  { src: "/photos/per-1.jpeg", alt: "Pratibimb Battle of Bands" },
  { src: "/photos/per-2.jpeg", alt: "ICT Manzar performance"    },
  { src: "/photos/per-3.jpeg", alt: "Doordarshan Sahyadri"      },
];

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

/* ── drift + hover animated image ── */
function ImgBox({ src, alt = "", style = {}, seed = 0 }) {
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
          : `translate(${pos.x}px,${pos.y}px) rotate(${pos.rotate}deg)`,
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
function useFadeUp(threshold = 0.12) {
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

/* ═══════════════════════════════════════
   HIGHLIGHTS SLIDESHOW — crossfade every 6s
═══════════════════════════════════════ */
function HighlightSlideshow({ height }) {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrent(prev => (prev + 1) % HIGHLIGHT_SLIDES.length);
        setVisible(true);
      }, 500);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = HIGHLIGHT_SLIDES[current];

  return (
    <div style={{
      width: "100%",
      height: height,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}>
      <div style={{
        width: "100%", height: "100%",
        opacity: visible ? 1 : 0,
        transition: "opacity 0.5s ease",
      }}>
        <ImgBox
          src={slide.src}
          alt={slide.alt}
          seed={current * 10 + 5}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
}

/* ══════════════════════════  PERFORMANCES  ═══════════════════ */
function Performances() {
  const [ref, vis] = useFadeUp();
  const mobile = useIsMobile();

  return (
    <section ref={ref} style={{ background: "#000", padding: mobile ? "60px 0" : "80px 0" }}>
      <div style={{
        maxWidth: 1280, margin: "0 auto",
        padding: mobile ? "0 24px" : "0 48px",
        display: "grid",
        gridTemplateColumns: mobile ? "1fr" : "1fr 1fr",
        gap: mobile ? 40 : 80,
        alignItems: "center",
        opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(36px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}>
        <ImgBox
          src={IMAGES.performance} alt="Live performance" seed={4}
          style={{ width: "100%", height: mobile ? 260 : "clamp(340px,48vh,500px)" }}
        />
        <div>
          <h2 style={{ fontFamily: "'Arial Black',sans-serif", fontWeight: 800, fontSize: "clamp(28px,3.5vw,52px)", color: "#fff", marginBottom: 24 }}>
            Performances
          </h2>
          <p style={{ color: "#888", fontSize: 15, lineHeight: 1.85, marginBottom: 20 }}>
            From college stages to the iconic <strong style={{ color: "#fff" }}>CSMT</strong> and{" "}
            <strong style={{ color: "#fff" }}>Jio Creative Studios</strong>,{" "}
            <strong style={{ color: "#fff" }}>Obsidian</strong> has built a legacy of passion and range.
            Blending rock anthems, soulful ballads, folk fusion, and genre-defying originals, the band
            carries forward the creativity, unity, and pride of VJTI.
          </p>
          <p style={{ color: "#888", fontSize: 15, lineHeight: 1.85 }}>
            Obsidian has proudly performed on <strong style={{ color: "#fff" }}>Doordarshan Sahyadri</strong>{" "}
            and consistently emerged as <strong style={{ color: "#fff" }}>winners and finalists</strong> at
            multiple inter-college Battle of Bands. As regular performers at VJTI's flagship fest,{" "}
            <strong style={{ color: "#fff" }}>Pratibimb</strong>, the band is known for{" "}
            <strong style={{ color: "#fff" }}>innovative fusions</strong> and{" "}
            <strong style={{ color: "#fff" }}>high-energy performances</strong> that captivate every crowd.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════  HIGHLIGHTS  ════════════════════ */
function Highlights() {
  const [ref, vis] = useFadeUp();
  const mobile = useIsMobile();

  const items = [
    { bold: "1st Place – Pratibimb Battle of Bands",    rest: " – Dominating VJTI's flagship fest with raw energy and musical precision." },
    { bold: "2nd Place – ICT Manzar Battle of Bands",   rest: " – Showcasing genre versatility and electrifying stage presence." },
    { bold: "3rd Place – FRCRC Antara Battle of Bands", rest: " – Recognised for musical depth and impactful performance." },
    { bold: "2nd Place – KJ Somaiya Symphony",          rest: " – A testament to harmonic excellence and tight ensemble playing." },
    { bold: "Doordarshan Sahyadri Feature",             rest: " – Recorded the election voting anthem at iconic CSMT; broadcast nationally." },
    { bold: "Jio Creative Studios – Entreprenaari",     rest: " – Performed at Navya Naveli Nanda's event celebrating women-led entrepreneurship." },
  ];

  const slideshowHeight = mobile ? 260 : "clamp(340px,48vh,500px)";

  return (
    <section ref={ref} style={{ background: "#000", padding: mobile ? "60px 0" : "80px 0", borderTop: "1px solid #1a1a1a" }}>
      <div style={{
        maxWidth: 1280, margin: "0 auto",
        padding: mobile ? "0 24px" : "0 48px",
        display: "grid",
        /* on mobile: single col, image centered above list */
        gridTemplateColumns: mobile ? "1fr" : "1fr 1fr",
        gap: mobile ? 40 : 80,
        alignItems: "start",
        opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(36px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}>

        {/* SLIDESHOW — centered on mobile */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}>
          <div style={{
            width: mobile ? "min(100%, 480px)" : "100%",
            height: slideshowHeight,
          }}>
            <HighlightSlideshow height={slideshowHeight} />
          </div>
        </div>

        {/* BULLET LIST */}
        <div>
          <h2 style={{ fontFamily: "'Arial Black',sans-serif", fontWeight: 800, fontSize: "clamp(28px,3.5vw,52px)", color: "#fff", marginBottom: 28 }}>
            Our Highlights
          </h2>
          <ul style={{ listStyle: "disc", paddingLeft: 20, margin: 0 }}>
            {items.map((item, i) => (
              <li key={i} style={{
                color: "#888", fontSize: 15, lineHeight: 1.7, marginBottom: 18,
                opacity: vis ? 1 : 0,
                transform: vis ? "translateX(0)" : "translateX(-14px)",
                transition: `opacity 0.5s ease ${0.1 + i * 0.09}s, transform 0.5s ease ${0.1 + i * 0.09}s`,
              }}>
                <strong style={{ color: "#fff" }}>{item.bold}</strong>{item.rest}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════  COMMUNITY  ═════════════════════ */
function Community() {
  const [ref, vis] = useFadeUp();
  const mobile = useIsMobile();
  return (
    <section ref={ref} style={{ background: "#000", borderTop: "1px solid #1a1a1a", padding: mobile ? "60px 24px" : "80px 48px", textAlign: "center" }}>
      <div style={{
        maxWidth: 720, margin: "0 auto",
        opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(28px)",
        transition: "opacity 0.65s ease, transform 0.65s ease",
      }}>
        <h2 style={{ fontFamily: "'Arial Black',sans-serif", fontWeight: 800, fontSize: "clamp(24px,3vw,42px)", color: "#fff", marginBottom: 20 }}>
          Connect with the Community
        </h2>
        <p style={{ color: "#777", fontSize: 15, lineHeight: 1.85, marginBottom: 32 }}>
          At the heart of Obsidian lies a passionate community driven by rhythm, creativity, and unity.
          From late-night rehearsals to grand stages, we grow together, support one another, and
          celebrate every milestone as one family. Join a space where talent meets teamwork,
          friendships turn into lifelong bonds, and every note brings us closer.
        </p>
        <a
          href="https://www.instagram.com/thisisobsidian?igsh=MXAzbzF4ZGYzMWVmdQ=="
          target="_blank" rel="noreferrer"
          style={{ display: "inline-flex", alignItems: "center", gap: 10, color: "#ccc", fontSize: 16, textDecoration: "none", transition: "color 0.25s" }}
          onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
          onMouseLeave={e => (e.currentTarget.style.color = "#ccc")}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" />
            <circle cx="12" cy="12" r="4.5" />
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
          </svg>
          @obsidian_vjti
        </a>
      </div>
    </section>
  );
}

/* ══════════════════════════  GALLERY  ═══════════════════════ */
function Gallery() {
  const [ref, vis] = useFadeUp(0.05);
  const mobile = useIsMobile();
  const tablet = useIsMobile(1024);

  return (
    <section ref={ref} style={{ background: "#000", borderTop: "1px solid #1a1a1a", padding: mobile ? "60px 0 80px" : "80px 0 100px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: mobile ? "0 24px" : "0 48px" }}>
        <h2 style={{
          fontFamily: "'Arial Black',sans-serif", fontWeight: 800,
          fontSize: "clamp(32px,5vw,60px)", color: "#fff",
          textAlign: "center", marginBottom: 48,
          opacity: vis ? 1 : 0, transform: vis ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}>
          Gallery
        </h2>

        {mobile ? (
          /* MOBILE: simple single column stack */
          <div style={{
            display: "flex", flexDirection: "column", gap: 12,
            opacity: vis ? 1 : 0, transition: "opacity 0.7s ease 0.15s",
          }}>
            {[IMAGES.gallery1, IMAGES.gallery2, IMAGES.gallery3, IMAGES.gallery4, IMAGES.gallery5].map((src, i) => (
              <ImgBox key={i} src={src} alt={`Gallery ${i + 1}`} seed={6 + i} style={{ width: "100%", height: 220 }} />
            ))}
          </div>
        ) : tablet ? (
          /* TABLET: 2-col simple grid */
          <div style={{
            display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12,
            opacity: vis ? 1 : 0, transition: "opacity 0.7s ease 0.15s",
          }}>
            {[IMAGES.gallery1, IMAGES.gallery2, IMAGES.gallery3, IMAGES.gallery4, IMAGES.gallery5].map((src, i) => (
              <ImgBox key={i} src={src} alt={`Gallery ${i + 1}`} seed={6 + i} style={{ width: "100%", height: 240 }} />
            ))}
          </div>
        ) : (
          /* DESKTOP: 3-col masonry, centre tall */
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gridTemplateRows: "300px 300px",
            gap: 12,
            opacity: vis ? 1 : 0, transition: "opacity 0.7s ease 0.15s",
          }}>
            <ImgBox src={IMAGES.gallery1} alt="Band group"        seed={6}  style={{ gridColumn: 1, gridRow: 1,     height: "100%" }} />
            <ImgBox src={IMAGES.gallery2} alt="Live on stage"     seed={7}  style={{ gridColumn: 2, gridRow: "1/3", height: "100%" }} />
            <ImgBox src={IMAGES.gallery3} alt="Stage spotlight"   seed={8}  style={{ gridColumn: 3, gridRow: 1,     height: "100%" }} />
            <ImgBox src={IMAGES.gallery4} alt="Behind the scenes" seed={9}  style={{ gridColumn: 1, gridRow: 2,     height: "100%" }} />
            <ImgBox src={IMAGES.gallery5} alt="Award ceremony"    seed={10} style={{ gridColumn: 3, gridRow: 2,     height: "100%" }} />
          </div>
        )}
      </div>
    </section>
  );
}

export default function ObsidianBottom() {
  return (
    <>
      <Performances />
      <Highlights />
      <Community />
      <Gallery />
    </>
  );
}