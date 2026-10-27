import React, { useState } from 'react';
import { useSound } from '../../context/SoundContext';

export default function GlowCard({
  children,
  accentColor = 'purple', // 'cyan', 'pink', 'purple', 'yellow'
  hoverable = true,
  className = '',
  style = {},
  onClick
}) {
  const [isHovered, setIsHovered] = useState(false);
  const { playHover } = useSound();

  const colorConfig = {
    cyan: {
      border: 'rgba(32, 227, 255, 0.4)',
      borderHover: '#20E3FF',
      glow: 'rgba(32, 227, 255, 0.25)',
      glowHover: '0 8px 30px rgba(32, 227, 255, 0.35)'
    },
    pink: {
      border: 'rgba(255, 45, 166, 0.4)',
      borderHover: '#FF2DA6',
      glow: 'rgba(255, 45, 166, 0.25)',
      glowHover: '0 8px 30px rgba(255, 45, 166, 0.35)'
    },
    purple: {
      border: 'rgba(123, 44, 255, 0.4)',
      borderHover: '#B47CFF',
      glow: 'rgba(123, 44, 255, 0.25)',
      glowHover: '0 8px 30px rgba(123, 44, 255, 0.35)'
    },
    yellow: {
      border: 'rgba(255, 210, 63, 0.4)',
      borderHover: '#FFD23F',
      glow: 'rgba(255, 210, 63, 0.25)',
      glowHover: '0 8px 30px rgba(255, 210, 63, 0.35)'
    }
  };

  const currentTheme = colorConfig[accentColor] || colorConfig.purple;

  const handleMouseEnter = () => {
    if (hoverable) {
      setIsHovered(true);
      playHover();
    }
  };

  const handleMouseLeave = () => {
    if (hoverable) {
      setIsHovered(false);
    }
  };

  return (
    <div
      className={`glow-card ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        background: 'linear-gradient(180deg, #180e2b 0%, #120c1f 100%)',
        border: `1px solid ${isHovered ? currentTheme.borderHover : currentTheme.border}`,
        borderRadius: '10px',
        padding: '24px',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: isHovered ? currentTheme.glowHover : `0 4px 20px ${currentTheme.glow}`,
        transform: isHovered && hoverable ? 'translateY(-4px)' : 'none',
        transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
        cursor: onClick ? 'pointer' : 'default',
        ...style
      }}
    >
      {/* Corner Tech Accents */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '8px',
          height: '8px',
          borderTop: `2px solid ${isHovered ? currentTheme.borderHover : currentTheme.border}`,
          borderLeft: `2px solid ${isHovered ? currentTheme.borderHover : currentTheme.border}`,
          transition: 'border-color 0.25s ease'
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '8px',
          height: '8px',
          borderTop: `2px solid ${isHovered ? currentTheme.borderHover : currentTheme.border}`,
          borderRight: `2px solid ${isHovered ? currentTheme.borderHover : currentTheme.border}`,
          transition: 'border-color 0.25s ease'
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '8px',
          height: '8px',
          borderBottom: `2px solid ${isHovered ? currentTheme.borderHover : currentTheme.border}`,
          borderLeft: `2px solid ${isHovered ? currentTheme.borderHover : currentTheme.border}`,
          transition: 'border-color 0.25s ease'
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: '8px',
          height: '8px',
          borderBottom: `2px solid ${isHovered ? currentTheme.borderHover : currentTheme.border}`,
          borderRight: `2px solid ${isHovered ? currentTheme.borderHover : currentTheme.border}`,
          transition: 'border-color 0.25s ease'
        }}
      />

      {children}
    </div>
  );
}
