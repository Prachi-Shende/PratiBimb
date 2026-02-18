import Link from 'next/link';
import { events } from '../data/events';
import Reveal from './reveal';

export default function TimelineSection() {
  return (
    <section
      style={{
        padding: '100px 100px',
        position: 'relative',
        zIndex: 1,
        overflow: 'hidden',
      }}
    >
      {/* Warm background glow */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 60% 30% at 50% 20%, rgba(100,40,5,0.1) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <Reveal>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '20px',
            marginBottom: '20px',
          }}
        >
          <div
            style={{
              height: '1px',
              width: '220px',
              background:
                'linear-gradient(to right, transparent, rgba(212,175,55,0.4))',
            }}
          />
          <span
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: '22px',
              color: 'rgba(212,175,55,0.45)',
              letterSpacing: '8px',
            }}
          >
            ✦ THE SAGA ✦
          </span>
          <div
            style={{
              height: '1px',
              width: '220px',
              background:
                'linear-gradient(to left, transparent, rgba(212,175,55,0.4))',
            }}
          />
        </div>

        <h2
          style={{
            textAlign: 'center',
            fontFamily: "'Cinzel Decorative', serif",
            fontSize: '55px',
            color: 'transparent',
            background:
              'linear-gradient(135deg, #B8860B, #D4AF37, #FFF8DC, #D4AF37, #B8860B)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            letterSpacing: '6px',
            marginBottom: '10px',
          }}
        >
          THE CHRONICLES
        </h2>

        <p
          style={{
            textAlign: 'center',
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '22px',
            color: 'rgba(255,240,200,0.4)',
            fontStyle: 'italic',
            letterSpacing: '2px',
            marginBottom: '80px',
          }}
        >
          Each event, a chapter in the book of legends
        </p>
      </Reveal>

      <div
        style={{
          maxWidth: '1700px',
          margin: '0 auto',
          position: 'relative',
        }}
      >
        {/* Center line */}
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: 0,
            bottom: 0,
            width: '2px',
            background:
              'linear-gradient(to bottom, transparent, rgba(212,175,55,0.6), transparent)',
            transform: 'translateX(-50%)',
          }}
        />

        {events.map((event, index) => (
          <Reveal
            key={event.id}
            delay={index * 0.1}
            direction={event.side === 'left' ? 'left' : 'right'}
          >
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: '460px',
                marginBottom: '35px',
                display: 'flex',
                alignItems: 'flex-start',
              }}
            >
              {/* Timeline marker */}
              <div
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: '55px',
                  transform: 'translateX(-50%)',
                  zIndex: 10,
                }}
              >
                <svg width="40" height="40" viewBox="0 0 60 60">
                  <polygon
                    points="30,3 57,18 57,42 30,57 3,42 3,18"
                    fill="rgba(10,5,20,0.9)"
                    stroke="#D4AF37"
                    strokeWidth="2"
                  />
                  <circle cx="30" cy="30" r="5" fill="#D4AF37" />
                </svg>
              </div>

              {/* Date */}
              <div
                style={{
                  position: 'absolute',
                  top: '60px',
                  ...(event.side === 'left'
                    ? { left: 'calc(50% + 50px)' }
                    : { right: 'calc(50% + 50px)', textAlign: 'right' }),
                  fontFamily: "'Cinzel', serif",
                  fontSize: '20px',
                  color: 'rgba(212,175,55,0.6)',
                  letterSpacing: '3px',
                }}
              >
                ✦ {event.date} ✦
              </div>

              {event.side === 'left' ? (
                <>
                  {/* Image Left */}
                  <div style={{ position: 'absolute', right: '52%', top: 0 }}>
                    <Link href={`/event/${event.id}`}>
                      <img
                        src={event.img}
                        alt={event.title}
                        style={{
                          width: '380px',
                          height: '380px',
                          objectFit: 'cover',
                        }}
                      />
                    </Link>
                  </div>

                  {/* Text Left */}
                  <div
                    style={{
                      position: 'absolute',
                      right: 'calc(52% + 420px)',
                      top: '20px',
                      width: '480px',
                      textAlign: 'right',
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "'Cinzel', serif",
                        fontSize: '38px',
                        color: '#D4AF37',
                        marginBottom: '14px',
                        lineHeight: 1.2,
                      }}
                    >
                      {event.title}
                    </p>

                    <p
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: '22px',
                        color: 'rgba(255,240,200,0.65)',
                        lineHeight: 1.6,
                        fontStyle: 'italic',
                      }}
                    >
                      {event.desc}
                    </p>
                  </div>
                </>
              ) : (
                <>
                  {/* Image Right */}
                  <div style={{ position: 'absolute', left: '52%', top: 0 }}>
                    <Link href={`/event/${event.id}`}>
                      <img
                        src={event.img}
                        alt={event.title}
                        style={{
                          width: '380px',
                          height: '380px',
                          objectFit: 'cover',
                        }}
                      />
                    </Link>
                  </div>

                  {/* Text Right */}
                  <div
                    style={{
                      position: 'absolute',
                      left: 'calc(52% + 420px)',
                      top: '20px',
                      width: '480px',
                      textAlign: 'left',
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "'Cinzel', serif",
                        fontSize: '38px',
                        color: '#D4AF37',
                        marginBottom: '14px',
                        lineHeight: 1.2,
                      }}
                    >
                      {event.title}
                    </p>

                    <p
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: '22px',
                        color: 'rgba(255,240,200,0.65)',
                        lineHeight: 1.6,
                        fontStyle: 'italic',
                      }}
                    >
                      {event.desc}
                    </p>
                  </div>
                </>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
