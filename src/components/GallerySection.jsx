export default function GallerySection() {
    return (
        <>
            <div style={{ position: 'absolute', top: '7300px', width: '100%', textAlign: 'center', zIndex: 20 }}>
                <p
                    style={{
                        color: '#D4AF37',
                        fontFamily: 'var(--font-pinyon, "Pinyon Script", cursive)',
                        fontSize: '100px',
                        filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.5))',
                    }}
                >
                    A Glimpse of Mythopia
                </p>
            </div>

            <img
                src="/These151.png"
                style={{ width: '2629px', height: '1666px', position: 'absolute', left: '-7px', top: '7400px', maxWidth: 'none' }}
                alt="These15 2"
            />

            {/* Gallery Container */}
            <div style={{ width: '2005px', height: '1166px', position: 'absolute', left: '258px', top: '7610px' }}>
                {/* Top Row */}
                <img src="/bGrid1.png" style={{ boxShadow: '0 4px 136px #000', width: '600px', position: 'absolute', top: '30px', maxWidth: 'none', objectFit: 'cover' }} alt="Couch Talk" />
                <img src="/bGrid2.jpeg" style={{ boxShadow: '0 4px 136px #000', width: '380px', position: 'absolute', left: '600px', top: '28px', maxWidth: 'none', objectFit: 'cover' }} alt="Singer" />
                <img src="/bGrid3.png" style={{ boxShadow: '0 4px 136px #000', width: '670px', position: 'absolute', left: '1000px', top: '30px', maxWidth: 'none', objectFit: 'cover' }} alt="DJ" />
                <img src="/bGrid4.png" style={{ boxShadow: '0 4px 136px #000', width: '480px', position: 'absolute', left: '1690px', top: '32px', maxWidth: 'none', objectFit: 'cover' }} alt="Red Stage" />

                {/* Bottom Row */}
                <img src="/bGrid5.png" style={{ boxShadow: '0 4px 136px #000', width: '500px', position: 'absolute', top: '500px', maxWidth: 'none', objectFit: 'cover' }} alt="RedBull" />
                <img src="/bGrid6.png" style={{ boxShadow: '0 4px 136px #000', width: '450px', position: 'absolute', left: '500px', top: '560px', maxWidth: 'none', objectFit: 'cover' }} alt="Group" />
                <img src="/bGrid7.png" style={{ boxShadow: '0 4px 136px #000', width: '350px', position: 'absolute', left: '965px', top: '690px', maxWidth: 'none', objectFit: 'cover' }} alt="Dark Stage" />
                <img src="/bGrid8.png" style={{ boxShadow: '0 4px 136px #000', width: '833px', position: 'absolute', left: '1330px', top: '690px', maxWidth: 'none', objectFit: 'cover' }} alt="Realme" />
                <img src="/bGrid9.png" style={{ boxShadow: '0 4px 136px #000', width: '650px', position: 'absolute', left: '1000px', top: '430px', maxWidth: 'none', objectFit: 'cover' }} alt="Realme" />
            </div>
        </>
    );
}
