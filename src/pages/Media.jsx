import React from 'react';
import SectionTitle from '../components/common/SectionTitle';
import MediaGallery from '../components/media/MediaGallery';

export default function Media() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <section
        style={{
          padding: '70px 0 50px',
          background: 'radial-gradient(ellipse at 50% 20%, rgba(36, 17, 61, 0.7) 0%, rgba(9, 7, 13, 0.95) 75%)',
          borderBottom: '1px solid rgba(123, 44, 255, 0.25)',
          textAlign: 'center'
        }}
      >
        <div className="site-container">
          <SectionTitle
            tag="MEDIA ARCHIVE"
            title="MEDIA &amp; VISUAL ARCHIVE"
            subtitle="Explore high-definition vector schematics, arena combat previews, hardware workbench snapshots, and developmental debug radars."
            accentColor="cyan"
          />
        </div>
      </section>

      <section className="arcade-section">
        <div className="site-container">
          <MediaGallery />
        </div>
      </section>
    </div>
  );
}
