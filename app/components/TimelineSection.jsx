import Link from 'next/link';
import { events } from '../data/events';


export default function TimelineSection() {
    return (
        <div className="absolute top-[1100px] w-full" style={{ height: `${events.length * 400}px` }}> {/* Estimate height */}
            <img src="Head.png" className="absolute w-[700px] opacity-50 right-[2000px]" />
            <img src="bust.png" className="absolute w-[700px] left-[2050px] top-[2000px] opacity-50" />
            <img src="betterwoman.png" className="scale-x-[-1] transform absolute w-[700px] right-[2050px] top-[3100px] opacity-50" />
            <img src="standMan.png" className="absolute w-[900px] left-[1800px] top-[5000px] opacity-40" />
            {/* <img src="GoldenRibbon.png" className="scale-x-[-1] transform absolute w-[500px] right-[3px] top-[2800px] opacity-40" />
            <img src="GoldenStroke.png" className="scale-x-[-1] transform absolute w-[500px] left-[3px] top-[2800px] " /> */}
            {/* Center Line */}
            <div className="absolute left-1/2 -translate-x-1/2 w-[5px] h-full bg-[#D4AF37]"></div>

            {events.map((event, index) => (
                <div key={index} className="relative w-full h-[400px]">
                    {/* Dot on line */}
                    <div className={`absolute left-1/2 -translate-x-1/2 top-10 w-8 h-8 rounded-full bg-[#FFF] border-4 border-[#D4AF37] z-10 box-content`}></div>

                    {/* Date Label */}
                    <div className={`absolute top-10 text-[#FFF] font-cinzel text-[24px] ${event.side === 'left' ? 'left-[calc(50%+40px)]' : 'right-[calc(50%+40px)] text-right'}`}>
                        {event.date}
                    </div>

                    {/* Content */}
                    {event.side === 'left' ? (
                        <>
                            {/* Image Left */}
                            <div className="absolute right-[52%] top-0 hover:scale-105 transition-transform duration-300">
                                <Link href={`/event/${event.id}`}>
                                    <img src={event.img} className="w-[300px] h-[300px] object-cover border-2 border-[#D4AF37] cursor-pointer" alt={event.title} />
                                </Link>
                            </div>
                            {/* Text Left */}
                            <div className="absolute right-[calc(52%+320px)] top-0 w-[400px] text-right">
                                <p className="text-[#FFF] font-cinzel text-[50px] mb-2">{event.title}</p>
                                <p className="text-[#CCC] font-montaga text-[30px]">{event.desc}</p>
                            </div>
                        </>
                    ) : (
                        <>
                            {/* Image Right */}
                            <div className="absolute left-[52%] top-0 hover:scale-105 transition-transform duration-300">
                                <Link href={`/event/${event.id}`}>
                                    <img src={event.img} className="w-[300px] h-[300px] object-cover border-2 border-[#D4AF37] cursor-pointer" alt={event.title} />
                                </Link>
                            </div>
                            {/* Text Right */}
                            <div className="absolute left-[calc(52%+320px)] top-0 w-[400px] text-left">
                                <p className="text-[#FFF] font-cinzel text-[50px] mb-2">{event.title}</p>
                                <p className="text-[#CCC] font-montaga text-[30px]">{event.desc}</p>
                            </div>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
}
