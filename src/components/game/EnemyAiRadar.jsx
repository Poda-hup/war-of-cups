import React, { useState, useEffect, useRef } from 'react';
import GlowCard from '../common/GlowCard';
import { enemyAiMechanics } from '../../data/gameData';
import { Target, Shield, Compass, RotateCcw } from 'lucide-react';

export default function EnemyAiRadar() {
  // Arena positions (0 to 100 scale inside SVG viewBox 500x350)
  const [p1Pos, setP1Pos] = useState({ x: 120, y: 140 });
  const [p2Pos, setP2Pos] = useState({ x: 380, y: 240 });
  const enemyPos = { x: 250, y: 175 }; // Enemy is central

  // Calculate Euclidean distances
  const distP1 = Math.round(Math.sqrt(Math.pow(p1Pos.x - enemyPos.x, 2) + Math.pow(p1Pos.y - enemyPos.y, 2)));
  const distP2 = Math.round(Math.sqrt(Math.pow(p2Pos.x - enemyPos.x, 2) + Math.pow(p2Pos.y - enemyPos.y, 2)));

  const closestTarget = distP1 <= distP2 ? 'P1' : 'P2';
  const targetPos = closestTarget === 'P1' ? p1Pos : p2Pos;
  const targetDist = closestTarget === 'P1' ? distP1 : distP2;

  // 8 raycast directions (lengths 45px)
  const rays = [
    { angle: 0, dx: 0, dy: -45, label: "0° N" },
    { angle: 45, dx: 32, dy: -32, label: "45° NE" },
    { angle: 90, dx: 45, dy: 0, label: "90° E" },
    { angle: 135, dx: 32, dy: 32, label: "135° SE" },
    { angle: 180, dx: 0, dy: 45, label: "180° S" },
    { angle: 225, dx: -32, dy: 32, label: "225° SW" },
    { angle: 270, dx: -45, dy: 0, label: "270° W" },
    { angle: 315, dx: -32, dy: -32, label: "315° NW" }
  ];

  // Obstacle box at (225, 75, width 50, height 40)
  const obstacle = { x: 225, y: 75, w: 50, h: 40 };

  const handleSvgClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = ((e.clientX - rect.left) / rect.width) * 500;
    const clickY = ((e.clientY - rect.top) / rect.height) * 350;

    // Shift the closer player toward click location
    const dP1 = Math.hypot(clickX - p1Pos.x, clickY - p1Pos.y);
    const dP2 = Math.hypot(clickX - p2Pos.x, clickY - p2Pos.y);

    if (dP1 < dP2) {
      setP1Pos({ x: Math.round(clickX), y: Math.round(clickY) });
    } else {
      setP2Pos({ x: Math.round(clickX), y: Math.round(clickY) });
    }
  };

  const resetPositions = () => {
    setP1Pos({ x: 120, y: 140 });
    setP2Pos({ x: 380, y: 240 });
  };

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '24px',
        alignItems: 'center'
      }}
    >
      {/* Interactive AI Simulation Radar */}
      <GlowCard accentColor="pink">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: '#FF3366',
                boxShadow: '0 0 8px #FF3366'
              }}
            />
            <span style={{ fontFamily: "var(--font-arcade)", fontSize: '11px', color: '#FFFFFF' }}>
              LIVE ENEMY AI RADAR
            </span>
          </div>

          <button
            onClick={resetPositions}
            style={{
              background: 'rgba(36, 17, 61, 0.8)',
              border: '1px solid #7B2CFF',
              color: '#A59BC2',
              borderRadius: '4px',
              padding: '4px 8px',
              fontSize: '11px',
              fontFamily: "var(--font-mono)",
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              cursor: 'pointer'
            }}
          >
            <RotateCcw size={12} />
            <span>RESET</span>
          </button>
        </div>

        {/* SVG Interactive Canvas */}
        <div
          style={{
            position: 'relative',
            borderRadius: '8px',
            overflow: 'hidden',
            border: '1px solid rgba(123, 44, 255, 0.4)',
            backgroundColor: '#09070D',
            cursor: 'crosshair'
          }}
        >
          <svg
            viewBox="0 0 500 350"
            width="100%"
            height="auto"
            onClick={handleSvgClick}
            style={{ display: 'block' }}
          >
            <defs>
              <pattern id="radarGrid" width="25" height="25" patternUnits="userSpaceOnUse">
                <path d="M 25 0 L 0 0 0 25" fill="none" stroke="rgba(123, 44, 255, 0.15)" strokeWidth="0.8" />
              </pattern>
            </defs>

            <rect width="500" height="350" fill="url(#radarGrid)" />

            {/* Radar concentric range circles */}
            <circle cx={enemyPos.x} cy={enemyPos.y} r="60" fill="none" stroke="#7B2CFF" strokeWidth="0.8" strokeDasharray="3 4" opacity="0.4" />
            <circle cx={enemyPos.x} cy={enemyPos.y} r="120" fill="none" stroke="#7B2CFF" strokeWidth="0.8" strokeDasharray="3 4" opacity="0.3" />
            <circle cx={enemyPos.x} cy={enemyPos.y} r="180" fill="none" stroke="#7B2CFF" strokeWidth="0.8" strokeDasharray="3 4" opacity="0.2" />

            {/* Arena Obstacle Box */}
            <rect
              x={obstacle.x}
              y={obstacle.y}
              width={obstacle.w}
              height={obstacle.h}
              rx="4"
              fill="#24113D"
              stroke="#7B2CFF"
              strokeWidth="1.5"
            />
            <text x={obstacle.x + 25} y={obstacle.y + 24} textAnchor="middle" fill="#A59BC2" fontFamily="'Share Tech Mono', monospace" fontSize="10">
              OBSTACLE
            </text>

            {/* Line to P1 (Subtle / Inactive if further) */}
            <line
              x1={enemyPos.x}
              y1={enemyPos.y}
              x2={p1Pos.x}
              y2={p1Pos.y}
              stroke="#20E3FF"
              strokeWidth={closestTarget === 'P1' ? '2.5' : '1'}
              strokeDasharray={closestTarget === 'P1' ? 'none' : '4 4'}
              opacity={closestTarget === 'P1' ? 1 : 0.3}
            />

            {/* Line to P2 (Subtle / Inactive if further) */}
            <line
              x1={enemyPos.x}
              y1={enemyPos.y}
              x2={p2Pos.x}
              y2={p2Pos.y}
              stroke="#FF2DA6"
              strokeWidth={closestTarget === 'P2' ? '2.5' : '1'}
              strokeDasharray={closestTarget === 'P2' ? 'none' : '4 4'}
              opacity={closestTarget === 'P2' ? 1 : 0.3}
            />

            {/* 8-Direction Raycasts from Enemy */}
            {rays.map((ray) => {
              const rayEndX = enemyPos.x + ray.dx;
              const rayEndY = enemyPos.y + ray.dy;
              // Check if ray points toward obstacle
              const isHit = ray.angle === 0;

              return (
                <g key={ray.angle}>
                  <line
                    x1={enemyPos.x}
                    y1={enemyPos.y}
                    x2={rayEndX}
                    y2={rayEndY}
                    stroke={isHit ? '#FFD23F' : '#20E3FF'}
                    strokeWidth={isHit ? 2 : 1}
                    strokeDasharray={isHit ? '2 2' : 'none'}
                    opacity={0.7}
                  />
                  <circle cx={rayEndX} cy={rayEndY} r={isHit ? 3.5 : 2} fill={isHit ? '#FFD23F' : '#20E3FF'} />
                </g>
              );
            })}

            {/* Active Lock-on Reticle on Closest Target */}
            <circle
              cx={targetPos.x}
              cy={targetPos.y}
              r="22"
              fill="none"
              stroke={closestTarget === 'P1' ? '#20E3FF' : '#FF2DA6'}
              strokeWidth="2"
              strokeDasharray="4 4"
            />

            {/* Player 1 Node */}
            <g transform={`translate(${p1Pos.x}, ${p1Pos.y})`}>
              <circle r="14" fill="#120c1f" stroke="#20E3FF" strokeWidth="2.5" />
              <circle r="7" fill="#20E3FF" />
              <text y="24" textAnchor="middle" fill="#20E3FF" fontFamily="'Press Start 2P', monospace" fontSize="8">
                P1 ({distP1}px)
              </text>
            </g>

            {/* Player 2 Node */}
            <g transform={`translate(${p2Pos.x}, ${p2Pos.y})`}>
              <circle r="14" fill="#120c1f" stroke="#FF2DA6" strokeWidth="2.5" />
              <circle r="7" fill="#FF2DA6" />
              <text y="24" textAnchor="middle" fill="#FF2DA6" fontFamily="'Press Start 2P', monospace" fontSize="8">
                P2 ({distP2}px)
              </text>
            </g>

            {/* Central Enemy Node */}
            <g transform={`translate(${enemyPos.x}, ${enemyPos.y})`}>
              <circle r="16" fill="#FF3366" stroke="#FFFFFF" strokeWidth="2" />
              <text y="4" textAnchor="middle" fill="#FFFFFF" fontFamily="'Press Start 2P', monospace" fontSize="8">
                AI
              </text>
            </g>
          </svg>
        </div>

        {/* Dynamic Diagnostics Footer */}
        <div
          style={{
            marginTop: '14px',
            padding: '12px',
            borderRadius: '6px',
            backgroundColor: 'rgba(9, 7, 13, 0.8)',
            border: '1px solid rgba(123, 44, 255, 0.3)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '10px'
          }}
        >
          <div style={{ fontSize: '12px', fontFamily: "var(--font-mono)" }}>
            <span style={{ color: 'var(--text-muted)' }}>TARGET ACQUIRED: </span>
            <span
              style={{
                color: closestTarget === 'P1' ? '#20E3FF' : '#FF2DA6',
                fontWeight: 'bold'
              }}
            >
              {closestTarget === 'P1' ? 'PLAYER 1 (KNIGHT)' : 'PLAYER 2 (BERSERKER)'}
            </span>
          </div>

          <div style={{ fontSize: '12px', fontFamily: "var(--font-mono)", color: '#FFD23F' }}>
            LOCK DISTANCE: {targetDist} px
          </div>
        </div>
        <div style={{ fontSize: '11px', color: 'var(--text-muted)', textAlign: 'center', marginTop: '6px' }}>
          * Click anywhere on the radar above to reposition players and watch AI dynamically switch targets!
        </div>
      </GlowCard>

      {/* AI Systems Explanation */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontFamily: "var(--font-arcade)",
              fontSize: '11px',
              color: '#FF2DA6',
              marginBottom: '8px'
            }}
          >
            <Compass size={14} />
            <span>AI PURSUIT ARCHITECTURE</span>
          </div>
          <h3
            style={{
              fontFamily: "var(--font-arcade)",
              fontSize: '22px',
              color: '#FFFFFF',
              letterSpacing: '0.04em',
              marginBottom: '10px'
            }}
          >
            CLOSEST-PLAYER TARGETING &amp; 8-DIR RAYCASTING
          </h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: '1.6' }}>
            In WAR OF CUPS, enemy mobs do not blindly rush along fixed grid paths. Instead, the custom Unity 6 AI continuously calculates Euclidean vector distances to both active players and dynamically pivots pursuit toward whichever player poses the immediate closest proximity.
          </p>
        </div>

        {/* Pipeline Steps */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {enemyAiMechanics.pipeline.map((step, idx) => (
            <div
              key={idx}
              style={{
                background: 'rgba(24, 14, 43, 0.6)',
                border: '1px solid rgba(123, 44, 255, 0.3)',
                borderRadius: '6px',
                padding: '12px 16px',
                display: 'flex',
                gap: '12px',
                alignItems: 'flex-start'
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-arcade)",
                  fontSize: '11px',
                  color: '#20E3FF',
                  padding: '2px 6px',
                  background: 'rgba(32, 227, 255, 0.1)',
                  borderRadius: '3px'
                }}
              >
                0{idx + 1}
              </span>
              <div>
                <div style={{ fontSize: '14px', fontWeight: '700', color: '#FFFFFF', marginBottom: '2px' }}>
                  {step.title}
                </div>
                <div style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
                  {step.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
