import { useEffect, useRef, useState } from 'react';
import { MapPin, Users, Calendar, Award, Music, Palette, BookOpen, Zap, ChevronRight, Globe, Theater } from 'lucide-react';

/* ─── Data ─────────────────────────────────────────────────── */
const stats = [
  { value: '10+', label: 'Years of Legacy', icon: Award },
  { value: '20+', label: 'Events', icon: Calendar },
  { value: '3000+', label: 'Participants', icon: Users },
  { value: '3', label: 'Days of Mayhem', icon: Zap },
];

const domains = [
  {
    icon: Music,
    title: 'Music Club',
    desc: 'From classical melodies to high-energy band performances, the Music Club of Pratibimb creates unforgettable sonic experiences. Solo vocals, instrumental battles, and Battle of Bands that electrify the stage.',
    accent: 'border-red-600',
  },
  {
    icon: Music,
    title: 'Dance Club',
    desc: 'Where rhythm meets expression. From hip-hop and contemporary to classical and fusion, the Dance Club transforms movement into powerful storytelling on the Pratibimb stage.',
    accent: 'border-white',
  },
  {
    icon: Theater,
    title: 'Drama Club',
    desc: 'Lights, dialogue, impact. The Drama Club brings stories to life through street plays, mono-acts, mime, and full theatrical productions that reflect society and spark conversations.',
    accent: 'border-red-600',
  },
  {
    icon: Zap,
    title: 'Culturals & Pro-Shows',
    desc: 'Three nights, three professional shows. The biggest names in Indian entertainment converge for evenings that blur the line between audience and performer.',
    accent: 'border-white',
  },
];

const timeline = [
  { year: "2015", title: "The Beginning", desc: "Pratibimb was born as VJTI's inter-college cultural fest, drawing 500+ students." },
  { year: "2018", title: "Going National", desc: "Scaled to a national fest, welcoming 150+ colleges across India." },
  { year: "2021", title: "Digital Rebellion", desc: "First ever hybrid edition during COVID — 10,000+ online viewers." },
  { year: "2024", title: "Prati'24", desc: "Record-breaking edition with 6,000 participants and 3 electrifying pro-shows." },
  { year: "2025", title: "Prati'25", desc: "The Metamorphosis edition — exploring transformation in all its forms." },
  { year: "2026", title: "Pop & Paradox", desc: "The mirror that shows you what you didn't know you were looking for." },
];

/* ─── Animated Counter ──────────────────────────────────────── */
const AnimatedStat = ({ value, label, icon: Icon }) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`border border-white/10 hover:border-red-600/50 p-6 transition-all duration-500 group relative overflow-hidden
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
    >
      {/* Corner accent */}
      <div className="absolute top-0 left-0 w-6 h-[2px] bg-red-600" />
      <div className="absolute top-0 left-0 w-[2px] h-6 bg-red-600" />

      <Icon size={22} className="text-red-600 mb-4" />
      <div className="text-4xl font-black text-white mb-1 tracking-tighter">{value}</div>
      <div className="text-gray-500 text-xs font-bold tracking-[0.2em] uppercase">{label}</div>

      {/* Hover fill */}
      <div className="absolute inset-0 bg-red-950/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
    </div>
  );
};

/* ─── Section Header ────────────────────────────────────────── */
const SectionHeader = ({ eyebrow, title, titleAccent }) => (
  <div className="mb-16">
    <p className="text-red-600 text-xs font-black tracking-[0.4em] uppercase mb-4 flex items-center gap-3">
      <span className="w-8 h-[2px] bg-red-600" />
      {eyebrow}
    </p>
    <h2 className="text-5xl lg:text-6xl font-black leading-none tracking-tighter text-white">
      {title}{' '}
      <span className="text-red-600">{titleAccent}</span>
    </h2>
  </div>
);

/* ─── Map Component ─────────────────────────────────────────── */
const VJTIMap = () => (
  <div className="w-full h-96 relative border border-red-900/30 overflow-hidden">
    {/* Top accent */}
    <div className="absolute top-0 left-0 right-0 h-[2px] bg-red-600 z-10" />

    {/* Google Maps embed for VJTI */}
    <iframe
      title="VJTI Location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.5!2d72.8641!3d19.0204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf26f4f1b1a5%3A0xd39adb6c5793553!2sVeermata%20Jijabai%20Technological%20Institute!5e0!3m2!1sen!2sin!4v1708000000000!5m2!1sen!2sin"
      className="w-full h-full"
      style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) saturate(0.8)' }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />

    {/* Overlay label */}
    <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <MapPin size={16} className="text-red-600" />
        <div>
          <p className="text-white text-sm font-bold tracking-wide">VJTI, Matunga</p>
          <p className="text-gray-400 text-xs">H.R. Mahajani Road, Mumbai — 400019</p>
        </div>
      </div>
      <a
        href="https://maps.google.com/?q=Veermata+Jijabai+Technological+Institute+Mumbai"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-red-500 hover:text-red-400 text-xs font-bold tracking-widest uppercase transition-colors"
      >
        <Globe size={13} /> Get Directions
      </a>
    </div>
  </div>
);

/* ─── Main Component ────────────────────────────────────────── */
const AboutUs = () => {
  return (
    <div className="bg-black text-white min-h-screen">

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="relative min-h-[60vh] flex items-end pb-0 pt-32 overflow-hidden">

        {/* Background pattern */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)`,
            backgroundSize: '20px 20px',
          }}
        />

        {/* Large BG text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[180px] lg:text-[260px] font-black text-white/[0.03] leading-none select-none pointer-events-none tracking-tighter whitespace-nowrap">
          ABOUT
        </div>

        {/* Red diagonal accent */}
        <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-red-600 via-red-600/50 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <p className="text-red-600 text-xs font-black tracking-[0.5em] uppercase mb-6 flex items-center gap-3">
            <span className="w-8 h-[2px] bg-red-600" />
            About Us
          </p>

          <h1 className="text-6xl lg:text-9xl font-black leading-none tracking-tighter mb-8">
            <span className="text-white">THE</span>{' '}
            <span className="text-red-600">SPIRIT</span>{' '}
            <span className="text-white block">OF VJTI</span>
          </h1>

          <div className="flex flex-wrap items-center gap-6 pb-16">
            <p className="text-gray-400 text-sm font-bold tracking-[0.3em] uppercase">
              National Cultural Festival
            </p>
            <span className="w-1 h-1 rounded-full bg-red-600" />
            <p className="text-gray-400 text-sm font-bold tracking-[0.3em] uppercase">
              Est. 2015
            </p>
            <span className="w-1 h-1 rounded-full bg-red-600" />
            <p className="text-gray-400 text-sm font-bold tracking-[0.3em] uppercase">
              Mumbai, India
            </p>
          </div>
        </div>
      </section>

      {/* ── INTRO ─────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left: Description */}
          <div>
            <p className="text-xl text-gray-300 leading-relaxed mb-6 font-light">
              <span className="text-white font-black">Pratibimb</span> is VJTI's national cultural festival — a reflection of raw energy, unbridled enthusiasm, and unbreakable camaraderie. Every year, it transforms Mumbai's Matunga into the cultural capital of India.
            </p>
            <p className="text-gray-500 leading-relaxed mb-6">
              It provides a platform for college students across the nation to showcase their talent through thrilling contests and immersive workshops in art, music, dance, and literary arts. Organized by VJTI's most innovative minds, Pratibimb builds confidence, sharpens managerial skills, and celebrates versatility over three unforgettable, fun-filled days.
            </p>
            <p className="text-gray-500 leading-relaxed mb-10">
              The name itself says it all — <em className="text-red-400 not-italic font-medium">Pratibimb</em> (प्रतिबिंब) means reflection. We are the mirror that amplifies ambition, creativity, and the relentless pursuit of excellence that defines VJTI's student community.
            </p>

            <a
              href="#domains"
              className="inline-flex items-center gap-3 border border-red-600 text-red-500 hover:bg-red-600 hover:text-white px-6 py-3 text-xs font-black tracking-widest uppercase transition-all duration-300 group"
            >
              Explore Events
              <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Right: Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <AnimatedStat key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* ── THEME SECTION ─────────────────────────────────────── */}
      <section className="relative overflow-hidden py-24 border-t border-b border-white/5">
        {/* BG */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-950/20 via-black to-black" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <div>
              <p className="text-red-600 text-xs font-black tracking-[0.4em] uppercase mb-4 flex items-center gap-3">
                <span className="w-8 h-[2px] bg-red-600" />
                Prati'26 Theme
              </p>
              <h2 className="text-6xl lg:text-7xl font-black leading-none tracking-tighter mb-8">
                <span className="text-white">POP</span>{' '}<span className="text-gray-600">&</span>
                <br />
                <span className="text-red-600">PARADOX</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Pop culture is the language of our generation — loud, colourful, immediate. Paradox is its shadow — the contradiction buried inside every trend, every icon, every viral moment. Together, they form the lens through which Pratibimb 2026 will examine the world.
              </p>
              <p className="text-gray-500 leading-relaxed">
                "Where reflections meet rebellion." We are the mirror that shows you what you didn't know you were looking for. This year, we question everything — beauty standards, digital identity, tradition vs disruption, and the strange poetry of modern life.
              </p>
            </div>

            {/* Theme visual */}
            <div className="relative">
              <div className="absolute -inset-4 border border-red-900/20" />
              <div className="relative bg-black border border-white/10 p-8 space-y-6">
                {/* Paradox blocks */}
                {[
                  { a: 'LOUD', b: 'SILENT', c: 'The voice that screams the loudest says nothing at all.' },
                  { a: 'REAL', b: 'FAKE', c: 'In the age of filters, authenticity becomes the greatest rebellion.' },
                  { a: 'MASS', b: 'UNIQUE', c: 'We all follow trends to feel like individuals.' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <span className="text-white font-black text-xl tracking-tight w-20">{item.a}</span>
                    <span className="text-red-600 font-black text-sm">×</span>
                    <span className="text-gray-600 font-black text-xl tracking-tight w-20">{item.b}</span>
                    <p className="text-gray-500 text-xs leading-relaxed flex-1 hidden lg:block">{item.c}</p>
                  </div>
                ))}

                <div className="pt-4 border-t border-white/5">
                  <p className="text-gray-600 text-xs italic">"The mirror that shows you what you didn't know you were looking for."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DOMAINS ───────────────────────────────────────────── */}
      <section id="domains" className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <SectionHeader eyebrow="What We Do" title="Four Pillars of" titleAccent="Pratibimb" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {domains.map((d, i) => (
            <div
              key={i}
              className={`border-l-2 ${d.accent} border border-white/5 p-8 relative group hover:bg-white/[0.02] transition-all duration-300`}
            >
              <d.icon size={28} className="text-red-600 mb-5" />
              <h3 className="text-white font-black text-lg tracking-wide uppercase mb-3">{d.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{d.desc}</p>

              {/* Hover accent */}
              <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-[1px] bg-red-600 transition-all duration-500" />
            </div>
          ))}
        </div>
      </section>           

      {/* ── LOCATION ──────────────────────────────────────────── */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader eyebrow="Find Us" title="The Heart of" titleAccent="Mumbai" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Address Info */}
            <div className="space-y-6">
              <div className="border border-white/10 p-6 relative">
                <div className="absolute top-0 left-0 w-8 h-[2px] bg-red-600" />
                <p className="text-gray-500 text-xs tracking-widest uppercase mb-2">Address</p>
                <p className="text-white font-bold leading-relaxed">
                  Veermata Jijabai Technological Institute
                </p>
                <p className="text-gray-400 text-sm mt-1">
                  H.R. Mahajani Road, Matunga (East)<br />
                  Mumbai, Maharashtra 400019
                </p>
              </div>

              <div className="border border-white/10 p-6 relative">
                <div className="absolute top-0 left-0 w-8 h-[2px] bg-red-600" />
                <p className="text-gray-500 text-xs tracking-widest uppercase mb-2">How to Reach</p>
                <div className="space-y-2">
                  {[
                    { mode: 'Train', detail: 'Matunga Station (Central Line), Vadala (Harbour Line)' },
                    { mode: 'Metro', detail: 'Dadar(AquaLine)' },
                    { mode: 'Bus', detail: 'BEST Bus Stop: VJTI' },
                  ].map((t) => (
                    <div key={t.mode} className="flex items-start gap-3">
                      <span className="text-red-600 font-bold text-xs w-12 pt-0.5">{t.mode}</span>
                      <span className="text-gray-400 text-sm">{t.detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="https://maps.google.com/?q=Veermata+Jijabai+Technological+Institute+Mumbai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full border border-red-600 bg-red-600/10 hover:bg-red-600 text-red-400 hover:text-white py-4 text-xs font-black tracking-widest uppercase transition-all duration-300 group"
              >
                <MapPin size={14} />
                Open in Google Maps
                <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Map */}
            <div className="lg:col-span-2">
              <VJTIMap />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="relative py-24 overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-gradient-to-r from-red-950/30 via-black to-black" />
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)`,
            backgroundSize: '20px 20px',
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-red-600 text-xs font-black tracking-[0.5em] uppercase mb-6">
            Pratibimb '26
          </p>
          <h2 className="text-5xl lg:text-7xl font-black tracking-tighter mb-6 leading-none">
            <span className="text-white">READY TO</span>
            <br />
            <span className="text-red-600">REFLECT?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Three days. Five stages. Fifty events. Thousands of rebels. One mirror.
          </p>
          <a
            href="/events"
            className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white px-10 py-4 text-xs font-black tracking-widest uppercase transition-all duration-300 group"
          >
            Explore Events
            <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;