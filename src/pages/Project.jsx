import React from 'react';
import { projectJourney, teamMembers, academy, projectType, supervisor, department } from '../data/projectData';
import SectionTitle from '../components/common/SectionTitle';
import TimelineItem from '../components/project/TimelineItem';
import TeamCard from '../components/project/TeamCard';
import GlowCard from '../components/common/GlowCard';
import { Award, GraduationCap, Calendar, Compass } from 'lucide-react';

export default function Project() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
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
            tag="ACADEMIC PORTFOLIO"
            title="PROJECT JOURNEY &amp; THE TEAM"
            subtitle={`${projectType} chronicle and team credits at ${academy}, under supervision of ${supervisor}.`}
            accentColor="purple"
          />
        </div>
      </section>

      {/* PROJECT JOURNEY TIMELINE (Section 30) */}
      <section className="arcade-section">
        <div className="site-container">
          <SectionTitle
            tag="MILESTONE ARCHIVE"
            title="THE DEVELOPMENT JOURNEY"
            subtitle="The chronological evolution of WAR OF CUPS from initial concept through engine architecture, custom hardware fabrication, and university graduation demonstration."
            accentColor="cyan"
          />

          <div style={{ maxWidth: '820px', margin: '0 auto' }}>
            {projectJourney.map((item, idx) => (
              <TimelineItem
                key={item.id}
                item={item}
                index={idx}
                isLast={idx === projectJourney.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* THE TEAM & SUPERVISION (Section 31) */}
      <section className="arcade-section" style={{ backgroundColor: 'rgba(18, 12, 31, 0.4)' }}>
        <div className="site-container">
          <SectionTitle
            tag="PROJECT CONTRIBUTORS"
            title="THE GRADUATION TEAM"
            subtitle="Engineers and developers responsible for the game design, hardware circuitry, firmware, and software integration."
            accentColor="pink"
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '20px',
              marginBottom: '40px'
            }}
          >
            {teamMembers.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>

          {/* Institutional Credit Card */}
          <div style={{ maxWidth: '780px', margin: '0 auto' }}>
            <GlowCard accentColor="yellow">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', textAlign: 'center' }}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      background: 'rgba(255, 210, 63, 0.15)',
                      border: '1.5px solid #FFD23F',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <GraduationCap size={24} color="#FFD23F" />
                  </div>
                </div>

                <h3 style={{ fontFamily: "var(--font-arcade)", fontSize: '15px', color: '#FFFFFF', letterSpacing: '0.04em' }}>
                  ACADEMIC EVALUATION &amp; JURY SPECIFICATION
                </h3>

                <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  Presented in partial fulfillment of the requirements for the Degree of Bachelor of Science in Computer Science at <strong style={{ color: '#FFFFFF' }}>{academy}</strong>, {department}.
                </p>

                <div
                  style={{
                    display: 'inline-flex',
                    alignSelf: 'center',
                    padding: '6px 16px',
                    borderRadius: '4px',
                    background: 'rgba(36, 17, 61, 0.8)',
                    border: '1px solid #7B2CFF',
                    fontFamily: "var(--font-mono)",
                    fontSize: '13px',
                    color: '#20E3FF'
                  }}
                >
                  PROJECT SUPERVISOR: {supervisor}
                </div>
              </div>
            </GlowCard>
          </div>
        </div>
      </section>
    </div>
  );
}
