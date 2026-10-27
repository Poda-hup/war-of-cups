import React from 'react';
import { gameplayFlowSteps } from '../../data/gameData';

export default function GameplayFlowTrack() {
  return (
    <div style={{ position: 'relative' }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '16px'
        }}
      >
        {gameplayFlowSteps.map((step, idx) => (
          <div
            key={step.step}
            style={{
              background: 'linear-gradient(180deg, #180e2b 0%, #120c1f 100%)',
              border: '1px solid rgba(123, 44, 255, 0.35)',
              borderRadius: '8px',
              padding: '20px 16px',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = step.color;
              e.currentTarget.style.boxShadow = `0 0 15px ${step.color}40`;
              e.currentTarget.style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(123, 44, 255, 0.35)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.transform = 'none';
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '4px'
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-arcade)",
                  fontSize: '16px',
                  color: step.color,
                  letterSpacing: '0.04em'
                }}
              >
                {step.step}
              </span>
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: step.color,
                  boxShadow: `0 0 6px ${step.color}`
                }}
              />
            </div>

            <div
              style={{
                fontFamily: "var(--font-arcade)",
                fontSize: '11px',
                color: '#FFFFFF',
                letterSpacing: '0.04em',
                lineHeight: '1.4'
              }}
            >
              {step.title}
            </div>

            <div
              style={{
                fontSize: '13px',
                color: 'var(--text-secondary)',
                lineHeight: '1.4',
                marginTop: 'auto'
              }}
            >
              {step.desc}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
