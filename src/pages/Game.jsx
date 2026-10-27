import React from 'react';
import { gameModes } from '../data/gameData';
import SectionTitle from '../components/common/SectionTitle';
import GameModeCard from '../components/game/GameModeCard';
import GameplayFlowTrack from '../components/game/GameplayFlowTrack';
import RoundProgression from '../components/game/RoundProgression';
import CharacterSelect from '../components/game/CharacterSelect';
import EnemyAiRadar from '../components/game/EnemyAiRadar';
import PowerUpsGrid from '../components/game/PowerUpsGrid';

export default function Game() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column'}}>
      {/* Page Header */}
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
            tag="SYSTEM SPECIFICATION"
            title="THE GAME SYSTEMS"
            subtitle="WAR OF CUPS is a 2D top-down survival arena shooter built in Unity 6. Players control specialized combat cups battling relentless, escalating enemy waves using tactical movement, defensive shields, and high-frequency projectile weapons."
            accentColor="cyan"
          />
        </div>
      </section>

      {/* GAME MODES (Section 14) */}
      <section className="arcade-section">
        <div className="site-container">
          <SectionTitle
            tag="LOCAL COMBAT"
            title="GAME MODES"
            subtitle="WAR OF CUPS features dedicated Solo and Local 2-Player Co-Op modes. All multiplayer is strictly offline and operates on the same PC display."
            accentColor="pink"
          />

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '24px'
            }}
          >
            {gameModes.map((mode) => (
              <GameModeCard key={mode.id} mode={mode} />
            ))}
          </div>
        </div>
      </section>

      {/* GAMEPLAY FLOW (Section 15) */}
      <section className="arcade-section" style={{ backgroundColor: 'rgba(18, 12, 31, 0.4)' }}>
        <div className="site-container">
          <SectionTitle
            tag="COMBAT LOOP"
            title="GAMEPLAY FLOW"
            subtitle="The cyclical progression from arena entry through swarm defense to round survival."
            accentColor="yellow"
          />

          <GameplayFlowTrack />
        </div>
      </section>

      {/* ROUND PROGRESSION (Section 16) */}
      <section className="arcade-section">
        <div className="site-container">
          <SectionTitle
            tag="ESCALATING PRESSURE"
            title="ROUND SYSTEM &amp; SCALING"
            subtitle="Each round dynamically scales enemy swarm density, movement velocities, and scoring bonuses."
            accentColor="purple"
          />

          <RoundProgression />
        </div>
      </section>

      {/* CHARACTERS (Section 17) */}
      <section className="arcade-section" style={{ backgroundColor: 'rgba(18, 12, 31, 0.4)' }}>
        <div className="site-container">
          <SectionTitle
            tag="ARCADE ROSTER"
            title="COMBAT CHARACTERS"
            subtitle="Select your warrior cup archetype. Player 1 commands the Cup Knight; Player 2 commands the Cup Berserker."
            accentColor="cyan"
          />

          <CharacterSelect />
        </div>
      </section>

      {/* ENEMIES & AI RADAR (Section 18) */}
      <section className="arcade-section">
        <div className="site-container">
          <SectionTitle
            tag="HOSTILE INTELLIGENCE"
            title="ENEMY AI &amp; SWARM RADAR"
            subtitle="Experience how the Unity 6 enemy swarm dynamically acquires targets based on closest player proximity and steers around arena obstacles via 8-directional raycasting."
            accentColor="pink"
          />

          <EnemyAiRadar />
        </div>
      </section>

      {/* POWER-UPS (Section 19) */}
      <section className="arcade-section" style={{ backgroundColor: 'rgba(18, 12, 31, 0.4)' }}>
        <div className="site-container">
          <SectionTitle
            tag="TACTICAL CONSUMABLES"
            title="DEFENSIVE POWER-UPS"
            subtitle="Collect dropped potions during combat. Strictly maximum one of each potion type per player belt."
            accentColor="yellow"
          />

          <PowerUpsGrid />
        </div>
      </section>
    </div>
  );
}
