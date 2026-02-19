const Performers = () => {
    return (
        <div className="bg-black py-20 border-b border-white/10 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Text Content */}
                    <div className="order-2 lg:order-1">
                        <h2 className="text-4xl font-bold mb-6">Meet the Performers</h2>
                        <p className="text-gray-400 mb-8 max-w-md">
                            • 25+ Passionate Performers
                            • Versatility in Every Step
                            • Solo, Duet & Group – We Own Every Stage
                            • One Crew · One Beat · One VJTI

                        </p>
                        {/* <button className="bg-brand-red text-white px-6 py-2 uppercase font-bold text-sm tracking-wide hover:bg-red-600 transition-colors mb-12 block">
                            Learn More
                        </button> */}

                        <div className="w-full overflow-hidden relative group">
                            <img
                                src="/assets/performers.png"
                                alt="Performers Group"
                                className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-500"
                            />
                        </div>

                    </div>

                    {/* Big Red Card Image */}
                    <div className="order-1 lg:order-2 h-full min-h-[500px] relative bg-brand-red">
                        <img
                            src="/assets/3cutimg.png"
                            alt="Main Performer"
                            className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-80"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Performers;
