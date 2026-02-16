const Hero = () => {
    return (
        <div className="relative pt-20 bg-black overflow-hidden">


            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
                <div className="z-10">
                    <h1 className="font-bold leading-tight mb-6">

                        {/* Big Main Name */}
                        <span className="block text-6xl md:text-8xl">
                            <span className="text-red-600">E</span>xecate
                        </span>
                        <span className="block text-6xl md:text-8xl">
                            <span className="text-red-600">D</span>ance
                        </span>
                        <span className="block text-6xl md:text-8xl mb-4">
                            <span className="text-red-600">C</span>rew
                        </span>

                        {/* Smaller Catchphrases */}
                        <span className="block text-lg md:text-5xl text-white ">
                            The Beat.
                        </span>
                        <span className="block text-lg md:text-5xl text-white ">
                            The Crew.
                        </span>
                        <span className="block text-lg md:text-5xl text-white">
                            The Legacy.
                        </span>
                    </h1>



                    <p className="text-gray-400 text-lg mb-8 max-w-lg leading-relaxed">
                        Execate Dance Crew (EDC), the official dance family of VJTI, delivers electrifying performances across fests and competitions. With passion, creativity, and innovation, we bring unmatched energy to every’ stage. Our legacy reflects the rhythm of Mumbai’s youth and the pride of VJTI. Partner with us to amplify your brand and engage with thousands of enthusiastic students.
                    </p>

                    {/* <button className="bg-brand-red text-white px-8 py-3 font-bold uppercase tracking-wide hover:bg-red-600 transition-all transform hover:scale-105">
                        Get Tickets
                    </button> */}
                </div>

                <div className="relative">
                    <div className="relative z-10 aspect-[4/5] overflow-hidden rounded-lg  border border-white/10">
                        {/* Placeholder for Hero Image - Cyberpunk face */}
                        <img
                            src="/assets/2.png"
                            alt="Prati'26 Hero"
                            className="w-full h-full object-cover opacity-80 mix-blend-screen"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                    </div>

                    {/* Background decorative elements */}
                    <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-red/20 rounded-full blur-3xl rounded-full pointer-events-none"></div>
                    <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-brand-red/10 rounded-full blur-3xl pointer-events-none"></div>
                </div>
            </div>

            {/* <div className="absolute bottom-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-blue to-transparent opacity-50"></div> */}
        </div>
    );
};

export default Hero;
