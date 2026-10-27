import React from 'react';
import { Link } from 'react-router-dom';
import { academy, projectType, projectMeta, supervisor } from '../../data/projectData';
import { Gamepad2, Cpu, FileText, Download } from 'lucide-react';
import { useSound } from '../../context/SoundContext';

export default function Footer() {
  const { playClick, playHover } = useSound();

  return (
    <footer
      style={{
        backgroundColor: '#09070D',
        borderTop: '2px solid rgba(123, 44, 255, 0.3)',
        padding: '60px 0 30px',
        position: 'relative',
        zIndex: 2
      }}
    >
      <div className="site-container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '40px',
            marginBottom: '48px'
          }}
        >
          {/* Column 1: Identity & Academic Scope */}
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '16px'
              }}
            >
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '6px',
                  background: 'linear-gradient(135deg, #7B2CFF 0%, #20E3FF 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Gamepad2 size={18} color="#09070D" />
              </div>
              <span
                style={{
                  fontFamily: "var(--font-arcade)",
                  fontSize: '15px',
                  color: '#FFFFFF',
                  letterSpacing: '0.06em'
                }}
              >
                {projectMeta.title}
              </span>
            </div>

            <p
              style={{
                fontFamily: "var(--font-arcade)",
                fontSize: '10px',
                color: '#20E3FF',
                letterSpacing: '0.1em',
                marginBottom: '12px'
              }}
            >
              {projectMeta.subtitle}
            </p>

            <p
              style={{
                fontSize: '14px',
                color: 'var(--text-secondary)',
                lineHeight: '1.6',
                marginBottom: '14px'
              }}
            >
              Official graduation project presentation and interactive arcade showcase. Developed with Unity 6 and dual Arduino custom hardware integration.
            </p>

            <div
              style={{
                display: 'inline-block',
                padding: '4px 10px',
                background: 'rgba(36, 17, 61, 0.8)',
                border: '1px solid #7B2CFF',
                borderRadius: '4px',
                fontSize: '12px',
                color: '#FFD23F',
                fontFamily: "var(--font-mono)"
              }}
            >
              LOCAL &amp; OFFLINE CO-OP ONLY
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-arcade)",
                fontSize: '12px',
                color: '#FF2DA6',
                letterSpacing: '0.08em',
                marginBottom: '20px'
              }}
            >
              NAVIGATION
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { label: 'Home Page', path: '/' },
                { label: 'The Game & Systems', path: '/game' },
                { label: 'Controls & Mappings', path: '/controls' },
                { label: 'The Arcade & Hardware', path: '/arcade' },
                { label: 'Media Gallery', path: '/media' },
                { label: 'Download & Documentation', path: '/download' }
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={playClick}
                    onMouseEnter={playHover}
                    style={{
                      color: 'var(--text-secondary)',
                      textDecoration: 'none',
                      fontSize: '14px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      transition: 'color 0.15s ease'
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.color = '#20E3FF')}
                    onMouseOut={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                  >
                    <span>▸</span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Academic Institution */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-arcade)",
                fontSize: '12px',
                color: '#FFD23F',
                letterSpacing: '0.08em',
                marginBottom: '20px'
              }}
            >
              ACADEMIC ACCREDITATION
            </h4>
            <div
              style={{
                backgroundColor: 'rgba(24, 14, 43, 0.6)',
                border: '1px solid rgba(123, 44, 255, 0.3)',
                borderRadius: '8px',
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }}
            >
              <div style={{ fontSize: '11px', color: '#20E3FF', fontFamily: "var(--font-mono)" }}>
                INSTITUTION:
              </div>
              <div style={{ fontSize: '14px', color: '#FFFFFF', fontWeight: '600', lineHeight: '1.4' }}>
                {academy}
              </div>
              <div style={{ fontSize: '12px', color: '#A59BC2', marginTop: '4px' }}>
                Classification: <strong style={{ color: '#FFD23F' }}>{projectType}</strong>
              </div>
              <div style={{ fontSize: '12px', color: '#A59BC2' }}>
                Academic Supervisor: <strong style={{ color: '#FFFFFF' }}>{supervisor}</strong>
              </div>
            </div>
          </div>

          {/* Column 4: Technology Badges */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-arcade)",
                fontSize: '12px',
                color: '#20E3FF',
                letterSpacing: '0.08em',
                marginBottom: '20px'
              }}
            >
              TECHNOLOGY STACK
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {['Unity 6', 'C#', 'Arduino', 'Python', 'React', 'Vite', 'CSS3'].map((tech) => (
                <span
                  key={tech}
                  style={{
                    padding: '6px 12px',
                    borderRadius: '4px',
                    background: 'rgba(36, 17, 61, 0.7)',
                    border: '1px solid rgba(123, 44, 255, 0.5)',
                    color: '#FFFFFF',
                    fontFamily: "var(--font-mono)",
                    fontSize: '12px',
                    letterSpacing: '0.04em'
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
            <div style={{ marginTop: '20px' }}>
              <Link
                to="/download"
                onClick={playClick}
                onMouseEnter={playHover}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#20E3FF',
                  textDecoration: 'none',
                  fontSize: '13px',
                  fontFamily: "var(--font-mono)"
                }}
              >
                <Download size={14} />
                <span>View Documentation &amp; Builds</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            paddingTop: '24px',
            borderTop: '1px solid rgba(123, 44, 255, 0.2)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            fontSize: '13px',
            color: 'var(--text-muted)'
          }}
        >
          <div>
            © {projectMeta.year} WAR OF CUPS • {projectType} Demonstration
          </div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: '12px', color: '#7B2CFF' }}>
            ENGINEERED WITH CUSTOM PHYSICAL ARCADE HARDWARE
          </div>
        </div>
      </div>
    </footer>
  );
}
