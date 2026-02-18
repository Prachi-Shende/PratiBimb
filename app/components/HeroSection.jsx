'use client';
import { useState, useEffect } from 'react';
import Navbar from './Navbar';

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setTimeout(() => setLoaded(true), 100); }, []);

  return (
    <section style={{ height:'1200px', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', position:'relative', zIndex:1, textAlign:'center', padding:'0 200px', overflow:'hidden' }}>
      <Navbar />

      {/* Radial blood-gold atmosphere */}
      <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(120,50,10,0.18) 0%, transparent 70%)', pointerEvents:'none' }} />

      {/* Rotating ancient seal rings */}
      <div style={{ position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)', width:'1000px', height:'1000px', borderRadius:'50%', border:'1px solid rgba(212,175,55,0.12)', animation:'spinSlow 60s linear infinite', pointerEvents:'none' }} />
      <div style={{ position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)', width:'840px', height:'840px', borderRadius:'50%', border:'2px solid rgba(212,175,55,0.18)', animation:'spinSlow 35s linear infinite', pointerEvents:'none' }} />
      <div style={{ position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)', width:'680px', height:'680px', borderRadius:'50%', border:'1px solid rgba(212,175,55,0.12)', animation:'spinSlow 20s linear infinite reverse', pointerEvents:'none' }} />
      {/* Glow orb */}
      <div style={{ position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%)', width:'600px', height:'600px', borderRadius:'50%', background:'radial-gradient(circle, rgba(212,175,55,0.07) 0%, transparent 70%)', animation:'orbPulse 5s ease-in-out infinite', pointerEvents:'none' }} />

      {/* Decorative corner ornaments */}
      {[['top','left','0','0'],['top','right','0','auto'],['bottom','left','auto','0'],['bottom','right','auto','auto']].map(([v,h,t,r],i) => (
        <div key={i} style={{ position:'absolute', top: v==='top'?'60px':'auto', bottom: v==='bottom'?'60px':'auto', left: h==='left'?'100px':'auto', right: h==='right'?'100px':'auto', opacity:0.3, pointerEvents:'none' }}>
          <svg width="120" height="120" viewBox="0 0 120 120">
            <path d={h==='left' && v==='top' ? 'M10,10 L60,10 M10,10 L10,60' : h==='right' && v==='top' ? 'M110,10 L60,10 M110,10 L110,60' : h==='left' && v==='bottom' ? 'M10,110 L60,110 M10,110 L10,60' : 'M110,110 L60,110 M110,110 L110,60'} stroke="#D4AF37" strokeWidth="3" fill="none"/>
            <circle cx={h==='left'?'10':'110'} cy={v==='top'?'10':'110'} r="5" fill="#D4AF37"/>
          </svg>
        </div>
      ))}

      <div style={{ opacity: loaded ? 1 : 0, transform: loaded ? 'none' : 'translateY(60px)', transition:'all 1.2s cubic-bezier(.16,1,.3,1) 0.3s', position:'relative', zIndex:2 }}>

        {/* Ancient rune row above title */}
        <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:'30px', marginBottom:'30px' }}>
          <div style={{ height:'1px', width:'200px', background:'linear-gradient(to right, transparent, rgba(212,175,55,0.5))' }} />
          <span style={{ fontFamily:"'Cinzel', serif", fontSize:'28px', color:'rgba(212,175,55,0.55)', letterSpacing:'16px' }}>✦ MMXXV ✦</span>
          <div style={{ height:'1px', width:'200px', background:'linear-gradient(to left, transparent, rgba(212,175,55,0.5))' }} />
        </div>

        <div style={{ fontFamily:"'Cinzel', serif", fontSize:'32px', color:'rgba(212,175,55,0.6)', letterSpacing:'14px', textTransform:'uppercase', marginBottom:'24px' }}>
          Chronicles of the Immortal
        </div>

        <h1 style={{ fontFamily:"'Cinzel Decorative', serif", fontSize:'160px', color:'transparent', background:'linear-gradient(135deg, #B8860B 0%, #D4AF37 30%, #FFF8DC 55%, #D4AF37 75%, #B8860B 100%)', WebkitBackgroundClip:'text', backgroundClip:'text', letterSpacing:'16px', lineHeight:1, marginBottom:'16px', filter:'drop-shadow(0 0 80px rgba(212,175,55,0.5))' }}>
          PRATIBIMB
        </h1>

        <div style={{ fontFamily:"'Cinzel', serif", fontSize:'72px', color:'rgba(212,175,55,0.65)', letterSpacing:'20px', marginBottom:'30px' }}>
          25&apos;
        </div>

        {/* Ornamental divider */}
        <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:'24px', marginBottom:'30px' }}>
          <div style={{ height:'1px', width:'300px', background:'linear-gradient(to right, transparent, rgba(212,175,55,0.4))' }} />
          <span style={{ color:'rgba(212,175,55,0.5)', fontSize:'40px' }}>⚜</span>
          <div style={{ height:'1px', width:'300px', background:'linear-gradient(to left, transparent, rgba(212,175,55,0.4))' }} />
        </div>

        <p style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:'38px', color:'rgba(255,240,200,0.6)', letterSpacing:'4px', maxWidth:'1400px', margin:'0 auto 60px', fontStyle:'italic', lineHeight:1.7 }}>
          Where mortals rise to legend and gods walk among the living.<br/>Step forth and claim your place in eternity.
        </p>

        <div style={{ display:'flex', gap:'60px', justifyContent:'center' }}>
          {[
            { label:'Enter the Arena', primary:true },
            { label:'Read the Scrolls', primary:false },
          ].map(({ label, primary }) => (
            <button key={label} style={{
              fontFamily:"'Cinzel', serif", fontSize:'26px', letterSpacing:'5px',
              textTransform:'uppercase', padding:'28px 90px',
              background: primary ? 'linear-gradient(135deg, #B8860B, #D4AF37, #B8860B)' : 'transparent',
              color: primary ? '#0D0A1E' : '#D4AF37',
              border: primary ? 'none' : '1px solid rgba(212,175,55,0.45)',
              cursor:'pointer', transition:'all 0.35s ease',
              clipPath: 'polygon(12px 0%, 100% 0%, calc(100% - 12px) 100%, 0% 100%)',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform='translateY(-5px)'; e.currentTarget.style.boxShadow='0 20px 60px rgba(212,175,55,0.3)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform='none'; e.currentTarget.style.boxShadow='none'; }}>
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{ position:'absolute', bottom:'60px', left:'50%', transform:'translateX(-50%)', display:'flex', flexDirection:'column', alignItems:'center', gap:'12px', animation:'bounceDown 2s ease-in-out infinite' }}>
        <span style={{ fontFamily:"'Cinzel', serif", fontSize:'22px', color:'rgba(212,175,55,0.35)', letterSpacing:'6px' }}>SCROLL</span>
        <div style={{ width:'2px', height:'100px', background:'linear-gradient(to bottom, rgba(212,175,55,0.5), transparent)' }} />
      </div>
    </section>
  );
}