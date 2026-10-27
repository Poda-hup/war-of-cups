import React from 'react';
import Modal from '../common/Modal';

export default function MediaModal({ item, onClose }) {
  if (!item) return null;

  return (
    <Modal isOpen={!!item} onClose={onClose} title={item.title} maxWidth="880px">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div
          style={{
            position: 'relative',
            borderRadius: '8px',
            overflow: 'hidden',
            backgroundColor: '#09070D',
            border: `1px solid ${item.accent || '#7B2CFF'}`
          }}
        >
          <img
            src={item.src}
            alt={item.title}
            style={{
              width: '100%',
              maxHeight: '480px',
              objectFit: 'contain',
              display: 'block'
            }}
          />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
          <span
            style={{
              fontFamily: "var(--font-arcade)",
              fontSize: '11px',
              color: item.accent || '#20E3FF',
              padding: '4px 10px',
              backgroundColor: 'rgba(36, 17, 61, 0.8)',
              borderRadius: '4px',
              border: `1px solid ${item.accent || '#20E3FF'}`
            }}
          >
            {item.badge}
          </span>

          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: '12px',
              color: 'var(--text-muted)'
            }}
          >
            CATEGORY: {item.category.toUpperCase()}
          </span>
        </div>

        <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
          {item.description}
        </p>
      </div>
    </Modal>
  );
}
