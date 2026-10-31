/**
 * Mutable state bridge for high-performance 60fps R3F rendering without React re-renders.
 */
export interface LabSceneState {
  progress: number;
  section: number; // 0 to 4
  targetX: number;
  targetY: number;
  targetZ: number;
  targetRotX: number;
  targetRotY: number;
  targetRotZ: number;
  inspectionExpansion: number; // 0 = unified chassis, 1 = exploded mechanical inspection
  organizationMode: number;    // 0 = primary orbital, 1 = structured modular alignment
  wireframeMix: number;        // 0 = physical machined alloys, 1 = technical blueprint wireframe
  resolutionMix: number;       // 0 = complex lab machine, 1 = refined harmonic terminal state
  scale: number;
  rotationSpeed: number;
}

export const labSceneState: LabSceneState = {
  progress: 0,
  section: 0,
  targetX: 1.35,
  targetY: 0,
  targetZ: 0,
  targetRotX: 0.15,
  targetRotY: 0,
  targetRotZ: 0,
  inspectionExpansion: 0,
  organizationMode: 0,
  wireframeMix: 0,
  resolutionMix: 0,
  scale: 1,
  rotationSpeed: 1,
};

export const mouseState = {
  x: 0,
  y: 0,
  targetX: 0,
  targetY: 0,
};

