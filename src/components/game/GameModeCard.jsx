import React from 'react';
import GlowCard from '../common/GlowCard';
import { User, Users, CheckCircle2 } from 'lucide-react';

export default function GameModeCard({ mode }) {
  const isCoop = mode.id === 'coop';

  return (
    <GlowCard accentColor={isCoop ? 'pink' : 'cyan'}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', height: '100%' }}>
        {/* Header Badge */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 10px',
              borderRadius: '4px',
              backgroundColor: isCoop ? 'rgba(255, 45, 166, 0.15)' : 'rgba(32, 227, 255, 0.15)',
              border: `1px solid ${isCoop ? '#FF2DA6' : '#20E3FF'}`,
              fontFamily: "var(--font-arcade)",
              fontSize: '10px',
              color: isCoop ? '#FF2DA6' : '#20E3FF',
              letterSpacing: '0.06em'
            }}
          >
            {isCoop ? <Users size={14} /> : <User size={14} />}
            <span>{mode.badge}</span>
          </div>

          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: '11px',
              color: '#FFD23F',
              background: 'rgba(36, 17, 61, 0.6)',
              padding: '2px 8px',
              borderRadius: '3px'
            }}
          >
            OFFLINE SYSTEM
          </span>
        </div>

        {/* Title */}
        <div>
          <h3
            style={{
              fontFamily: "var(--font-arcade)",
              fontSize: '20px',
              color: '#FFFFFF',
              letterSpacing: '0.04em',
              marginBottom: '6px'
            }}
          >
            {mode.title}
          </h3>
          <div style={{ color: isCoop ? '#FF2DA6' : '#20E3FF', fontSize: '15px', fontWeight: '600' }}>
            {mode.subtitle}
          </div>
        </div>

        {/* Summary Description */}
        <p style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: '1.5' }}>
          {mode.summary}
        </p>

        {/* Rules Checklist */}
        <div
          style={{
            marginTop: 'auto',
            paddingTop: '16px',
            borderTop: '1px solid rgba(123, 44, 255, 0.25)',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px'
          }}
        >
          {mode.rules.map((rule, idx) => (
            <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13px', color: '#E0DBEC' }}>
              <CheckCircle2 size={16} color={mode.accent} style={{ flexShrink: 0, marginTop: '2px' }} />
              <span style={{ lineHeight: '1.4' }}>{rule}</span>
            </div>
          ))}
        </div>
      </div>
    </GlowCard>
  );
}
