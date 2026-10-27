/**
 * WAR OF CUPS — Controls Configuration
 * Supports both Keyboard and Custom Physical Arcade Controller mappings.
 */

export const keyboardControls = {
  player1: {
    name: "PLAYER 1",
    accent: "#20E3FF",
    controls: [
      { key: "W", action: "Move Up", category: "Movement", desc: "Navigates character upward in arena" },
      { key: "A", action: "Move Left", category: "Movement", desc: "Navigates character leftward in arena" },
      { key: "S", action: "Move Down", category: "Movement", desc: "Navigates character downward in arena" },
      { key: "D", action: "Move Right", category: "Movement", desc: "Navigates character rightward in arena" },
      { key: "SPACE", action: "Shoot Projectile", category: "Combat", desc: "Fires direct combat projectile", wide: true },
      { key: "E", action: "Use Health Potion", category: "Item", desc: "Consumes stored Health Potion (+HP)" },
      { key: "Q", action: "Use Shield Potion", category: "Item", desc: "Consumes stored Shield Potion (+Armor)" }
    ]
  },
  player2: {
    name: "PLAYER 2",
    accent: "#FF2DA6",
    controls: [
      { key: "↑", action: "Move Up", category: "Movement", desc: "Navigates character upward in arena" },
      { key: "←", action: "Move Left", category: "Movement", desc: "Navigates character leftward in arena" },
      { key: "↓", action: "Move Down", category: "Movement", desc: "Navigates character downward in arena" },
      { key: "→", action: "Move Right", category: "Movement", desc: "Navigates character rightward in arena" },
      { key: "LEFT MOUSE / RIGHT CLICK", action: "Shoot Projectile", category: "Combat", desc: "Fires direct combat projectile", wide: true },
      { key: "K", action: "Use Health Potion", category: "Item", desc: "Consumes stored Health Potion (+HP)" },
      { key: "L", action: "Use Shield Potion", category: "Item", desc: "Consumes stored Shield Potion (+Armor)" }
    ]
  }
};

export const arcadeHardwarePins = {
  player1: {
    board: "Arduino Uno #1 (COM3)",
    accent: "#20E3FF",
    inputs: [
      { id: "BTN1", pin: "Pin 2", ledPin: "Pin 3", label: "Button 1", key: "Space", action: "Shoot Projectile" },
      { id: "BTN2", pin: "Pin 4", ledPin: "Pin 5", label: "Button 2", key: "E", action: "Use Health Potion" },
      { id: "BTN3", pin: "Pin 6", ledPin: "Pin 7", label: "Button 3", key: "Tab / Esc", action: "Utility / Pause" },
      { id: "BTN4", pin: "Pin 8", ledPin: "Pin 9", label: "Button 4", key: "Q", action: "Use Shield Potion" },
      { id: "UP", pin: "Pin 10", ledPin: "Pin A1", label: "D-Pad Up", key: "W", action: "Move Up" },
      { id: "DOWN", pin: "Pin 11", ledPin: "Pin A2", label: "D-Pad Down", key: "S", action: "Move Down" },
      { id: "LEFT", pin: "Pin 12", ledPin: "Pin A3", label: "D-Pad Left", key: "A", action: "Move Left" },
      { id: "RIGHT", pin: "Pin 13", ledPin: "Pin A4", label: "D-Pad Right", key: "D", action: "Move Right" },
      { id: "CENTER", pin: "Pin A0", ledPin: "None", label: "D-Pad Center", key: "1 / Enter", action: "Confirm / Start" }
    ]
  },
  player2: {
    board: "Arduino Uno #2 (COM4)",
    accent: "#FF2DA6",
    inputs: [
      { id: "BTN1", pin: "Pin 2", ledPin: "Pin 3", label: "Button 1", key: "Right Click / LMB", action: "Shoot Projectile" },
      { id: "BTN2", pin: "Pin 4", ledPin: "Pin 5", label: "Button 2", key: "K", action: "Use Health Potion" },
      { id: "BTN3", pin: "Pin 6", ledPin: "Pin 7", label: "Button 3", key: "Esc", action: "Utility / Pause" },
      { id: "BTN4", pin: "Pin 8", ledPin: "Pin 9", label: "Button 4", key: "L", action: "Use Shield Potion" },
      { id: "UP", pin: "Pin 10", ledPin: "Pin A1", label: "D-Pad Up", key: "Arrow Up", action: "Move Up" },
      { id: "DOWN", pin: "Pin 11", ledPin: "Pin A2", label: "D-Pad Down", key: "Arrow Down", action: "Move Down" },
      { id: "LEFT", pin: "Pin 12", ledPin: "Pin A3", label: "D-Pad Left", key: "Arrow Left", action: "Move Left" },
      { id: "RIGHT", pin: "Pin 13", ledPin: "Pin A4", label: "D-Pad Right", key: "Arrow Right", action: "Move Right" },
      { id: "CENTER", pin: "Pin A0", ledPin: "None", label: "D-Pad Center", key: "2 / Enter", action: "Confirm / Start" }
    ]
  }
};
