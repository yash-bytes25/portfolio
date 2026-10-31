import React from 'react';
import { Environment } from '@react-three/drei';

export const StudioLighting: React.FC = () => {
  return (
    <>
      {/* Soft atmospheric ambient light */}
      <ambientLight intensity={0.5} color="#0d0f12" />

      {/* Primary Key Specular Light (Crisp, warm white) */}
      <directionalLight
        position={[6, 8, 5]}
        intensity={2.4}
        color="#fafaf9"
      />

      {/* Soft Silhouette Rim Light (Muted slate) */}
      <directionalLight
        position={[-6, -2, -4]}
        intensity={1.2}
        color="#94a3b8"
      />

      {/* Gentle Warm Core Accent Light */}
      <pointLight
        position={[0, 0, 0]}
        intensity={1.2}
        color="#ea580c"
        distance={5}
        decay={2}
      />

      {/* Studio reflections for realistic metal clearcoat */}
      <Environment preset="studio" />
    </>
  );
};
