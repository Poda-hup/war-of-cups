import React from 'react';

export default function TechBadge({
  name,
  category,
  desc,
  color = '#20E3FF',
  className = ''
}) {
  return (
    <div
      className={`tech-badge ${className}`}
      style={{
        display: 'inline-flex',
        flexDirection: 'column',
        gap: '4px',
        background: 'rgba(24, 14, 43, 0.7)',
        border: `1px solid ${color}40`,
        borderRadius: '6px',
        padding: '10px 14px',
        transition: 'all 0.2s ease',
        cursor: 'default'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = color;
        e.currentTarget.style.boxShadow = `0 0 12px ${color}40`;
        e.currentTarget.style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = `${color}40`;
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.transform = 'none';
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
        <span
          style={{
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            backgroundColor: color,
            boxShadow: `0 0 6px ${color}`
          }}
        />
        <span
          style={{
            fontFamily: "var(--font-arcade)",
            fontSize: '11px',
            color: '#FFFFFF',
            letterSpacing: '0.04em'
          }}
        >
          {name}
        </span>
        {category && (
          <span
            style={{
              fontSize: '11px',
              color: 'var(--text-muted)',
              fontFamily: "var(--font-mono)",
              marginLeft: 'auto'
            }}
          >
            {category}
          </span>
        )}
      </div>

      {desc && (
        <span
          style={{
            fontSize: '12px',
            color: 'var(--text-secondary)',
            fontFamily: "var(--font-display)",
            lineHeight: '1.2'
          }}
        >
          {desc}
        </span>
      )}
    </div>
  );
}
