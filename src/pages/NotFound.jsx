import React from 'react';
import { Link } from 'react-router-dom';
import ArcadeButton from '../components/common/ArcadeButton';
import { RotateCcw, AlertTriangle } from 'lucide-react';

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: '70vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 24px',
        textAlign: 'center'
      }}
    >
      <div
        style={{
          width: '64px',
          height: '64px',
          borderRadius: '50%',
          backgroundColor: 'rgba(255, 45, 166, 0.15)',
          border: '2px solid #FF2DA6',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 0 20px rgba(255, 45, 166, 0.4)',
          marginBottom: '20px'
        }}
      >
        <AlertTriangle size={32} color="#FF2DA6" />
      </div>

      <h1
        style={{
          fontFamily: "var(--font-arcade)",
          fontSize: 'clamp(28px, 5vw, 48px)',
          color: '#FFFFFF',
          letterSpacing: '0.06em',
          textShadow: '0 0 20px rgba(255, 45, 166, 0.8)',
          marginBottom: '10px'
        }}
      >
        GAME OVER • 404
      </h1>

      <p
        style={{
          fontFamily: "var(--font-arcade)",
          fontSize: '12px',
          color: '#20E3FF',
          letterSpacing: '0.1em',
          marginBottom: '16px'
        }}
      >
        SECTOR NOT FOUND IN ARENA MEMORY
      </p>

      <p
        style={{
          fontSize: '16px',
          color: 'var(--text-secondary)',
          maxWidth: '480px',
          lineHeight: '1.6',
          marginBottom: '28px'
        }}
      >
        The coordinates you entered do not exist on the WAR OF CUPS arcade cabinet. Insert coin to return to safe territory.
      </p>

      <ArcadeButton as={Link} to="/" variant="primary" size="lg" icon={RotateCcw}>
        RETURN TO HOME BASE
      </ArcadeButton>
    </div>
  );
}
