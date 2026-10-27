import React from 'react';
import { useSound } from '../../context/SoundContext';
import cabinetImg from './arcade-cabinet.jpg';

export default function ArcadeCabinetVisual() {
  const { playHover, playClick } = useSound();

  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        padding: '0',
        borderRadius: '20px',
        overflow: 'hidden',
        border: '1.5px solid rgba(123, 44, 255, 0.6)',
        boxShadow: '0 0 35px rgba(123, 44, 255, 0.4)'
      }}
    >
      <img
        src={cabinetImg}
        alt="WAR OF CUPS Arcade Cabinet"
        style={{
          width: '100%',
          height: '100%',
          maxHeight: '580px',
          objectFit: 'cover',
          display: 'block',
          borderRadius: '18px'
        }}
      />
    </div>
  );
}