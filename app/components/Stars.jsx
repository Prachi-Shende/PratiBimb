'use client';
import { useEffect, useRef } from 'react';

export default function Stars() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    // Cover the FULL document height, not just viewport
    const W = window.innerWidth;
    const H = document.documentElement.scrollHeight;
    canvas.width = W;
    canvas.height = H;

    // ── Static twinkling stars spread across FULL page ──────────────────
    const STAR_DENSITY = Math.floor((W * H) / 6000); // scales with page size
    const stars = Array.from({ length: Math.min(STAR_DENSITY, 600) }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.8 + 0.3,
      a: Math.random() * 0.8 + 0.2,
      speed: Math.random() * 0.002 + 0.0005,
      phase: Math.random() * Math.PI * 2,
    }));

    // ── Shooting stars ───────────────────────────────────────────────────
    const shooters = [];

    function spawnShooter() {
      const goRight = Math.random() > 0.5;
      const speed = Math.random() * 25 + 20; // 20–45px per frame — very fast
      const angleDeg = Math.random() * 35 + 10; // 10°–45°
      const angle = angleDeg * (Math.PI / 180);

      // Start from ANY point across the FULL page height, not just top
      const startEdge = Math.random();
      let sx, sy;

      if (startEdge < 0.4) {
        // top edge — anywhere along full width
        sx = Math.random() * W;
        sy = Math.random() * H * 0.05; // near top of each "zone"
      } else if (startEdge < 0.7) {
        // left or right edge — anywhere along full height
        sx = goRight ? -10 : W + 10;
        sy = Math.random() * H;
      } else {
        // random point anywhere on the page
        sx = Math.random() * W;
        sy = Math.random() * H;
      }

      const vx = Math.cos(angle) * speed * (goRight ? 1 : -1);
      const vy = Math.sin(angle) * speed;

      shooters.push({
        x: sx,
        y: sy,
        vx,
        vy,
        tailLen: Math.random() * 250 + 150, // 150–400px tail
        life: 1.0,
        decay: Math.random() * 0.013 + 0.007,
        headSize: Math.random() * 2.5 + 2,
        lineWidth: Math.random() * 2 + 2,
      });
    }

    // Fire a burst immediately across different scroll zones
    for (let i = 0; i < 8; i++) {
      setTimeout(() => spawnShooter(), i * 250);
    }

    // Keep spawning — 1 or 2 every 600ms
    const spawnInterval = setInterval(() => {
      spawnShooter();
      if (Math.random() > 0.4) spawnShooter();
    }, 600);

    let frame;
    let t = 0;

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      t += 0.012;

      // ── Static twinkling stars ─────────────────────────────────────────
      stars.forEach((s) => {
        const pulse = Math.max(0, 0.35 + 0.65 * Math.sin(t * s.speed * 60 + s.phase));
        const radius = Math.max(0, s.r * pulse);
        ctx.beginPath();
        ctx.arc(s.x, s.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212,175,55,${s.a * pulse})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = '#D4AF37';
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // ── Shooting stars ─────────────────────────────────────────────────
      for (let i = shooters.length - 1; i >= 0; i--) {
        const s = shooters[i];
        const spd = Math.hypot(s.vx, s.vy);
        const nx = s.vx / spd;
        const ny = s.vy / spd;
        const tailX = s.x - nx * s.tailLen;
        const tailY = s.y - ny * s.tailLen;

        // Outer glow pass
        const gradOuter = ctx.createLinearGradient(tailX, tailY, s.x, s.y);
        gradOuter.addColorStop(0,   `rgba(212,175,55,0)`);
        gradOuter.addColorStop(0.4, `rgba(212,175,55,${s.life * 0.2})`);
        gradOuter.addColorStop(0.8, `rgba(255,230,100,${s.life * 0.55})`);
        gradOuter.addColorStop(1,   `rgba(255,255,220,${s.life})`);

        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(s.x, s.y);
        ctx.strokeStyle = gradOuter;
        ctx.lineWidth = s.lineWidth * 5 * s.life;
        ctx.shadowBlur = 22;
        ctx.shadowColor = `rgba(212,175,55,${s.life * 0.7})`;
        ctx.stroke();

        // Bright white core
        const gradCore = ctx.createLinearGradient(tailX, tailY, s.x, s.y);
        gradCore.addColorStop(0,   `rgba(255,255,255,0)`);
        gradCore.addColorStop(0.5, `rgba(255,255,255,${s.life * 0.3})`);
        gradCore.addColorStop(1,   `rgba(255,255,255,${s.life * 0.95})`);

        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(s.x, s.y);
        ctx.strokeStyle = gradCore;
        ctx.lineWidth = s.lineWidth * s.life;
        ctx.shadowBlur = 12;
        ctx.shadowColor = `rgba(255,255,255,${s.life})`;
        ctx.stroke();
        ctx.shadowBlur = 0;

        // Head dot
        const headR = Math.max(0, s.headSize * s.life);
        ctx.beginPath();
        ctx.arc(s.x, s.y, headR, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,240,${s.life})`;
        ctx.shadowBlur = 28;
        ctx.shadowColor = '#FFFFFF';
        ctx.fill();
        ctx.shadowBlur = 0;

        // Sparkle cross
        const sparkLen = headR * 5;
        ctx.strokeStyle = `rgba(255,255,200,${s.life * 0.7})`;
        ctx.lineWidth = 0.8;
        ctx.beginPath();
        ctx.moveTo(s.x - sparkLen, s.y);
        ctx.lineTo(s.x + sparkLen, s.y);
        ctx.moveTo(s.x, s.y - sparkLen);
        ctx.lineTo(s.x, s.y + sparkLen);
        ctx.stroke();

        // Move
        s.x += s.vx;
        s.y += s.vy;
        s.life -= s.decay;

        if (s.life <= 0 || s.x < -500 || s.x > W + 500 || s.y > H + 500 || s.y < -500) {
          shooters.splice(i, 1);
        }
      }

      frame = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(frame);
      clearInterval(spawnInterval);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',  // absolute so it spans full page height
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
}