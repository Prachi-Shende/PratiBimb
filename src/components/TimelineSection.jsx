import { Link } from 'react-router-dom';
import { events } from './events';

export default function TimelineSection() {
    return (
        
        <div
        
            style={{
                position: 'absolute',
                top: '1100px',
                width: '100%',
                height: `${events.length * 400}px`,
            }}
        >
            
            <img src="/Head.png" style={{ position: 'absolute', width: '700px', opacity: 0.5, right: '2000px' }} alt="" />
            <img src="/bust.png" style={{ position: 'absolute', width: '700px', left: '2050px', top: '2000px', opacity: 0.5 }} alt="" />
            <img src="/betterwoman.png" style={{ position: 'absolute', width: '700px', right: '2050px', top: '3100px', opacity: 0.5, transform: 'scaleX(-1)' }} alt="" />
            <img src="/standMan.png" style={{ position: 'absolute', width: '900px', left: '1800px', top: '5000px', opacity: 0.4 }} alt="" />

            {/* Center Line */}
            <div
                style={{
                    position: 'absolute',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '5px',
                    height: '100%',
                    background: '#D4AF37',
                }}
            />

            {events.map((event, index) => (
                <div key={index} style={{ position: 'relative', width: '100%', height: '400px' }}>
                    {/* Dot on line */}
                    <div
                        style={{
                            position: 'absolute',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            top: '40px',
                            width: '32px',
                            height: '32px',
                            borderRadius: '50%',
                            background: '#FFF',
                            border: '4px solid #D4AF37',
                            zIndex: 10,
                            boxSizing: 'content-box',
                        }}
                    />

                    {/* Date Label */}
                    <div
                        style={{
                            position: 'absolute',
                            top: '40px',
                            color: '#FFF',
                            fontFamily: 'var(--font-cinzel, Cinzel, serif)',
                            fontSize: '24px',
                            ...(event.side === 'left'
                                ? { left: 'calc(50% + 40px)' }
                                : { right: 'calc(50% + 40px)', textAlign: 'right' }),
                        }}
                    >
                        {event.date}
                    </div>

                    {event.side === 'left' ? (
                        <>
                            {/* Image Left */}
                            <div
                                style={{
                                    position: 'absolute',
                                    right: '52%',
                                    top: 0,
                                    transition: 'transform 0.3s',
                                }}
                                onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                                onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                            >
                                
                                <Link to={`/event/${event.id}`}>
                                    <img
                                        src={event.img}
                                        style={{ width: '300px', height: '300px', objectFit: 'cover', border: '2px solid #D4AF37', cursor: 'pointer' }}
                                        alt={event.title}
                                    />
                                </Link>
                            </div>
                            {/* Text Left */}
                            <div
                                style={{
                                    position: 'absolute',
                                    right: 'calc(52% + 320px)',
                                    top: 0,
                                    width: '400px',
                                    textAlign: 'right',
                                }}
                            >
                                <p style={{ color: '#FFF', fontFamily: 'var(--font-cinzel, Cinzel, serif)', fontSize: '50px', marginBottom: '8px' }}>{event.title}</p>
                                <p style={{ color: '#CCC', fontFamily: 'var(--font-montaga, Montaga, serif)', fontSize: '30px' }}>{event.desc}</p>
                            </div>
                        </>
                    ) : (
                        <>
                            {/* Image Right */}
                            <div
                                style={{
                                    position: 'absolute',
                                    left: '52%',
                                    top: 0,
                                    transition: 'transform 0.3s',
                                }}
                                onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                                onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                            >
                                <Link to={`/event/${event.id}`}>
                                    <img
                                        src={event.img}
                                        style={{ width: '300px', height: '300px', objectFit: 'cover', border: '2px solid #D4AF37', cursor: 'pointer' }}
                                        alt={event.title}
                                    />
                                </Link>
                            </div>
                            {/* Text Right */}
                            <div
                                style={{
                                    position: 'absolute',
                                    left: 'calc(52% + 320px)',
                                    top: 0,
                                    width: '400px',
                                    textAlign: 'left',
                                }}
                            >
                                <p style={{ color: '#FFF', fontFamily: 'var(--font-cinzel, Cinzel, serif)', fontSize: '50px', marginBottom: '8px' }}>{event.title}</p>
                                <p style={{ color: '#CCC', fontFamily: 'var(--font-montaga, Montaga, serif)', fontSize: '30px' }}>{event.desc}</p>
                            </div>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
}
