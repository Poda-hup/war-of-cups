import React, { useState, useEffect } from 'react';
import { Play, Zap } from 'lucide-react';
import { useSound } from '../../context/SoundContext';

export default function BootIntro({ onComplete }) {
  const [bootStep, setBootStep] = useState(0); // 0: black/boot, 1: memory ok, 2: logo reveal, 3: insert coin ready
  const { playCoin, playClick } = useSound();

  useEffect(() => {
    // Quick, engaging boot timer sequence (completes in ~1.4s if not skipped)
    const t1 = setTimeout(() => setBootStep(1), 350);
    const t2 = setTimeout(() => setBootStep(2), 750);
    const t3 = setTimeout(() => setBootStep(3), 1150);

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' || e.key === ' ' || e.key === 'Enter') {
        handleEnter();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleEnter = () => {
    playCoin();
    sessionStorage.setItem('woc_intro_seen', 'true');
    onComplete();
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: '#09070D',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        color: '#FFFFFF',
        userSelect: 'none'
      }}
    >
      {/* Skip button always available */}
      <button
        onClick={handleEnter}
        style={{
          position: 'absolute',
          top: '24px',
          right: '24px',
          background: 'rgba(24, 14, 43, 0.6)',
          border: '1px solid rgba(123, 44, 255, 0.5)',
          color: '#A59BC2',
          fontFamily: "var(--font-arcade)",
          fontSize: '10px',
          padding: '8px 16px',
          borderRadius: '4px',
          cursor: 'pointer',
          letterSpacing: '0.08em',
          transition: 'all 0.15s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = '#20E3FF';
          e.currentTarget.style.borderColor = '#20E3FF';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = '#A59BC2';
          e.currentTarget.style.borderColor = 'rgba(123, 44, 255, 0.5)';
        }}
      >
        SKIP INTRO [ESC]
      </button>

      {/* Booting Terminal Diagnostics */}
      <div
        style={{
          maxWidth: '560px',
          width: '100%',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '24px'
        }}
      >
        {bootStep >= 0 && (
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: '12px',
              color: '#20E3FF',
              lineHeight: '1.8',
              letterSpacing: '0.05em'
            }}
          >
            <div>[ARCADE BIOS v6.0.12 INITIALIZED]</div>
            <div>CPU: ATMEGA328P x2 [COM3 / COM4] ... OK</div>
            {bootStep >= 1 && <div>RENDER ENGINE: UNITY 6 [2D TOP-DOWN] ... OK</div>}
            {bootStep >= 2 && <div style={{ color: '#FF2DA6' }}>DUAL CONTROLLERS LINKED • READY</div>}
          </div>
        )}

        {/* Title Reveal with Neon Glow */}
        {bootStep >= 2 && (
          <div
            style={{
              animation: 'pulseGlow 2s infinite ease-in-out',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '12px'
            }}
          >
            <h1
              style={{
                fontFamily: "var(--font-arcade)",
                fontSize: 'clamp(28px, 6vw, 48px)',
                letterSpacing: '0.08em',
                color: '#FFFFFF',
                textShadow: '0 0 25px rgba(123, 44, 255, 0.9), 0 0 10px #20E3FF'
              }}
            >
              WAR OF CUPS
            </h1>
            <div
              style={{
                fontFamily: "var(--font-arcade)",
                fontSize: '11px',
                color: '#20E3FF',
                letterSpacing: '0.15em'
              }}
            >
              2D TOP-DOWN CO-OP SURVIVAL SHOOTER
            </div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: '12px',
                color: '#FFD23F',
                letterSpacing: '0.1em'
              }}
            >
              SURVIVE • FIGHT • CONQUER
            </div>
          </div>
        )}

        {/* Interactive INSERT COIN / PRESS START */}
        {bootStep >= 3 && (
          <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
            <button
              onClick={handleEnter}
              className="blink"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                background: 'linear-gradient(135deg, #7B2CFF 0%, #24113D 100%)',
                border: '2px solid #20E3FF',
                borderRadius: '8px',
                padding: '16px 36px',
                color: '#FFFFFF',
                fontFamily: "var(--font-arcade)",
                fontSize: '14px',
                letterSpacing: '0.1em',
                cursor: 'pointer',
                boxShadow: '0 0 25px rgba(32, 227, 255, 0.6), inset 0 0 10px rgba(32, 227, 255, 0.4)',
                transition: 'all 0.2s ease'
              }}
            >
              <Zap size={18} color="#FFD23F" />
              INSERT COIN / PRESS START
            </button>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: '11px',
                color: '#6B5F8A'
              }}
            >
              CLICK OR PRESS SPACE / ENTER TO ENTER
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
