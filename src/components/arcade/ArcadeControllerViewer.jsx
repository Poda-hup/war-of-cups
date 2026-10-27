import React, { useState } from 'react';
import { arcadeHardwarePins } from '../../data/controlsData';
import GlowCard from '../common/GlowCard';
import { useSound } from '../../context/SoundContext';

export default function ArcadeControllerViewer() {
  const [activePin, setActivePin] = useState(null);
  const { playHover, playClick } = useSound();

  const handleInputHover = (item, player, board) => {
    setActivePin({ ...item, player, board });
    playHover();
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      {/* Dual Arcade Controller Panels */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: '24px'
        }}
      >
        {/* PLAYER 1 CONTROLLER */}
        <GlowCard accentColor="cyan">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <span
                  style={{
                    fontFamily: "var(--font-arcade)",
                    fontSize: '13px',
                    color: '#20E3FF',
                    letterSpacing: '0.06em'
                  }}
                >
                  P1 PHYSICAL ARCADE DECK
                </span>
                <div style={{ fontSize: '11px', color: '#FFD23F', fontFamily: "var(--font-mono)" }}>
                  ARDUINO UNO #1 • PORT COM3 • 9600 BAUD
                </div>
              </div>

              <span
                style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  backgroundColor: '#20E3FF',
                  boxShadow: '0 0 10px #20E3FF'
                }}
              />
            </div>

            {/* Arcade Cabinet Panel Graphic (SVG Interactive) */}
            <div
              style={{
                backgroundColor: '#09070D',
                border: '2px solid #7B2CFF',
                borderRadius: '8px',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px'
              }}
            >
              {/* D-Pad Buttons */}
              <div>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontFamily: "var(--font-mono)", marginBottom: '8px' }}>
                  4-WAY DIRECTIONAL TACTILE SWITCHES (LEDS ACTIVE):
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
                  {arcadeHardwarePins.player1.inputs.slice(4, 8).map((btn) => (
                    <button
                      key={btn.id}
                      onClick={playClick}
                      onMouseEnter={() => handleInputHover(btn, 'Player 1', 'Arduino Uno #1 (COM3)')}
                      style={{
                        backgroundColor: '#180e2b',
                        border: '1.5px solid #20E3FF',
                        borderRadius: '6px',
                        padding: '10px 4px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '4px',
                        cursor: 'pointer',
                        transition: 'all 0.15s ease'
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(32, 227, 255, 0.2)';
                        e.currentTarget.style.boxShadow = '0 0 12px rgba(32, 227, 255, 0.5)';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.backgroundColor = '#180e2b';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      <span style={{ fontFamily: "var(--font-arcade)", fontSize: '11px', color: '#FFFFFF' }}>{btn.key}</span>
                      <span style={{ fontSize: '9px', color: '#20E3FF', fontFamily: "var(--font-mono)" }}>{btn.pin}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Buttons (BTN1 - BTN4) */}
              <div>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontFamily: "var(--font-mono)", marginBottom: '8px' }}>
                  ARCADE ACTION PUSHBUTTONS (LEDS PIN 3, 5, 7, 9):
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
                  {arcadeHardwarePins.player1.inputs.slice(0, 4).map((btn) => (
                    <button
                      key={btn.id}
                      onClick={playClick}
                      onMouseEnter={() => handleInputHover(btn, 'Player 1', 'Arduino Uno #1 (COM3)')}
                      style={{
                        backgroundColor: '#24113D',
                        border: '2px solid #20E3FF',
                        borderRadius: '24px',
                        padding: '10px 14px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        cursor: 'pointer',
                        transition: 'all 0.15s ease'
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(32, 227, 255, 0.25)';
                        e.currentTarget.style.boxShadow = '0 0 15px rgba(32, 227, 255, 0.6)';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.backgroundColor = '#24113D';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      <span style={{ fontFamily: "var(--font-arcade)", fontSize: '10px', color: '#FFFFFF' }}>{btn.label}</span>
                      <span style={{ fontSize: '11px', color: '#FFD23F', fontFamily: "var(--font-mono)" }}>[{btn.key}]</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </GlowCard>

        {/* PLAYER 2 CONTROLLER */}
        <GlowCard accentColor="pink">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <span
                  style={{
                    fontFamily: "var(--font-arcade)",
                    fontSize: '13px',
                    color: '#FF2DA6',
                    letterSpacing: '0.06em'
                  }}
                >
                  P2 PHYSICAL ARCADE DECK
                </span>
                <div style={{ fontSize: '11px', color: '#FFD23F', fontFamily: "var(--font-mono)" }}>
                  ARDUINO UNO #2 • PORT COM4 • 9600 BAUD
                </div>
              </div>

              <span
                style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  backgroundColor: '#FF2DA6',
                  boxShadow: '0 0 10px #FF2DA6'
                }}
              />
            </div>

            {/* Arcade Cabinet Panel Graphic (SVG Interactive) */}
            <div
              style={{
                backgroundColor: '#09070D',
                border: '2px solid #7B2CFF',
                borderRadius: '8px',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px'
              }}
            >
              {/* D-Pad Buttons */}
              <div>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontFamily: "var(--font-mono)", marginBottom: '8px' }}>
                  4-WAY DIRECTIONAL TACTILE SWITCHES (LEDS ACTIVE):
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
                  {arcadeHardwarePins.player2.inputs.slice(4, 8).map((btn) => (
                    <button
                      key={btn.id}
                      onClick={playClick}
                      onMouseEnter={() => handleInputHover(btn, 'Player 2', 'Arduino Uno #2 (COM4)')}
                      style={{
                        backgroundColor: '#180e2b',
                        border: '1.5px solid #FF2DA6',
                        borderRadius: '6px',
                        padding: '10px 4px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '4px',
                        cursor: 'pointer',
                        transition: 'all 0.15s ease'
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(255, 45, 166, 0.2)';
                        e.currentTarget.style.boxShadow = '0 0 12px rgba(255, 45, 166, 0.5)';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.backgroundColor = '#180e2b';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      <span style={{ fontFamily: "var(--font-arcade)", fontSize: '11px', color: '#FFFFFF' }}>{btn.key}</span>
                      <span style={{ fontSize: '9px', color: '#FF2DA6', fontFamily: "var(--font-mono)" }}>{btn.pin}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Buttons (BTN1 - BTN4) */}
              <div>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontFamily: "var(--font-mono)", marginBottom: '8px' }}>
                  ARCADE ACTION PUSHBUTTONS (LEDS PIN 3, 5, 7, 9):
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
                  {arcadeHardwarePins.player2.inputs.slice(0, 4).map((btn) => (
                    <button
                      key={btn.id}
                      onClick={playClick}
                      onMouseEnter={() => handleInputHover(btn, 'Player 2', 'Arduino Uno #2 (COM4)')}
                      style={{
                        backgroundColor: '#24113D',
                        border: '2px solid #FF2DA6',
                        borderRadius: '24px',
                        padding: '10px 14px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        cursor: 'pointer',
                        transition: 'all 0.15s ease'
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(255, 45, 166, 0.25)';
                        e.currentTarget.style.boxShadow = '0 0 15px rgba(255, 45, 166, 0.6)';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.backgroundColor = '#24113D';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      <span style={{ fontFamily: "var(--font-arcade)", fontSize: '10px', color: '#FFFFFF' }}>{btn.label}</span>
                      <span style={{ fontSize: '11px', color: '#FFD23F', fontFamily: "var(--font-mono)" }}>[{btn.key}]</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </GlowCard>
      </div>

      {/* Hardware Signal Inspector Bar */}
      <div
        style={{
          background: 'linear-gradient(90deg, #180e2b 0%, #24113D 100%)',
          border: '1px solid #FFD23F',
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
              border: '2px solid #20E3FF',
              fontFamily: "var(--font-mono)",
              fontSize: '14px',
              color: '#20E3FF'
            }}
          >
            {activePin ? `${activePin.id} → ${activePin.pin}` : 'HOVER ANY BUTTON'}
          </div>

          <div>
            <div style={{ fontSize: '15px', fontWeight: 'bold', color: '#FFFFFF' }}>
              {activePin ? `${activePin.player}: ${activePin.action}` : 'Interactive Arcade Hardware Pinout Inspector'}
            </div>
            <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
              {activePin
                ? `Mapped Key: "${activePin.key}" • Status LED: ${activePin.ledPin} • Hardware Board: ${activePin.board}`
                : 'Hover or click any button above to inspect authentic pinout wiring, serial packet structure, and Unity action.'}
            </div>
          </div>
        </div>

        {activePin && (
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: '12px',
              color: '#FFD23F',
              background: 'rgba(255, 210, 63, 0.1)',
              padding: '6px 12px',
              borderRadius: '4px',
              border: '1px solid rgba(255, 210, 63, 0.4)'
            }}
          >
            SERIAL PACKET: "{activePin.id}:1"
          </span>
        )}
      </div>
    </div>
  );
}
