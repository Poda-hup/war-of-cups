import React from 'react';
import SectionTitle from '../components/common/SectionTitle';
import GlowCard from '../components/common/GlowCard';
import ArcadeButton from '../components/common/ArcadeButton';
import { Download, FileText, Cpu, CheckCircle2, ShieldCheck, Terminal, HardDrive } from 'lucide-react';
import { useSound } from '../context/SoundContext';

export default function DownloadPage() {
  const { playClick, playHover } = useSound();

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {/* Hero Header */}
      <section
        style={{
          padding: '70px 0 50px',
          background: 'radial-gradient(ellipse at 50% 20%, rgba(36, 17, 61, 0.7) 0%, rgba(9, 7, 13, 0.95) 75%)',
          borderBottom: '1px solid rgba(123, 44, 255, 0.25)',
          textAlign: 'center'
        }}
      >
        <div className="site-container">
          <SectionTitle
            tag="STANDALONE EXECUTABLE"
            title="READY TO PLAY?"
            subtitle="Download the verified standalone Windows build of WAR OF CUPS and complete graduation project documentation."
            accentColor="pink"
          />

          {/* Quick Specs Badges */}
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px' }}>
            <span
              style={{
                padding: '6px 14px',
                borderRadius: '4px',
                background: 'rgba(32, 227, 255, 0.1)',
                border: '1px solid #20E3FF',
                fontFamily: "var(--font-arcade)",
                fontSize: '11px',
                color: '#20E3FF'
              }}
            >
              WINDOWS 64-BIT
            </span>
            <span
              style={{
                padding: '6px 14px',
                borderRadius: '4px',
                background: 'rgba(255, 45, 166, 0.1)',
                border: '1px solid #FF2DA6',
                fontFamily: "var(--font-arcade)",
                fontSize: '11px',
                color: '#FF2DA6'
              }}
            >
              LOCAL / OFFLINE
            </span>
            <span
              style={{
                padding: '6px 14px',
                borderRadius: '4px',
                background: 'rgba(255, 210, 63, 0.1)',
                border: '1px solid #FFD23F',
                fontFamily: "var(--font-arcade)",
                fontSize: '11px',
                color: '#FFD23F'
              }}
            >
              1–2 PLAYERS
            </span>
            <span
              style={{
                padding: '6px 14px',
                borderRadius: '4px',
                background: 'rgba(123, 44, 255, 0.2)',
                border: '1px solid #7B2CFF',
                fontFamily: "var(--font-arcade)",
                fontSize: '11px',
                color: '#FFFFFF'
              }}
            >
              UNITY 6
            </span>
          </div>
        </div>
      </section>

      {/* Main Downloads Grid */}
      <section className="arcade-section">
        <div className="site-container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px',
              marginBottom: '48px'
            }}
          >
            {/* Primary Game Download Card */}
            <GlowCard accentColor="cyan">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', height: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '8px',
                      background: 'rgba(32, 227, 255, 0.15)',
                      border: '1.5px solid #20E3FF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 0 15px rgba(32, 227, 255, 0.4)'
                    }}
                  >
                    <Download size={24} color="#20E3FF" />
                  </div>

                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: '12px',
                      color: '#FFD23F',
                      padding: '4px 10px',
                      borderRadius: '4px',
                      background: 'rgba(36, 17, 61, 0.8)',
                      border: '1px solid rgba(255, 210, 63, 0.3)'
                    }}
                  >
                    42.9 MB • VERIFIED ZIP
                  </span>
                </div>

                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-arcade)",
                      fontSize: '18px',
                      color: '#FFFFFF',
                      letterSpacing: '0.04em',
                      marginBottom: '6px'
                    }}
                  >
                    WAR OF CUPS — GAME BUILD
                  </h3>
                  <div style={{ color: '#20E3FF', fontSize: '13px', fontFamily: "var(--font-mono)" }}>
                    Release v1.0.0 • Standalone Executable
                  </div>
                </div>

                <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.6' }}>
                  Includes the complete compiled Unity 6 game (`war of cups.exe`), engine runtime libraries (`UnityPlayer.dll`), audio assets, and shader caches.
                </p>

                {/* Features list */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px', color: '#E0DBEC' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <CheckCircle2 size={15} color="#20E3FF" />
                    <span>Instant offline plug &amp; play</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <CheckCircle2 size={15} color="#20E3FF" />
                    <span>Supports both Keyboard and Dual Arduinos</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <CheckCircle2 size={15} color="#20E3FF" />
                    <span>Native 60 FPS performance on Windows</span>
                  </div>
                </div>

                <div style={{ marginTop: 'auto', paddingTop: '16px' }}>
                  <ArcadeButton
                    as="a"
                    href="/downloads/WarOfCups.zip"
                    download="WarOfCups.zip"
                    variant="cyan"
                    size="lg"
                    style={{ width: '100%' }}
                    icon={Download}
                  >
                    DOWNLOAD GAME (.ZIP)
                  </ArcadeButton>
                </div>
              </div>
            </GlowCard>

            {/* Academic Project Documentation Card */}
            <GlowCard accentColor="purple">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', height: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '8px',
                      background: 'rgba(123, 44, 255, 0.2)',
                      border: '1.5px solid #7B2CFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 0 15px rgba(123, 44, 255, 0.4)'
                    }}
                  >
                    <FileText size={24} color="#B47CFF" />
                  </div>

                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: '12px',
                      color: '#FFD23F',
                      padding: '4px 10px',
                      borderRadius: '4px',
                      background: 'rgba(36, 17, 61, 0.8)',
                      border: '1px solid rgba(255, 210, 63, 0.3)'
                    }}
                  >
                    3.9 MB • OFFICIAL PDF
                  </span>
                </div>

                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-arcade)",
                      fontSize: '18px',
                      color: '#FFFFFF',
                      letterSpacing: '0.04em',
                      marginBottom: '6px'
                    }}
                  >
                    PROJECT THESIS &amp; REPORT
                  </h3>
                  <div style={{ color: '#B47CFF', fontSize: '13px', fontFamily: "var(--font-mono)" }}>
                    Academic Graduation Documentation
                  </div>
                </div>

                <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.6' }}>
                  Comprehensive academic report documenting the system architecture, raycast swarm AI algorithms, hardware circuit schematics, and testing methodology.
                </p>

                {/* Features list */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px', color: '#E0DBEC' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <CheckCircle2 size={15} color="#B47CFF" />
                    <span>Full university project specification</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <CheckCircle2 size={15} color="#B47CFF" />
                    <span>Complete circuit diagrams &amp; pinout tables</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <CheckCircle2 size={15} color="#B47CFF" />
                    <span>Modern Academy graduation project thesis</span>
                  </div>
                </div>

                <div style={{ marginTop: 'auto', paddingTop: '16px' }}>
                  <ArcadeButton
                    as="a"
                    href="/downloads/WarOfCups_Documentation.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="primary"
                    size="lg"
                    style={{ width: '100%' }}
                    icon={FileText}
                  >
                    VIEW REPORT (.PDF)
                  </ArcadeButton>
                </div>
              </div>
            </GlowCard>

            {/* Arcade Hardware Wiring & Setup Guide */}
            <GlowCard accentColor="yellow">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', height: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '8px',
                      background: 'rgba(255, 210, 63, 0.15)',
                      border: '1.5px solid #FFD23F',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 0 15px rgba(255, 210, 63, 0.4)'
                    }}
                  >
                    <Terminal size={24} color="#FFD23F" />
                  </div>

                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: '12px',
                      color: '#FFD23F',
                      padding: '4px 10px',
                      borderRadius: '4px',
                      background: 'rgba(36, 17, 61, 0.8)',
                      border: '1px solid rgba(255, 210, 63, 0.3)'
                    }}
                  >
                    SETUP MANUAL
                  </span>
                </div>

                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-arcade)",
                      fontSize: '18px',
                      color: '#FFFFFF',
                      letterSpacing: '0.04em',
                      marginBottom: '6px'
                    }}
                  >
                    HARDWARE SETUP GUIDE
                  </h3>
                  <div style={{ color: '#FFD23F', fontSize: '13px', fontFamily: "var(--font-mono)" }}>
                    Wiring Schematics &amp; Python Script Setup
                  </div>
                </div>

                <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.6' }}>
                  Step-by-step instructions for wiring Arduino Uno pins, soldering the 220Ω resistors, uploading `controller.ino`, and launching `dual_controller_listener.py`.
                </p>

                {/* Features list */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px', color: '#E0DBEC' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <CheckCircle2 size={15} color="#FFD23F" />
                    <span>Exact parts list (buttons, resistors, LEDs)</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <CheckCircle2 size={15} color="#FFD23F" />
                    <span>COM3 / COM4 port configuration</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <CheckCircle2 size={15} color="#FFD23F" />
                    <span>Python dependencies installation commands</span>
                  </div>
                </div>

                <div style={{ marginTop: 'auto', paddingTop: '16px' }}>
                  <ArcadeButton
                    as="a"
                    href="/downloads/Arcade_Wiring_and_Setup_Guide.txt"
                    download="Arcade_Wiring_and_Setup_Guide.txt"
                    variant="accent"
                    size="lg"
                    style={{ width: '100%' }}
                    icon={Terminal}
                  >
                    GET SETUP GUIDE (.TXT)
                  </ArcadeButton>
                </div>
              </div>
            </GlowCard>
          </div>

          {/* System Requirements & Execution Instructions */}
          <div
            style={{
              background: 'linear-gradient(180deg, #180e2b 0%, #120c1f 100%)',
              border: '1px solid rgba(123, 44, 255, 0.3)',
              borderRadius: '10px',
              padding: '32px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '32px'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <HardDrive size={18} color="#20E3FF" />
                <h4 style={{ fontFamily: "var(--font-arcade)", fontSize: '13px', color: '#FFFFFF' }}>
                  SYSTEM REQUIREMENTS
                </h4>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px', color: 'var(--text-secondary)' }}>
                <div><strong>Operating System:</strong> Windows 10 / Windows 11 (64-bit)</div>
                <div><strong>Processor:</strong> Intel Core i3 / AMD Ryzen 3 or higher</div>
                <div><strong>Memory:</strong> 4 GB RAM minimum</div>
                <div><strong>Graphics:</strong> DirectX 11 compatible GPU with 1GB VRAM</div>
                <div><strong>Storage:</strong> 250 MB free space</div>
                <div><strong>Hardware Ports:</strong> 2x USB 2.0/3.0 (for Dual Arduino setup)</div>
              </div>
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                <ShieldCheck size={18} color="#FF2DA6" />
                <h4 style={{ fontFamily: "var(--font-arcade)", fontSize: '13px', color: '#FFFFFF' }}>
                  INSTALLATION &amp; RUNNING INSTRUCTIONS
                </h4>
              </div>

              <ol style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px', color: 'var(--text-secondary)' }}>
                <li>Extract <code style={{ color: '#20E3FF', background: '#09070D', padding: '2px 6px', borderRadius: '3px' }}>WarOfCups.zip</code> into any local directory.</li>
                <li>To play with Keyboard, double-click <code style={{ color: '#20E3FF', background: '#09070D', padding: '2px 6px', borderRadius: '3px' }}>war of cups.exe</code>.</li>
                <li>To play with Arcade Controllers: plug in both Arduinos, run <code style={{ color: '#FFD23F', background: '#09070D', padding: '2px 6px', borderRadius: '3px' }}>dual_controller_listener.py</code> in terminal with Administrator privileges, and launch the game.</li>
                <li>Enjoy seamless, zero-latency local survival combat!</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
