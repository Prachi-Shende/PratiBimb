

export default function MythopiaSection() {
    return (
        <div className="absolute top-[200px] left-0 w-full h-[500px] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/MythopiaBG.jpg"
                    className="w-full h-full object-cover opacity-80"
                    alt="Mythopia Background"
                />

                {/* Overlay Gradient/Tint to match the brown/gold look */}
                <div className="absolute inset-0 bg-[#3E1C00] mix-blend-multiply opacity-60"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-80"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 text-center flex flex-col items-center">
                <p className="text-[#F5E6C8] font-cinzel text-[100px] tracking-widest drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
                    MYTHOPIA
                </p>
                <p className="text-[#D4AF37] font-cinzel text-[30px] tracking-[0.2em] mt-2 border-t border-b border-[#D4AF37] py-2 px-10">
                    CHRONICLES OF THE IMMORTAL
                </p>
            </div>

            {/* Gold Borders/Decorations */}
            <div className="absolute top-0 left-0 w-full h-[5px] bg-[#D4AF37]"></div>
            <div className="absolute bottom-0 left-0 w-full h-[5px] bg-[#D4AF37]"></div>

        </div>
    );
}
