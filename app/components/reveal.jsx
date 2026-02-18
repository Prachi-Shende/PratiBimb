'use client';
import { useEffect, useRef, useState } from 'react';

export function useScrollReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, visible];
}

const TRANSFORMS = {
  up:    'translateY(40px)',
  down:  'translateY(-40px)',
  left:  'translateX(-40px)',
  right: 'translateX(40px)',
};

export default function Reveal({ children, delay = 0, direction = 'up' }) {
  const [ref, visible] = useScrollReveal();

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : TRANSFORMS[direction],
        transition: `opacity 0.8s ${delay}s cubic-bezier(.16,1,.3,1),
                     transform 0.8s ${delay}s cubic-bezier(.16,1,.3,1)`,
      }}
    >
      {children}
    </div>
  );
}