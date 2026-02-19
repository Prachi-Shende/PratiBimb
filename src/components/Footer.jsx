// import { Link } from 'react-router-dom';
// import { Instagram, Youtube, Twitter, Mail, MapPin, Phone, ExternalLink, Linkedin } from 'lucide-react';

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="bg-black border-t border-red-900/30 relative overflow-hidden">
//       {/* Background texture */}
//       <div className="absolute inset-0 opacity-[0.02]"
//         style={{
//           backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(255,255,255,0.3) 40px, rgba(255,255,255,0.3) 41px),
//             repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(255,255,255,0.3) 40px, rgba(255,255,255,0.3) 41px)`
//         }}
//       />

//       {/* Top accent */}
//       <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-red-600 to-transparent" />

//       <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8 relative z-10">

//         {/* Main Footer Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

//           {/* Brand Column */}
//           <div className="lg:col-span-1">
//             <div className="mb-6">
//               <div className="mb-4">
//                 <img
//                   src="/logo.png"
//                   alt="Pratibimb Logo"
//                   className="h-16 w-auto object-contain"
//                 />
//               </div>
//               <div className="text-gray-500 text-xs font-bold tracking-[0.3em] uppercase mb-4">
//                 Pop & Paradox
//               </div>
//               <p className="text-gray-400 text-sm leading-relaxed">
//                 Where reflections meet rebellion. VJTI's national cultural festival — three days of art, music, dance, and unbridled creativity.
//               </p>
//             </div>

//             {/* Social Links */}
//             <div className="flex items-center gap-3">
//               <a
//                 href="https://www.instagram.com/pratibimbvjti?igsh=MWIxcnZmc3NwN3R2Yg=="
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-9 h-9 border border-white/10 hover:border-red-600 flex items-center justify-center text-gray-400 hover:text-red-500 transition-all duration-200 group"
//               >
//                 <Instagram size={16} />
//               </a>
//               <a
//                 href="https://www.linkedin.com/company/pratibimbvjti/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-9 h-9 border border-white/10 hover:border-red-600 flex items-center justify-center text-gray-400 hover:text-red-500 transition-all duration-200"
//               >
//                 <Linkedin size={16} />
//               </a>
//               {/* <a
//                 href="https://twitter.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="w-9 h-9 border border-white/10 hover:border-red-600 flex items-center justify-center text-gray-400 hover:text-red-500 transition-all duration-200"
//               >
//                 <Twitter size={16} />
//               </a> */}
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-white font-black text-xs tracking-[0.3em] uppercase mb-6 flex items-center gap-2">
//               <span className="w-4 h-[2px] bg-red-600 inline-block" />
//               Navigate
//             </h3>
//             <ul className="space-y-3">
//               {[
//                 { label: 'Home', to: '/' },
//                 { label: 'About Us', to: '/about' },
//                 { label: 'Events', to: '/events' },
//                 { label: 'EDC Club', to: '/clubs/edc' },
//                 { label: 'Obsidian Club', to: '/clubs/obsidian' },
//                 { label: "Prati'25", to: '/past/prati25' },
//               ].map((item) => (
//                 <li key={item.to}>
//                   <Link
//                     to={item.to}
//                     className="text-gray-400 hover:text-white text-sm font-medium tracking-wide transition-colors duration-200 flex items-center gap-2 group"
//                   >
//                     <span className="w-0 group-hover:w-3 h-[1px] bg-red-600 transition-all duration-200 inline-block" />
//                     {item.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h3 className="text-white font-black text-xs tracking-[0.3em] uppercase mb-6 flex items-center gap-2">
//               <span className="w-4 h-[2px] bg-red-600 inline-block" />
//               Contact
//             </h3>
//             <ul className="space-y-4">
//               <li className="flex items-start gap-3">
//                 <MapPin size={15} className="text-red-600 mt-0.5 flex-shrink-0" />
//                 <span className="text-gray-400 text-sm leading-relaxed">
//                   VJTI Campus, H.R. Mahajani Road,<br />
//                   Matunga, Mumbai — 400019
//                 </span>
//               </li>
//               <li className="flex items-center gap-3">
//                 <Mail size={15} className="text-red-600 flex-shrink-0" />
//                 <a href="mailto:pratibimbvjti@gmail.com" className="text-gray-400 hover:text-white text-sm transition-colors">
//                   pratibimbvjti@gmail.com
//                 </a>
//               </li>
//               <li className="flex items-center gap-3">
//                 <Phone size={15} className="text-red-600 flex-shrink-0" />
//                 <a href="tel:+9198679 11510" className="text-gray-400 hover:text-white text-sm transition-colors">
//                   Pranav
//                 </a>
//                 <Phone size={15} className="text-red-600 flex-shrink-0" />
//                 <a href="tel:+9185305 23654" className="text-gray-400 hover:text-white text-sm transition-colors">
//                   Amey
//                 </a>
//               </li>
//             </ul>
//           </div>

//           {/* Fest Details */}
//           <div>
//             <h3 className="text-white font-black text-xs tracking-[0.3em] uppercase mb-6 flex items-center gap-2">
//               <span className="w-4 h-[2px] bg-red-600 inline-block" />
//               Fest Details
//             </h3>
//             <div className="space-y-4">
//               <div className="border border-white/10 p-4 relative">
//                 <div className="absolute top-0 left-0 w-6 h-[2px] bg-red-600" />
//                 <p className="text-gray-500 text-xs tracking-widest uppercase mb-1">Edition</p>
//                 <p className="text-white font-bold text-lg">Pratibimb '26</p>
//               </div>
//               <div className="border border-white/10 p-4 relative">
//                 <div className="absolute top-0 left-0 w-6 h-[2px] bg-red-600" />
//                 <p className="text-gray-500 text-xs tracking-widest uppercase mb-1">Theme</p>
//                 <p className="text-white font-bold">Pop & Paradox</p>
//               </div>
//               <div className="border border-white/10 p-4 relative">
//                 <div className="absolute top-0 left-0 w-6 h-[2px] bg-red-600" />
//                 <p className="text-gray-500 text-xs tracking-widest uppercase mb-1">Venue</p>
//                 <p className="text-white font-bold">VJTI, Mumbai</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Divider with marquee text */}
//         <div className="relative border-t border-white/5 mb-8 overflow-hidden py-4">
//           <div className="flex animate-[marquee_20s_linear_infinite] whitespace-nowrap">
//             {Array(6).fill(null).map((_, i) => (
//               <span key={i} className="text-gray-800 text-xs font-black tracking-[0.4em] uppercase mx-8">
//                 PRATIBIMB • VJTI • POP & PARADOX • NATIONAL CULTURAL FEST •
//               </span>
//             ))}
//           </div>
//         </div>

//         {/* Bottom Bar */}
//         <div className="flex flex-col md:flex-row items-center justify-between gap-4">
//           <p className="text-gray-600 text-xs tracking-wide">
//             © {currentYear} Pratibimb, VJTI. All rights reserved.
//           </p>
//           <div className="flex items-center gap-6">
//             <a href="#" className="text-gray-600 hover:text-gray-400 text-xs tracking-wide transition-colors">Privacy Policy</a>
//             <span className="text-gray-700">|</span>
//             <a href="#" className="text-gray-600 hover:text-gray-400 text-xs tracking-wide transition-colors">Terms</a>
//             <span className="text-gray-700">|</span>
//             <a
//               href="https://vjti.ac.in"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-600 hover:text-red-500 text-xs tracking-wide transition-colors flex items-center gap-1"
//             >
//               VJTI.ac.in <ExternalLink size={10} />
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Large background text */}
//       <div className="absolute bottom-0 right-0 text-[120px] font-black text-white/[0.02] leading-none select-none pointer-events-none tracking-tighter">
//         VJTI
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import { Link, useLocation } from 'react-router-dom';
import { Instagram, Youtube, Twitter, Mail, MapPin, Phone, ExternalLink, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();

  const isPrati25 = location.pathname.startsWith('/past/prati25');

  // Theme tokens
  const accent = isPrati25 ? '#D4AF37' : '#dc2626';
  const accentClass = isPrati25 ? 'text-yellow-500' : 'text-red-600';
  const accentBg = isPrati25 ? 'bg-yellow-500' : 'bg-red-600';
  const accentBorder = isPrati25 ? 'border-yellow-900/30' : 'border-red-900/30';
  const accentHoverText = isPrati25 ? 'hover:text-yellow-500' : 'hover:text-red-500';
  const accentHoverBorder = isPrati25 ? 'hover:border-yellow-500' : 'hover:border-red-600';
  const topGradient = isPrati25
    ? 'from-transparent via-yellow-600 to-transparent'
    : 'from-transparent via-red-600 to-transparent';
  const marqueeBg = isPrati25 ? 'border-yellow-900/10' : 'border-white/5';

  return (
    <footer className={`bg-black border-t ${accentBorder} relative overflow-hidden`}>
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(255,255,255,0.3) 40px, rgba(255,255,255,0.3) 41px),
            repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(255,255,255,0.3) 40px, rgba(255,255,255,0.3) 41px)`
        }}
      />

      {/* Top accent */}
      <div className={`h-[2px] w-full bg-gradient-to-r ${topGradient}`} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8 relative z-10">

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="mb-4">
                <img
                  src={isPrati25 ? '/logo25.png' : '/logo.png'}
                  alt="Pratibimb Logo"
                  className="h-16 w-auto object-contain"
                />
              </div>

              {/* Tagline */}
              <div className={`text-xs font-bold tracking-[0.3em] uppercase mb-4 ${isPrati25 ? 'text-yellow-600' : 'text-gray-500'}`}>
                {isPrati25 ? 'Chronicles of the Immortal' : 'Pop & Paradox'}
              </div>

              {/* Description — swaps to Mythopia history on prati25 */}
              {isPrati25 ? (
                <div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-3">
                    <span className="text-yellow-500 font-bold">Mythopia</span> was Pratibimb '25's theme — a world where ancient myths breathed again. Gods walked among mortals, and every stage became a sacred altar.
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Held in December 2024 across three legendary days, Mythopia brought together 15 events, thousands of students, and countless memories etched in gold.
                  </p>
                </div>
              ) : (
                <p className="text-gray-400 text-sm leading-relaxed">
                  Where reflections meet rebellion. VJTI's national cultural festival — three days of art, music, dance, and unbridled creativity.
                </p>
              )}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/pratibimbvjti?igsh=MWIxcnZmc3NwN3R2Yg=="
                target="_blank"
                rel="noopener noreferrer"
                className={`w-9 h-9 border border-white/10 ${accentHoverBorder} flex items-center justify-center text-gray-400 ${accentHoverText} transition-all duration-200`}
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://www.linkedin.com/company/pratibimbvjti/"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-9 h-9 border border-white/10 ${accentHoverBorder} flex items-center justify-center text-gray-400 ${accentHoverText} transition-all duration-200`}
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-black text-xs tracking-[0.3em] uppercase mb-6 flex items-center gap-2">
              <span className={`w-4 h-[2px] ${accentBg} inline-block`} />
              Navigate
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'Home', to: '/' },
                { label: 'About Us', to: '/about' },
                { label: 'Events', to: '/events' },
                { label: 'EDC Club', to: '/clubs/edc' },
                { label: 'Obsidian Club', to: '/clubs/obsidian' },
                { label: "Prati'25", to: '/past/prati25' },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className={`text-gray-400 hover:text-white text-sm font-medium tracking-wide transition-colors duration-200 flex items-center gap-2 group`}
                  >
                    <span className={`w-0 group-hover:w-3 h-[1px] ${accentBg} transition-all duration-200 inline-block`} />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-black text-xs tracking-[0.3em] uppercase mb-6 flex items-center gap-2">
              <span className={`w-4 h-[2px] ${accentBg} inline-block`} />
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={15} className={`${accentClass} mt-0.5 flex-shrink-0`} />
                <span className="text-gray-400 text-sm leading-relaxed">
                  VJTI Campus, H.R. Mahajani Road,<br />
                  Matunga, Mumbai — 400019
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className={`${accentClass} flex-shrink-0`} />
                <a href="mailto:pratibimbvjti@gmail.com" className="text-gray-400 hover:text-white text-sm transition-colors">
                  pratibimbvjti@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className={`${accentClass} flex-shrink-0`} />
                <a href="tel:+9198679 11510" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Pranav
                </a>
                <Phone size={15} className={`${accentClass} flex-shrink-0`} />
                <a href="tel:+9185305 23654" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Amey
                </a>
              </li>
            </ul>
          </div>

          {/* Fest Details */}
          <div>
            <h3 className="text-white font-black text-xs tracking-[0.3em] uppercase mb-6 flex items-center gap-2">
              <span className={`w-4 h-[2px] ${accentBg} inline-block`} />
              Fest Details
            </h3>
            <div className="space-y-4">
              <div className="border border-white/10 p-4 relative">
                <div className={`absolute top-0 left-0 w-6 h-[2px] ${accentBg}`} />
                <p className="text-gray-500 text-xs tracking-widest uppercase mb-1">Edition</p>
                <p className="text-white font-bold text-lg">
                  {isPrati25 ? "Pratibimb '25" : "Pratibimb '26"}
                </p>
              </div>
              <div className="border border-white/10 p-4 relative">
                <div className={`absolute top-0 left-0 w-6 h-[2px] ${accentBg}`} />
                <p className="text-gray-500 text-xs tracking-widest uppercase mb-1">Theme</p>
                <p className="text-white font-bold">
                  {isPrati25 ? 'Mythopia' : 'Pop & Paradox'}
                </p>
              </div>
              <div className="border border-white/10 p-4 relative">
                <div className={`absolute top-0 left-0 w-6 h-[2px] ${accentBg}`} />
                <p className="text-gray-500 text-xs tracking-widest uppercase mb-1">
                  {isPrati25 ? 'Held On' : 'Venue'}
                </p>
                <p className="text-white font-bold">
                  {isPrati25 ? '14–17 Dec 2024' : 'VJTI, Mumbai'}
                </p>
              </div>
              {/* Extra stat for Mythopia */}
              {isPrati25 && (
                <div className="border border-yellow-900/30 p-4 relative">
                  <div className="absolute top-0 left-0 w-6 h-[2px] bg-yellow-500" />
                  <p className="text-gray-500 text-xs tracking-widest uppercase mb-1">Events</p>
                  <p className="text-white font-bold">15 Competitions</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Divider with marquee text */}
        <div className={`relative border-t ${marqueeBg} mb-8 overflow-hidden py-4`}>
          <div className="flex animate-[marquee_20s_linear_infinite] whitespace-nowrap">
            {Array(6).fill(null).map((_, i) => (
              <span
                key={i}
                className={`text-xs font-black tracking-[0.4em] uppercase mx-8 ${isPrati25 ? 'text-yellow-900/60' : 'text-gray-800'}`}
              >
                {isPrati25
                  ? 'PRATIBIMB • VJTI • MYTHOPIA • CHRONICLES OF THE IMMORTAL •'
                  : 'PRATIBIMB • VJTI • POP & PARADOX • NATIONAL CULTURAL FEST •'}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs tracking-wide">
            © {currentYear} Pratibimb, VJTI. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-600 hover:text-gray-400 text-xs tracking-wide transition-colors">Privacy Policy</a>
            <span className="text-gray-700">|</span>
            <a href="#" className="text-gray-600 hover:text-gray-400 text-xs tracking-wide transition-colors">Terms</a>
            <span className="text-gray-700">|</span>
            <a
              href="https://vjti.ac.in"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-gray-600 ${accentHoverText} text-xs tracking-wide transition-colors flex items-center gap-1`}
            >
              VJTI.ac.in <ExternalLink size={10} />
            </a>
          </div>
        </div>
      </div>

      {/* Large background text */}
      <div className="absolute bottom-0 right-0 text-[120px] font-black text-white/[0.02] leading-none select-none pointer-events-none tracking-tighter">
        {isPrati25 ? 'MYTHOPIA' : 'VJTI'}
      </div>
    </footer>
  );
};

export default Footer;