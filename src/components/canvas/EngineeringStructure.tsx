import React, { useRef, useMemo, useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { labSceneState, mouseState } from './sceneState';

export const EngineeringStructure: React.FC = () => {
  const { viewport } = useThree();
  const isMobile = viewport.width < 5.8;

  // Root group
  const rootGroup = useRef<THREE.Group>(null);

  // Sub-assembly groups
  const coreGroup = useRef<THREE.Group>(null);
  const heatsinkGroup = useRef<THREE.Group>(null);
  const ring1Group = useRef<THREE.Group>(null);
  const ring2Group = useRef<THREE.Group>(null);
  const ring3Group = useRef<THREE.Group>(null);
  const railsGroup = useRef<THREE.Group>(null);
  const nodesGroup = useRef<THREE.Group>(null);
  const wireframeLatticeRef = useRef<THREE.Mesh>(null);
  const coreMeshRef = useRef<THREE.Mesh>(null);

  // Pre-allocated slider mesh refs for mechanical inspection expansion
  const sliderNorth = useRef<THREE.Mesh>(null);
  const sliderSouth = useRef<THREE.Mesh>(null);
  const sliderEast = useRef<THREE.Mesh>(null);
  const sliderWest = useRef<THREE.Mesh>(null);
  const sliderTop = useRef<THREE.Mesh>(null);
  const sliderBottom = useRef<THREE.Mesh>(null);

  // Check prefers-reduced-motion
  const prefersReducedMotion = useMemo(() => {
    return typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false;
  }, []);

  // Physical Materials
  const darkAlloyMaterial = useMemo(() => {
    return new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#14171a'),
      metalness: 0.92,
      roughness: 0.28,
      clearcoat: 0.35,
      clearcoatRoughness: 0.2,
      reflectivity: 0.9,
      envMapIntensity: 1.8,
      transparent: true,
      opacity: 1.0,
    });
  }, []);

  const brushedSteelMaterial = useMemo(() => {
    return new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#a0a6ad'),
      metalness: 0.96,
      roughness: 0.22,
      clearcoat: 0.7,
      clearcoatRoughness: 0.15,
      reflectivity: 1.0,
      envMapIntensity: 2.2,
      transparent: true,
      opacity: 1.0,
    });
  }, []);

  const signalOrangeMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: new THREE.Color('#FF5A1F'),
      emissive: new THREE.Color('#FF5A1F'),
      emissiveIntensity: 1.4,
      roughness: 0.25,
      metalness: 0.7,
      transparent: true,
      opacity: 1.0,
    });
  }, []);

  const coreGlowMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      color: new THREE.Color('#FF5A1F'),
      emissive: new THREE.Color('#FF4500'),
      emissiveIntensity: 2.2,
      roughness: 0.2,
      metalness: 0.4,
      transparent: true,
      opacity: 0.92,
    });
  }, []);

  const wireframeMaterial = useMemo(() => {
    return new THREE.MeshBasicMaterial({
      color: new THREE.Color('#8C9298'),
      wireframe: true,
      transparent: true,
      opacity: 0.08,
    });
  }, []);

  const wireframeAccentMaterial = useMemo(() => {
    return new THREE.MeshBasicMaterial({
      color: new THREE.Color('#FF5A1F'),
      wireframe: true,
      transparent: true,
      opacity: 0.1,
    });
  }, []);

  const lineConduitMaterial = useMemo(() => {
    return new THREE.LineBasicMaterial({
      color: new THREE.Color('#8C9298'),
      transparent: true,
      opacity: 0.3,
    });
  }, []);

  // Geometries
  const coreGeometry = useMemo(() => new THREE.OctahedronGeometry(0.55, 0), []);
  const coreEdgesGeometry = useMemo(() => new THREE.EdgesGeometry(new THREE.OctahedronGeometry(0.56, 0)), []);
  const innerNucleusGeometry = useMemo(() => new THREE.IcosahedronGeometry(0.3, 1), []);
  const ring1Geometry = useMemo(() => new THREE.TorusGeometry(1.25, 0.038, 24, 100), []);
  const ring2Geometry = useMemo(() => new THREE.TorusGeometry(1.65, 0.045, 24, 100), []);
  const ring3Geometry = useMemo(() => new THREE.TorusGeometry(2.05, 0.03, 24, 120, Math.PI * 1.75), []);
  const railRodGeometry = useMemo(() => new THREE.CylinderGeometry(0.018, 0.018, 3.4, 16), []);
  const sliderBoxGeometry = useMemo(() => new THREE.BoxGeometry(0.14, 0.14, 0.14), []);
  const sensorPinGeometry = useMemo(() => new THREE.CylinderGeometry(0.025, 0.025, 0.08, 12), []);
  const finGeometry = useMemo(() => new THREE.BoxGeometry(0.02, 0.45, 0.22), []);
  const wireLatticeGeometry = useMemo(() => new THREE.IcosahedronGeometry(2.2, 1), []);
  const nodePillarGeometry = useMemo(() => new THREE.OctahedronGeometry(0.09, 0), []);

  // Data conduit pathways (geometric circle lines)
  const conduitCircleGeom = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    const segments = 48;
    for (let i = 0; i <= segments; i++) {
      const theta = (i / segments) * Math.PI * 2;
      pts.push(new THREE.Vector3(Math.cos(theta) * 0.9, 0, Math.sin(theta) * 0.9));
    }
    const geom = new THREE.BufferGeometry().setFromPoints(pts);
    return geom;
  }, []);

  const conduitLine1 = useMemo(() => new THREE.Line(conduitCircleGeom, lineConduitMaterial), [conduitCircleGeom, lineConduitMaterial]);
  const conduitLine2 = useMemo(() => {
    const line = new THREE.Line(conduitCircleGeom, lineConduitMaterial);
    line.rotation.x = Math.PI / 2;
    return line;
  }, [conduitCircleGeom, lineConduitMaterial]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      coreGeometry.dispose();
      coreEdgesGeometry.dispose();
      innerNucleusGeometry.dispose();
      ring1Geometry.dispose();
      ring2Geometry.dispose();
      ring3Geometry.dispose();
      railRodGeometry.dispose();
      sliderBoxGeometry.dispose();
      sensorPinGeometry.dispose();
      finGeometry.dispose();
      wireLatticeGeometry.dispose();
      nodePillarGeometry.dispose();
      conduitCircleGeom.dispose();
      darkAlloyMaterial.dispose();
      brushedSteelMaterial.dispose();
      signalOrangeMaterial.dispose();
      coreGlowMaterial.dispose();
      wireframeMaterial.dispose();
      wireframeAccentMaterial.dispose();
      lineConduitMaterial.dispose();
    };
  }, []);

  // 60FPS Render & Interaction Loop
  useFrame((state, delta) => {
    if (!rootGroup.current) return;

    // Smooth mouse damping
    mouseState.x += (mouseState.targetX - mouseState.x) * 0.08;
    mouseState.y += (mouseState.targetY - mouseState.y) * 0.08;

    const time = state.clock.getElapsedTime();
    const speed = prefersReducedMotion ? 0.0 : labSceneState.rotationSpeed;

    // 1. Position Interpolation with responsive adjustment
    const effectiveTargetX = isMobile ? 0 : labSceneState.targetX;
    const effectiveTargetY = isMobile ? labSceneState.targetY + 0.28 : labSceneState.targetY;
    const effectiveTargetZ = isMobile ? labSceneState.targetZ - 1.3 : labSceneState.targetZ;
    const effectiveScale = isMobile ? labSceneState.scale * 0.6 : labSceneState.scale;

    rootGroup.current.position.x = THREE.MathUtils.lerp(
      rootGroup.current.position.x,
      effectiveTargetX + mouseState.x * 0.2,
      0.08
    );
    rootGroup.current.position.y = THREE.MathUtils.lerp(
      rootGroup.current.position.y,
      effectiveTargetY + mouseState.y * 0.15,
      0.08
    );
    rootGroup.current.position.z = THREE.MathUtils.lerp(
      rootGroup.current.position.z,
      effectiveTargetZ,
      0.08
    );

    // 2. Base Group Orientation
    rootGroup.current.rotation.x = THREE.MathUtils.lerp(
      rootGroup.current.rotation.x,
      labSceneState.targetRotX + mouseState.y * 0.25,
      0.06
    );
    rootGroup.current.rotation.y = THREE.MathUtils.lerp(
      rootGroup.current.rotation.y,
      labSceneState.targetRotY + mouseState.x * 0.35,
      0.06
    );
    rootGroup.current.rotation.z = THREE.MathUtils.lerp(
      rootGroup.current.rotation.z,
      labSceneState.targetRotZ,
      0.06
    );

    rootGroup.current.scale.setScalar(
      THREE.MathUtils.lerp(rootGroup.current.scale.x, effectiveScale, 0.08)
    );

    // 3. Gyroscopic Gimbal Rings (differing gear ratios)
    if (ring1Group.current) {
      ring1Group.current.rotation.x += delta * 0.25 * speed;
      ring1Group.current.rotation.y += delta * 0.15 * speed;
    }
    if (ring2Group.current) {
      ring2Group.current.rotation.y -= delta * 0.35 * speed;
      ring2Group.current.rotation.z += delta * 0.12 * speed;
    }
    if (ring3Group.current) {
      ring3Group.current.rotation.z += delta * 0.18 * speed;
      ring3Group.current.rotation.x -= delta * 0.08 * speed;
    }

    // 4. Central Computational Core (breathing pulse)
    if (coreMeshRef.current) {
      const pulse = 1 + Math.sin(time * 2.8) * 0.04;
      coreMeshRef.current.scale.setScalar(pulse);
      coreGlowMaterial.emissiveIntensity = 1.8 + Math.sin(time * 3.5) * 0.6;
    }

    // 5. Mechanical Inspection Expansion (Section 02 & beyond)
    // Sliders expand along guide rods outwards from center
    const expansion = labSceneState.inspectionExpansion;
    const baseOffset = 0.65;
    const maxOffset = 1.45;
    const currentOffset = THREE.MathUtils.lerp(baseOffset, maxOffset, expansion);

    if (sliderNorth.current) sliderNorth.current.position.set(0, currentOffset, 0);
    if (sliderSouth.current) sliderSouth.current.position.set(0, -currentOffset, 0);
    if (sliderEast.current) sliderEast.current.position.set(currentOffset, 0, 0);
    if (sliderWest.current) sliderWest.current.position.set(-currentOffset, 0, 0);
    if (sliderTop.current) sliderTop.current.position.set(0, 0, currentOffset);
    if (sliderBottom.current) sliderBottom.current.position.set(0, 0, -currentOffset);

    // Outer gimbals expand slightly under inspection
    if (ring1Group.current) {
      const ringScale = THREE.MathUtils.lerp(1.0, 1.22, expansion);
      ring1Group.current.scale.setScalar(ringScale);
    }
    if (ring2Group.current) {
      const ringScale = THREE.MathUtils.lerp(1.0, 1.28, expansion);
      ring2Group.current.scale.setScalar(ringScale);
    }

    // 6. Wireframe Transition (Section 04: Technical Arsenal)
    const wireMix = labSceneState.wireframeMix;
    wireframeMaterial.opacity = THREE.MathUtils.lerp(0.08, 0.75, wireMix);
    wireframeAccentMaterial.opacity = THREE.MathUtils.lerp(0.1, 0.85, wireMix);
    darkAlloyMaterial.opacity = THREE.MathUtils.lerp(1.0, 0.28, wireMix);
    brushedSteelMaterial.opacity = THREE.MathUtils.lerp(1.0, 0.32, wireMix);

    if (wireframeLatticeRef.current) {
      wireframeLatticeRef.current.rotation.y += delta * 0.1 * speed;
      wireframeLatticeRef.current.rotation.x += delta * 0.05 * speed;
      const latticeScale = THREE.MathUtils.lerp(1.0, 1.15, wireMix);
      wireframeLatticeRef.current.scale.setScalar(latticeScale);
    }
  });

  return (
    <group ref={rootGroup}>
      {/* 1. CENTRAL PROCESSING CORE */}
      <group ref={coreGroup}>
        {/* Inner Glowing Nucleus */}
        <mesh ref={coreMeshRef} geometry={innerNucleusGeometry} material={coreGlowMaterial} />

        {/* Faceted Core Chassis with Wireframe Edges */}
        <mesh geometry={coreGeometry} material={darkAlloyMaterial} />
        <lineSegments geometry={coreEdgesGeometry} material={wireframeAccentMaterial} />

        {/* Radial Heatsink Cooling Fins (8 surrounding blades) */}
        <group ref={heatsinkGroup}>
          {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
            const angle = (i / 8) * Math.PI * 2;
            const radius = 0.58;
            return (
              <mesh
                key={i}
                geometry={finGeometry}
                material={brushedSteelMaterial}
                position={[Math.cos(angle) * radius, 0, Math.sin(angle) * radius]}
                rotation={[0, -angle, 0]}
              />
            );
          })}
        </group>
      </group>

      {/* 2. CONCENTRIC CALIBRATED GIMBAL RINGS */}
      {/* Ring 1 - Inner Gyro (Dark Alloy) */}
      <group ref={ring1Group}>
        <mesh geometry={ring1Geometry} material={darkAlloyMaterial} />
        {/* Vernier gauge nodes on Ring 1 */}
        {[0, Math.PI * 0.5, Math.PI, Math.PI * 1.5].map((angle, idx) => (
          <mesh
            key={`r1-pin-${idx}`}
            geometry={sensorPinGeometry}
            material={signalOrangeMaterial}
            position={[Math.cos(angle) * 1.25, Math.sin(angle) * 1.25, 0]}
            rotation={[0, 0, angle + Math.PI / 2]}
          />
        ))}
      </group>

      {/* Ring 2 - Middle Gyro (Brushed Steel with Metric Collar Markers) */}
      <group ref={ring2Group}>
        <mesh geometry={ring2Geometry} material={brushedSteelMaterial} rotation={[Math.PI / 2, 0, 0]} />
        {[0, Math.PI * 0.33, Math.PI * 0.66, Math.PI, Math.PI * 1.33, Math.PI * 1.66].map((angle, idx) => (
          <mesh
            key={`r2-node-${idx}`}
            geometry={nodePillarGeometry}
            material={darkAlloyMaterial}
            position={[Math.cos(angle) * 1.65, 0, Math.sin(angle) * 1.65]}
          />
        ))}
      </group>

      {/* Ring 3 - Outer Track (Segmented Arc with Optical Sensor Collars) */}
      <group ref={ring3Group}>
        <mesh geometry={ring3Geometry} material={darkAlloyMaterial} rotation={[0, Math.PI / 4, 0]} />
        <mesh
          geometry={sensorPinGeometry}
          material={signalOrangeMaterial}
          position={[2.05, 0, 0]}
          rotation={[0, 0, Math.PI / 2]}
        />
        <mesh
          geometry={sensorPinGeometry}
          material={signalOrangeMaterial}
          position={[-2.05, 0, 0]}
          rotation={[0, 0, Math.PI / 2]}
        />
      </group>

      {/* 3. STRUCTURAL GUIDE RAILS & SLIDER ACTUATORS */}
      <group ref={railsGroup}>
        {/* Y-Axis Guide Rail */}
        <mesh geometry={railRodGeometry} material={brushedSteelMaterial} />
        {/* X-Axis Guide Rail */}
        <mesh geometry={railRodGeometry} material={brushedSteelMaterial} rotation={[0, 0, Math.PI / 2]} />
        {/* Z-Axis Guide Rail */}
        <mesh geometry={railRodGeometry} material={brushedSteelMaterial} rotation={[Math.PI / 2, 0, 0]} />

        {/* Mobile Slider Blocks (Expand outward during inspection mode) */}
        <mesh ref={sliderNorth} geometry={sliderBoxGeometry} material={darkAlloyMaterial} position={[0, 0.65, 0]}>
          <mesh geometry={sensorPinGeometry} material={signalOrangeMaterial} position={[0, 0.08, 0]} />
        </mesh>
        <mesh ref={sliderSouth} geometry={sliderBoxGeometry} material={darkAlloyMaterial} position={[0, -0.65, 0]}>
          <mesh geometry={sensorPinGeometry} material={signalOrangeMaterial} position={[0, -0.08, 0]} />
        </mesh>
        <mesh ref={sliderEast} geometry={sliderBoxGeometry} material={darkAlloyMaterial} position={[0.65, 0, 0]}>
          <mesh geometry={sensorPinGeometry} material={signalOrangeMaterial} position={[0.08, 0, 0]} rotation={[0, 0, Math.PI / 2]} />
        </mesh>
        <mesh ref={sliderWest} geometry={sliderBoxGeometry} material={darkAlloyMaterial} position={[-0.65, 0, 0]}>
          <mesh geometry={sensorPinGeometry} material={signalOrangeMaterial} position={[-0.08, 0, 0]} rotation={[0, 0, Math.PI / 2]} />
        </mesh>
        <mesh ref={sliderTop} geometry={sliderBoxGeometry} material={darkAlloyMaterial} position={[0, 0, 0.65]}>
          <mesh geometry={sensorPinGeometry} material={signalOrangeMaterial} position={[0, 0, 0.08]} rotation={[Math.PI / 2, 0, 0]} />
        </mesh>
        <mesh ref={sliderBottom} geometry={sliderBoxGeometry} material={darkAlloyMaterial} position={[0, 0, -0.65]}>
          <mesh geometry={sensorPinGeometry} material={signalOrangeMaterial} position={[0, 0, -0.08]} rotation={[Math.PI / 2, 0, 0]} />
        </mesh>
      </group>

      {/* 4. DATA PATHWAY BUS CONDUITS */}
      <primitive object={conduitLine1} />
      <primitive object={conduitLine2} />

      {/* 5. SENSOR NODES (Gold/Orange Data Interconnect Points) */}
      <group ref={nodesGroup}>
        {[
          [1.0, 1.0, 1.0],
          [-1.0, 1.0, 1.0],
          [1.0, -1.0, 1.0],
          [-1.0, -1.0, 1.0],
          [1.0, 1.0, -1.0],
          [-1.0, 1.0, -1.0],
          [1.0, -1.0, -1.0],
          [-1.0, -1.0, -1.0],
        ].map(([x, y, z], idx) => (
          <mesh
            key={`node-pt-${idx}`}
            geometry={nodePillarGeometry}
            material={signalOrangeMaterial}
            position={[x * 0.95, y * 0.95, z * 0.95]}
            scale={0.45}
          />
        ))}
      </group>

      {/* 6. TECHNICAL BLUEPRINT WIREFRAME LATTICE (Becomes prominent in Section 04) */}
      <mesh
        ref={wireframeLatticeRef}
        geometry={wireLatticeGeometry}
        material={wireframeMaterial}
      />
    </group>
  );
};
