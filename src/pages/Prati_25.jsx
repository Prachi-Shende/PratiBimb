import { useState, useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import TimelineSection from '../components/TimelineSection';
import GallerySection from '../components/GallerySection';
import WinnersSection from '../components/WinnersSection';
import MythopiaSection from '../components/MythopiaSection';
import Stars from '../components/Stars';

// Navbar & Footer already placed in App — not included here

export default function Desktop() {
    const [scale, setScale] = useState(1);

    useEffect(() => {
        const handleResize = () => {
            const newScale = window.innerWidth / 2560;
            setScale(newScale);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="w-full min-h-screen overflow-x-hidden bg-[#0a0a0a]">
            <div
                style={{
                    background: 'radial-gradient(50% 50% at 50% 50%, #1A1A1A 0%, #000 99.99%)',
                    position: 'relative',
                    overflow: 'hidden',
                    transformOrigin: 'top left',
                    width: '2560px',
                    height: '10900px',
                    transform: `scale(${scale})`,
                    marginBottom: `-${(1 - scale) * 10900}px`,
                }}
            >
                <Stars />
                <HeroSection />
                <MythopiaSection />
                <TimelineSection />
                <GallerySection />
                <WinnersSection />
            </div>
        </div>
    );
}
