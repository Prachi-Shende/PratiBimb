import PlaceholderImage from './PlaceholderImage';

export default function GallerySection() {
    return (
        <>
            <img
                src="/These151.png"
                className="w-[2629px] h-[1666px] absolute -left-[38px] top-[7400px] max-w-none"
                alt="These15 1"
            />

            <p className="text-[#FFF] font-pinyon text-[75px] w-[639px] h-[98px] absolute left-[961px] top-[7302px]">
                A glimpse of Mythopia
            </p>

            {/* Gallery Container start */}
            <div className="w-[2005px] h-[1166px] absolute left-[258px] top-[7610px]">
                <img
                    src="/aGrid1.png"
                    className=" w-[548px] h-[731px] absolute left-[945px] top-[435px] max-w-none drop-shadow-xl"
                    alt="aGrid1"
                />
                <img
                    src="/aGrid2.png"
                    className="w-[486px] h-[486px] absolute left-[1519px] top-0 max-w-none drop-shadow-xl"
                    alt="aGrid2"
                />
                <img
                    src="/aGrid3.png"
                    className="shadow-[0_4px_136.3px_0_#000] w-[431px] h-[575px] absolute left-[493px] top-[588px] max-w-none"
                    alt="aGrid3"
                />
                <img
                    src="/aGrid4.jpeg"
                    className="shadow-[0_4px_93.9px_0_#000] w-[456px] h-[608px] absolute left-[9px] top-[547px] max-w-none"
                    alt="aGrid4"
                />
                <img
                    src="/aGrid5.png"
                    className="shadow-[0_0_101.2px_0_#000] w-[489px] h-[652px] absolute left-[1514px] top-[511px] max-w-none"
                    alt="aGrid5"
                />
                <img
                    src="/aGrid6.jpeg"
                    className="shadow-[0_4px_153.3px_0_#000] w-[417px] h-[556px] absolute left-[497px] top-1 max-w-none"
                    alt="aGrid6"
                />
                <img
                    src="/aGrid7.JPG"
                    className="shadow-[0_4px_115.4px_0_#000] w-[547px] absolute left-[945px] top-1 max-w-none"
                    alt="aGrid7"
                />
                <img
                    src="/aGrid8.jpeg"
                    className="shadow-[0_4px_82.2px_0_#000] w-[462px] h-[511px] absolute left-0 top-1 max-w-none"
                    alt="aGrid8"
                />
            </div>

            <img
                src="/These151.png"
                className="w-[2629px] h-[1666px] absolute -left-7 top-[9040px] max-w-none"
                alt="These15 2"
            />

            {/* Gallery Container 2 start */}
            <div className="w-[2005px] h-[1166px] absolute left-[258px] top-[9250px]">
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
