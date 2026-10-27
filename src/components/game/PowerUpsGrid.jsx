import React from 'react';
import { powerUps } from '../../data/gameData';
import GlowCard from '../common/GlowCard';
import { Heart, Shield, CheckCircle2 } from 'lucide-react';

export default function PowerUpsGrid() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      {/* 2 Power Up Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px'
        }}
      >
        {powerUps.map((item) => {
          const isHealth = item.id === 'health-potion';
          const Icon = isHealth ? Heart : Shield;

          return (
            <GlowCard key={item.id} accentColor={isHealth ? 'pink' : 'cyan'}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', height: '100%' }}>
                {/* Header */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '8px',
                      background: isHealth ? 'rgba(255, 45, 166, 0.15)' : 'rgba(32, 227, 255, 0.15)',
                      border: `1px solid ${item.accent}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: `0 0 12px ${item.accent}40`
                    }}
                  >
                    <Icon size={22} color={item.accent} />
                  </div>

                  <span
                    style={{
                      fontFamily: "var(--font-arcade)",
                      fontSize: '10px',
                      padding: '4px 10px',
                      borderRadius: '4px',
                      backgroundColor: 'rgba(36, 17, 61, 0.8)',
                      border: `1px solid ${item.accent}`,
                      color: item.accent,
                      letterSpacing: '0.06em'
                    }}
                  >
                    {item.capacity}
                  </span>
                </div>

                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-arcade)",
                      fontSize: '18px',
                      color: '#FFFFFF',
                      letterSpacing: '0.04em',
                      marginBottom: '4px'
                    }}
                  >
                    {item.name}
                  </h3>
                  <div style={{ color: item.accent, fontSize: '13px', fontFamily: "var(--font-mono)", fontWeight: '600' }}>
                    {item.type}
                  </div>
                </div>

                <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.6' }}>
                  {item.description}
                </p>

                {/* Tactical Absorption Rule */}
                <div
                  style={{
                    background: 'rgba(9, 7, 13, 0.65)',
                    border: '1px solid rgba(123, 44, 255, 0.25)',
                    borderRadius: '6px',
                    padding: '12px',
                    fontSize: '13px',
                    color: '#E0DBEC',
                    lineHeight: '1.4'
                  }}
                >
                  <strong style={{ color: '#FFD23F' }}>Combat Rule: </strong>
                  {item.mechanics}
                </div>

                {/* Key Trigger */}
                <div
                  style={{
                    marginTop: 'auto',
                    paddingTop: '12px',
                    borderTop: '1px solid rgba(123, 44, 255, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <span style={{ fontSize: '12px', color: 'var(--text-muted)', fontFamily: "var(--font-mono)" }}>
                    ACTIVATION KEYS:
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-arcade)",
                      fontSize: '10px',
                      color: '#FFFFFF',
                      background: 'rgba(24, 14, 43, 0.9)',
                      padding: '4px 8px',
                      borderRadius: '4px',
                      border: '1px solid rgba(123, 44, 255, 0.4)'
                    }}
                  >
                    {item.usageKey}
                  </span>
                </div>
              </div>
            </GlowCard>
          );
        })}
      </div>

      {/* 3-Step Lifecycle: Collect -> Store -> Activate */}
      <div
        style={{
          background: 'linear-gradient(180deg, #180e2b 0%, #120c1f 100%)',
          border: '1px solid rgba(123, 44, 255, 0.3)',
          borderRadius: '8px',
          padding: '24px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '20px',
          alignItems: 'center'
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontFamily: "var(--font-arcade)", fontSize: '13px', color: '#20E3FF', marginBottom: '6px' }}>
            01 • COLLECT
          </div>
          <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
            Defeated enemies have a chance to drop a glowing potion flask onto the arena ground.
          </p>
        </div>

        <div style={{ textAlign: 'center' }}>
          <div style={{ fontFamily: "var(--font-arcade)", fontSize: '13px', color: '#FFD23F', marginBottom: '6px' }}>
            02 • STORE
          </div>
          <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
            Each player can carry at most ONE health potion and ONE shield potion in their active belt inventory.
          </p>
        </div>

        <div style={{ textAlign: 'center' }}>
          <div style={{ fontFamily: "var(--font-arcade)", fontSize: '13px', color: '#FF2DA6', marginBottom: '6px' }}>
            03 • ACTIVATE
          </div>
          <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
            Instantly consume on command via keyboard or the dedicated physical arcade buttons (BTN2/BTN4).
          </p>
        </div>
      </div>
    </div>
  );
}
