import PlaceholderImage from './PlaceholderImage';

export default function HeroSection() {
    return (
        <>
            {/* Navigation & Titles */}
            <p className="text-[#D4AF37] font-cinzel text-[100px] w-[709px] h-[146px] absolute left-[199px] top-[19px]">
                Pratibimb 25’{" "}
            </p>
            <p className="text-[#FFF] font-pinyon text-[75px] w-[857px] h-[183px] absolute left-[852px] top-[764px]">
                The Competitions and Events
            </p>
            <img
                src="/Imageremovebgpreview1.png"
                className="w-[147px] h-[123px] absolute left-[15px] top-7 max-w-none"
                alt="image-removebg-preview 1"
            />
            <button className="cursor-pointer text-nowrap flex py-[15px] px-[30px] justify-center items-center w-[165px] h-[75px] absolute left-[1464px] top-[50px]">
                <p className="text-[#FFF] font-cinzel text-[40px] w-fit">Clubs</p>
            </button>
            <p className="text-[#FFF] font-cinzel text-[40px] w-[235px] h-[66px] absolute left-[2211px] top-[62px]">
                Contact
            </p>
            <p className="text-[#FFF] font-cinzel text-[40px] w-[151px] h-[66px] absolute left-[1146px] top-[67px]">
                Home
            </p>
            <button className="cursor-pointer text-nowrap flex justify-center items-center w-[235px] h-[61px] absolute left-[1803px] top-[57px]">
                <p className="shrink-0 text-[#FFF] font-cinzel text-[40px] w-[235px] h-[61px]">
                    The Past
                </p>
            </button>
            <div className="bg-[#FFF] w-[1333px] absolute left-[1113px] top-[118px]"></div>
        </>
    );
}
