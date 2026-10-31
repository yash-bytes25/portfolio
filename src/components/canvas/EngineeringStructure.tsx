import React, { useRef, useMemo, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { labSceneState, mouseState } from './sceneState';

export const EngineeringStructure: React.FC = () => {
  const { viewport } = useThree();
  const isMobile = viewport.width < 5.8;

  // Root group
  const rootGroup = useRef<THREE.Group>(null);

  // Sub-assemblies
  const coreGroup = useRef<THREE.Group>(null);
  const coreMeshRef = useRef<THREE.Mesh>(null);
  const ring1Group = useRef<THREE.Group>(null);
  const ring2Group = useRef<THREE.Group>(null);
  const ring3Group = useRef<THREE.Group>(null);
  const wireframeLatticeRef = useRef<THREE.Mesh>(null);

  // Check prefers-reduced-motion
  const prefersReducedMotion = useMemo(() => {
    return typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false;
  }, []);

  // Premium Physical Materials
  const titaniumMaterial = useMemo(() => {
    return new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#1c2027'),
      metalness: 0.92,
      roughness: 0.24,
      clearcoat: 0.8,
      clearcoatRoughness: 0.15,
      reflectivity: 0.95,
      envMapIntensity: 1.8,
      transparent: true,
      opacity: 1.0,
    });
  }, []);

  const brushedSteelMaterial = useMemo(() => {
    return new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#d4d8df'),
      metalness: 0.95,
      roughness: 0.18,
      clearcoat: 0.9,
      clearcoatRoughness: 0.1,
      reflectivity: 1.0,
      envMapIntensity: 2.2,
      transparent: true,
      opacity: 1.0,
    });
  }, []);

  const warmAccentMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: new THREE.Color('#ea580c'),
      emissive: new THREE.Color('#c2410c'),
      emissiveIntensity: 0.8,
      roughness: 0.25,
      metalness: 0.8,
      transparent: true,
      opacity: 1.0,
    });
  }, []);

  const coreGlowMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: new THREE.Color('#ea580c'),
      emissive: new THREE.Color('#ea580c'),
      emissiveIntensity: 1.4,
      roughness: 0.2,
      metalness: 0.5,
      transparent: true,
      opacity: 0.95,
    });
  }, []);

  const wireframeMaterial = useMemo(() => {
    return new THREE.MeshBasicMaterial({
      color: new THREE.Color('#9ca3af'),
      wireframe: true,
      transparent: true,
      opacity: 0.05,
    });
  }, []);

  const wireframeAccentMaterial = useMemo(() => {
    return new THREE.MeshBasicMaterial({
      color: new THREE.Color('#ea580c'),
      wireframe: true,
      transparent: true,
      opacity: 0.08,
    });
  }, []);

  // Harmonious, Art-Directed Geometries
  const coreGeometry = useMemo(() => new THREE.IcosahedronGeometry(0.72, 1), []);
  const coreEdgesGeometry = useMemo(() => new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(0.73, 1)), []);
  const innerNucleusGeometry = useMemo(() => new THREE.OctahedronGeometry(0.42, 0), []);
  
  // Sleek, refined concentric rings with varying inclinations
  const ring1Geometry = useMemo(() => new THREE.TorusGeometry(1.4, 0.024, 32, 120), []);
  const ring2Geometry = useMemo(() => new THREE.TorusGeometry(1.78, 0.02, 32, 140), []);
  const ring3Geometry = useMemo(() => new THREE.TorusGeometry(2.15, 0.016, 32, 160), []);
  
  const satelliteGeometry = useMemo(() => new THREE.SphereGeometry(0.045, 16, 16), []);
  const wireLatticeGeometry = useMemo(() => new THREE.IcosahedronGeometry(2.35, 1), []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      coreGeometry.dispose();
      coreEdgesGeometry.dispose();
      innerNucleusGeometry.dispose();
      ring1Geometry.dispose();
      ring2Geometry.dispose();
      ring3Geometry.dispose();
      satelliteGeometry.dispose();
      wireLatticeGeometry.dispose();
      titaniumMaterial.dispose();
      brushedSteelMaterial.dispose();
      warmAccentMaterial.dispose();
      coreGlowMaterial.dispose();
      wireframeMaterial.dispose();
      wireframeAccentMaterial.dispose();
    };
  }, []);

  // 60FPS Frame Loop
  useFrame((state, delta) => {
    if (!rootGroup.current) return;

    // Smooth mouse damping
    mouseState.x += (mouseState.targetX - mouseState.x) * 0.06;
    mouseState.y += (mouseState.targetY - mouseState.y) * 0.06;

    const time = state.clock.getElapsedTime();
    const speed = prefersReducedMotion ? 0.0 : labSceneState.rotationSpeed;

    // Position interpolation: on mobile, position in lower negative space to keep text 100% clean
    const effectiveTargetX = isMobile ? 0 : labSceneState.targetX;
    const effectiveTargetY = isMobile ? -0.55 : labSceneState.targetY;
    const effectiveTargetZ = isMobile ? -3.0 : labSceneState.targetZ;
    const effectiveScale = isMobile ? 0.36 : labSceneState.scale * 0.95;

    rootGroup.current.position.x = THREE.MathUtils.lerp(
      rootGroup.current.position.x,
      effectiveTargetX + mouseState.x * 0.15,
      0.06
    );
    rootGroup.current.position.y = THREE.MathUtils.lerp(
      rootGroup.current.position.y,
      effectiveTargetY + mouseState.y * 0.12,
      0.06
    );
    rootGroup.current.position.z = THREE.MathUtils.lerp(
      rootGroup.current.position.z,
      effectiveTargetZ,
      0.06
    );

    // Orientation
    rootGroup.current.rotation.x = THREE.MathUtils.lerp(
      rootGroup.current.rotation.x,
      labSceneState.targetRotX + mouseState.y * 0.18,
      0.05
    );
    rootGroup.current.rotation.y = THREE.MathUtils.lerp(
      rootGroup.current.rotation.y,
      labSceneState.targetRotY + mouseState.x * 0.22,
      0.05
    );
    rootGroup.current.rotation.z = THREE.MathUtils.lerp(
      rootGroup.current.rotation.z,
      labSceneState.targetRotZ,
      0.05
    );

    rootGroup.current.scale.setScalar(
      THREE.MathUtils.lerp(rootGroup.current.scale.x, effectiveScale, 0.06)
    );

    // Smooth, gentle continuous rotation for orbital rings
    if (ring1Group.current) {
      ring1Group.current.rotation.x += delta * 0.14 * speed;
      ring1Group.current.rotation.y += delta * 0.08 * speed;
    }
    if (ring2Group.current) {
      ring2Group.current.rotation.y -= delta * 0.18 * speed;
      ring2Group.current.rotation.z += delta * 0.06 * speed;
    }
    if (ring3Group.current) {
      ring3Group.current.rotation.z += delta * 0.10 * speed;
      ring3Group.current.rotation.x -= delta * 0.04 * speed;
    }

    // Gentle organic breathing pulse on core
    if (coreMeshRef.current) {
      const pulse = 1 + Math.sin(time * 1.8) * 0.03;
      coreMeshRef.current.scale.setScalar(pulse);
      coreGlowMaterial.emissiveIntensity = 1.0 + Math.sin(time * 2.2) * 0.35;
    }

    // Scroll-driven inspection expansion
    const expansion = labSceneState.inspectionExpansion;
    if (ring1Group.current) {
      const ringScale = THREE.MathUtils.lerp(1.0, 1.25, expansion);
      ring1Group.current.scale.setScalar(ringScale);
    }
    if (ring2Group.current) {
      const ringScale = THREE.MathUtils.lerp(1.0, 1.35, expansion);
      ring2Group.current.scale.setScalar(ringScale);
    }

    // Wireframe transition for Skills section
    const wireMix = labSceneState.wireframeMix;
    wireframeMaterial.opacity = THREE.MathUtils.lerp(0.05, 0.65, wireMix);
    wireframeAccentMaterial.opacity = THREE.MathUtils.lerp(0.08, 0.75, wireMix);
    titaniumMaterial.opacity = THREE.MathUtils.lerp(1.0, 0.3, wireMix);
    brushedSteelMaterial.opacity = THREE.MathUtils.lerp(1.0, 0.35, wireMix);

    if (wireframeLatticeRef.current) {
      wireframeLatticeRef.current.rotation.y += delta * 0.08 * speed;
      wireframeLatticeRef.current.rotation.x += delta * 0.04 * speed;
      const latticeScale = THREE.MathUtils.lerp(1.0, 1.1, wireMix);
      wireframeLatticeRef.current.scale.setScalar(latticeScale);
    }
  });

  return (
    <group ref={rootGroup}>
      {/* 1. CENTRAL FACETED CORE */}
      <group ref={coreGroup}>
        {/* Inner Luminous Nucleus */}
        <mesh ref={coreMeshRef} geometry={innerNucleusGeometry} material={coreGlowMaterial} />

        {/* Faceted Outer Jewel Body */}
        <mesh geometry={coreGeometry} material={titaniumMaterial} />
        <lineSegments geometry={coreEdgesGeometry} material={wireframeAccentMaterial} />
      </group>

      {/* 2. REFINED CONCENTRIC ORBITAL RINGS */}
      {/* Ring 1 - Inner Ring with Satin Accent Satellites */}
      <group ref={ring1Group}>
        <mesh geometry={ring1Geometry} material={brushedSteelMaterial} />
        {[0, Math.PI].map((angle, idx) => (
          <mesh
            key={`r1-sat-${idx}`}
            geometry={satelliteGeometry}
            material={warmAccentMaterial}
            position={[Math.cos(angle) * 1.4, Math.sin(angle) * 1.4, 0]}
          />
        ))}
      </group>

      {/* Ring 2 - Middle Ring (Inclined Plane) */}
      <group ref={ring2Group}>
        <mesh
          geometry={ring2Geometry}
          material={titaniumMaterial}
          rotation={[Math.PI / 3, 0, Math.PI / 6]}
        />
        {[Math.PI * 0.5, Math.PI * 1.5].map((angle, idx) => (
          <mesh
            key={`r2-sat-${idx}`}
            geometry={satelliteGeometry}
            material={brushedSteelMaterial}
            position={[
              Math.cos(angle) * 1.78,
              0,
              Math.sin(angle) * 1.78
            ]}
          />
        ))}
      </group>

      {/* Ring 3 - Outer Orbital Band */}
      <group ref={ring3Group}>
        <mesh
          geometry={ring3Geometry}
          material={brushedSteelMaterial}
          rotation={[-Math.PI / 4, Math.PI / 4, 0]}
        />
        <mesh
          geometry={satelliteGeometry}
          material={warmAccentMaterial}
          position={[2.15, 0, 0]}
        />
        <mesh
          geometry={satelliteGeometry}
          material={warmAccentMaterial}
          position={[-2.15, 0, 0]}
        />
      </group>

      {/* 3. SUBTLE BLUEPRINT LATTICE (Transitions during Skills section) */}
      <mesh
        ref={wireframeLatticeRef}
        geometry={wireLatticeGeometry}
        material={wireframeMaterial}
      />
    </group>
  );
};
