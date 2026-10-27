import React from 'react';

export default function SectionTitle({
  tag,
  title,
  subtitle,
  align = 'center',
  accentColor = 'cyan', // 'cyan', 'pink', 'purple', 'yellow'
  className = ''
}) {
  const colorMap = {
    cyan: { text: '#20E3FF', glow: 'rgba(32, 227, 255, 0.4)' },
    pink: { text: '#FF2DA6', glow: 'rgba(255, 45, 166, 0.4)' },
    purple: { text: '#B47CFF', glow: 'rgba(123, 44, 255, 0.5)' },
    yellow: { text: '#FFD23F', glow: 'rgba(255, 210, 63, 0.4)' }
  };

  const activeColor = colorMap[accentColor] || colorMap.cyan;

  return (
    <div
      className={`section-header ${className}`}
      style={{
        textAlign: align,
        marginBottom: '48px',
        position: 'relative'
      }}
    >
      {tag && (
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '4px 14px',
            borderRadius: '4px',
            background: 'rgba(36, 17, 61, 0.6)',
            border: `1px solid ${activeColor.text}`,
            color: activeColor.text,
            fontFamily: "var(--font-arcade)",
            fontSize: '11px',
            letterSpacing: '0.12em',
            marginBottom: '14px',
            boxShadow: `0 0 10px ${activeColor.glow}`,
            textTransform: 'uppercase'
          }}
        >
          <span
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: activeColor.text,
              boxShadow: `0 0 8px ${activeColor.text}`
            }}
          />
          {tag}
        </div>
      )}

      <h2
        style={{
          fontFamily: "var(--font-arcade)",
          fontSize: 'clamp(20px, 3.5vw, 34px)',
          color: '#FFFFFF',
          letterSpacing: '0.04em',
          lineHeight: '1.3',
          marginBottom: '14px',
          textShadow: `0 0 18px ${activeColor.glow}`
        }}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          style={{
            maxWidth: '680px',
            margin: align === 'center' ? '0 auto' : '0',
            color: 'var(--text-secondary)',
            fontSize: '18px',
            lineHeight: '1.6'
          }}
        >
          {subtitle}
        </p>
      )}

      <div
        style={{
          display: 'flex',
          justifyContent: align === 'center' ? 'center' : 'flex-start',
          marginTop: '18px'
        }}
      >
        <div
          style={{
            width: '60px',
            height: '3px',
            background: `linear-gradient(90deg, ${activeColor.text}, transparent)`,
            borderRadius: '2px'
          }}
        />
      </div>
    </div>
  );
}
