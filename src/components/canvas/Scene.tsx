import React, { Suspense, useEffect, useState, Component, ErrorInfo, ReactNode } from 'react';
import { Canvas } from '@react-three/fiber';
import { Sculpture } from './Sculpture';
import { StudioLighting } from './StudioLighting';
import { mouseState } from './scrollState';

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
    // Adapt DPR based on screen size to prevent mobile GPU throttling
    const updateDpr = () => {
      const isMobile = window.innerWidth < 768;
      const maxDpr = isMobile ? 1.4 : Math.min(window.devicePixelRatio || 1, 1.8);
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

  const fallbackArtwork = (
    <div className="fixed inset-0 pointer-events-none z-10 flex items-center justify-center opacity-40">
      <div className="w-96 h-96 rounded-full border border-white/20 bg-gradient-to-tr from-zinc-800 via-zinc-400 to-white/10 blur-xl animate-pulse" />
    </div>
  );

  return (
    <div className="fixed inset-0 pointer-events-none z-10 w-full h-full overflow-hidden">
      <WebGLErrorBoundary fallback={fallbackArtwork}>
        <Canvas
          camera={{ position: [0, 0, 5.5], fov: 42 }}
          dpr={dpr}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance',
          }}
        >
          <Suspense fallback={null}>
            <StudioLighting />
            <Sculpture />
          </Suspense>
        </Canvas>
      </WebGLErrorBoundary>
    </div>
  );
};
