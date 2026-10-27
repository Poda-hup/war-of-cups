import React from 'react';
import { Link } from 'react-router-dom';
import { projectMeta, academy, projectType, supervisors, teamMembers } from '../data/projectData';
import { coreFeatures } from '../data/gameData';
import SectionTitle from '../components/common/SectionTitle';
import GlowCard from '../components/common/GlowCard';
import ArcadeButton from '../components/common/ArcadeButton';
import ArcadeCabinetVisual from '../components/arcade/ArcadeCabinetVisual';
import cabinetImg from '../components/arcade/arcade-cabinet.jpg';
import arcade2 from '../components/arcade/arcade2.jpg';
import { 
  Gamepad2, 
  ShieldAlert, 
  Users, 
  Zap, 
  Download, 
  ArrowRight, 
  Cpu, 
  CheckCircle2, 
  GraduationCap, 
  Award, 
  Code2, 
  FileText, 
  User 
} from 'lucide-react';
import { useSound } from '../context/SoundContext';

// دالة تحويل اسم الأيقونة إلى المكوّن المباشر
const getIconComponent = (iconName) => {
  const icons = {
    GraduationCap,
    Award,
    Gamepad2,
    Code2,
    Cpu,
    FileText,
    ShieldAlert,
    Users,
    Zap
  };
  return icons[iconName] || User;
};

// كارت العضو (للمشرفين والطلاب)
function CustomMemberCard({ member, isSupervisor = false }) {
  const IconComponent = getIconComponent(member.icon);

  return (
    <div
      style={{
        background: 'rgba(15, 12, 29, 0.75)',
        border: `1.5px solid ${member.color}40`,
        borderRadius: '16px',
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        backdropFilter: 'blur(10px)',
        boxShadow: `0 8px 32px 0 rgba(0, 0, 0, 0.37)`,
        transition: 'transform 0.3s ease, border-color 0.3s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = member.color;
        e.currentTarget.style.transform = 'translateY(-4px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = `${member.color}40`;
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '-30px',
          right: '-30px',
          width: '100px',
          height: '100px',
          background: member.color,
          filter: 'blur(60px)',
          opacity: 0.15,
          pointerEvents: 'none'
        }}
      />

      {/* Avatar Container */}
      <div
        style={{
          width: isSupervisor ? '90px' : '80px',
          height: isSupervisor ? '90px' : '80px',
          borderRadius: '50%',
          border: `2px solid ${member.color}`,
          padding: '4px',
          background: 'rgba(20, 15, 38, 0.9)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '16px',
          boxShadow: `0 0 16px ${member.color}40`
        }}
      >
        <IconComponent size={isSupervisor ? 36 : 32} color={member.color} />
      </div>

      {/* Tag Badge */}
      <span
        style={{
          fontFamily: 'var(--font-arcade, monospace)',
          fontSize: '10px',
          letterSpacing: '0.05em',
          color: member.color,
          background: `${member.color}15`,
          border: `1px solid ${member.color}40`,
          padding: '3px 10px',
          borderRadius: '20px',
          marginBottom: '12px',
          textTransform: 'uppercase'
        }}
      >
        {member.tag}
      </span>

      {/* Name */}
      <h3
        style={{
          fontFamily: 'var(--font-arcade, sans-serif)',
          fontSize: isSupervisor ? '18px' : '16px',
          color: '#FFFFFF',
          margin: '0 0 6px 0',
          fontWeight: '700'
        }}
      >
        {member.name}
      </h3>

      {/* Role */}
      <p
        style={{
          fontSize: '13px',
          color: member.color,
          fontWeight: '600',
          margin: '0 0 12px 0'
        }}
      >
        {member.role}
      </p>

      {/* Bio / Description */}
      <p
        style={{
          fontSize: '13px',
          color: '#a1a1aa',
          lineHeight: '1.5',
          margin: 0,
          marginTop: 'auto'
        }}
      >
        {member.description}
      </p>
    </div>
  );
}

export default function Home() {
  const { playClick, playHover } = useSound();

  const iconMap = {
    ShieldAlert,
    Users,
    Gamepad2,
    Zap
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      
      {/* HERO SECTION */}
      <section
        style={{
          position: 'relative',
          padding: '80px 0 60px',
          overflow: 'hidden',
          borderBottom: '1px solid rgba(123, 44, 255, 0.25)',
          background: 'radial-gradient(ellipse at 50% 20%, rgba(36, 17, 61, 0.7) 0%, rgba(9, 7, 13, 0.98) 75%)'
        }}
      >
        <div className="site-container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '40px',
              alignItems: 'center'
            }}
          >
            {/* Left Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                <span style={{ padding: '4px 10px', borderRadius: '4px', background: 'rgba(32, 227, 255, 0.12)', border: '1px solid #20E3FF', fontFamily: "var(--font-arcade)", fontSize: '10px', color: '#20E3FF', letterSpacing: '0.08em' }}>
                  1–2 PLAYERS
                </span>
                <span style={{ padding: '4px 10px', borderRadius: '4px', background: 'rgba(255, 45, 166, 0.12)', border: '1px solid #FF2DA6', fontFamily: "var(--font-arcade)", fontSize: '10px', color: '#FF2DA6', letterSpacing: '0.08em' }}>
                  LOCAL CO-OP
                </span>
                <span style={{ padding: '4px 10px', borderRadius: '4px', background: 'rgba(255, 210, 63, 0.12)', border: '1px solid #FFD23F', fontFamily: "var(--font-arcade)", fontSize: '10px', color: '#FFD23F', letterSpacing: '0.08em' }}>
                  OFFLINE ONLY
                </span>
                <span style={{ padding: '4px 10px', borderRadius: '4px', background: 'rgba(123, 44, 255, 0.2)', border: '1px solid #7B2CFF', fontFamily: "var(--font-arcade)", fontSize: '10px', color: '#FFFFFF', letterSpacing: '0.08em' }}>
                  UNITY 6
                </span>
              </div>

              <div>
                <h1 style={{ fontFamily: "var(--font-arcade)", fontSize: 'clamp(32px, 5.5vw, 56px)', color: '#FFFFFF', letterSpacing: '0.06em', lineHeight: '1.2', textShadow: '0 0 25px rgba(123, 44, 255, 0.9), 0 0 10px #20E3FF', marginBottom: '10px' }}>
                  {projectMeta.title}
                </h1>
                <div style={{ fontFamily: "var(--font-arcade)", fontSize: 'clamp(12px, 2vw, 15px)', color: '#20E3FF', letterSpacing: '0.12em', marginBottom: '8px' }}>
                  {projectMeta.subtitle}
                </div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: '16px', color: '#FFD23F', fontWeight: 'bold', letterSpacing: '0.14em' }}>
                  {projectMeta.tagline}
                </div>
              </div>

              <p style={{ fontSize: '17px', color: 'var(--text-secondary)', lineHeight: '1.6', maxWidth: '560px' }}>
                {projectMeta.shortDescription}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginTop: '8px' }}>
                <ArcadeButton as={Link} to="/arcade" variant="primary" size="lg" icon={Gamepad2} onClick={playClick} onMouseEnter={playHover}>
                  ENTER THE ARCADE
                </ArcadeButton>
                <ArcadeButton as={Link} to="/game" variant="secondary" size="lg" icon={ArrowRight} onClick={playClick} onMouseEnter={playHover}>
                  EXPLORE THE GAME
                </ArcadeButton>
              </div>

              <div style={{ marginTop: '12px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: 'var(--text-muted)', fontFamily: "var(--font-mono)" }}>
                <span style={{ color: '#FFD23F' }}>★</span>
                <span>Graduation Project Demonstration • {academy}</span>
              </div>
            </div>

            {/* Right Column */}
            <div style={{ position: 'relative' }}>
              <ArcadeCabinetVisual cabinetImg={cabinetImg} />
            </div>
          </div>
        </div>
      </section>

      {/* GAMEPLAY SHOWCASE */}
      <section className="arcade-section" style={{ backgroundColor: 'rgba(18, 12, 31, 0.4)' }}>
        <div className="site-container">
          <SectionTitle
            tag="ARENA PREVIEW"
            title="THE FIGHT BEGINS"
            subtitle="Enter the high-stakes 2D survival arena. Fight escalating waves of hostile mobs with instant-response twin arcade controls."
            accentColor="cyan"
          />

          <div style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', border: '2px solid #7B2CFF', boxShadow: '0 0 35px rgba(123, 44, 255, 0.35)', backgroundColor: '#09070D' }}>
            <video src="/assets/videos/gameplay_preview.mp4" loop playsInline controls style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '520px', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '16px 24px', background: 'linear-gradient(180deg, transparent 0%, rgba(9, 7, 13, 0.95) 100%)', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
              <div>
                <div style={{ fontFamily: "var(--font-arcade)", fontSize: '13px', color: '#FFFFFF' }}>STANDALONE UNITY 6 COMBAT ARENA</div>
                <div style={{ fontSize: '13px', color: '#20E3FF', fontFamily: "var(--font-mono)" }}>Zero network lag • 60 FPS offline local action</div>
              </div>
              <ArcadeButton as={Link} to="/media" variant="cyan" size="sm" onClick={playClick} onMouseEnter={playHover}>
                VIEW MEDIA GALLERY
              </ArcadeButton>
            </div>
          </div>
        </div>
      </section>

      {/* CORE FEATURES */}
      <section className="arcade-section">
        <div className="site-container">
          <SectionTitle
            tag="CORE PILLARS"
            title="ENGINEERED FOR COMBAT"
            subtitle="Four distinct technical pillars powering the WAR OF CUPS survival experience."
            accentColor="pink"
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            {coreFeatures.map((feat) => {
              const Icon = iconMap[feat.icon] || Zap;
              return (
                <GlowCard key={feat.id} accentColor={feat.id === 'solo-survival' ? 'cyan' : feat.id === 'local-coop' ? 'pink' : feat.id === 'arcade-control' ? 'yellow' : 'purple'}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', height: '100%' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div style={{ width: '44px', height: '44px', borderRadius: '8px', background: 'rgba(36, 17, 61, 0.7)', border: `1.5px solid ${feat.color}`, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 0 12px ${feat.color}40` }}>
                        <Icon size={22} color={feat.color} />
                      </div>
                      <span style={{ fontFamily: "var(--font-arcade)", fontSize: '9px', color: feat.color, background: 'rgba(9, 7, 13, 0.8)', padding: '3px 8px', borderRadius: '4px', border: `1px solid ${feat.color}50` }}>
                        {feat.tag}
                      </span>
                    </div>
                    <h3 style={{ fontFamily: "var(--font-arcade)", fontSize: '15px', color: '#FFFFFF', letterSpacing: '0.04em' }}>
                      {feat.title}
                    </h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.6', marginTop: 'auto' }}>
                      {feat.description}
                    </p>
                  </div>
                </GlowCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* HARDWARE TEASER */}
      <section className="arcade-section" style={{ backgroundColor: 'rgba(18, 12, 31, 0.5)' }}>
        <div className="site-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center' }}>
            <div>
              <SectionTitle
                tag="CUSTOM HARDWARE"
                title="THE CUSTOM ARCADE INTERFACE"
                subtitle="Unlike ordinary indie games that rely purely on keyboard inputs, WAR OF CUPS features dedicated physical arcade controllers built from scratch with dual Arduino Uno boards."
                align="left"
                accentColor="yellow"
              />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
                {[
                  "Dual Arduino Uno R3 boards handling 18 dedicated input switches",
                  "Hardware debouncing (20ms) inside custom C++ firmware (controller.ino)",
                  "Multi-threaded Python serial bridge (dual_controller_listener.py)",
                  "Zero modified engine drivers — routes natively via Unity Input System"
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '14px', color: '#E0DBEC' }}>
                    <CheckCircle2 size={16} color="#FFD23F" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <ArcadeButton as={Link} to="/arcade" variant="accent" size="md" onClick={playClick} onMouseEnter={playHover}>
                  SEE HARDWARE PIPELINE
                </ArcadeButton>
                <ArcadeButton as={Link} to="/controls" variant="secondary" size="md" onClick={playClick} onMouseEnter={playHover}>
                  TEST KEYBOARD CONTROLS
                </ArcadeButton>
              </div>
            </div>
            <div>
              <img src={arcade2} alt="Arcade Hardware Deck" style={{ width: '100%', height: 'auto', borderRadius: '10px', border: '1px solid #FFD23F', boxShadow: '0 0 25px rgba(255, 210, 63, 0.25)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          THE GRADUATION TEAM & ACCREDITATION (Section 31 - UPDATED TO 6 MEMBERS)
          ========================================================================= */}
      <section className="arcade-section" style={{ padding: '60px 0', background: 'rgba(0,0,0,0.2)' }}>
        <div className="site-container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          
          <SectionTitle
            tag="ACADEMIC PRESENTATION"
            title="THE GRADUATION TEAM"
            subtitle={`${projectType} showcase created for ${academy}.`}
            accentColor="purple"
          />

          {/* Row 1: المشرفين (2 كروت) */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 360px))',
              justifyContent: 'center',
              gap: '24px',
              marginBottom: '40px'
            }}
          >
            {supervisors.map((supervisorItem) => (
              <CustomMemberCard key={supervisorItem.id} member={supervisorItem} isSupervisor={true} />
            ))}
          </div>

          {/* Row 2: الطلاب (4 كروت) */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '20px'
            }}
          >
            {teamMembers.map((studentItem) => (
              <CustomMemberCard key={studentItem.id} member={studentItem} />
            ))}
          </div>

          <div style={{ marginTop: '48px', textAlign: 'center' }}>
            <ArcadeButton as={Link} to="/download" variant="primary" size="lg" icon={Download} onClick={playClick} onMouseEnter={playHover}>
              DOWNLOAD STANDALONE GAME &amp; REPORT
            </ArcadeButton>
          </div>

        </div>
      </section>

    </div>
  );
}