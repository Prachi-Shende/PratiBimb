export default function MythopiaSection() {
    return (
        <div
            style={{
                position: 'absolute',
                top: '200px',
                left: 0,
                width: '100%',
                height: '500px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
            }}
        >
            {/* Background Image */}
            <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
                <img
                    src="/MythopiaBG.jpg"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }}
                    alt="Mythopia Background"
                />
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        background: '#3E1C00',
                        mixBlendMode: 'multiply',
                        opacity: 0.6,
                    }}
                />
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to bottom, black, transparent, black)',
                        opacity: 0.8,
                    }}
                />
            </div>

            {/* Content */}
            <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <p
                    style={{
                        color: '#F5E6C8',
                        fontFamily: 'var(--font-cinzel, Cinzel, serif)',
                        fontSize: '100px',
                        letterSpacing: '0.1em',
                        textShadow: '0 4px 4px rgba(0,0,0,0.5)',
                    }}
                >
                    MYTHOPIA
                </p>
                <p
                    style={{
                        color: '#D4AF37',
                        fontFamily: 'var(--font-cinzel, Cinzel, serif)',
                        fontSize: '30px',
                        letterSpacing: '0.2em',
                        marginTop: '8px',
                        borderTop: '1px solid #D4AF37',
                        borderBottom: '1px solid #D4AF37',
                        padding: '8px 40px',
                    }}
                >
                    CHRONICLES OF THE IMMORTAL
                </p>
            </div>

            {/* Gold Borders */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '5px', background: '#D4AF37' }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '5px', background: '#D4AF37' }} />
        </div>
    );
}
