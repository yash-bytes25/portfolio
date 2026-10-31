import React, { Suspense, useEffect, useState, Component, ErrorInfo, ReactNode } from 'react';
import { Canvas } from '@react-three/fiber';
import { EngineeringStructure } from './EngineeringStructure';
import { StudioLighting } from './StudioLighting';
import { mouseState } from './sceneState';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class WebGLErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.warn('WebGL Rendering Encountered an Issue:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

export const Scene: React.FC = () => {
  const [dpr, setDpr] = useState<[number, number]>([1, 1.5]);

  useEffect(() => {
    // Adapt DPR based on device to guarantee 60fps across mobile and desktop
    const updateDpr = () => {
      const isMobile = window.innerWidth < 768;
      const maxDpr = isMobile ? 1.25 : Math.min(window.devicePixelRatio || 1, 1.8);
      setDpr([1, maxDpr]);
    };

    updateDpr();
    window.addEventListener('resize', updateDpr, { passive: true });

    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse coordinates from -1 to 1
      mouseState.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseState.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('resize', updateDpr);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Technical laboratory fallback when WebGL is unavailable
  const fallbackLabSchematic = (
    <div className="fixed inset-0 pointer-events-none z-10 flex items-center justify-center opacity-30">
      <div className="w-80 h-80 rounded-full border border-[#8C9298]/30 flex items-center justify-center relative animate-pulse-subtle">
        <div className="absolute inset-4 rounded-full border border-dashed border-[#FF5A1F]/40" />
        <div className="absolute w-full h-[1px] bg-[#8C9298]/20" />
        <div className="absolute h-full w-[1px] bg-[#8C9298]/20" />
        <div className="w-20 h-20 border border-[#FF5A1F] rotate-45 flex items-center justify-center">
          <div className="w-2 h-2 bg-[#FF5A1F]" />
        </div>
        <div className="absolute bottom-2 right-2 font-mono text-[10px] text-[#8C9298]">
          [SCHEMATIC_FALLBACK_ACTIVE]
        </div>
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 pointer-events-none z-10 w-full h-full overflow-hidden">
      <WebGLErrorBoundary fallback={fallbackLabSchematic}>
        <Canvas
          camera={{ position: [0, 0, 5.8], fov: 40 }}
          dpr={dpr}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance',
          }}
        >
          <Suspense fallback={null}>
            <StudioLighting />
            <EngineeringStructure />
          </Suspense>
        </Canvas>
      </WebGLErrorBoundary>
    </div>
  );
};
