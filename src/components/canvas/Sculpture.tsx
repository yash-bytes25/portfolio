import React, { useRef, useMemo, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { sceneScrollState, mouseState } from './scrollState';

// Pre-allocated scratch objects to prevent garbage collection spikes in useFrame
const scratchVec3 = new THREE.Vector3();

export const Sculpture: React.FC = () => {
  const { viewport } = useThree();
  const isMobile = viewport.width < 5.5;

  // Main group reference
  const mainGroup = useRef<THREE.Group>(null);

  // Sub-component references
  const coreTopRef = useRef<THREE.Mesh>(null);
  const coreBottomRef = useRef<THREE.Mesh>(null);
  const innerNucleusRef = useRef<THREE.Mesh>(null);
  const coreWireRef = useRef<THREE.LineSegments>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);
  const satellitesGroup = useRef<THREE.Group>(null);

  // Check prefers-reduced-motion
  const prefersReducedMotion = useMemo(() => {
    return typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false;
  }, []);

  // High-fidelity physical materials
  const chromeMaterial = useMemo(() => {
    return new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#e8ecf2'),
      metalness: 0.98,
      roughness: 0.12,
      clearcoat: 1.0,
      clearcoatRoughness: 0.08,
      reflectivity: 1.0,
      envMapIntensity: 2.5,
      transparent: true,
      opacity: 1.0,
    });
  }, []);

  const titaniumDarkMaterial = useMemo(() => {
    return new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#2d313b'),
      metalness: 0.96,
      roughness: 0.22,
      clearcoat: 0.8,
      clearcoatRoughness: 0.15,
      envMapIntensity: 2.0,
      transparent: true,
      opacity: 1.0,
    });
  }, []);

  const nucleusMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: new THREE.Color('#38bdf8'),
      emissive: new THREE.Color('#0284c7'),
      emissiveIntensity: 0.6,
      roughness: 0.3,
      metalness: 0.8,
      transparent: true,
      opacity: 0,
    });
  }, []);

  const wireframeMaterial = useMemo(() => {
    return new THREE.MeshBasicMaterial({
      color: new THREE.Color('#38bdf8'),
      wireframe: true,
      transparent: true,
      opacity: 0,
    });
  }, []);

  const lineMaterial = useMemo(() => {
    return new THREE.LineBasicMaterial({
      color: new THREE.Color('#38bdf8'),
      transparent: true,
      opacity: 0.15,
    });
  }, []);

  // Geometries
  const coreGeometry = useMemo(() => new THREE.IcosahedronGeometry(0.85, 1), []);
  const coreEdgesGeometry = useMemo(() => new THREE.EdgesGeometry(coreGeometry), [coreGeometry]);
  const innerOctaGeometry = useMemo(() => new THREE.OctahedronGeometry(0.5, 0), []);
  const ring1Geometry = useMemo(() => new THREE.TorusGeometry(1.5, 0.065, 32, 100), []);
  const ring2Geometry = useMemo(() => new THREE.TorusGeometry(1.8, 0.05, 32, 100), []);
  const ring3Geometry = useMemo(() => new THREE.TorusGeometry(2.1, 0.04, 32, 120, Math.PI * 1.6), []);
  const wireShellGeometry = useMemo(() => new THREE.IcosahedronGeometry(1.2, 2), []);
  const satGeometry = useMemo(() => new THREE.OctahedronGeometry(1, 0), []);

  // Proper cleanup on unmount
  useEffect(() => {
    return () => {
      chromeMaterial.dispose();
      titaniumDarkMaterial.dispose();
      nucleusMaterial.dispose();
      wireframeMaterial.dispose();
      lineMaterial.dispose();
      coreGeometry.dispose();
      coreEdgesGeometry.dispose();
      innerOctaGeometry.dispose();
      ring1Geometry.dispose();
      ring2Geometry.dispose();
      ring3Geometry.dispose();
      wireShellGeometry.dispose();
      satGeometry.dispose();
    };
  }, [
    chromeMaterial,
    titaniumDarkMaterial,
    nucleusMaterial,
    wireframeMaterial,
    lineMaterial,
    coreGeometry,
    coreEdgesGeometry,
    innerOctaGeometry,
    ring1Geometry,
    ring2Geometry,
    ring3Geometry,
    wireShellGeometry,
    satGeometry,
  ]);

  // Frame update loop (60fps guaranteed, zero allocations)
  useFrame((state, delta) => {
    if (!mainGroup.current) return;

    // Smooth mouse coordinates
    mouseState.x = THREE.MathUtils.lerp(mouseState.x, mouseState.targetX, 0.05);
    mouseState.y = THREE.MathUtils.lerp(mouseState.y, mouseState.targetY, 0.05);

    const s = sceneScrollState;
    const time = state.clock.getElapsedTime();

    // Base position with responsive mobile handling
    const responsiveX = isMobile ? 0 : s.targetX;
    const responsiveY = isMobile ? s.targetY + 0.35 : s.targetY;
    const responsiveScale = (isMobile ? 0.72 : 1.0) * s.scale;

    // Smooth interpolation to target positions
    mainGroup.current.position.x = THREE.MathUtils.lerp(
      mainGroup.current.position.x,
      responsiveX + mouseState.x * 0.25,
      0.06
    );
    mainGroup.current.position.y = THREE.MathUtils.lerp(
      mainGroup.current.position.y,
      responsiveY + (prefersReducedMotion ? 0 : Math.sin(time * 0.8) * 0.07) + mouseState.y * 0.25,
      0.06
    );
    mainGroup.current.position.z = THREE.MathUtils.lerp(
      mainGroup.current.position.z,
      s.targetZ,
      0.06
    );

    // Continuous idle rotation (gentle or reduced)
    const idleRotY = prefersReducedMotion ? 0 : time * 0.22;
    mainGroup.current.rotation.x = THREE.MathUtils.lerp(
      mainGroup.current.rotation.x,
      s.targetRotX - mouseState.y * 0.3,
      0.05
    );
    mainGroup.current.rotation.y = THREE.MathUtils.lerp(
      mainGroup.current.rotation.y,
      s.targetRotY + idleRotY + mouseState.x * 0.3,
      0.05
    );
    mainGroup.current.rotation.z = THREE.MathUtils.lerp(
      mainGroup.current.rotation.z,
      s.targetRotZ,
      0.05
    );

    // Scale using reused scratch vector
    scratchVec3.set(responsiveScale, responsiveScale, responsiveScale);
    mainGroup.current.scale.lerp(scratchVec3, 0.06);

    const sep = s.separation;
    const struct = s.structureMode;
    const simp = s.simplifyMix;
    const wire = s.wireframeMix;

    // --- PHASE 2: PHYSICAL DECONSTRUCTION / SEPARATION ---
    // Core splits into top and bottom halves, exposing the inner glowing nucleus
    if (coreTopRef.current) {
      coreTopRef.current.position.y = THREE.MathUtils.lerp(
        coreTopRef.current.position.y,
        sep * 0.45,
        0.06
      );
      // Morph scale in structured monolith mode (Section 3)
      coreTopRef.current.scale.y = THREE.MathUtils.lerp(
        coreTopRef.current.scale.y,
        1.0 + struct * 0.5,
        0.06
      );
      // In Section 5 Simplify: fade out core
      coreTopRef.current.visible = simp < 0.95;
    }

    if (coreBottomRef.current) {
      coreBottomRef.current.position.y = THREE.MathUtils.lerp(
        coreBottomRef.current.position.y,
        -sep * 0.45,
        0.06
      );
      coreBottomRef.current.scale.y = THREE.MathUtils.lerp(
        coreBottomRef.current.scale.y,
        1.0 + struct * 0.5,
        0.06
      );
      coreBottomRef.current.visible = simp < 0.95;
    }

    // Inner nucleus becomes visible when core separates or in wireframe
    if (innerNucleusRef.current) {
      nucleusMaterial.opacity = THREE.MathUtils.lerp(
        nucleusMaterial.opacity,
        simp > 0.5 ? 0 : Math.max(sep * 0.9, wire * 0.8),
        0.08
      );
      innerNucleusRef.current.rotation.y += delta * (0.5 + sep);
    }

    // --- PHASE 3: STRUCTURED ORTHOGONAL MONOLITH ---
    // Rings translate during deconstruction, and snap to orthogonal gimbal alignment during projects
    if (ring1Ref.current) {
      const targetR1X = THREE.MathUtils.lerp(sep * 1.35, 0, struct);
      ring1Ref.current.position.x = THREE.MathUtils.lerp(
        ring1Ref.current.position.x,
        targetR1X,
        0.06
      );
      // In Section 5: Ring 1 becomes the central continuous loop
      const r1Scale = THREE.MathUtils.lerp(1.0, 1.25, simp);
      ring1Ref.current.scale.set(r1Scale, r1Scale, r1Scale);

      // Rotate ring
      if (!prefersReducedMotion) {
        ring1Ref.current.rotation.z += delta * (0.2 + sep * 0.4);
      }
    }

    if (ring2Ref.current) {
      // Deconstruction vs Orthogonal alignment
      const targetR2X = THREE.MathUtils.lerp(-sep * 1.35, 0, struct);
      const targetR2Y = THREE.MathUtils.lerp(sep * 0.7, 0, struct);
      ring2Ref.current.position.x = THREE.MathUtils.lerp(
        ring2Ref.current.position.x,
        targetR2X,
        0.06
      );
      ring2Ref.current.position.y = THREE.MathUtils.lerp(
        ring2Ref.current.position.y,
        targetR2Y,
        0.06
      );

      // Target rotation: snaps to orthogonal [Math.PI/2, 0, 0] in structureMode
      const targetRotX = THREE.MathUtils.lerp(-Math.PI / 3, Math.PI / 2, struct);
      ring2Ref.current.rotation.x = THREE.MathUtils.lerp(
        ring2Ref.current.rotation.x,
        targetRotX,
        0.05
      );

      // In Section 5 Simplify: fade out ring 2
      ring2Ref.current.scale.setScalar(THREE.MathUtils.lerp(1.0, 0.001, simp));
      ring2Ref.current.visible = simp < 0.95;
    }

    if (ring3Ref.current) {
      const targetR3Z = THREE.MathUtils.lerp(sep * 1.1, 0, struct);
      ring3Ref.current.position.z = THREE.MathUtils.lerp(
        ring3Ref.current.position.z,
        targetR3Z,
        0.06
      );

      // Target rotation: snaps to orthogonal [0, Math.PI/2, 0] in structureMode
      const targetRotY = THREE.MathUtils.lerp(Math.PI / 2, 0, struct);
      ring3Ref.current.rotation.y = THREE.MathUtils.lerp(
        ring3Ref.current.rotation.y,
        targetRotY,
        0.05
      );

      // In Section 5 Simplify: fade out ring 3
      ring3Ref.current.scale.setScalar(THREE.MathUtils.lerp(1.0, 0.001, simp));
      ring3Ref.current.visible = simp < 0.95;
    }

    // --- PHASE 4: TECHNICAL HOLOGRAPHIC WIREFRAME ---
    wireframeMaterial.opacity = THREE.MathUtils.lerp(
      wireframeMaterial.opacity,
      wire * 0.9,
      0.08
    );

    lineMaterial.opacity = THREE.MathUtils.lerp(
      lineMaterial.opacity,
      wire > 0.1 ? 0.9 : 0.15,
      0.08
    );

    // Dynamic roughness adjustments for technical effect
    chromeMaterial.roughness = THREE.MathUtils.lerp(0.12, 0.45, wire);

    // --- SATELLITE PARTICLES ---
    if (satellitesGroup.current) {
      if (!prefersReducedMotion) {
        satellitesGroup.current.rotation.y = time * 0.35;
        satellitesGroup.current.rotation.x = Math.sin(time * 0.2) * 0.15;
      }
      const satScale = (1 + sep * 0.8) * (1 - simp);
      scratchVec3.set(satScale, satScale, satScale);
      satellitesGroup.current.scale.lerp(scratchVec3, 0.05);
      satellitesGroup.current.visible = simp < 0.95;
    }

    // Core pulsing idle
    if (coreTopRef.current && !prefersReducedMotion) {
      const pulse = 1 + Math.sin(time * 1.5) * 0.025;
      coreTopRef.current.scale.x = pulse;
      coreTopRef.current.scale.z = pulse;
      if (coreBottomRef.current) {
        coreBottomRef.current.scale.x = pulse;
        coreBottomRef.current.scale.z = pulse;
      }
    }
  });

  return (
    <group ref={mainGroup}>
      {/* Central Core - Top Segment */}
      <mesh
        ref={coreTopRef}
        material={chromeMaterial}
        geometry={coreGeometry}
      />

      {/* Central Core - Bottom Segment */}
      <mesh
        ref={coreBottomRef}
        material={chromeMaterial}
        geometry={coreGeometry}
      />

      {/* Internal Luminous Nucleus (Exposed during separation/skills) */}
      <mesh
        ref={innerNucleusRef}
        material={nucleusMaterial}
        geometry={innerOctaGeometry}
      />

      {/* Core Edge Wireframe Matrix */}
      <lineSegments
        ref={coreWireRef}
        geometry={coreEdgesGeometry}
        material={lineMaterial}
      />

      {/* Ring 1 - Deep Brushed Titanium / Continuous Loop in Section 5 */}
      <mesh
        ref={ring1Ref}
        material={titaniumDarkMaterial}
        geometry={ring1Geometry}
        rotation={[Math.PI / 4, 0, 0]}
      />

      {/* Ring 2 - High Polish Chrome Gimbal */}
      <mesh
        ref={ring2Ref}
        material={chromeMaterial}
        geometry={ring2Geometry}
        rotation={[-Math.PI / 3, Math.PI / 6, 0]}
      />

      {/* Ring 3 - Slotted Segmented Arc */}
      <mesh
        ref={ring3Ref}
        material={chromeMaterial}
        geometry={ring3Geometry}
        rotation={[0, Math.PI / 2, Math.PI / 4]}
      />

      {/* Technical Holographic Shell (Section 4 Skills) */}
      <mesh
        material={wireframeMaterial}
        geometry={wireShellGeometry}
      />

      {/* Orbiting Satellite Data Shards */}
      <group ref={satellitesGroup}>
        {[0, 1, 2, 3, 4, 5].map((i) => {
          const angle = (i / 6) * Math.PI * 2;
          const radius = 2.4;
          const x = Math.cos(angle) * radius;
          const z = Math.sin(angle) * radius;
          const y = Math.sin(angle * 2) * 0.4;
          return (
            <mesh
              key={i}
              position={[x, y, z]}
              material={chromeMaterial}
              geometry={satGeometry}
              scale={0.09}
            />
          );
        })}
      </group>
    </group>
  );
};
