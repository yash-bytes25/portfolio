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
    console.warn('WebGL Rendering Notice:', error, errorInfo);
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
    const updateDpr = () => {
      const isMobile = window.innerWidth < 768;
      const maxDpr = isMobile ? 1.25 : Math.min(window.devicePixelRatio || 1, 1.8);
      setDpr([1, maxDpr]);
    };

    updateDpr();
    window.addEventListener('resize', updateDpr, { passive: true });

    const handleMouseMove = (e: MouseEvent) => {
      mouseState.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseState.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('resize', updateDpr);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Minimal aesthetic fallback if WebGL is unsupported
  const fallbackSculpture = (
    <div className="fixed inset-0 pointer-events-none z-10 flex items-center justify-center opacity-20">
      <div className="w-72 h-72 rounded-full border border-white/10 flex items-center justify-center relative">
        <div className="w-48 h-48 rounded-full border border-white/15" />
        <div className="w-24 h-24 rounded-full border border-white/20" />
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 pointer-events-none z-10 w-full h-full overflow-hidden">
      <WebGLErrorBoundary fallback={fallbackSculpture}>
        <Canvas
          camera={{ position: [0, 0, 5.6], fov: 40 }}
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
