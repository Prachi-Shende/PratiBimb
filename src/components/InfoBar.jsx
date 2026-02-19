const InfoBar = () => {
    return (
        <div className="relative bg-black w-full border-b border-white/10">


            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
                    <div className="px-4 py-4">
                        <h3 className="text-xl font-bold mb-2">Upcoming Events</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Join us for a weekend of music, art, and community as we celebrate the best of pop culture.
                        </p>
                    </div>
                    <div className="px-4 py-4">
                        <h3 className="text-xl font-bold mb-2">Event Schedule</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Explore our jam-packed lineup of performances, workshops, and activities happening all weekend long.
                        </p>
                    </div>
                    <div className="px-4 py-4">
                        <h3 className="text-xl font-bold mb-2">Buy Tickets</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Don't miss your chance to be part of this one-of-a-kind celebration. Get your tickets now before they sell out!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoBar;
