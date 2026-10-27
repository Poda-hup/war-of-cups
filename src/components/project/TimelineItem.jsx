import React from 'react';
import GlowCard from '../common/GlowCard';
import { Calendar, CheckCircle2 } from 'lucide-react';

export default function TimelineItem({ item, index, isLast }) {
  const isEven = index % 2 === 0;

  return (
    <div
      style={{
        display: 'flex',
        gap: '24px',
        position: 'relative'
      }}
    >
      {/* Visual Marker Spine */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          flexShrink: 0
        }}
      >
        {/* Glowing Node Dot */}
        <div
          style={{
            width: '28px',
            height: '28px',
            borderRadius: '50%',
            backgroundColor: '#09070D',
            border: '2px solid #20E3FF',
            boxShadow: '0 0 12px rgba(32, 227, 255, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2
          }}
        >
          <span
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              backgroundColor: '#FF2DA6',
              boxShadow: '0 0 6px #FF2DA6'
            }}
          />
        </div>

        {/* Connecting Vertical Line */}
        {!isLast && (
          <div
            style={{
              width: '2px',
              flexGrow: 1,
              background: 'linear-gradient(180deg, #20E3FF 0%, #7B2CFF 100%)',
              margin: '4px 0'
            }}
          />
        )}
      </div>

      {/* Milestone Content Card */}
      <div style={{ flexGrow: 1, paddingBottom: isLast ? '0' : '36px' }}>
        <GlowCard accentColor={isEven ? 'purple' : 'cyan'}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span
                  style={{
                    fontFamily: "var(--font-arcade)",
                    fontSize: '11px',
                    color: '#20E3FF',
                    padding: '2px 8px',
                    background: 'rgba(32, 227, 255, 0.1)',
                    borderRadius: '4px',
                    border: '1px solid rgba(32, 227, 255, 0.3)'
                  }}
                >
                  {item.phase}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: '12px',
                    color: 'var(--text-muted)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  <Calendar size={13} />
                  {item.date}
                </span>
              </div>
            </div>

            <h3
              style={{
                fontFamily: "var(--font-arcade)",
                fontSize: '16px',
                color: '#FFFFFF',
                letterSpacing: '0.04em'
              }}
            >
              {item.title}
            </h3>

            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              {item.description}
            </p>

            <div
              style={{
                marginTop: '4px',
                padding: '10px 14px',
                borderRadius: '6px',
                backgroundColor: 'rgba(9, 7, 13, 0.7)',
                border: '1px solid rgba(123, 44, 255, 0.25)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '13px'
              }}
            >
              <CheckCircle2 size={16} color="#FFD23F" style={{ flexShrink: 0 }} />
              <span style={{ color: '#E0DBEC' }}>
                <strong style={{ color: '#FFD23F' }}>Key Deliverable: </strong>
                {item.keyOutcome}
              </span>
            </div>
          </div>
        </GlowCard>
      </div>
    </div>
  );
}
