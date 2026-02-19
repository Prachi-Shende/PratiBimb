export default function GallerySection() {
    return (
        <>
         <div className="absolute top-[100px] w-full top-[7300] text-center z-20">
                <p className="text-[#D4AF37] font-pinyon text-[100px] drop-shadow-md">
                    A Glimpse of Mythopia
                </p>
            </div>
            <img
                src="/These151.png"
                className="w-[2629px] h-[1666px] absolute -left-7 top-[7400px] max-w-none"
                alt="These15 2"
            />

            {/* Gallery Container 2 start */}
            <div className="w-[2005px] h-[1166px] absolute left-[258px] top-[7610px]">
                {/* Top Row */}
                <img
                    src="/bGrid1.png"
                    className="shadow-[0_4px_136.3px_0_#000] w-[600px] absolute right-357 top-[30px] max-w-none object-cover"
                    alt="Couch Talk"
                />
                <img
                    src="/bGrid2.jpeg"
                    className="shadow-[0_4px_136.3px_0_#000] w-[380px] absolute left-[600px] top-7 max-w-none object-cover"
                    alt="Singer"
                />
                <img
                    src="/bGrid3.png"
                    className="shadow-[0_4px_136.3px_0_#000] w-[670px] absolute left-[1000px] top-[30px] max-w-none object-cover"
                    alt="DJ"
                />
                <img
                    src="/bGrid4.png"
                    className="shadow-[0_4px_136.3px_0_#000] w-[480px] absolute left-[1690px] top-8 max-w-none object-cover"
                    alt="Red Stage"
                />

                {/* Bottom Row */}
                <img
                    src="/bGrid5.png"
                    className="shadow-[0_4px_136.3px_0_#000] w-[500px] absolute right-382 top-[500px] max-w-none object-cover"
                    alt="RedBull"
                />
                <img
                    src="/bGrid6.png"
                    className="shadow-[0_4px_136.3px_0_#000] w-[450px] absolute left-[500px] top-[560px] max-w-none object-cover"
                    alt="Group"
                />
                <img
                    src="/bGrid7.png"
                    className="shadow-[0_4px_136.3px_0_#000] w-[350px] absolute left-[965px] top-[690px] max-w-none object-cover"
                    alt="Dark Stage"
                />
                <img
                    src="/bGrid8.png"
                    className="shadow-[0_4px_136.3px_0_#000] w-[833px] absolute left-[1330px] top-[690px] max-w-none object-cover"
                    alt="Realme"
                />
                <img
                    src="/bGrid9.png"
                    className="shadow-[0_4px_136.3px_0_#000] w-[650px] absolute left-[1000px] top-[430px] max-w-none object-cover"
                    alt="Realme"
                />
            </div>
        </>
    );
}
