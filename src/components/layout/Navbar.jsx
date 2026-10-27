import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Volume2, VolumeX, Menu, X, Gamepad2, Download } from 'lucide-react';
import { useSound } from '../../context/SoundContext';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isMuted, toggleSound, playClick, playHover } = useSound();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'HOME', path: '/' },
    { label: 'THE GAME', path: '/game' },
    { label: 'CONTROLS', path: '/controls' },
    { label: 'THE ARCADE', path: '/arcade' },
    { label: 'MEDIA', path: '/media' },
    { label: 'DOWNLOAD', path: '/download' }
  ];

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: isScrolled ? 'rgba(9, 7, 13, 0.94)' : 'rgba(9, 7, 13, 0.75)',
        backdropFilter: 'blur(12px)',
        borderBottom: `1px solid ${isScrolled ? 'rgba(123, 44, 255, 0.4)' : 'rgba(123, 44, 255, 0.15)'}`,
        transition: 'all 0.25s ease'
      }}
    >
      <div
        className="site-container"
        style={{
          height: '72px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '20px'
        }}
      >
        {/* Brand Logo */}
        <Link
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            textDecoration: 'none',
            color: '#FFFFFF'
          }}
          onMouseEnter={playHover}
          onClick={playClick}
        >
          <div
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '8px',
              background: 'linear-gradient(135deg, #7B2CFF 0%, #20E3FF 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 15px rgba(32, 227, 255, 0.5)'
            }}
          >
            <Gamepad2 size={22} color="#09070D" />
          </div>
          <div>
            <div
              style={{
                fontFamily: "var(--font-arcade)",
                fontSize: '14px',
                letterSpacing: '0.08em',
                color: '#FFFFFF',
                textShadow: '0 0 10px rgba(32, 227, 255, 0.6)'
              }}
            >
              WAR OF CUPS
            </div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: '10px',
                color: '#20E3FF',
                letterSpacing: '0.12em'
              }}
            >
              2D CO-OP SURVIVAL
            </div>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '6px'
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onMouseEnter={playHover}
              onClick={playClick}
              style={({ isActive }) => ({
                fontFamily: "var(--font-arcade)",
                fontSize: '11px',
                letterSpacing: '0.06em',
                padding: '8px 14px',
                borderRadius: '4px',
                textDecoration: 'none',
                color: isActive ? '#20E3FF' : '#A59BC2',
                backgroundColor: isActive ? 'rgba(32, 227, 255, 0.1)' : 'transparent',
                border: isActive ? '1px solid rgba(32, 227, 255, 0.4)' : '1px solid transparent',
                textShadow: isActive ? '0 0 8px rgba(32, 227, 255, 0.7)' : 'none',
                transition: 'all 0.18s ease'
              })}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Sound Toggle & Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Sound Toggle (Default OFF) */}
          <button
            onClick={toggleSound}
            onMouseEnter={playHover}
            title={isMuted ? 'Turn Sound ON' : 'Turn Sound OFF (Muted)'}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 14px',
              borderRadius: '6px',
              background: isMuted ? 'rgba(24, 14, 43, 0.6)' : 'rgba(32, 227, 255, 0.15)',
              border: `1px solid ${isMuted ? 'rgba(123, 44, 255, 0.4)' : '#20E3FF'}`,
              color: isMuted ? '#A59BC2' : '#20E3FF',
              fontFamily: "var(--font-arcade)",
              fontSize: '10px',
              letterSpacing: '0.06em',
              cursor: 'pointer',
              transition: 'all 0.18s ease',
              boxShadow: isMuted ? 'none' : '0 0 12px rgba(32, 227, 255, 0.3)'
            }}
          >
            {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
            <span>{isMuted ? 'SOUND: OFF' : 'SOUND: ON'}</span>
          </button>

          {/* Direct CTA Button (Desktop) */}
          <Link
            to="/download"
            className="desktop-cta"
            onMouseEnter={playHover}
            onClick={playClick}
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 16px',
              borderRadius: '6px',
              background: 'linear-gradient(135deg, #7B2CFF 0%, #24113D 100%)',
              border: '1px solid #FF2DA6',
              color: '#FFFFFF',
              fontFamily: "var(--font-arcade)",
              fontSize: '10px',
              letterSpacing: '0.06em',
              textDecoration: 'none',
              boxShadow: '0 0 12px rgba(255, 45, 166, 0.35)',
              transition: 'all 0.18s ease'
            }}
          >
            <Download size={14} color="#FFD23F" />
            <span>PLAY NOW</span>
          </Link>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => {
              playClick();
              setMobileMenuOpen((prev) => !prev);
            }}
            className="mobile-menu-toggle"
            aria-label="Toggle navigation menu"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'rgba(24, 14, 43, 0.8)',
              border: '1px solid rgba(123, 44, 255, 0.5)',
              borderRadius: '6px',
              padding: '8px',
              color: '#FFFFFF',
              cursor: 'pointer'
            }}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            backgroundColor: '#09070D',
            borderBottom: '2px solid #7B2CFF',
            padding: '20px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => {
                playClick();
                setMobileMenuOpen(false);
              }}
              style={({ isActive }) => ({
                fontFamily: "var(--font-arcade)",
                fontSize: '12px',
                letterSpacing: '0.06em',
                padding: '12px 16px',
                borderRadius: '6px',
                textDecoration: 'none',
                color: isActive ? '#20E3FF' : '#A59BC2',
                backgroundColor: isActive ? 'rgba(32, 227, 255, 0.1)' : 'rgba(24, 14, 43, 0.4)',
                border: `1px solid ${isActive ? '#20E3FF' : 'rgba(123, 44, 255, 0.2)'}`,
                display: 'block'
              })}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}

      {/* Responsive Inline CSS */}
      <style>{`
        @media (min-width: 900px) {
          .desktop-nav {
            display: flex !important;
          }
          .desktop-cta {
            display: inline-flex !important;
          }
          .mobile-menu-toggle {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
