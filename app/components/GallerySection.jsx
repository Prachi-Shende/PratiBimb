import Reveal from './reveal';

const GALLERY_ITEMS = [
  {
    title: 'DJ Night',
    desc: 'Where the night came alive with beats and light',
    img: '/DJNight/IMG_2497.png',
    span: 2, height: '700px',
  },
  {
    title: 'Final Year Dance',
    desc: 'A farewell written in rhythm and grace',
    img: '/Final_year_dance/IMG_2095.png',
    span: 1, height: '700px',
  },
  {
    title: 'Pratistaan',
    desc: 'The stage where legends planted their roots',
    img: '/Pratistaan/IMG_2555.JPG',
    span: 1, height: '560px',
  },
  {
    title: 'Timeless Tunes',
    desc: 'Melodies that echoed through the ages',
    img: '/TimelessTunes/IMG_1646.png',
    span: 2, height: '560px',
  },
  {
    title: 'Vogue',
    desc: 'Fashion forged from myth and fire',
    img: '/VOGUE/IMG_1930.png',
    span: 1, height: '560px',
  },
];

export default function GallerySection() {
  return (
    <section style={{ padding: '160px 160px', position: 'relative', zIndex: 1 }}>
      <Reveal>
        <h2 style={{
          textAlign: 'center',
          fontFamily: "'Cinzel', serif",
          fontSize: '70px',
          color: '#D4AF37',
          letterSpacing: '10px',
          marginBottom: '30px',
        }}>
          A GLIMPSE OF MYTHOPIA
        </h2>
        <p style={{
          textAlign: 'center',
          fontFamily: "'Cormorant Garamond', serif",
          color: 'rgba(212,175,55,0.5)',
          fontSize: '36px',
          fontStyle: 'italic',
          marginBottom: '100px',
          letterSpacing: '3px',
        }}>
          Nights of legend, stages of glory — moments that will never fade
        </p>
      </Reveal>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
        {GALLERY_ITEMS.map((item, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <div
              style={{
                gridColumn: `span ${item.span}`,
                height: item.height,
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                border: '2px solid rgba(212,175,55,0.15)',
                transition: 'all 0.4s ease',
                display: 'flex',
                alignItems: 'flex-end',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(212,175,55,0.5)';
                e.currentTarget.style.boxShadow = '0 0 80px rgba(212,175,55,0.2)';
                e.currentTarget.querySelector('.img-zoom').style.transform = 'scale(1.06)';
                e.currentTarget.querySelector('.img-overlay').style.opacity = '1';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(212,175,55,0.15)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.querySelector('.img-zoom').style.transform = 'scale(1)';
                e.currentTarget.querySelector('.img-overlay').style.opacity = '0.5';
              }}
            >
              {/* Actual image */}
              <img
                className="img-zoom"
                src={item.img}
                alt={item.title}
                style={{
                  position: 'absolute', inset: 0,
                  width: '100%', height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.6s ease',
                }}
              />

              {/* Dark gradient overlay so text is always readable */}
              <div
                className="img-overlay"
                style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(4,2,14,0.92) 0%, rgba(4,2,14,0.4) 50%, transparent 100%)',
                  opacity: 0.5,
                  transition: 'opacity 0.4s ease',
                }}
              />

              {/* Gold top-edge shimmer on hover */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
                background: 'linear-gradient(to right, transparent, #D4AF37, transparent)',
                opacity: 0,
                transition: 'opacity 0.4s',
              }} />

              {/* Text */}
              <div style={{ padding: '50px', position: 'relative', zIndex: 1 }}>
                <h3 style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: '40px',
                  color: '#D4AF37',
                  letterSpacing: '3px',
                  marginBottom: '12px',
                  textShadow: '0 2px 12px rgba(0,0,0,0.8)',
                }}>
                  {item.title}
                </h3>
                <p style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '30px',
                  color: 'rgba(255,240,200,0.75)',
                  fontStyle: 'italic',
                  textShadow: '0 2px 8px rgba(0,0,0,0.8)',
                }}>
                  {item.desc}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}