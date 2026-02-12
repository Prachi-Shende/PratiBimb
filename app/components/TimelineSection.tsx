import PlaceholderImage from './PlaceholderImage';

const events = [
    {
        date: "14th Dec",
        title: "DC/SR WARS",
        desc: "The Great Houses of VJTI collide; a war of pride where only one kingdom shall rise to claim the celestial throne.",
        img: "/DC_SR_Wars.jpg",
        side: "left"
    },
    {
        date: "14th Dec",
        title: "DHDR WARS",
        desc: "A battlefield of emotions where silent screams and thunderous monologues clash to etch legends into the archives of time.",
        img: "/DH_DR_Wars.jpg",
        side: "right"
    },
    {
        date: "15th Dec",
        title: "RHYTHM REIGN",
        desc: "The stage becomes a sanctuary where one soul rules supreme, turning movement into a mythic masterstroke.",
        img: "/Rhythm_Reign.jpg",
        side: "left"
    },
    {
        date: "15th Dec",
        title: "Timeless Tunes",
        desc: "Strings and wind unite to play the melodies that were heard before the dawn of time.",
        img: "/TimelessTunes.jpg",
        side: "right"
    },
    {
        date: "15th Dec",
        title: "GODS OF GROOVE",
        desc: "The ground trembles as clans of the old world dance to the rhythm of destiny, invoking the primal spirit of the groove.",
        img: "/Gods_of_grooves.jpg",
        side: "left"
    },
    {
        date: "15th Dec",
        title: "Divine Duos",
        desc: "A celestial partnership where every step is a prayer and every movement tells a tale of cosmic alignment.",
        img: "/Divine_Duos.jpg",
        side: "right"
    },
    {
        date: "15th Dec",
        title: "DJ NIGHT",
        desc: "When the sun sets, the oracle speaks through the bass, inviting all souls to lose themselves in the sonic void.",
        img: "/DJNight.jpg",
        side: "left"
    },
    {
        date: "16th Dec",
        title: "Synchrony Superstars",
        desc: "Two hearts, one beat. A duet competition echoing the eternal harmonies of the cosmos.",
        img: "/SynchronoySuperstars.jpg",
        side: "right"
    },
    {
        date: "16th Dec",
        title: "Divine Harmonies",
        desc: "A lone oracle standing before the void, channeling the celestial light through a single, pure melody that resonates across the heavens.",
        img: "/DivineHarmonies.jpg",
        side: "left"
    },
    {
        date: "16th Dec",
        title: "BALLADS OF GODS",
        desc: "The sacred scrolls come to life. A performance dedicated to the timeless tales and raw power of the deities that watched over the first dawn.",
        img: "/Ballad_of_gods.jpg",
        side: "right"
    },
    {
        date: "16th Dec",
        title: "PRATISTAAN",
        desc: "The voice of the heavens. A solitary microphone that captures the essence of stand up.",
        img: "/Pratistaan3.0.jpg",
        side: "left"
    },
    {
        date: "16th Dec",
        title: "Mumbai's Got Talent",
        desc: "The grand hunt for the chosen ones—a stage where raw power meets refined grace to define the legends of the city.",
        img: "/MGT.jpg",
        side: "right"
    },
    {
        date: "16th Dec",
        title: "VOGUE",
        desc: "Mortals draped in the grandeur of gods. A walk through the golden era where fashion becomes a divine ritual.",
        img: "/VOGUE.jpg",
        side: "left"
    },
    {
        date: "17th Dec",
        title: "MILE SUR MERA TUMHARA",
        desc: "A divine choir where individual voices weave into a single, unbreakable thread of harmony, echoing the unity of the ancient realms.",
        img: "/Mile_aur_mera_tumhara.jpg",
        side: "right"
    },
    {
        date: "17th Dec",
        title: "FINAL YEAR DANCE",
        desc: "The last ritual before the veil. A dance of legacy where the seniors leave their final, indelible mark upon the sands of time before ascending to new worlds.",
        img: "/Final_year_dance.jpg",
        side: "left"
    },
];

export default function TimelineSection() {
    return (
        <div className="absolute top-[1100px] w-full" style={{ height: `${events.length * 400}px` }}> {/* Estimate height */}
            <img src="Head.png" className="absolute w-[700px] opacity-50 right-[2000px]" />
            <img src="bust.png" className="absolute w-[700px] left-[2050px] top-[2000px] opacity-50" />
            <img src="betterwoman.png" className="scale-x-[-1] transform absolute w-[700px] right-[2050px] top-[3100px] opacity-50" />
            <img src="standMan.png" className="scale-x-[-1] transform absolute w-[700px] left-[2050px] top-[5000px] opacity-40" />
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
                            <div className="absolute right-[52%] top-0">
                                <img src={event.img} className="w-[300px] h-[300px] object-cover border-2 border-[#D4AF37]" alt={event.title} />
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
                            <div className="absolute left-[52%] top-0">
                                <img src={event.img} className="w-[300px] h-[300px] object-cover border-2 border-[#D4AF37]" alt={event.title} />
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
