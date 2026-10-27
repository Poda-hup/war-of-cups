import React, { useState } from 'react';
import SectionTitle from '../components/common/SectionTitle';
import ControlsToggle from '../components/controls/ControlsToggle';
import KeyboardViewer from '../components/controls/KeyboardViewer';
import ArcadeControllerViewer from '../components/arcade/ArcadeControllerViewer';

export default function Controls() {
  const [controlMode, setControlMode] = useState('arcade'); // 'arcade' | 'keyboard'

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {/* Page Header */}
      <section
        style={{
          padding: '70px 0 40px',
          background: 'radial-gradient(ellipse at 50% 20%, rgba(36, 17, 61, 0.7) 0%, rgba(9, 7, 13, 0.95) 75%)',
          borderBottom: '1px solid rgba(123, 44, 255, 0.25)',
          textAlign: 'center'
        }}
      >
        <div className="site-container">
          <SectionTitle
            tag="INPUT CONFIGURATION"
            title="CONTROLS &amp; HARDWARE MAPPINGS"
            subtitle="WAR OF CUPS seamlessly supports both standard PC keyboard/mouse input and custom dual Arduino arcade cabinet hardware."
            accentColor="yellow"
          />

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
            <ControlsToggle mode={controlMode} setMode={setControlMode} />
          </div>
        </div>
      </section>

      {/* Dynamic Controls Display */}
      <section className="arcade-section">
        <div className="site-container">
          {controlMode === 'arcade' ? (
            <div>
              <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                <span
                  style={{
                    fontFamily: "var(--font-arcade)",
                    fontSize: '12px',
                    color: '#FFD23F',
                    background: 'rgba(36, 17, 61, 0.7)',
                    border: '1px solid #FFD23F',
                    padding: '6px 14px',
                    borderRadius: '4px'
                  }}
                >
                  ACTIVE: CUSTOM ARDUINO UNO HARDWARE DECK
                </span>
                <p style={{ color: 'var(--text-secondary)', fontSize: '15px', marginTop: '12px', maxWidth: '640px', margin: '12px auto 0' }}>
                  Click or hover over any button to inspect its physical Arduino pin wiring, LED circuitry, and USB serial transmission packet.
                </p>
              </div>

              <ArcadeControllerViewer />
            </div>
          ) : (
            <div>
              <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                <span
                  style={{
                    fontFamily: "var(--font-arcade)",
                    fontSize: '12px',
                    color: '#20E3FF',
                    background: 'rgba(36, 17, 61, 0.7)',
                    border: '1px solid #20E3FF',
                    padding: '6px 14px',
                    borderRadius: '4px'
                  }}
                >
                  ACTIVE: DESKTOP KEYBOARD &amp; MOUSE MODE
                </span>
                <p style={{ color: 'var(--text-secondary)', fontSize: '15px', marginTop: '12px', maxWidth: '640px', margin: '12px auto 0' }}>
                  Hover or press any visual keycap below to inspect the assigned player movement, projectile fire, and defensive potion triggers.
                </p>
              </div>

              <KeyboardViewer />
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
