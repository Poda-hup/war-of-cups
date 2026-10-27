/**
 * WAR OF CUPS — Central Project & Academic Configuration
 */

export const projectMeta = {
  title: "WAR OF CUPS",
  tagline: "SURVIVE. FIGHT. CONQUER.",
  subtitle: "2D TOP-DOWN CO-OP SURVIVAL SHOOTER",
  shortDescription: "An interactive arcade survival experience built with Unity 6, featuring custom dual Arduino arcade hardware, Python serial signal bridging, and intense local cooperative gameplay.",
  engine: "Unity 6",
  language: "C#",
  inputSystem: "Unity Input System + Custom Physical Hardware",
  gameplayType: "Local / Offline Only",
  players: "1–2 Players (Same PC / Cabinet)",
  status: "Graduation Project Demo",
  year: "2026",
};

export const academy = "Modern Academy for Computer Science & Management Technology";
export const projectType = "University Graduation Project";
export const department = "Computer Science Department";

// تم إرجاع هذا السطر لإرضاء Footer.jsx وإلغاء الشاشة البيضاء فوراً
export const supervisor = "Dr. Sherif Mohram & Eng. Alaa Abou El-Ela";

// 1. بيانات المشرفين (الصف العلوي)
export const supervisors = [
  {
    id: 'dr-sherif',
    name: 'Dr. Sherif Mohram',
    role: 'Project Supervisor / Doctor',
    tag: 'SUPERVISOR',
    icon: 'GraduationCap',
    color: '#a855f7',
    description: 'Academic supervision, theoretical guidance, and overall project governance.',
  },
  {
    id: 'eng-alaa',
    name: 'Eng. Alaa Abou El-Ela',
    role: 'Teaching Assistant',
    tag: 'TA SUPERVISOR',
    icon: 'Award',
    color: '#ec4899',
    description: 'Technical evaluation, progress tracking, and implementation review.',
  }
];

// 2. بيانات الطلاب الأربعة (الصف السفلي)
export const teamMembers = [
  {
    id: 'ibrahim',
    name: 'Ibrahim Ahmed',
    role: 'Game Developer & Creator',
    tag: 'GAME ARCHITECT',
    icon: 'Gamepad2',
    color: '#06b6d4',
    description: 'Original game concept creator, 2D mechanics designer, and primary Unity developer.',
  },
  {
    id: 'abdelrahman',
    name: 'Abdelrahman Amin',
    role: 'Web Architecture & Showcase',
    tag: 'FULL-STACK DEVELOPER',
    icon: 'Code2',
    color: '#3b82f6',
    description: 'Showcase web application creator & developer, Unity initial logic contributor, and hardware testing.',
  },
  {
    id: 'momen',
    name: 'Momen Essam',
    role: 'Embedded Systems Engineer',
    tag: 'HARDWARE & CIRCUITS',
    icon: 'Cpu',
    color: '#eab308',
    description: 'Physical arcade cabinet button integration, wiring setup, and Arduino Uno hardware assembly.',
  },
  {
    id: 'mohamed',
    name: 'Mohamed Salah',
    role: 'Documentation & Software Engineer',
    tag: 'DOCUMENTATION',
    icon: 'FileText',
    color: '#10b981',
    description: 'Project documentation, academic report writing, and examination report drafting.',
  }
];

export const projectJourney = [
  {
    id: "step-1",
    phase: "PHASE 01",
    title: "Concept & Game Design",
    date: "Semester Initiation",
    description: "Brainstorming core concept of a fast-paced 2D survival arena shooter where two players defend against escalating enemy waves on a single display.",
    keyOutcome: "Core design document, player health/shield dual-layer defense, and potion inventory rules defined."
  },
  {
    id: "step-2",
    phase: "PHASE 02",
    title: "Unity 6 Core Engine Development",
    date: "Prototype Stage",
    description: "Built the 2D top-down physics, shooting system, round manager, and obstacle arena in Unity 6 using C#.",
    keyOutcome: "Playable prototype with responsive WASD movement and projectile collision detection."
  },
  {
    id: "step-3",
    phase: "PHASE 03",
    title: "Enemy AI & Obstacle Avoidance",
    date: "AI Engineering",
    description: "Developed dynamic enemy targeting to acquire the closest active player, augmented with 8-direction raycast obstacle avoidance for organic swarm movement.",
    keyOutcome: "Autonomous swarm pathfinding avoiding walls without heavy navigational grid overhead."
  },
  {
    id: "step-4",
    phase: "PHASE 04",
    title: "Netcode Exploration & Pivot to Local Co-Op",
    date: "Architecture Decision",
    description: "Experimented with Unity Netcode for GameObjects, but made the strategic decision to abandon online multiplayer in favor of a zero-latency, high-impact local arcade co-op experience.",
    keyOutcome: "Focused all resources on same-screen multiplayer and custom arcade hardware."
  },
  {
    id: "step-5",
    phase: "PHASE 05",
    title: "Custom Arcade Hardware Fabrication",
    date: "Hardware Integration",
    description: "Designed dual physical arcade controllers using two Arduino Uno boards, 18 momentary switches (9 per player), 16 indicator LEDs, and breadboard circuitry.",
    keyOutcome: "One dedicated Arduino Uno per player to ensure 13 pins per board and zero pin multiplexing conflicts."
  },
  {
    id: "step-6",
    phase: "PHASE 06",
    title: "Firmware & Python Serial Bridge",
    date: "Systems Pipeline",
    description: "Wrote `controller.ino` with 20ms hardware debounce and 9600 baud serial protocol, matched with `dual_controller_listener.py` to dispatch system-wide keyboard and mouse events.",
    keyOutcome: "Seamless hardware-to-OS bridge enabling physical arcade play directly inside the Unity game."
  },
  {
    id: "step-7",
    phase: "PHASE 07",
    title: "Rigorous Playtesting & Round Escalation",
    date: "Refinement",
    description: "Balanced potion drop rates, round progression curves, score multipliers, and simultaneous dual-player input responsiveness under intense wave pressure.",
    keyOutcome: "Rock-solid local co-op combat stability with no dropped serial frames."
  },
  {
    id: "step-8",
    phase: "PHASE 08",
    title: "Graduation Demonstration & Showcase",
    date: "Final Presentation",
    description: "Packaging the standalone Windows build (`war of cups.exe`), compiling comprehensive documentation, and launching this interactive digital arcade showcase for academic jury evaluation.",
    keyOutcome: "Complete end-to-end graduation demonstration ready for academic presentation."
  }
];