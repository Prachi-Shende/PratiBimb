import { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

// ... PratibimbLogo component stays the same ...
const PratibimbLogo = ({ isPrati25 }) => (
  <Link to="/" className="flex items-center gap-3 group">
    <img
      src={isPrati25 ? '/logo25.png' : '/logo.png'}
      alt="Pratibimb"
      className="h-9 w-auto object-contain"
    />
    <div className="relative">
      <span className="font-black text-2xl tracking-tighter leading-none" style={{ color: isPrati25 ? '#D4AF37' : '#ffffff' }}>PRATI</span>
      <span className="font-black text-2xl tracking-tighter leading-none" style={{ color: isPrati25 ? '#c9a227' : '#dc2626' }}>BIMB</span>
      <div className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-[2px] transition-all duration-300" style={{ backgroundColor: isPrati25 ? '#D4AF37' : '#dc2626' }} />
    </div>
    <div className="text-white text-[10px] font-black px-1.5 py-0.5 tracking-widest" style={{ backgroundColor: isPrati25 ? '#D4AF37' : '#dc2626', color: isPrati25 ? '#000' : '#fff' }}>
      {isPrati25 ? "'25" : "'26"}
    </div>
  </Link>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [clubsOpen, setClubsOpen] = useState(false);
  const [pastOpen, setPastOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const clubsRef = useRef(null);
  const pastRef = useRef(null);

  const isPrati25 = location.pathname.startsWith('/past/prati25');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // FIXED: Added check for mobile menu state to prevent conflict
  useEffect(() => {
    const handleClick = (e) => {
      // If mobile menu is open, don't run the desktop "click outside" logic
      if (isOpen) return; 

      if (clubsRef.current && !clubsRef.current.contains(e.target)) setClubsOpen(false);
      if (pastRef.current && !pastRef.current.contains(e.target)) setPastOpen(false);
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [isOpen]); // Re-run effect when isOpen changes

  const isActive = (path) => location.pathname === path;
  const activeColor = isPrati25 ? 'text-yellow-500' : 'text-red-500';
  const borderAccentColor = isPrati25 ? 'border-yellow-800/40' : 'border-red-900/30';
  const shadowColor = isPrati25 ? 'shadow-[0_4px_30px_rgba(212,175,55,0.1)]' : 'shadow-[0_4px_30px_rgba(220,0,0,0.08)]';
  const topGradient = isPrati25 ? 'from-transparent via-yellow-600 to-transparent' : 'from-transparent via-red-600 to-transparent';

  const navLinkClass = (path) =>
    `relative px-3 py-2 text-sm font-bold tracking-widest uppercase transition-colors duration-200 group ${
      isActive(path) ? activeColor : 'text-gray-300 hover:text-white'
    }`;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? `bg-black/95 backdrop-blur-md border-b ${borderAccentColor} ${shadowColor}` : 'bg-black/70 backdrop-blur-sm border-b border-white/5'}`}>
      <div className={`h-[2px] w-full bg-gradient-to-r ${topGradient}`} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-4">
          <PratibimbLogo isPrati25={isPrati25} />

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/" className={navLinkClass('/')}>Home</Link>
            
            <div className="relative" ref={clubsRef}>
              <button onClick={() => { setClubsOpen(!clubsOpen); setPastOpen(false); }} className={`flex items-center gap-1 px-3 py-2 text-sm font-bold tracking-widest uppercase transition-colors duration-200 ${clubsOpen ? activeColor : 'text-gray-300 hover:text-white'}`}>
                Clubs <ChevronDown size={14} className={`transition-transform duration-200 ${clubsOpen ? 'rotate-180' : ''}`} />
              </button>
              {clubsOpen && (
                <div className={`absolute top-full left-0 mt-2 w-48 bg-black border ${borderAccentColor}`}>
                  <Link to="/clubs/edc" onClick={() => setClubsOpen(false)} className="block px-4 py-3 text-sm font-bold tracking-widest uppercase text-gray-300 hover:text-white border-b border-white/5">EDC</Link>
                  <Link to="/clubs/obsidian" onClick={() => setClubsOpen(false)} className="block px-4 py-3 text-sm font-bold tracking-widest uppercase text-gray-300 hover:text-white">Obsidian</Link>
                </div>
              )}
            </div>

            <div className="relative" ref={pastRef}>
              <button onClick={() => { setPastOpen(!pastOpen); setClubsOpen(false); }} className={`flex items-center gap-1 px-3 py-2 text-sm font-bold tracking-widest uppercase transition-colors duration-200 ${pastOpen ? activeColor : 'text-gray-300 hover:text-white'}`}>
                The Past <ChevronDown size={14} className={`transition-transform duration-200 ${pastOpen ? 'rotate-180' : ''}`} />
              </button>
              {pastOpen && (
                <div className={`absolute top-full left-0 mt-2 w-48 bg-black border ${borderAccentColor}`}>
                  <Link to="/past/prati25" onClick={() => setPastOpen(false)} className="block px-4 py-3 text-sm font-bold tracking-widest uppercase text-gray-300 hover:text-white">Prati'25</Link>
                </div>
              )}
            </div>

            <Link to="/about" className={navLinkClass('/about')}>About Us</Link>
            <Link to="/theme" className={navLinkClass('/theme')}>Theme</Link>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-white/10 absolute w-full left-0 z-[100] h-screen overflow-y-auto">
          <div className="px-6 py-4 space-y-2">
            <Link to="/" onClick={() => setIsOpen(false)} className="block py-4 text-lg font-bold tracking-widest uppercase text-white border-b border-white/5">Home</Link>

            {/* Mobile Clubs */}
            <div className="border-b border-white/5">
              <button 
                onClick={(e) => { e.stopPropagation(); setClubsOpen(!clubsOpen); }} 
                className="flex items-center justify-between w-full py-4 text-lg font-bold tracking-widest uppercase text-gray-300"
              >
                Clubs <ChevronDown className={`transition-transform ${clubsOpen ? 'rotate-180' : ''}`} />
              </button>
              {clubsOpen && (
                <div className="pl-4 pb-4 space-y-4">
                  <Link to="/clubs/edc" onClick={() => setIsOpen(false)} className="block text-sm font-bold tracking-widest uppercase text-gray-400">EDC</Link>
                  <Link to="/clubs/obsidian" onClick={() => setIsOpen(false)} className="block text-sm font-bold tracking-widest uppercase text-gray-400">Obsidian</Link>
                </div>
              )}
            </div>

            {/* Mobile Past */}
            <div className="border-b border-white/5">
              <button 
                onClick={(e) => { e.stopPropagation(); setPastOpen(!pastOpen); }} 
                className="flex items-center justify-between w-full py-4 text-lg font-bold tracking-widest uppercase text-gray-300"
              >
                The Past <ChevronDown className={`transition-transform ${pastOpen ? 'rotate-180' : ''}`} />
              </button>
              {pastOpen && (
                <div className="pl-4 pb-4">
                  <Link to="/past/prati25" onClick={() => setIsOpen(false)} className="block text-sm font-bold tracking-widest uppercase text-gray-400">Prati'25</Link>
                </div>
              )}
            </div>

            <Link to="/about" onClick={() => setIsOpen(false)} className="block py-4 text-lg font-bold tracking-widest uppercase text-gray-300 border-b border-white/5">About Us</Link>
            <Link to="/theme" onClick={() => setIsOpen(false)} className="block py-4 text-lg font-bold tracking-widest uppercase text-gray-300">Theme</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;