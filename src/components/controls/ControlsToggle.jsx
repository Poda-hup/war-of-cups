import React from 'react';
import { Gamepad2, Keyboard } from 'lucide-react';
import { useSound } from '../../context/SoundContext';

export default function ControlsToggle({ mode, setMode }) {
  const { playClick, playHover } = useSound();

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: '6px',
        backgroundColor: '#120c1f',
        border: '2px solid #7B2CFF',
        borderRadius: '8px',
        boxShadow: '0 0 20px rgba(123, 44, 255, 0.3)',
        gap: '6px'
      }}
    >
      <button
        onClick={() => {
          playClick();
          setMode('arcade');
        }}
        onMouseEnter={playHover}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '10px 20px',
          borderRadius: '6px',
          border: 'none',
          backgroundColor: mode === 'arcade' ? '#7B2CFF' : 'transparent',
          color: mode === 'arcade' ? '#FFFFFF' : '#A59BC2',
          fontFamily: "var(--font-arcade)",
          fontSize: '11px',
          letterSpacing: '0.06em',
          cursor: 'pointer',
          boxShadow: mode === 'arcade' ? '0 0 15px rgba(123, 44, 255, 0.6)' : 'none',
          transition: 'all 0.2s ease'
        }}
      >
        <Gamepad2 size={16} color={mode === 'arcade' ? '#20E3FF' : '#A59BC2'} />
        <span>ARCADE MACHINE</span>
      </button>

      <button
        onClick={() => {
          playClick();
          setMode('keyboard');
        }}
        onMouseEnter={playHover}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '10px 20px',
          borderRadius: '6px',
          border: 'none',
          backgroundColor: mode === 'keyboard' ? '#7B2CFF' : 'transparent',
          color: mode === 'keyboard' ? '#FFFFFF' : '#A59BC2',
          fontFamily: "var(--font-arcade)",
          fontSize: '11px',
          letterSpacing: '0.06em',
          cursor: 'pointer',
          boxShadow: mode === 'keyboard' ? '0 0 15px rgba(123, 44, 255, 0.6)' : 'none',
          transition: 'all 0.2s ease'
        }}
      >
        <Keyboard size={16} color={mode === 'keyboard' ? '#FF2DA6' : '#A59BC2'} />
        <span>KEYBOARD &amp; MOUSE</span>
      </button>
    </div>
  );
}
