/**
 * Mutable scroll state store for 60fps R3F rendering without React re-renders.
 */
export interface SceneScrollState {
  progress: number;
  section: number; // 0 to 4
  targetX: number;
  targetY: number;
  targetZ: number;
  targetRotX: number;
  targetRotY: number;
  targetRotZ: number;
  separation: number;    // 0 = unified, 1 = exploded/deconstructed
  structureMode: number; // 0 = fluid gyroscopic, 1 = structured orthogonal monolith
  wireframeMix: number;  // 0 = solid chrome, 1 = technical holographic wireframe
  simplifyMix: number;   // 0 = full kinetic sculpture, 1 = simplified pure continuous loop
  scale: number;
}

export const sceneScrollState: SceneScrollState = {
  progress: 0,
  section: 0,
  targetX: 1.2,
  targetY: 0,
  targetZ: 0,
  targetRotX: 0.2,
  targetRotY: 0,
  targetRotZ: 0,
  separation: 0,
  structureMode: 0,
  wireframeMix: 0,
  simplifyMix: 0,
  scale: 1,
};

export const mouseState = {
  x: 0,
  y: 0,
  targetX: 0,
  targetY: 0,
};
