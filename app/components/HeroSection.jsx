import Navbar from './Navbar';

export default function HeroSection() {
    return (
        <>
            <Navbar />
            {/* Titles */}
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

            <div className="bg-[#FFF] w-[1333px] absolute left-[1113px] top-[118px]"></div>
        </>
    );
}
