export default function WinnersSection() {
    return (
        <div style={{ position: 'absolute', top: '8960px', width: '100%', height: '1500px' }}>
            
            {/* Title */}
            <div style={{ position: 'absolute', top: '100px', width: '100%', textAlign: 'center', zIndex: 20 }}>
                <p
                    style={{
                        color: '#D4AF37',
                        fontFamily: 'var(--font-pinyon, "Pinyon Script", cursive)',
                        fontSize: '100px',
                        filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.5))',
                    }}
                >
                    Winners of Illuminati House Cup
                </p>
            </div>

            {/* Frames Container */}
            <div
                style={{
                    position: 'absolute',
                    top: '400px',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'flex-end',
                    gap: '100px',
                    zIndex: 20,
                }}
            >
                {/* Computer Frame */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
                    <div style={{ position: 'relative', width: '500px', height: '600px' }}>
                        <img src="/CompReal.jpeg" style={{ position: 'absolute', inset: '60px', width: '380px', height: '480px', objectFit: 'cover', zIndex: 10 }} alt="Computer Winners" />
                        <img src="/GoldFrame.png" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 20, pointerEvents: 'none' }} alt="Frame" />
                    </div>
                    <p style={{ color: '#D4AF37', fontFamily: 'var(--font-cinzel, Cinzel, serif)', fontSize: '50px', marginTop: '8px', fontWeight: 'bold', letterSpacing: '0.1em', textShadow: '2px 2px 4px #000' }}>COMPUTER</p>
                </div>

                {/* Center Frame: Electrical */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', marginTop: '-50px' }}>
                    <div style={{ position: 'relative', width: '600px', height: '720px' }}>
                        <img src="/Comp.png" style={{ position: 'absolute', inset: '70px', width: '460px', height: '580px', objectFit: 'cover', zIndex: 10 }} alt="Electrical Winners" />
                        <img src="/GoldFrame.png" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 20, pointerEvents: 'none' }} alt="Frame" />
                    </div>
                    <p style={{ color: '#FFD700', fontFamily: 'var(--font-cinzel, Cinzel, serif)', fontSize: '60px', marginTop: '8px', fontWeight: 'bold', letterSpacing: '0.1em', textShadow: '2px 2px 4px #000' }}>ELECTRICAL</p>
                </div>

                {/* Right Frame: Production */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
                    <div style={{ position: 'relative', width: '500px', height: '600px' }}>
                        <img src="/ProdWin.jpeg" style={{ position: 'absolute', inset: '60px', width: '380px', height: '480px', objectFit: 'cover', zIndex: 10 }} alt="Production Winners" />
                        <img src="/GoldFrame.png" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 20, pointerEvents: 'none' }} alt="Frame" />
                    </div>
                    <p style={{ color: '#D4AF37', fontFamily: 'var(--font-cinzel, Cinzel, serif)', fontSize: '50px', marginTop: '8px', fontWeight: 'bold', letterSpacing: '0.1em', textShadow: '2px 2px 4px #000' }}>PRODUCTION</p>
                </div>
            </div>
        </div>
    );
}
