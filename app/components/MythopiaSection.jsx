import Reveal, { useScrollReveal } from './reveal';

const PILLARS = [
  {
    symbol: 'Ψ',
    label: 'Wisdom',
    desc: 'The gift of the gods to the worthy',
  },
  {
    symbol: '⚔',
    label: 'Valor',
    desc: 'The blade that carves legends',
  },
  {
    symbol: 'Ω',
    label: 'Creation',
    desc: 'The spark that births worlds',
  },
];

export default function MythopiaSection() {
  const [frameRef, frameVisible] = useScrollReveal();

  return (
    <section
      style={{
        minHeight: '1300px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        zIndex: 1,
        padding: '140px 150px',
        overflow: 'hidden',
      }}
    >
      {/* Warm radial glow */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(100,40,10,0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Stone tile pattern */}
      <svg
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          opacity: 0.04,
          pointerEvents: 'none',
        }}
      >
        <defs>
          <pattern
            id="stoneTile"
            x="0"
            y="0"
            width="120"
            height="120"
            patternUnits="userSpaceOnUse"
          >
            <rect width="120" height="120" fill="none" stroke="#D4AF37" strokeWidth="0.5" />
            <line x1="60" y1="0" x2="60" y2="120" stroke="#D4AF37" strokeWidth="0.3" />
            <line x1="0" y1="60" x2="120" y2="60" stroke="#D4AF37" strokeWidth="0.3" />
            <circle cx="60" cy="60" r="3" fill="#D4AF37" opacity="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#stoneTile)" />
      </svg>

      <div
        style={{
          textAlign: 'center',
          maxWidth: '1400px',
          margin: '0 auto',
          position: 'relative',
        }}
      >
        {/* Manuscript frame */}
        <div
          ref={frameRef}
          style={{
            position: 'absolute',
            inset: '-60px',
            opacity: frameVisible ? 1 : 0,
            transition: 'opacity 1.2s 0.3s',
            pointerEvents: 'none',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: '0',
              border: '1px solid rgba(212,175,55,0.2)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              inset: '12px',
              border: '1px solid rgba(212,175,55,0.1)',
            }}
          />
        </div>

        {/* Realm label */}
        <Reveal delay={0}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '30px',
              marginBottom: '40px',
            }}
          >
            <div
              style={{
                height: '1px',
                width: '200px',
                background:
                  'linear-gradient(to right, transparent, rgba(212,175,55,0.4))',
              }}
            />
            <span
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: '26px',
                color: 'rgba(212,175,55,0.5)',
                letterSpacing: '10px',
              }}
            >
              ✦ THE REALM ✦
            </span>
            <div
              style={{
                height: '1px',
                width: '200px',
                background:
                  'linear-gradient(to left, transparent, rgba(212,175,55,0.4))',
              }}
            />
          </div>
        </Reveal>

        {/* Title */}
        <Reveal delay={0.1}>
          <h2
            style={{
              fontFamily: "'Cinzel Decorative', serif",
              fontSize: '130px',
              color: 'transparent',
              background:
                'linear-gradient(135deg, #B8860B, #D4AF37, #FFF8DC, #D4AF37, #B8860B)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              marginBottom: '20px',
              lineHeight: 1.1,
              filter: 'drop-shadow(0 0 40px rgba(212,175,55,0.3))',
            }}
          >
            MYTHOPIA
          </h2>

          <div
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: '30px',
              color: 'rgba(212,175,55,0.4)',
              letterSpacing: '16px',
              marginBottom: '40px',
            }}
          >
            — CHRONICLES OF THE IMMORTAL —
          </div>
        </Reveal>

        {/* Description */}
        <Reveal delay={0.2}>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '32px',
              color: 'rgba(255,240,200,0.65)',
              lineHeight: 1.8,
              fontStyle: 'italic',
              letterSpacing: '1.5px',
              maxWidth: '1000px',
              margin: '0 auto',
            }}
          >
            &ldquo;In the age before memory, when the stars were young and the
            earth still trembled with divine fire — the gods descended and chose
            among the mortals those worthy of eternal legend. That hour has come
            again.&rdquo;
          </p>
        </Reveal>

        {/* Pillars */}
        <Reveal delay={0.35}>
          <div
            style={{
              marginTop: '100px',
              display: 'flex',
              justifyContent: 'center',
              gap: '80px',
              flexWrap: 'wrap',
            }}
          >
            {PILLARS.map(({ symbol, label, desc }) => (
              <div key={label} style={{ textAlign: 'center', width: '350px' }}>
                <div
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: '70px',
                    color: '#D4AF37',
                    textShadow: '0 0 30px rgba(212,175,55,0.6)',
                    marginBottom: '20px',
                  }}
                >
                  {symbol}
                </div>

                <div
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: '28px',
                    letterSpacing: '6px',
                    color: '#D4AF37',
                    marginBottom: '12px',
                    textTransform: 'uppercase',
                  }}
                >
                  {label}
                </div>

                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '24px',
                    color: 'rgba(255,240,200,0.45)',
                    fontStyle: 'italic',
                  }}
                >
                  {desc}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
