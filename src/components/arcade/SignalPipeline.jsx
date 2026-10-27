import React, { useState, useEffect } from 'react';
import { pipelineNodes } from '../../data/hardwareData';
import GlowCard from '../common/GlowCard';
import { User, CircleDot, Cpu, Binary, Terminal, Keyboard, Box, Crosshair, ArrowRight, Play, Pause } from 'lucide-react';
import { useSound } from '../../context/SoundContext';

export default function SignalPipeline() {
  const [selectedNode, setSelectedNode] = useState(pipelineNodes[0]);
  const [activeSignalIndex, setActiveSignalIndex] = useState(0);
  const [isAutoAnimating, setIsAutoAnimating] = useState(true);
  const { playHover, playClick } = useSound();

  const iconMap = {
    User,
    CircleDot,
    Cpu,
    Binary,
    Terminal,
    Keyboard,
    Box,
    Crosshair
  };

  // Automated signal travel pulse through the pipeline
  useEffect(() => {
    if (!isAutoAnimating) return;
    const interval = setInterval(() => {
      setActiveSignalIndex((prev) => (prev + 1) % pipelineNodes.length);
    }, 1200);
    return () => clearInterval(interval);
  }, [isAutoAnimating]);

  const handleNodeClick = (node, idx) => {
    playClick();
    setSelectedNode(node);
    setActiveSignalIndex(idx);
    setIsAutoAnimating(false);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      {/* Controls & Signal Play/Pause header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#20E3FF',
              boxShadow: '0 0 10px #20E3FF'
            }}
          />
          <span style={{ fontFamily: "var(--font-arcade)", fontSize: '11px', color: '#20E3FF' }}>
            TACTILE SIGNAL FLOW • LIVE PULSE
          </span>
        </div>

        <button
          onClick={() => {
            playClick();
            setIsAutoAnimating((prev) => !prev);
          }}
          style={{
            background: 'rgba(36, 17, 61, 0.8)',
            border: '1px solid #7B2CFF',
            borderRadius: '4px',
            color: '#FFFFFF',
            padding: '6px 12px',
            fontFamily: "var(--font-mono)",
            fontSize: '11px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            cursor: 'pointer'
          }}
        >
          {isAutoAnimating ? <Pause size={13} color="#FFD23F" /> : <Play size={13} color="#20E3FF" />}
          <span>{isAutoAnimating ? 'PAUSE PULSE' : 'RESUME PULSE'}</span>
        </button>
      </div>

      {/* Interactive 8-Node Circuit Architecture Diagram */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
          gap: '12px',
          position: 'relative'
        }}
      >
        {pipelineNodes.map((node, idx) => {
          const Icon = iconMap[node.icon] || CircleDot;
          const isSelected = selectedNode.id === node.id;
          const isSignalActive = activeSignalIndex === idx;

          return (
            <div
              key={node.id}
              onClick={() => handleNodeClick(node, idx)}
              onMouseEnter={playHover}
              style={{
                background: isSignalActive
                  ? 'linear-gradient(180deg, #24113D 0%, #1c0e33 100%)'
                  : 'linear-gradient(180deg, #180e2b 0%, #120c1f 100%)',
                border: `2px solid ${isSignalActive ? node.color : isSelected ? '#FFFFFF' : 'rgba(123, 44, 255, 0.3)'}`,
                borderRadius: '8px',
                padding: '16px 10px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                gap: '8px',
                cursor: 'pointer',
                boxShadow: isSignalActive
                  ? `0 0 20px ${node.color}80, inset 0 0 12px ${node.color}40`
                  : isSelected
                  ? '0 0 15px rgba(255, 255, 255, 0.4)'
                  : 'none',
                transform: isSignalActive ? 'translateY(-4px)' : 'none',
                transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                position: 'relative'
              }}
            >
              {/* Step Badge */}
              <span
                style={{
                  fontFamily: "var(--font-arcade)",
                  fontSize: '9px',
                  color: isSignalActive ? '#FFD23F' : 'var(--text-muted)'
                }}
              >
                {node.step}
              </span>

              {/* Icon with Glowing Beacon */}
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'rgba(9, 7, 13, 0.8)',
                  border: `1px solid ${isSignalActive ? node.color : 'rgba(123, 44, 255, 0.4)'}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: isSignalActive ? `0 0 12px ${node.color}` : 'none'
                }}
              >
                <Icon size={18} color={isSignalActive ? node.color : '#FFFFFF'} />
              </div>

              {/* Label */}
              <div
                style={{
                  fontFamily: "var(--font-arcade)",
                  fontSize: '10px',
                  color: '#FFFFFF',
                  letterSpacing: '0.04em',
                  lineHeight: '1.3'
                }}
              >
                {node.label}
              </div>

              <div
                style={{
                  fontSize: '10px',
                  color: 'var(--text-secondary)',
                  fontFamily: "var(--font-mono)",
                  lineHeight: '1.2'
                }}
              >
                {node.category}
              </div>
            </div>
          );
        })}
      </div>

      {/* Deep-Dive Inspection Card for Selected / Active Node */}
      <GlowCard accentColor="purple">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span
                style={{
                  fontFamily: "var(--font-arcade)",
                  fontSize: '12px',
                  color: '#20E3FF',
                  padding: '4px 10px',
                  backgroundColor: 'rgba(32, 227, 255, 0.1)',
                  border: '1px solid #20E3FF',
                  borderRadius: '4px'
                }}
              >
                NODE {selectedNode.step} OF 08
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-arcade)",
                  fontSize: '18px',
                  color: '#FFFFFF',
                  letterSpacing: '0.04em'
                }}
              >
                {selectedNode.label}
              </h3>
            </div>

            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: '12px',
                color: '#FFD23F',
                background: 'rgba(36, 17, 61, 0.8)',
                padding: '4px 12px',
                borderRadius: '4px'
              }}
            >
              {selectedNode.category}
            </span>
          </div>

          <p style={{ fontSize: '16px', color: '#FFFFFF', fontWeight: '500', lineHeight: '1.5' }}>
            {selectedNode.shortDesc}
          </p>

          <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
            {selectedNode.detail}
          </p>

          <div
            style={{
              marginTop: '4px',
              padding: '12px 16px',
              borderRadius: '6px',
              backgroundColor: 'rgba(9, 7, 13, 0.7)',
              border: '1px solid rgba(123, 44, 255, 0.3)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              fontSize: '13px'
            }}
          >
            <span style={{ color: '#20E3FF', fontFamily: "var(--font-mono)", fontWeight: 'bold' }}>
              TECHNICAL IMPLEMENTATION:
            </span>
            <span style={{ color: '#E0DBEC' }}>{selectedNode.techNote}</span>
          </div>
        </div>
      </GlowCard>
    </div>
  );
}
