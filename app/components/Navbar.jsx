'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <nav style={{
      position: 'absolute',
      top: 0, left: 0,
      zIndex: 100,
      padding: '0 120px',
      height: '140px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      boxSizing: 'border-box',
      width: '2560px',
      background: 'transparent',
      borderBottom: '3px solid rgba(212,175,55,0.7)',
    }}>

      <span style={{
        fontFamily: "'Cinzel', serif",
        fontSize: '48px',
        fontWeight: '600',
        color: '#D4AF37',
        letterSpacing: '8px',
        textShadow: '0 0 40px rgba(212,175,55,0.6)',
      }}>
        PratiBimb
      </span>

      <div style={{ display: 'flex', alignItems: 'center', gap: '100px' }}>
        <NavLink href="/">Home</NavLink>
        <DropdownMenu
          label="Clubs"
          open={openDropdown === 'clubs'}
          onEnter={() => setOpenDropdown('clubs')}
          onLeave={() => setOpenDropdown(null)}
          items={[{ href: '/clubs/edc', label: 'EDC' }, { href: '/clubs/obsidian', label: 'Obsidian' }]}
        />
        <DropdownMenu
          label="The Past"
          open={openDropdown === 'past'}
          onEnter={() => setOpenDropdown('past')}
          onLeave={() => setOpenDropdown(null)}
          items={[{ href: '/past/prati25', label: "Prati25'" }, { href: '/past/prati26', label: "Prati26'" }]}
        />
        <NavLink href="/contact">Contact</NavLink>
      </div>
    </nav>
  );
}

function NavLink({ href, children }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: "'Cinzel', serif",
        fontSize: '32px',
        fontWeight: '400',
        letterSpacing: '5px',
        textTransform: 'uppercase',
        textDecoration: 'none',
        color: hovered ? '#FFD700' : 'rgba(212,175,55,0.85)',
        textShadow: hovered ? '0 0 25px rgba(212,175,55,0.8)' : 'none',
        transition: 'color 0.25s ease, text-shadow 0.25s ease',
        whiteSpace: 'nowrap',
      }}>
      {children}
    </Link>
  );
}

function DropdownMenu({ label, open, onEnter, onLeave, items }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div style={{ position: 'relative' }} onMouseEnter={onEnter} onMouseLeave={onLeave}>
      <span
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          fontFamily: "'Cinzel', serif",
          fontSize: '32px',
          fontWeight: '400',
          letterSpacing: '5px',
          textTransform: 'uppercase',
          color: open || hovered ? '#FFD700' : 'rgba(212,175,55,0.85)',
          textShadow: open || hovered ? '0 0 25px rgba(212,175,55,0.8)' : 'none',
          cursor: 'pointer',
          transition: 'color 0.25s ease',
          whiteSpace: 'nowrap',
          userSelect: 'none',
        }}>
        {label}
      </span>

      {open && (
        <div style={{
          position: 'absolute',
          top: 'calc(100% + 24px)',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'rgba(4,2,14,0.96)',
          border: '1px solid rgba(212,175,55,0.3)',
          borderTop: '2px solid rgba(212,175,55,0.6)',
          backdropFilter: 'blur(20px)',
          padding: '12px 0',
          minWidth: '260px',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 24px 60px rgba(0,0,0,0.7)',
        }}>
          {items.map(({ href, label: l }) => <DropItem key={href} href={href}>{l}</DropItem>)}
        </div>
      )}
    </div>
  );
}

function DropItem({ href, children }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: "'Cinzel', serif",
        fontSize: '26px',
        letterSpacing: '3px',
        textTransform: 'uppercase',
        textDecoration: 'none',
        padding: '18px 36px',
        color: hovered ? '#FFD700' : 'rgba(212,175,55,0.7)',
        background: hovered ? 'rgba(212,175,55,0.08)' : 'transparent',
        transition: 'all 0.2s ease',
        display: 'block',
        whiteSpace: 'nowrap',
      }}>
      {children}
    </Link>
  );
}