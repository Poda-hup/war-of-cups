/**
 * WAR OF CUPS — Media Gallery Configuration
 * Central configuration for screenshots, gameplay videos, arcade photos, and dev logs.
 * Replace placeholder paths with actual screenshots or video URLs as they are added.
 */

export const mediaCategories = [
  { id: "all", label: "ALL MEDIA" },
  { id: "gameplay", label: "GAMEPLAY" },
  { id: "arcade", label: "ARCADE HARDWARE" },
  { id: "coop", label: "LOCAL CO-OP" },
  { id: "development", label: "DEVELOPMENT" }
];

export const mediaItems = [
  {
    id: "media-1",
    title: "ARENA COMBAT & SWARM ENGAGEMENT",
    category: "gameplay",
    type: "image",
    src: "/assets/images/arcade/gameplay_arena_preview.svg",
    thumbnail: "/assets/images/arcade/gameplay_arena_preview.svg",
    description: "Player 1 and Player 2 holding off an escalating wave of enemies near the arena obstacle corridors.",
    badge: "UNITY 6 60 FPS",
    accent: "#20E3FF"
  },
  {
    id: "media-2",
    title: "CUSTOM DUAL ARDUINO CONTROL DECK",
    category: "arcade",
    type: "image",
    src: "/assets/images/arcade/arcade_hardware_deck.svg",
    thumbnail: "/assets/images/arcade/arcade_hardware_deck.svg",
    description: "Dual physical control panels featuring momentary tactile pushbuttons, illuminated LED status rings, and dual Arduino Uno boards.",
    badge: "ARDUINO UNO R3",
    accent: "#FFD23F"
  },
  {
    id: "media-3",
    title: "SAME-SCREEN LOCAL COOPERATIVE COMBAT",
    category: "coop",
    type: "image",
    src: "/assets/images/arcade/local_coop_action.svg",
    thumbnail: "/assets/images/arcade/local_coop_action.svg",
    description: "Two players defending each other in real-time local co-op. Demonstrating independent health bars and potion stocks.",
    badge: "LOCAL / OFFLINE",
    accent: "#FF2DA6"
  },
  {
    id: "media-4",
    title: "DYNAMIC ENEMY RAYCASTING RADAR",
    category: "development",
    type: "image",
    src: "/assets/images/arcade/enemy_raycast_dev.svg",
    thumbnail: "/assets/images/arcade/enemy_raycast_dev.svg",
    description: "Debug visualization of the 8-directional raycasting obstacle avoidance and Euclidean player distance calculations.",
    badge: "AI DEBUG MODE",
    accent: "#7B2CFF"
  },
  {
    id: "media-5",
    title: "HARDWARE WIRING & SERIAL PROTOCOL TEST",
    category: "arcade",
    type: "image",
    src: "/assets/images/arcade/wiring_schematic_photo.svg",
    thumbnail: "/assets/images/arcade/wiring_schematic_photo.svg",
    description: "Breadboard circuit wiring connecting switches to Arduino digital input pins with 220Ω resistor-limited LED outputs.",
    badge: "CIRCUIT LAB",
    accent: "#FFD23F"
  },
  {
    id: "media-6",
    title: "ROUND PROGRESSION & POTION RECOVERY",
    category: "gameplay",
    type: "image",
    src: "/assets/images/arcade/potion_survival_preview.svg",
    thumbnail: "/assets/images/arcade/potion_survival_preview.svg",
    description: "Surviving Round 04: Player 1 activates a shield potion to absorb projectile shock while Player 2 covers the perimeter.",
    badge: "SURVIVAL COMBAT",
    accent: "#20E3FF"
  }
];
