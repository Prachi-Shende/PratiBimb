import Reveal from './reveal';

const HOUSES = [
  { name:'Computer',   symbol:'Ψ',  color:'#4FC3F7', rank:2, title:'The Seers'    },
  { name:'Electrical', symbol:'⚡', color:'#D4AF37', rank:1, title:'The Thunder', champion:true },
  { name:'Production', symbol:'Ω',  color:'#CE93D8', rank:3, title:'The Weavers'  },
];

export default function WinnersSection() {
  return (
    <section style={{ padding:'160px 160px', position:'relative', zIndex:1, textAlign:'center', overflow:'hidden' }}>

      {/* Background atmospheric glow */}
      <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(120,80,10,0.12) 0%, transparent 70%)', pointerEvents:'none' }} />

      {/* Ancient hall columns - decorative SVG */}
      <svg style={{ position:'absolute', inset:0, width:'100%', height:'100%', opacity:0.04, pointerEvents:'none' }}>
        {[200, 800, 1400, 2000, 2400].map((x, i) => (
          <g key={i}>
            <rect x={x} y="0" width="18" height="100%" fill="#D4AF37"/>
            <ellipse cx={x+9} cy="80" rx="40" ry="20" fill="#D4AF37"/>
            <ellipse cx={x+9} cy="100" rx="50" ry="15" fill="#D4AF37"/>
          </g>
        ))}
      </svg>

      <Reveal>
        <div style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:'30px', marginBottom:'40px' }}>
          <div style={{ height:'1px', width:'400px', background:'linear-gradient(to right, transparent, rgba(212,175,55,0.4))' }} />
          <span style={{ fontFamily:"'Cinzel', serif", fontSize:'30px', color:'rgba(212,175,55,0.5)', letterSpacing:'12px' }}>✦ ILLUMINATI HOUSE CUP ✦</span>
          <div style={{ height:'1px', width:'400px', background:'linear-gradient(to left, transparent, rgba(212,175,55,0.4))' }} />
        </div>
        <h2 style={{ fontFamily:"'Cinzel Decorative', serif", fontSize:'80px', color:'transparent', background:'linear-gradient(135deg, #B8860B, #D4AF37, #FFF8DC, #D4AF37, #B8860B)', WebkitBackgroundClip:'text', backgroundClip:'text', letterSpacing:'8px', marginBottom:'20px', filter:'drop-shadow(0 0 40px rgba(212,175,55,0.3))' }}>
          CHAMPIONS OF MYTHOPIA
        </h2>
        <p style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:'34px', color:'rgba(255,240,200,0.4)', fontStyle:'italic', letterSpacing:'4px', marginBottom:'140px' }}>
          Their names shall be etched upon the pillars of eternity
        </p>
      </Reveal>

      <div style={{ display:'flex', justifyContent:'center', alignItems:'flex-end', gap:'60px', flexWrap:'wrap', maxWidth:'2200px', margin:'0 auto' }}>
        {[HOUSES[0], HOUSES[1], HOUSES[2]].map((house, i) => (
          <Reveal key={house.name} delay={i * 0.15}>
            <div
              style={{
                display:'flex', flexDirection:'column', alignItems:'center', gap:'36px',
                padding: house.champion ? '130px 110px 100px' : '90px 90px',
                position:'relative', transition:'all 0.4s ease', cursor:'default',
                minWidth:'520px',
                transform: house.champion ? 'translateY(-60px)' : 'none',
                // Parchment-like card background
                background: house.champion
                  ? 'linear-gradient(160deg, rgba(80,40,5,0.35) 0%, rgba(50,20,5,0.4) 100%)'
                  : 'linear-gradient(160deg, rgba(30,15,5,0.25) 0%, rgba(20,10,5,0.3) 100%)',
                border: `1px solid ${house.champion ? 'rgba(212,175,55,0.5)' : 'rgba(212,175,55,0.18)'}`,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = house.champion ? 'translateY(-75px)' : 'translateY(-18px)';
                e.currentTarget.style.boxShadow = `0 40px 100px ${house.color}25`;
                e.currentTarget.style.borderColor = `${house.color}80`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = house.champion ? 'translateY(-60px)' : 'none';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = house.champion ? 'rgba(212,175,55,0.5)' : 'rgba(212,175,55,0.18)';
              }}
            >
              {/* Champion laurel banner */}
              {house.champion && (
                <div style={{ position:'absolute', top:'-36px', left:'50%', transform:'translateX(-50%)', fontFamily:"'Cinzel', serif", fontSize:'24px', padding:'10px 50px', background:'linear-gradient(135deg, #8B6500, #D4AF37, #8B6500)', color:'#0D0A1E', letterSpacing:'8px', whiteSpace:'nowrap', clipPath:'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)' }}>
                  ✦ GRAND CHAMPION ✦
                </div>
              )}

              {/* Rank in roman numerals */}
              <div style={{ fontFamily:"'Cinzel', serif", fontSize:'26px', letterSpacing:'6px', color:`${house.color}80` }}>
                {['II','I','III'][i]}
              </div>

              {/* Symbol in hexagon frame */}
              <div style={{ position:'relative', width: house.champion?'200px':'160px', height: house.champion?'200px':'160px', display:'flex', alignItems:'center', justifyContent:'center' }}>
                <svg width="100%" height="100%" viewBox="0 0 200 200" style={{ position:'absolute', inset:0 }}>
                  <polygon points="100,8 188,54 188,146 100,192 12,146 12,54" fill={`${house.color}08`} stroke={`${house.color}50`} strokeWidth="2"/>
                  <polygon points="100,22 176,62 176,138 100,178 24,138 24,62" fill="none" stroke={`${house.color}20`} strokeWidth="1"/>
                </svg>
                <span style={{ fontFamily:"'Cinzel', serif", fontSize: house.champion?'90px':'72px', color:house.color, textShadow:`0 0 40px ${house.color}80`, lineHeight:1, position:'relative', zIndex:1, animation:`orbPulse ${3+i}s ease-in-out infinite` }}>
                  {house.symbol}
                </span>
              </div>

              <div style={{ width:'100px', height:'2px', background:`linear-gradient(to right, transparent, ${house.color}, transparent)` }} />

              <div>
                <div style={{ fontFamily:"'Cinzel', serif", fontSize:'40px', letterSpacing:'8px', color:house.color, textTransform:'uppercase', marginBottom:'10px' }}>{house.name}</div>
                <div style={{ fontFamily:"'Cormorant Garamond', serif", fontSize:'28px', color:`${house.color}70`, fontStyle:'italic', letterSpacing:'4px' }}>{house.title}</div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}