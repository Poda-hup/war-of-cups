import React from 'react';
import { roundProgressionData } from '../../data/gameData';
import GlowCard from '../common/GlowCard';
import { Skull, FastForward, ShieldAlert, Award } from 'lucide-react';

export default function RoundProgression() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '20px'
      }}
    >
      {roundProgressionData.map((item, idx) => (
        <GlowCard key={item.round} accentColor={idx % 2 === 0 ? 'cyan' : 'pink'}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', height: '100%' }}>
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span
                style={{
                  fontFamily: "var(--font-arcade)",
                  fontSize: '15px',
                  color: item.color,
                  letterSpacing: '0.04em'
                }}
              >
                {item.round}
              </span>
              <span
                style={{
                  fontSize: '11px',
                  fontFamily: "var(--font-mono)",
                  padding: '2px 8px',
                  borderRadius: '4px',
                  background: 'rgba(36, 17, 61, 0.7)',
                  color: '#FFD23F'
                }}
              >
                {item.challenge}
              </span>
            </div>

            <div style={{ fontSize: '17px', fontWeight: '700', color: '#FFFFFF' }}>
              {item.subtitle}
            </div>

            {/* Metrics */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '8px',
                padding: '12px',
                borderRadius: '6px',
                background: 'rgba(9, 7, 13, 0.6)',
                border: '1px solid rgba(123, 44, 255, 0.2)'
              }}
            >
              <div>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontFamily: "var(--font-mono)" }}>
                  ENEMY SWARM
                </div>
                <div style={{ fontSize: '14px', color: '#FFFFFF', fontWeight: '600' }}>
                  {item.enemyCount}
                </div>
              </div>
              <div>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontFamily: "var(--font-mono)" }}>
                  VELOCITY
                </div>
                <div style={{ fontSize: '14px', color: '#FFFFFF', fontWeight: '600' }}>
                  {item.speed}
                </div>
              </div>
            </div>

            {/* Note */}
            <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.5', marginTop: 'auto' }}>
              {item.notes}
            </p>
          </div>
        </GlowCard>
      ))}
    </div>
  );
}
