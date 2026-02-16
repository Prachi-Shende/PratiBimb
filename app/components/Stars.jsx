'use client';

import { useEffect, useRef } from 'react';

const Stars = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const width = 2560;
        const height = 12580;

        canvas.width = width;
        canvas.height = height;

        const stars = [];
        const numStars = 600;

        // Simple random distribution with minimum distance check
        const minDistance = 150;

        for (let i = 0; i < numStars; i++) {
            let x, y, tooClose;
            let attempts = 0;
            do {
                x = Math.random() * width;
                y = Math.random() * height;
                tooClose = false;
                // Check against a subset of previous stars for performance
                // Checking all stars is O(n^2), n=600 is small enough, but let's be safe
                for (let j = Math.max(0, stars.length - 50); j < stars.length; j++) {
                    const dx = stars[j].x - x;
                    const dy = stars[j].y - y;
                    if (Math.sqrt(dx * dx + dy * dy) < minDistance) {
                        tooClose = true;
                        break;
                    }
                }
                attempts++;
            } while (tooClose && attempts < 10);

            stars.push({
                x,
                y,
                size: Math.random() * 2 + 1,
                opacity: Math.random() * 0.4 + 0.1
            });
        }

        const draw = () => {
            ctx.clearRect(0, 0, width, height);

            stars.forEach(star => {
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(212, 175, 55, ${star.opacity})`; // Golden color
                ctx.shadowBlur = 8;
                ctx.shadowColor = '#D4AF37';
                ctx.fill();
            });
        };

        draw();

    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
            style={{ width: '2560px', height: '12580px' }}
        />
    );
};

export default Stars;
