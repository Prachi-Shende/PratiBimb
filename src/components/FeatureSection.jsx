const FeatureSection = ({ title, description, ctaText, image, reverse, ctaLink = "#" }) => {
    return (
        <div className="bg-black py-20 border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className={`grid md:grid-cols-2 gap-12 items-center ${reverse ? 'direction-rtl' : ''}`}>

                    {/* Image Side */}
                    <div className={`order-2 ${reverse ? 'md:order-2' : 'md:order-1'}`}>
                        <div className="aspect-[4/3] bg-black overflow-hidden relative group flex items-center justify-center">
                            <img
                                src={image}
                                alt={title}
                                className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                            />
                            <div className="absolute inset-0 bg-brand-red/10 group-hover:bg-transparent transition-all duration-500 mix-blend-overlay"></div>
                        </div>
                    </div>



                    {/* Text Side */}
                    <div className={`order-1 ${reverse ? 'md:order-1' : 'md:order-2'}`}>
                        <h2 className="text-4xl font-bold mb-6">{title}</h2>
                        <p className="text-gray-400 mb-8 max-w-md leading-relaxed">
                            {description}
                        </p>
                        {/* <a href={ctaLink} className="inline-block bg-brand-red text-white px-8 py-3 uppercase font-bold text-sm tracking-wide hover:bg-red-600 transition-colors">
                            {ctaText}
                        </a> */}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FeatureSection;
