import React, { useState } from 'react';
import { mediaCategories, mediaItems } from '../../data/mediaData';
import MediaModal from './MediaModal';
import GlowCard from '../common/GlowCard';
import { Maximize2, Image as ImageIcon } from 'lucide-react';
import { useSound } from '../../context/SoundContext';

export default function MediaGallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);
  const { playClick, playHover } = useSound();

  const filteredItems = activeCategory === 'all'
    ? mediaItems
    : mediaItems.filter((item) => item.category === activeCategory);

  const featuredItem = mediaItems[0];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
      {/* Category Filter Tabs */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '8px',
          justifyContent: 'center'
        }}
      >
        {mediaCategories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => {
                playClick();
                setActiveCategory(cat.id);
              }}
              onMouseEnter={playHover}
              style={{
                fontFamily: "var(--font-arcade)",
                fontSize: '11px',
                letterSpacing: '0.06em',
                padding: '10px 18px',
                borderRadius: '6px',
                border: `1px solid ${isActive ? '#20E3FF' : 'rgba(123, 44, 255, 0.4)'}`,
                backgroundColor: isActive ? '#7B2CFF' : 'rgba(24, 14, 43, 0.6)',
                color: isActive ? '#FFFFFF' : '#A59BC2',
                cursor: 'pointer',
                boxShadow: isActive ? '0 0 15px rgba(32, 227, 255, 0.4)' : 'none',
                transition: 'all 0.18s ease'
              }}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Featured Media Showcase (When viewing 'all' or 'gameplay') */}
      {activeCategory === 'all' && (
        <div
          onClick={() => {
            playClick();
            setSelectedItem(featuredItem);
          }}
          onMouseEnter={playHover}
          style={{ cursor: 'pointer' }}
        >
          <GlowCard accentColor="cyan">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px', alignItems: 'center' }}>
              <div
                style={{
                  position: 'relative',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  background: '#09070D',
                  border: '1px solid #20E3FF',
                  height: '280px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <img
                  src={featuredItem.src}
                  alt={featuredItem.title}
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    backgroundColor: 'rgba(9, 7, 13, 0.75)',
                    padding: '6px',
                    borderRadius: '4px',
                    border: '1px solid #20E3FF',
                    color: '#20E3FF',
                    display: 'flex'
                  }}
                >
                  <Maximize2 size={16} />
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <span
                  style={{
                    display: 'inline-flex',
                    alignSelf: 'flex-start',
                    fontFamily: "var(--font-arcade)",
                    fontSize: '10px',
                    color: '#20E3FF',
                    background: 'rgba(32, 227, 255, 0.1)',
                    border: '1px solid #20E3FF',
                    padding: '4px 10px',
                    borderRadius: '4px'
                  }}
                >
                  FEATURED SHOWCASE • {featuredItem.badge}
                </span>

                <h3
                  style={{
                    fontFamily: "var(--font-arcade)",
                    fontSize: '20px',
                    color: '#FFFFFF',
                    letterSpacing: '0.04em',
                    lineHeight: '1.4'
                  }}
                >
                  {featuredItem.title}
                </h3>

                <p style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: '1.6' }}>
                  {featuredItem.description}
                </p>

                <div
                  style={{
                    fontSize: '12px',
                    color: '#FFD23F',
                    fontFamily: "var(--font-mono)",
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <ImageIcon size={14} />
                  <span>CLICK TO EXPAND FULL VECTOR ARCHIVE</span>
                </div>
              </div>
            </div>
          </GlowCard>
        </div>
      )}

      {/* Media Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px'
        }}
      >
        {filteredItems.map((item) => (
          <div
            key={item.id}
            onClick={() => {
              playClick();
              setSelectedItem(item);
            }}
            onMouseEnter={playHover}
            style={{ cursor: 'pointer' }}
          >
            <GlowCard accentColor={item.category === 'arcade' ? 'yellow' : item.category === 'coop' ? 'pink' : 'purple'}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', height: '100%' }}>
                {/* Thumbnail Container */}
                <div
                  style={{
                    position: 'relative',
                    height: '180px',
                    borderRadius: '6px',
                    overflow: 'hidden',
                    backgroundColor: '#09070D',
                    border: '1px solid rgba(123, 44, 255, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '8px',
                      left: '8px',
                      backgroundColor: 'rgba(9, 7, 13, 0.85)',
                      padding: '3px 8px',
                      borderRadius: '4px',
                      fontFamily: "var(--font-arcade)",
                      fontSize: '9px',
                      color: item.accent || '#20E3FF',
                      border: `1px solid ${item.accent || '#20E3FF'}`
                    }}
                  >
                    {item.badge}
                  </div>
                </div>

                {/* Content */}
                <div style={{ fontSize: '15px', fontWeight: 'bold', color: '#FFFFFF', lineHeight: '1.3' }}>
                  {item.title}
                </div>

                <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.5', marginTop: 'auto' }}>
                  {item.description}
                </p>
              </div>
            </GlowCard>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <MediaModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </div>
  );
}
