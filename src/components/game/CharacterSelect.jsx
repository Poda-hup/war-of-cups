import React, { useState } from 'react';
import { characters } from '../../data/gameData';
import GlowCard from '../common/GlowCard';
import { Shield, Zap, Crosshair } from 'lucide-react';
import { useSound } from '../../context/SoundContext';

export default function CharacterSelect() {
  const [selectedChar, setSelectedChar] = useState(characters[0].id);
  const { playClick, playHover } = useSound();

  return (
    <div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px'
        }}
      >
        {characters.map((char) => {
          const isSelected = selectedChar === char.id;
          const isP1 = char.slot === 'PLAYER 1';

          return (
            <div
              key={char.id}
              onClick={() => {
                playClick();
                setSelectedChar(char.id);
              }}
              onMouseEnter={playHover}
              style={{
                cursor: 'pointer',
                transition: 'all 0.25s ease'
              }}
            >
              <GlowCard
                accentColor={isP1 ? 'cyan' : 'pink'}
                style={{
                  borderWidth: isSelected ? '2px' : '1px',
                  borderColor: isSelected ? char.accent : undefined,
                  boxShadow: isSelected ? `0 0 25px ${char.accent}50` : undefined
                }}
              >
                {/* Character Slot Header */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <span
                    style={{
                      fontFamily: "var(--font-arcade)",
                      fontSize: '11px',
                      color: char.accent,
                      background: 'rgba(36, 17, 61, 0.8)',
                      border: `1px solid ${char.accent}`,
                      padding: '4px 10px',
                      borderRadius: '4px',
                      letterSpacing: '0.08em'
                    }}
                  >
                    {char.slot}
                  </span>

                  <span
                    style={{
                      fontSize: '12px',
                      fontFamily: "var(--font-mono)",
                      color: isSelected ? '#FFD23F' : 'var(--text-muted)'
                    }}
                  >
                    {isSelected ? '★ SELECTED' : 'CLICK TO SELECT'}
                  </span>
                </div>

                {/* Character Artwork Container */}
                <div
                  style={{
                    height: '240px',
                    borderRadius: '8px',
                    background: 'radial-gradient(circle at center, rgba(36, 17, 61, 0.8) 0%, rgba(9, 7, 13, 0.95) 100%)',
                    border: '1px solid rgba(123, 44, 255, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '16px',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <img
                    src={char.image}
                    alt={char.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                      transform: isSelected ? 'scale(1.05)' : 'scale(1)',
                      transition: 'transform 0.3s ease'
                    }}
                  />
                </div>

                {/* Character Info */}
                <h3
                  style={{
                    fontFamily: "var(--font-arcade)",
                    fontSize: '18px',
                    color: '#FFFFFF',
                    letterSpacing: '0.04em',
                    marginBottom: '4px'
                  }}
                >
                  {char.name}
                </h3>

                <div
                  style={{
                    fontSize: '14px',
                    color: char.accent,
                    fontWeight: '600',
                    marginBottom: '10px'
                  }}
                >
                  {char.role}
                </div>

                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.5', marginBottom: '16px' }}>
                  {char.description}
                </p>

                {/* Specs / Controls mapping */}
                <div
                  style={{
                    background: 'rgba(9, 7, 13, 0.7)',
                    border: '1px solid rgba(123, 44, 255, 0.25)',
                    borderRadius: '6px',
                    padding: '12px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '6px'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
                    <span style={{ color: 'var(--text-muted)' }}>Armor Type:</span>
                    <span style={{ color: '#FFFFFF', fontFamily: "var(--font-mono)" }}>{char.stats.armor}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
                    <span style={{ color: 'var(--text-muted)' }}>Maneuverability:</span>
                    <span style={{ color: '#FFFFFF', fontFamily: "var(--font-mono)" }}>{char.stats.speed}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
                    <span style={{ color: 'var(--text-muted)' }}>Default Controls:</span>
                    <span style={{ color: char.accent, fontFamily: "var(--font-arcade)", fontSize: '10px' }}>{char.controls}</span>
                  </div>
                </div>
              </GlowCard>
            </div>
          );
        })}
      </div>
    </div>
  );
}
