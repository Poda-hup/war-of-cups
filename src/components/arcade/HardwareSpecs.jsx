import React from 'react';
import { hardwareSpecs, academicSummary, techStackBadges } from '../../data/hardwareData';
import GlowCard from '../common/GlowCard';
import TechBadge from '../common/TechBadge';
import { Cpu, BookOpen, Layers } from 'lucide-react';

export default function HardwareSpecs() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      {/* Specifications Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '16px'
        }}
      >
        {hardwareSpecs.map((item, idx) => (
          <div
            key={idx}
            style={{
              backgroundColor: 'rgba(24, 14, 43, 0.65)',
              border: '1px solid rgba(123, 44, 255, 0.3)',
              borderRadius: '8px',
              padding: '16px',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px'
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: '11px',
                color: '#20E3FF',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}
            >
              {item.label}
            </span>
            <span
              style={{
                fontSize: '14px',
                fontWeight: '600',
                color: '#FFFFFF',
                lineHeight: '1.4'
              }}
            >
              {item.value}
            </span>
          </div>
        ))}
      </div>

      {/* Academic Integration Explanation */}
      <GlowCard accentColor="purple">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <BookOpen size={20} color="#FFD23F" />
            <h3
              style={{
                fontFamily: "var(--font-arcade)",
                fontSize: '14px',
                color: '#FFFFFF',
                letterSpacing: '0.04em'
              }}
            >
              {academicSummary.heading}
            </h3>
          </div>

          <p
            style={{
              fontSize: '15px',
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              textAlign: 'justify'
            }}
          >
            {academicSummary.body}
          </p>
        </div>
      </GlowCard>

      {/* Verified Technology Stack Badges */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
          <Layers size={18} color="#20E3FF" />
          <h3
            style={{
              fontFamily: "var(--font-arcade)",
              fontSize: '13px',
              color: '#FFFFFF',
              letterSpacing: '0.04em'
            }}
          >
            VERIFIED TECHNOLOGY STACK
          </h3>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '12px'
          }}
        >
          {techStackBadges.map((badge) => (
            <TechBadge
              key={badge.name}
              name={badge.name}
              category={badge.category}
              desc={badge.desc}
              color={badge.color}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
