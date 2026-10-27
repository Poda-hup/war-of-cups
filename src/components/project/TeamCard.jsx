import React from 'react';
import GlowCard from '../common/GlowCard';
import { User, Award, Shield } from 'lucide-react';

export default function TeamCard({ member }) {
  const isP1 = member.avatar === 'cup-p1';

  return (
    <GlowCard accentColor={isP1 ? 'cyan' : 'pink'}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', height: '100%' }}>
        {/* Header Avatar Placeholder */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '8px',
              backgroundColor: isP1 ? 'rgba(32, 227, 255, 0.15)' : 'rgba(255, 45, 166, 0.15)',
              border: `1.5px solid ${isP1 ? '#20E3FF' : '#FF2DA6'}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: `0 0 12px ${isP1 ? 'rgba(32, 227, 255, 0.3)' : 'rgba(255, 45, 166, 0.3)'}`
            }}
          >
            <User size={24} color={isP1 ? '#20E3FF' : '#FF2DA6'} />
          </div>

          <div>
            <h3
              style={{
                fontFamily: "var(--font-arcade)",
                fontSize: '13px',
                color: '#FFFFFF',
                letterSpacing: '0.04em'
              }}
            >
              {member.name}
            </h3>
            <div
              style={{
                fontSize: '13px',
                color: isP1 ? '#20E3FF' : '#FF2DA6',
                fontWeight: '600'
              }}
            >
              {member.role}
            </div>
          </div>
        </div>

        {/* Specialty Tag */}
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: '11px',
            color: '#FFD23F',
            backgroundColor: 'rgba(36, 17, 61, 0.6)',
            padding: '4px 10px',
            borderRadius: '4px',
            alignSelf: 'flex-start',
            border: '1px solid rgba(255, 210, 63, 0.3)'
          }}
        >
          {member.specialty}
        </div>

        {/* Bio */}
        <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.5', marginTop: 'auto' }}>
          {member.bio}
        </p>
      </div>
    </GlowCard>
  );
}
