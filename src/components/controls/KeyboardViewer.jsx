import React, { useState } from 'react';
import { keyboardControls } from '../../data/controlsData';
import GlowCard from '../common/GlowCard';
import { useSound } from '../../context/SoundContext';

export default function KeyboardViewer() {
  const [activeKey, setActiveKey] = useState(null);
  const { playHover, playClick } = useSound();

  const handleKeyHover = (item, player) => {
    setActiveKey({ ...item, player });
    playHover();
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      {/* 2 Player Keyboard Decks */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: '24px'
        }}
      >
        {/* PLAYER 1 DECK */}
        <GlowCard accentColor="cyan">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span
                style={{
                  fontFamily: "var(--font-arcade)",
                  fontSize: '13px',
                  color: '#20E3FF',
                  letterSpacing: '0.06em'
                }}
              >
                PLAYER 1 (KNIGHT)
              </span>
              <span
                style={{
                  fontSize: '11px',
                  color: 'var(--text-muted)',
                  fontFamily: "var(--font-mono)"
                }}
              >
                STANDARD WASD LAYOUT
              </span>
            </div>

            {/* Keyboard Layout Representation */}
            <div
              style={{
                backgroundColor: 'rgba(9, 7, 13, 0.85)',
                border: '1px solid rgba(123, 44, 255, 0.3)',
                borderRadius: '8px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '16px'
              }}
            >
              {/* Movement WASD Cluster */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <div
                  className="keycap"
                  onMouseEnter={() => handleKeyHover(keyboardControls.player1.controls[0], 'Player 1')}
                  onClick={playClick}
                >
                  W
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <div
                    className="keycap"
                    onMouseEnter={() => handleKeyHover(keyboardControls.player1.controls[1], 'Player 1')}
                    onClick={playClick}
                  >
                    A
                  </div>
                  <div
                    className="keycap"
                    onMouseEnter={() => handleKeyHover(keyboardControls.player1.controls[2], 'Player 1')}
                    onClick={playClick}
                  >
                    S
                  </div>
                  <div
                    className="keycap"
                    onMouseEnter={() => handleKeyHover(keyboardControls.player1.controls[3], 'Player 1')}
                    onClick={playClick}
                  >
                    D
                  </div>
                </div>
              </div>

              {/* Utility / Potion Row (Q & E) */}
              <div style={{ display: 'flex', gap: '16px', marginTop: '4px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                  <div
                    className="keycap"
                    style={{ borderColor: '#20E3FF' }}
                    onMouseEnter={() => handleKeyHover(keyboardControls.player1.controls[6], 'Player 1')}
                    onClick={playClick}
                  >
                    Q
                  </div>
                  <span style={{ fontSize: '10px', color: '#20E3FF', fontFamily: "var(--font-mono)" }}>SHIELD</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                  <div
                    className="keycap"
                    style={{ borderColor: '#FF2DA6' }}
                    onMouseEnter={() => handleKeyHover(keyboardControls.player1.controls[5], 'Player 1')}
                    onClick={playClick}
                  >
                    E
                  </div>
                  <span style={{ fontSize: '10px', color: '#FF2DA6', fontFamily: "var(--font-mono)" }}>HEALTH</span>
                </div>
              </div>

              {/* Spacebar (Shoot) */}
              <div style={{ width: '100%', maxWidth: '280px', marginTop: '6px' }}>
                <div
                  className="keycap"
                  style={{
                    width: '100%',
                    height: '42px',
                    borderColor: '#20E3FF',
                    background: 'linear-gradient(180deg, #180e2b 0%, #09070D 100%)'
                  }}
                  onMouseEnter={() => handleKeyHover(keyboardControls.player1.controls[4], 'Player 1')}
                  onClick={playClick}
                >
                  SPACEBAR [SHOOT PROJECTILE]
                </div>
              </div>
            </div>
          </div>
        </GlowCard>

        {/* PLAYER 2 DECK */}
        <GlowCard accentColor="pink">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span
                style={{
                  fontFamily: "var(--font-arcade)",
                  fontSize: '13px',
                  color: '#FF2DA6',
                  letterSpacing: '0.06em'
                }}
              >
                PLAYER 2 (BERSERKER)
              </span>
              <span
                style={{
                  fontSize: '11px',
                  color: 'var(--text-muted)',
                  fontFamily: "var(--font-mono)"
                }}
              >
                ARROWS &amp; MOUSE LAYOUT
              </span>
            </div>

            {/* Keyboard Layout Representation */}
            <div
              style={{
                backgroundColor: 'rgba(9, 7, 13, 0.85)',
                border: '1px solid rgba(123, 44, 255, 0.3)',
                borderRadius: '8px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '16px'
              }}
            >
              {/* Arrow Keys Cluster */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                <div
                  className="keycap"
                  onMouseEnter={() => handleKeyHover(keyboardControls.player2.controls[0], 'Player 2')}
                  onClick={playClick}
                >
                  ▲
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <div
                    className="keycap"
                    onMouseEnter={() => handleKeyHover(keyboardControls.player2.controls[1], 'Player 2')}
                    onClick={playClick}
                  >
                    ◀
                  </div>
                  <div
                    className="keycap"
                    onMouseEnter={() => handleKeyHover(keyboardControls.player2.controls[2], 'Player 2')}
                    onClick={playClick}
                  >
                    ▼
                  </div>
                  <div
                    className="keycap"
                    onMouseEnter={() => handleKeyHover(keyboardControls.player2.controls[3], 'Player 2')}
                    onClick={playClick}
                  >
                    ▶
                  </div>
                </div>
              </div>

              {/* Utility / Potion Row (K & L) */}
              <div style={{ display: 'flex', gap: '16px', marginTop: '4px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                  <div
                    className="keycap"
                    style={{ borderColor: '#FF2DA6' }}
                    onMouseEnter={() => handleKeyHover(keyboardControls.player2.controls[5], 'Player 2')}
                    onClick={playClick}
                  >
                    K
                  </div>
                  <span style={{ fontSize: '10px', color: '#FF2DA6', fontFamily: "var(--font-mono)" }}>HEALTH</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                  <div
                    className="keycap"
                    style={{ borderColor: '#20E3FF' }}
                    onMouseEnter={() => handleKeyHover(keyboardControls.player2.controls[6], 'Player 2')}
                    onClick={playClick}
                  >
                    L
                  </div>
                  <span style={{ fontSize: '10px', color: '#20E3FF', fontFamily: "var(--font-mono)" }}>SHIELD</span>
                </div>
              </div>

              {/* Mouse Shoot Button */}
              <div style={{ width: '100%', maxWidth: '280px', marginTop: '6px' }}>
                <div
                  className="keycap"
                  style={{
                    width: '100%',
                    height: '42px',
                    borderColor: '#FF2DA6',
                    background: 'linear-gradient(180deg, #180e2b 0%, #09070D 100%)'
                  }}
                  onMouseEnter={() => handleKeyHover(keyboardControls.player2.controls[4], 'Player 2')}
                  onClick={playClick}
                >
                  LEFT MOUSE BUTTON [SHOOT]
                </div>
              </div>
            </div>
          </div>
        </GlowCard>
      </div>

      {/* Dynamic Key Action Inspector Box */}
      <div
        style={{
          background: 'linear-gradient(90deg, #180e2b 0%, #24113D 100%)',
          border: '1px solid #7B2CFF',
          borderRadius: '8px',
          padding: '16px 24px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div
            style={{
              padding: '8px 16px',
              borderRadius: '6px',
              background: '#09070D',
              border: '2px solid #FFD23F',
              fontFamily: "var(--font-arcade)",
              fontSize: '14px',
              color: '#FFD23F'
            }}
          >
            {activeKey ? activeKey.key : 'HOVER ANY KEY'}
          </div>

          <div>
            <div style={{ fontSize: '15px', fontWeight: 'bold', color: '#FFFFFF' }}>
              {activeKey ? activeKey.action : 'Interactive Keycap Inspector'}
            </div>
            <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
              {activeKey ? `${activeKey.player} • ${activeKey.desc}` : 'Hover or click any key above to inspect assigned gameplay actions and categories.'}
            </div>
          </div>
        </div>

        {activeKey && (
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: '12px',
              color: '#20E3FF',
              background: 'rgba(32, 227, 255, 0.1)',
              padding: '4px 12px',
              borderRadius: '4px',
              border: '1px solid rgba(32, 227, 255, 0.4)'
            }}
          >
            CATEGORY: {activeKey.category.toUpperCase()}
          </span>
        )}
      </div>
    </div>
  );
}
