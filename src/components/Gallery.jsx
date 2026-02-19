import { motion } from 'framer-motion';

const images = [
    '/assets/image1.png',
    '/assets/image2.png',
    '/assets/image3.png',
    '/assets/image4.png',
    '/assets/image5.png',
    '/assets/image6.png'
];

const Gallery = () => {
    return (
        <section className="bg-black py-20 relative px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-bold text-white mb-12 tracking-tight text-center"
                >
                    Gallery
                </motion.h2>

                <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                    {images.map((src, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative group overflow-hidden rounded-2xl break-inside-avoid"
                        >
                            <img
                                src={src}
                                alt={`Gallery Access ${index + 1}`}
                                className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out transform group-hover:scale-110"
                            />
                            {/* Subtle Red Overlay on Hover */}
                            <div className="absolute inset-0 bg-brand-red/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
