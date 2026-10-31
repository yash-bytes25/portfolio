import React from 'react';
import { Environment } from '@react-three/drei';

export const StudioLighting: React.FC = () => {
  return (
    <>
      {/* Deep atmospheric ambient base - keeps shadows deep and rich */}
      <ambientLight intensity={0.35} color="#0c0e14" />

      {/* Main Key Rim Light - Razor-sharp chrome specular highlight */}
      <directionalLight
        position={[5, 8, 4]}
        intensity={3.0}
        color="#ffffff"
      />

      {/* Cold Steel Edge Backlight - High-contrast silhouette separation */}
      <directionalLight
        position={[-6, 2, -5]}
        intensity={2.2}
        color="#93c5fd"
      />

      {/* Titanium Warm Accent Fill - Adds chromatic depth to metallic surfaces */}
      <pointLight
        position={[-3.5, 4.5, 3]}
        intensity={1.1}
        color="#f59e0b"
        distance={14}
        decay={2}
      />

      {/* Subtle Under-Bounce - Volumetric presence without washing out blacks */}
      <directionalLight
        position={[0, -6, 2]}
        intensity={0.6}
        color="#334155"
      />

      {/* High-fidelity studio reflections */}
      <Environment preset="studio" />
    </>
  );
};
