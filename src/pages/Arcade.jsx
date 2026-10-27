import React from 'react';
import SectionTitle from '../components/common/SectionTitle';
import SignalPipeline from '../components/arcade/SignalPipeline';
import ArcadeCabinetVisual from '../components/arcade/ArcadeCabinetVisual';
import HardwareSpecs from '../components/arcade/HardwareSpecs';

export default function Arcade() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {/* Header (Section 23) */}
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
            tag="HARDWARE INTEGRATION"
            title="THE ARCADE EXPERIENCE"
            subtitle="MORE THAN A GAME. WAR OF CUPS bridges the physical and digital worlds through custom arcade controller hardware, embedded Arduino microcontrollers, and a high-speed Python serial translation layer."
            accentColor="yellow"
          />
        </div>
      </section>

      {/* ARCADE CABINET SHOWCASE (Section 23) */}
      <section className="arcade-section">
        <div className="site-container">
          <SectionTitle
            tag="PHYSICAL CABINET"
            title="THE DUAL-PLAYER CABINET"
            subtitle="Equipped with 18 tactile switches, 16 status LEDs, dual Arduino Uno microcontrollers, and illuminated cabinet styling."
            accentColor="purple"
          />

          <ArcadeCabinetVisual />
        </div>
      </section>

      {/* FROM BUTTON TO GAME: CENTERPIECE (Section 24) */}
      <section className="arcade-section" style={{ backgroundColor: 'rgba(18, 12, 31, 0.5)' }}>
        <div className="site-container">
          <SectionTitle
            tag="SIGNAL TRANSMISSION"
            title="FROM BUTTON TO GAME"
            subtitle="Trace the end-to-end signal lifecycle: from human tactile actuation on the arcade deck to instantaneous in-engine Unity 6 gameplay execution."
            accentColor="cyan"
          />

          <SignalPipeline />
        </div>
      </section>

      {/* HARDWARE SPECIFICATIONS & ACADEMIC THESIS (Sections 25 & 26) */}
      <section className="arcade-section">
        <div className="site-container">
          <SectionTitle
            tag="TECHNICAL ARCHITECTURE"
            title="SYSTEM ARCHITECTURE &amp; SPECS"
            subtitle="Comprehensive breakdown of physical components, microcontroller firmware, and academic integration rationale."
            accentColor="pink"
          />

          <HardwareSpecs />
        </div>
      </section>
    </div>
  );
}
