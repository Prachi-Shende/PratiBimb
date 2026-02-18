export default function FloatingParticles({ count = 25 }) {
  const particles = Array.from({ length: count }, (_, i) => ({
    id: i,
    left: `${(i / count) * 100 + Math.sin(i * 1.7) * 8}%`,
    size: (i % 3) + 2,
    duration: 10 + (i % 8) * 2,
    delay: (i % 10) * 1.2,
    opacity: 0.2 + (i % 5) * 0.1,
  }));

  return (
    <>
      <style>{`
        @keyframes floatUp {
          0%   { transform: translateY(0)      scale(1);   opacity: 0.6; }
          80%  {                                            opacity: 0.2; }
          100% { transform: translateY(-100vh) scale(0);   opacity: 0;   }
        }
      `}</style>

      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none',
          overflow: 'hidden',
        }}
      >
        {particles.map((p) => (
          <div
            key={p.id}
            style={{
              position: 'absolute',
              bottom: '-10px',
              left: p.left,
              width: p.size,
              height: p.size,
              borderRadius: '50%',
              background: 'rgba(212,175,55,0.6)',
              boxShadow: '0 0 8px #D4AF37',
              animation: `floatUp ${p.duration}s ${p.delay}s infinite linear`,
              opacity: p.opacity,
            }}
          />
        ))}
      </div>
    </>
  );
}