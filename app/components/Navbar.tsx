'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Navbar() {
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const router = useRouter();

    const handleDropdownEnter = (menu: string) => {
        setOpenDropdown(menu);
    };

    const handleDropdownLeave = () => {
        setOpenDropdown(null);
    };

    return (
        <nav className="absolute top-0 left-0 w-full h-[150px] z-50">
            {/* Home */}
            <Link href="/home" className="text-[#FFF] font-cinzel text-[40px] absolute left-[1146px] top-[67px] hover:text-[#D4AF37] transition-colors">
                Home
            </Link>

            {/* Clubs Dropdown */}
            <div
                className="absolute left-[1464px] top-[50px] w-[165px] h-[75px]"
                onMouseEnter={() => handleDropdownEnter('clubs')}
                onMouseLeave={handleDropdownLeave}
            >
                <div className="cursor-pointer flex justify-center items-center w-full h-full">
                    <p className="text-[#FFF] font-cinzel text-[40px] hover:text-[#D4AF37] transition-colors">Clubs</p>
                </div>

                {openDropdown === 'clubs' && (
                    <div className="absolute top-[60px] left-0 w-[200px] bg-[#1a1a1a]/90 border border-[#D4AF37] rounded-md shadow-[0_0_15px_#D4AF3750] flex flex-col py-2 backdrop-blur-md">
                        <Link href="/clubs/edc" className="px-6 py-3 text-[#FFF] font-cinzel text-[24px] hover:bg-[#D4AF37]/20 hover:text-[#D4AF37] transition-colors">
                            EDC
                        </Link>
                        <Link href="/clubs/obsidian" className="px-6 py-3 text-[#FFF] font-cinzel text-[24px] hover:bg-[#D4AF37]/20 hover:text-[#D4AF37] transition-colors">
                            Obsidian
                        </Link>
                    </div>
                )}
            </div>

            {/* The Past Dropdown */}
            <div
                className="absolute left-[1803px] top-[57px] w-[235px] h-[61px]"
                onMouseEnter={() => handleDropdownEnter('past')}
                onMouseLeave={handleDropdownLeave}
            >
                <div className="cursor-pointer flex justify-center items-center w-full h-full">
                    <p className="text-[#FFF] font-cinzel text-[40px] hover:text-[#D4AF37] transition-colors">The Past</p>
                </div>

                {openDropdown === 'past' && (
                    <div className="absolute top-[60px] left-0 w-[200px] bg-[#1a1a1a]/90 border border-[#D4AF37] rounded-md shadow-[0_0_15px_#D4AF3750] flex flex-col py-2 backdrop-blur-md">
                        <Link href="/past/prati25" className="px-6 py-3 text-[#FFF] font-cinzel text-[24px] hover:bg-[#D4AF37]/20 hover:text-[#D4AF37] transition-colors">
                            Prati25'
                        </Link>
                        <Link href="/past/prati26" className="px-6 py-3 text-[#FFF] font-cinzel text-[24px] hover:bg-[#D4AF37]/20 hover:text-[#D4AF37] transition-colors">
                            Prati26'
                        </Link>
                    </div>
                )}
            </div>

            {/* Contact */}
            <Link href="/contact" className="text-[#FFF] font-cinzel text-[40px] absolute left-[2211px] top-[62px] hover:text-[#D4AF37] transition-colors">
                Contact
            </Link>
        </nav>
    );
}
