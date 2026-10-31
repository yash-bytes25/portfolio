import React from 'react';
import { Environment } from '@react-three/drei';

export const StudioLighting: React.FC = () => {
  return (
    <>
      {/* Deep laboratory baseline ambient light */}
      <ambientLight intensity={0.4} color="#101214" />

      {/* Main Specular Key Light (Warm White) */}
      <directionalLight
        position={[6, 8, 5]}
        intensity={2.8}
        color="#F1F0EA"
      />

      {/* Rim / Silhouette Separator (Muted Steel) */}
      <directionalLight
        position={[-6, -2, -4]}
        intensity={1.8}
        color="#8C9298"
      />

      {/* Signal Orange Technical Accent Light (Diagnostic Core Glow) */}
      <pointLight
        position={[0, 0, 0]}
        intensity={2.0}
        color="#FF5A1F"
        distance={6}
        decay={2}
      />

      {/* Secondary Fill Light */}
      <directionalLight
        position={[0, 6, -2]}
        intensity={0.8}
        color="#495057"
      />

      {/* Studio HDRI for realistic PBR metal reflections */}
      <Environment preset="studio" />
    </>
  );
};
