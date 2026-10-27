import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { useSound } from '../../context/SoundContext';

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  maxWidth = '760px'
}) {
  const { playClick } = useSound();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(9, 7, 13, 0.85)',
        backdropFilter: 'blur(8px)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          playClick();
          onClose();
        }
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth,
          backgroundColor: '#120c1f',
          border: '2px solid #7B2CFF',
          borderRadius: '10px',
          boxShadow: '0 0 35px rgba(123, 44, 255, 0.4), 0 20px 40px rgba(0, 0, 0, 0.8)',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          maxHeight: '90vh'
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: '16px 24px',
            borderBottom: '1px solid rgba(123, 44, 255, 0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: 'linear-gradient(90deg, #180e2b 0%, #24113D 100%)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: '#20E3FF',
                boxShadow: '0 0 8px #20E3FF'
              }}
            />
            <h3
              style={{
                fontFamily: "var(--font-arcade)",
                fontSize: '13px',
                color: '#FFFFFF',
                letterSpacing: '0.04em'
              }}
            >
              {title}
            </h3>
          </div>

          <button
            onClick={() => {
              playClick();
              onClose();
            }}
            style={{
              background: 'none',
              border: 'none',
              color: '#A59BC2',
              cursor: 'pointer',
              padding: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'color 0.15s ease'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#FF2DA6')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#A59BC2')}
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div
          style={{
            padding: '24px',
            overflowY: 'auto'
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
