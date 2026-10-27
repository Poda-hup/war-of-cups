/**
 * WAR OF CUPS — Gameplay Systems & Features Data
 */

export const coreFeatures = [
  {
    id: "solo-survival",
    title: "SOLO SURVIVAL",
    tag: "1 PLAYER",
    icon: "ShieldAlert",
    description: "Survive increasingly difficult rounds alone. Manage your health, deploy shields, and hold the arena against relentless enemy waves.",
    color: "#20E3FF", // Cyan
  },
  {
    id: "local-coop",
    title: "LOCAL CO-OP",
    tag: "2 PLAYERS",
    icon: "Users",
    description: "Two players battle side-by-side on the same PC and display. Coordinate movement, protect each other, and survive until both players are down.",
    color: "#FF2DA6", // Pink
  },
  {
    id: "arcade-control",
    title: "ARCADE CONTROL",
    tag: "HARDWARE",
    icon: "Gamepad2",
    description: "Experience the game through custom physical arcade controllers powered by dual Arduino Unos and a high-speed Python serial translation layer.",
    color: "#FFD23F", // Yellow
  },
  {
    id: "survival-combat",
    title: "SURVIVAL COMBAT",
    tag: "GAMEPLAY",
    icon: "Zap",
    description: "Dynamic health and shield systems, tactical potion drops, 8-directional enemy raycasting AI, and escalating round difficulty multipliers.",
    color: "#7B2CFF", // Purple
  }
];

export const gameModes = [
  {
    id: "solo",
    title: "SOLO MODE",
    badge: "1 PLAYER • LOCAL / OFFLINE",
    subtitle: "Lone Defender in the Arena",
    accent: "#20E3FF",
    icon: "User",
    rules: [
      "Player 1 controls the character using keyboard or Arcade Controller 1.",
      "Game over occurs immediately upon player death.",
      "Enemy AI concentrates 100% of pursuit vectors on Player 1.",
      "Inventory limit: strictly 1 Health Potion and 1 Shield Potion.",
      "Score accumulates with each defeated enemy wave."
    ],
    summary: "A pure test of individual reflexes and arena spatial awareness against rising swarm counts."
  },
  {
    id: "coop",
    title: "LOCAL CO-OP MODE",
    badge: "2 PLAYERS • SAME SCREEN • OFFLINE ONLY",
    subtitle: "Duo Tactical Survival",
    accent: "#FF2DA6",
    icon: "Users",
    rules: [
      "Both players fight on the same PC display — zero online latency.",
      "Independent input devices: Keyboard (P1 WASD/Space, P2 Arrows/Click) or Dual Arcade Cabinets.",
      "Enemy AI dynamically shifts focus toward whichever player is physically closer.",
      "Both players must be down before the round ends in Game Over.",
      "Potion drops can be picked up by either player, each holding up to 1 of each potion."
    ],
    summary: "High-octane cooperative combat requiring spatial teamwork and enemy redirection."
  }
];

export const gameplayFlowSteps = [
  { step: "01", title: "START GAME", desc: "Select Solo or Local 2-Player Co-Op mode from the main arcade menu.", color: "#20E3FF" },
  { step: "02", title: "SELECT CHARACTER", desc: "Lock in your combat cup archetype for Player 1 and Player 2.", color: "#7B2CFF" },
  { step: "03", title: "ENTER THE ARENA", desc: "Spawn into the top-down battlefield with obstacle walls and defensive corridors.", color: "#FFD23F" },
  { step: "04", title: "FIGHT ENEMIES", desc: "Fire projectiles with Space or Arcade Shoot button while dodging incoming hostile mobs.", color: "#FF2DA6" },
  { step: "05", title: "COLLECT POWER-UPS", desc: "Scavenge dropped Health and Shield potions to restore vitality and defensive armor.", color: "#20E3FF" },
  { step: "06", title: "SURVIVE THE ROUND", desc: "Clear all wave adversaries to trigger victory fanfare and round completion.", color: "#7B2CFF" },
  { step: "07", title: "ESCALATING DIFFICULTY", desc: "Advance to the next round with increased enemy counts, higher speeds, and lethal power.", color: "#FF2DA6" }
];

export const roundProgressionData = [
  {
    round: "ROUND 01",
    subtitle: "Initial Breach",
    enemyCount: "Standard Wave",
    speed: "Normal",
    challenge: "Baseline",
    color: "#20E3FF",
    notes: "Basic enemy movement. Ideal for testing arcade controller responsiveness and movement."
  },
  {
    round: "ROUND 02",
    subtitle: "Escalation",
    enemyCount: "+30% Mobs",
    speed: "+15% Velocity",
    challenge: "Moderate",
    color: "#7B2CFF",
    notes: "Enemies begin flanking around arena obstacles. Health management becomes critical."
  },
  {
    round: "ROUND 03",
    subtitle: "Swarm Pressure",
    enemyCount: "+60% Mobs",
    speed: "+25% Velocity",
    challenge: "Intense",
    color: "#FFD23F",
    notes: "Frequent potion drops required to maintain shields. Dual-player coordination essential."
  },
  {
    round: "ROUND 04+",
    subtitle: "Lethal Onslaught",
    enemyCount: "Maximum Density",
    speed: "High Speed / Aggressive",
    challenge: "Extreme",
    color: "#FF2DA6",
    notes: "Enemies react instantaneously to player position changes. Survival requires split-second reflexes."
  }
];

export const characters = [
  {
    id: "p1-knight",
    name: "CUP KNIGHT",
    slot: "PLAYER 1",
    role: "Frontline Guardian",
    accent: "#20E3FF",
    image: "/assets/images/characters/green.jpg",
    controls: "WASD / Space / E / Q",
    description: "Equipped for direct forward engagement and balanced arena maneuverability. Player 1's signature combat cup.",
    stats: {
      speed: "Fast",
      armor: "Reinforced Ceramic",
      specialty: "Rapid Fire Projectiles"
    }
  },
  {
    id: "p2-berserker",
    name: "CUP BERSERKER",
    slot: "PLAYER 2",
    role: "Heavy Striker",
    accent: "#FF2DA6",
    image: "/assets/images/characters/yallow.jpg",
    controls: "Arrows / Click / K / L",
    description: "Designed for flanking aggression and suppression fire. Player 2's signature cooperative combat cup.",
    stats: {
      speed: "Agile",
      armor: "High Impact Glaze",
      specialty: "High Precision Bursts"
    }
  }
];

export const enemyAiMechanics = {
  title: "Dynamic Swarm & Raycast Avoidance AI",
  description: "The Unity 6 enemy AI continuously evaluates player proximity and arena geometry in real time:",
  pipeline: [
    { title: "Active Player Scan", desc: "Searches for living player targets across the arena." },
    { title: "Proximity Evaluation", desc: "Calculates Euclidean distance to P1 and P2; dynamically locks onto the closer target." },
    { title: "Vector Pursuit", desc: "Calculates smooth velocity vector toward the selected player target." },
    { title: "8-Direction Raycasts", desc: "Fires 8 radial raycasts to detect obstacle walls and deflect path around barriers." }
  ],
  raycastDirections: [
    "North (0°)", "North-East (45°)", "East (90°)", "South-East (135°)",
    "South (180°)", "South-West (225°)", "West (270°)", "North-West (315°)"
  ]
};

export const powerUps = [
  {
    id: "health-potion",
    name: "HEALTH POTION",
    type: "VITALITY RESTORE",
    icon: "Heart",
    accent: "#FF2DA6",
    capacity: "MAX 1 IN INVENTORY",
    usageKey: "P1: 'E' Key | P2: 'K' Key",
    description: "Instantly restores lost player health. Drops from eliminated enemies during intense waves. Critical for surviving direct hits.",
    mechanics: "Health depletes only after the protective shield layer has been exhausted."
  },
  {
    id: "shield-potion",
    name: "SHIELD POTION",
    type: "DAMAGE ABSORPTION",
    icon: "Shield",
    accent: "#20E3FF",
    capacity: "MAX 1 IN INVENTORY",
    usageKey: "P1: 'Q' Key | P2: 'L' Key",
    description: "Activates a protective energy barrier. Shields absorb 100% of incoming enemy damage until depleted, preserving true player health.",
    mechanics: "Shield absorbs incoming damage before health is impacted."
  }
];
