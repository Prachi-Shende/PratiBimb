import { useParams, useNavigate } from 'react-router-dom';
import { events } from '../../data/events';
import Stars from '../../components/Stars';

// NOTE: Since this is a React (client-side) app, we can no longer read the
// filesystem at runtime. Gallery images must be declared in events.js via the
// `gallery` array, or served from a known public path pattern you define.
// The folderName field is kept in events.js for reference; adapt as needed.

export default function EventPage() {
    const { slug } = useParams();
    const navigate = useNavigate();

    const event = events.find((e) => e.id === slug);

    if (!event) {
        return (
            <div style={{ color: 'white', textAlign: 'center', marginTop: '80px' }}>
                Event not found
            </div>
        );
    }

    // Use statically declared gallery images from events.js
    const galleryImages = event.gallery || [];

    return (
        <div
            style={{
                minHeight: '100vh',
                background: '#0a0a0a',
                color: 'white',
                padding: '40px',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            <Stars />

            {/* Back Button */}
            <button
                onClick={() => navigate('/')}
                style={{
                    position: 'absolute',
                    top: '32px',
                    left: '32px',
                    zIndex: 50,
                    color: '#D4AF37',
                    fontFamily: 'var(--font-cinzel, Cinzel, serif)',
                    fontSize: '20px',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    textDecoration: 'none',
                }}
            >
                ← Back
            </button>

            <div
                style={{
                    maxWidth: '896px',
                    margin: '0 auto',
                    position: 'relative',
                    zIndex: 10,
                    paddingTop: '40px',
                }}
            >
                <h1
                    style={{
                        color: '#D4AF37',
                        fontFamily: 'var(--font-cinzel, Cinzel, serif)',
                        fontSize: '60px',
                        marginBottom: '16px',
                        textAlign: 'center',
                    }}
                >
                    {event.title}
                </h1>

                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '32px' }}>
                    <img
                        src={event.img}
                        alt={event.title}
                        style={{
                            width: '200px',
                            height: '200px',
                            objectFit: 'cover',
                            border: '4px solid #D4AF37',
                            borderRadius: '8px',
                            boxShadow: '0 0 20px #D4AF3750',
                        }}
                    />
                </div>

                <div
                    style={{
                        background: '#1a1a1a',
                        padding: '32px',
                        borderRadius: '8px',
                        border: '1px solid rgba(212,175,55,0.3)',
                        backdropFilter: 'blur(4px)',
                    }}
                >
                    <p
                        style={{
                            fontFamily: 'var(--font-montaga, Montaga, serif)',
                            fontSize: '24px',
                            marginBottom: '16px',
                            color: '#DDD',
                        }}
                    >
                        {event.desc}
                    </p>
                    <p
                        style={{
                            fontFamily: 'var(--font-cinzel, Cinzel, serif)',
                            fontSize: '20px',
                            color: '#D4AF37',
                        }}
                    >
                        Date: {event.date}
                    </p>
                </div>

                <div style={{ marginTop: '48px' }}>
                    <h2
                        style={{
                            color: '#D4AF37',
                            fontFamily: 'var(--font-cinzel, Cinzel, serif)',
                            fontSize: '40px',
                            marginBottom: '24px',
                            textAlign: 'center',
                        }}
                    >
                        Gallery
                    </h2>

                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
                            gap: '16px',
                        }}
                    >
                        {galleryImages.length > 0 ? (
                            galleryImages.map((img, index) => (
                                <div
                                    key={index}
                                    style={{
                                        aspectRatio: '1 / 1',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        borderRadius: '4px',
                                        border: '1px solid rgba(212,175,55,0.2)',
                                    }}
                                >
                                    <img
                                        src={img}
                                        alt={`${event.title} gallery ${index + 1}`}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            transition: 'transform 0.3s',
                                        }}
                                        onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.1)')}
                                        onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                                    />
                                </div>
                            ))
                        ) : (
                            <p
                                style={{
                                    gridColumn: '1 / -1',
                                    textAlign: 'center',
                                    color: '#6b7280',
                                    fontFamily: 'var(--font-montaga, Montaga, serif)',
                                }}
                            >
                                No images available for this event yet.
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
