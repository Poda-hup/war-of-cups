/**
 * WAR OF CUPS — Hardware & Systems Integration Data
 * Based on the authentic setup in SETUP_GUIDE.md, controller.ino, and dual_controller_listener.py
 */

export const pipelineNodes = [
  {
    id: "player",
    step: "01",
    label: "PLAYER",
    category: "HUMAN INTERACTION",
    icon: "User",
    color: "#20E3FF",
    shortDesc: "Player triggers physical input",
    detail: "Player presses an arcade push-button or moves the directional switch pad on the custom cabinet control deck.",
    techNote: "Tactile momentary switches with mechanical feedback."
  },
  {
    id: "button",
    step: "02",
    label: "ARCADE BUTTON",
    category: "ELECTROMECHANICAL",
    icon: "CircleDot",
    color: "#7B2CFF",
    shortDesc: "Contact closure pulls pin to GND",
    detail: "When actuated, the switch connects the corresponding Arduino digital input pin directly to Ground (GND).",
    techNote: "Configured using internal INPUT_PULLUP resistors (normally HIGH, pressed = LOW)."
  },
  {
    id: "arduino",
    step: "03",
    label: "ARDUINO UNO",
    category: "EMBEDDED FIRMWARE",
    icon: "Cpu",
    color: "#FFD23F",
    shortDesc: "Microcontroller scans & debounces",
    detail: "The ATmega328P scans 9 input pins at high frequency with a 20ms hardware debounce threshold to prevent electrical bounce noise.",
    techNote: "controller.ino runs at 16 MHz, managing 8 active status LEDs."
  },
  {
    id: "serial",
    step: "04",
    label: "SERIAL SIGNAL",
    category: "USB UART PROTOCOL",
    icon: "Binary",
    color: "#20E3FF",
    shortDesc: "Transmits structured ASCII packet",
    detail: "The Arduino formats the button state into an ASCII string (e.g. 'BTN1:1' on press, 'BTN1:0' on release) and sends it over USB Serial.",
    techNote: "Standard 9600 baud UART protocol over dedicated COM ports."
  },
  {
    id: "python",
    step: "05",
    label: "PYTHON LISTENER",
    category: "MIDDLEWARE / OS BRIDGE",
    icon: "Terminal",
    color: "#FF2DA6",
    shortDesc: "Dual-thread serial listener",
    detail: "dual_controller_listener.py spawns independent background daemon threads for COM3 (P1) and COM4 (P2) to read serial streams simultaneously.",
    techNote: "Uses pyserial library with 1.0s timeout and instant regex parsing."
  },
  {
    id: "translation",
    step: "06",
    label: "INPUT TRANSLATION",
    category: "VIRTUAL OS INJECTION",
    icon: "Keyboard",
    color: "#7B2CFF",
    shortDesc: "Maps packet to virtual OS event",
    detail: "The listener looks up the packet name in the player's dictionary and synthesizes an OS-level keyboard or mouse event via the keyboard/mouse API.",
    techNote: "Translates BTN1 → Space (P1) and BTN1 → Mouse Click (P2) with zero delay."
  },
  {
    id: "unity",
    step: "07",
    label: "UNITY 6 ENGINE",
    category: "GAME SOFTWARE",
    icon: "Box",
    color: "#20E3FF",
    shortDesc: "Unity Input System handles events",
    detail: "Unity 6 intercepts the synthesized system key events through the modern Unity Input System and routes them to the active player controller.",
    techNote: "Zero-overhead native OS input handling inside the 60 FPS update loop."
  },
  {
    id: "gameplay",
    step: "08",
    label: "GAME ACTION",
    category: "IN-GAME EXECUTION",
    icon: "Crosshair",
    color: "#FFD23F",
    shortDesc: "Instant character reaction",
    detail: "The player character immediately moves, fires a projectile, or consumes a potion inside the 2D survival arena.",
    techNote: "End-to-end tactile latency under 25 milliseconds."
  }
];

export const hardwareSpecs = [
  { label: "Microcontroller", value: "2x Arduino Uno R3 (ATmega328P @ 16 MHz)" },
  { label: "Architecture", value: "Dedicated 1-board-per-player topology (13 active pins/board)" },
  { label: "Input Switches", value: "18x Momentary tactile switches (9 per player deck)" },
  { label: "LED Illumination", value: "16x 5mm LEDs (8 per player: 4 buttons + 4 directions)" },
  { label: "Current Limiting", value: "16x 220–330 Ω precision resistors" },
  { label: "Debounce Filter", value: "20ms software debounce inside controller.ino" },
  { label: "Serial Protocol", value: "USB UART @ 9600 Baud (COM3: P1, COM4: P2)" },
  { label: "Middleware Bridge", value: "Python 3 + pyserial + keyboard + mouse libraries" }
];

export const academicSummary = {
  heading: "Academic Hardware-Software Integration Thesis",
  body: "The custom arcade controller system establishes a physical human-interface layer between the users and the Unity 6 simulation. Because dual-player simultaneous input across 18 digital pins exceeds the single-board pin density while maintaining dedicated serial channels, the project utilizes an isolated two-board architecture. Each Arduino Uno operates an identical low-overhead C++ firmware sketch. On the host workstation, a multi-threaded Python daemon captures asynchronous serial streams, disambiguates player identity by COM port assignment, and dispatches native operating-system events. Unity's Input System consumes these virtual events transparently, achieving an authentic arcade cabinet experience without modifying standard engine input pipelines."
};

export const techStackBadges = [
  { name: "UNITY 6", category: "Engine", desc: "2D Top-Down Game Engine & Physics", color: "#20E3FF" },
  { name: "C#", category: "Language", desc: "Gameplay logic, AI Raycasting & Systems", color: "#7B2CFF" },
  { name: "ARDUINO", category: "Embedded", desc: "Firmware, Debounce & Hardware I/O", color: "#FFD23F" },
  { name: "PYTHON 3", category: "Middleware", desc: "Multi-threaded Serial Listener & OS Dispatch", color: "#FF2DA6" },
  { name: "REACT 18", category: "Web Frontend", desc: "Component-based Interactive Arcade UI", color: "#20E3FF" },
  { name: "VITE", category: "Build Tool", desc: "Modern, high-performance web bundler", color: "#7B2CFF" },
  { name: "CSS3", category: "Styling", desc: "Custom CRT, Neon & Arcade Aesthetics", color: "#FFD23F" }
];
