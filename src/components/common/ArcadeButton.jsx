import React from 'react';
import { useSound } from '../../context/SoundContext';

export default function ArcadeButton({
  children,
  onClick,
  variant = 'primary', // 'primary', 'secondary', 'accent', 'danger'
  size = 'md', // 'sm', 'md', 'lg'
  icon: Icon,
  disabled = false,
  className = '',
  as = 'button',
  href,
  target,
  rel,
  download,
  type = 'button',
  ...rest
}) {
  const { playHover, playClick } = useSound();

  const handleMouseEnter = () => {
    if (!disabled) {
      playHover();
    }
  };

  const handleClick = (e) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    playClick();
    if (onClick) {
      onClick(e);
    }
  };

  // Variant styling
  const variantStyles = {
    primary: {
      background: 'linear-gradient(135deg, #7B2CFF 0%, #4D12B8 100%)',
      borderColor: '#20E3FF',
      boxShadow: '0 0 15px rgba(32, 227, 255, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
      color: '#FFFFFF',
      textShadow: '0 0 8px rgba(32, 227, 255, 0.8)'
    },
    secondary: {
      background: 'linear-gradient(135deg, #1f1238 0%, #120c1f 100%)',
      borderColor: '#7B2CFF',
      boxShadow: '0 0 12px rgba(123, 44, 255, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
      color: '#F0EDF7',
      textShadow: 'none'
    },
    accent: {
      background: 'linear-gradient(135deg, #FF2DA6 0%, #B81270 100%)',
      borderColor: '#FFD23F',
      boxShadow: '0 0 15px rgba(255, 45, 166, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
      color: '#FFFFFF',
      textShadow: '0 0 8px rgba(255, 210, 63, 0.8)'
    },
    cyan: {
      background: 'linear-gradient(135deg, #20E3FF 0%, #0BB5CD 100%)',
      borderColor: '#FFFFFF',
      boxShadow: '0 0 15px rgba(32, 227, 255, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.5)',
      color: '#09070D',
      textShadow: 'none',
      fontWeight: '800'
    }
  };

  const sizeStyles = {
    sm: { padding: '8px 14px', fontSize: '11px', gap: '6px' },
    md: { padding: '12px 22px', fontSize: '13px', gap: '8px' },
    lg: { padding: '16px 30px', fontSize: '15px', gap: '10px' }
  };

  const currentVariant = variantStyles[variant] || variantStyles.primary;
  const currentSize = sizeStyles[size] || sizeStyles.md;

  const style = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "var(--font-arcade)",
    letterSpacing: '0.05em',
    textDecoration: 'none',
    border: '2px solid',
    borderRadius: '6px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    transition: 'all 0.18s cubic-bezier(0.16, 1, 0.3, 1)',
    position: 'relative',
    userSelect: 'none',
    ...currentVariant,
    ...currentSize
  };

  const Component = as;

  return (
    <Component
      style={style}
      className={`arcade-btn ${className}`}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      disabled={disabled}
      href={href}
      target={target}
      rel={rel}
      download={download}
      type={as === 'button' ? type : undefined}
      {...rest}
    >
      {Icon && <Icon size={size === 'lg' ? 18 : 15} style={{ flexShrink: 0 }} />}
      <span>{children}</span>
    </Component>
  );
}
