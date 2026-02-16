import wall from "../pictures/Wall.jpg";

export default function WinnersSection() {
    return (
        <div className="absolute top-[10600px] w-full h-[1500px]">
            {/* Background Wall */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <img src={wall.src} className="absolute w-[2000px] right-[300px] top-[270px]" alt="Wall" />
            </div>

            {/* Pillars */}
            <img src="/Pillar.png" className="absolute right-[1700px] top-[150px] w-[1200px] h-[1200px] z-10" alt="Left Pillar" />
            <img src="/Pillar.png" className="absolute left-[1700px] top-[150px] w-[1200px] h-[1200px] z-10" alt="Right Pillar" />

            {/* Title */}
            <div className="absolute top-[100px] w-full text-center z-20">
                <p className="text-[#D4AF37] font-pinyon text-[100px] drop-shadow-md">
                    Winners of Illuminati House Cup
                </p>
            </div>

            {/* Frames Container */}
            <div className="absolute top-[400px] w-full flex justify-center items-end gap-[100px] z-20">
                {/* Computer Frame (Left) */}
                <div className="flex flex-col items-center relative">
                    <div className="relative w-[500px] h-[600px]">
                        <img src="/CompReal.jpeg" className="absolute inset-[60px] w-[380px] h-[480px] object-cover z-10" alt="Computer Winners" />
                        <img src="/GoldFrame.png" className="absolute inset-0 w-full h-full z-20 pointer-events-none" alt="Frame" />
                    </div>
                    <p className="text-[#D4AF37] font-cinzel text-[50px] mt-2 font-bold tracking-wider" style={{ textShadow: '2px 2px 4px #000' }}>COMPUTER</p>
                </div>

                {/* Center Frame: Electrical */}
                <div className="flex flex-col items-center relative -mt-[50px]">
                    <div className="relative w-[600px] h-[720px]">
                        <img src="/Comp.png" className="absolute inset-[70px] w-[460px] h-[580px] object-cover z-10" alt="Electrical Winners" />
                        <img src="/GoldFrame.png" className="absolute inset-0 w-full h-full z-20 pointer-events-none" alt="Frame" />
                    </div>
                    <p className="text-[#FFD700] font-cinzel text-[60px] mt-2 font-bold tracking-wider" style={{ textShadow: '2px 2px 4px #000' }}>ELECTRICAL</p>
                </div>

                {/* Right Frame: Production */}
                <div className="flex flex-col items-center relative">
                    <div className="relative w-[500px] h-[600px]">
                        <img src="/ProdWin.jpeg" className="absolute inset-[60px] w-[380px] h-[480px] object-cover z-10" alt="Production Winners" />
                        <img src="/GoldFrame.png" className="absolute inset-0 w-full h-full z-20 pointer-events-none" alt="Frame" />
                    </div>
                    <p className="text-[#D4AF37] font-cinzel text-[50px] mt-2 font-bold tracking-wider" style={{ textShadow: '2px 2px 4px #000' }}>PRODUCTION</p>
                </div>
            </div>
        </div>
    );
}
