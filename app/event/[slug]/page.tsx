import Link from 'next/link';
import { events } from '../../data/events';
import Stars from '../../components/Stars';

export function generateStaticParams() {
    return events.map((event) => ({
        slug: event.id,
    }));
}

export default async function EventPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const event = events.find((e) => e.id === slug);

    if (!event) {
        return <div className="text-white text-center mt-20">Event not found</div>;
    }

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white p-10 relative overflow-hidden">
            <Stars />

            {/* Back Button */}
            <Link href="/" className="absolute top-8 left-8 z-50 text-[#D4AF37] font-cinzel text-xl hover:underline flex items-center gap-2">
                ← Back
            </Link>

            <div className="max-w-4xl mx-auto relative z-10 pt-10">
                <h1 className="text-[#D4AF37] font-cinzel text-6xl mb-4 text-center">{event.title}</h1>
                <div className="flex justify-center mb-8">
                    <img src={event.img} alt={event.title} className="w-[200px] h-[200px] object-cover border-4 border-[#D4AF37] rounded-lg shadow-[0_0_20px_#D4AF3750]" />
                </div>
                <div className="bg-[#1a1a1a] p-8 rounded-lg border border-[#D4AF37]/30 backdrop-blur-sm">
                    <p className="font-montaga text-2xl mb-4 text-[#DDD]">{event.desc}</p>
                    <p className="font-cinzel text-xl text-[#D4AF37]">Date: {event.date}</p>
                </div>

                <div className="mt-12">
                    <h2 className="text-[#D4AF37] font-cinzel text-4xl mb-6 text-center">Gallery</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {event.gallery && event.gallery.length > 0 ? (
                            event.gallery.map((img, index) => (
                                <div key={index} className="aspect-square relative group overflow-hidden rounded border border-[#D4AF37]/20">
                                    <img src={img} alt={`${event.title} gallery ${index + 1}`} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                                </div>
                            ))
                        ) : (
                            <p className="col-span-full text-center text-gray-500 font-montaga">No images available for this event yet.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
