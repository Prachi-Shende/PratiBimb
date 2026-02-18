import Link from 'next/link';

export default function FooterSection() {
  return (
    <footer style={{ position:'relative', zIndex:1, overflow:'hidden' }}>

      {/* Top ornamental divider */}
      <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:'24px', padding:'0 160px', marginBottom:'0' }}>
        <div style={{ flex:1, height:'1px', background:'linear-gradient(to right, transparent, rgba(212,175,55,0.5))' }} />
        <span style={{ color:'rgba(212,175,55,0.6)', fontSize:'60px', lineHeight:1 }}>⚜</span>
        <div style={{ flex:1, height:'1px', background:'linear-gradient(to left, transparent, rgba(212,175,55,0.5))' }} />
      </div>

      {/* Atmospheric footer bg */}
      <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top, rgba(60,20,5,0.25) 0%, transparent 100%)', pointerEvents:'none' }} />

      <div style={{ padding:'80px 160px 100px', display:'flex', flexDirection:'column', alignItems:'center', gap:'60px', position:'relative' }}>

        {/* Logo */}
        <div style={{ textAlign:'center' }}>
          <div style={{ fontFamily:"'Cinzel Decorative', serif", fontSize:'56px', color:'#D4AF37', letterSpacing:'8px', textShadow:'0 0 40px rgba(212,175,55,0.3)', marginBottom:'16px' }}>
            PratiBimb
          </div>
          <div style={{ fontFamily:"'Cinzel', serif", fontSize:'26px', color:'rgba(212,175,55,0.35)', letterSpacing:'16px' }}>
            — MMXXV —
          </div>
        </div>

        {/* Quote */}
        <p style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:'32px', color:'rgba(255,240,200,0.3)', fontStyle:'italic', letterSpacing:'3px', textAlign:'center', maxWidth:'1400px' }}>
          &ldquo;Every legend begins with a single step into the unknown.&rdquo;
        </p>

        {/* Links row */}
        <div style={{ display:'flex', alignItems:'center', gap:'60px', flexWrap:'wrap', justifyContent:'center' }}>
          {['Home','Clubs','The Past','Contact','Media Kit'].map((item, i) => (
            <Link key={item} href="/" style={{ fontFamily:"'Cinzel', serif", fontSize:'26px', letterSpacing:'4px', color:'rgba(212,175,55,0.45)', textDecoration:'none', textTransform:'uppercase', transition:'color 0.3s' }}
              onMouseEnter={e => e.currentTarget.style.color='rgba(212,175,55,0.85)'}
              onMouseLeave={e => e.currentTarget.style.color='rgba(212,175,55,0.45)'}>
              {item}
            </Link>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{ width:'100%', height:'1px', background:'linear-gradient(to right, transparent, rgba(212,175,55,0.2), transparent)' }} />

        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', width:'100%', flexWrap:'wrap', gap:'20px' }}>
          <div style={{ fontFamily:"'Cormorant Garamond', serif", color:'rgba(212,175,55,0.25)', fontSize:'26px', letterSpacing:'2px' }}>
            ©PratiBimb 2025. All rights reserved.
          </div>
          <div style={{ display:'flex', gap:'40px' }}>
            <Link href="/terms"   style={{ fontFamily:"'Cinzel', serif", fontSize:'22px', color:'rgba(212,175,55,0.3)', textDecoration:'none', letterSpacing:'3px' }}>Terms of Service</Link>
            <Link href="/privacy" style={{ fontFamily:"'Cinzel', serif", fontSize:'22px', color:'rgba(212,175,55,0.3)', textDecoration:'none', letterSpacing:'3px' }}>Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}