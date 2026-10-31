import React from 'react';
import { Scene } from './components/canvas/Scene';
import { Navbar } from './components/dom/Navbar';
import { HeroSection } from './components/dom/HeroSection';
import { JourneySection } from './components/dom/JourneySection';
import { ProjectsSection } from './components/dom/ProjectsSection';
import { SkillsSection } from './components/dom/SkillsSection';
import { ContactSection } from './components/dom/ContactSection';
import { GrainOverlay } from './components/dom/GrainOverlay';
import { useScrollExperience } from './hooks/useScrollExperience';

export const App: React.FC = () => {
  // Initialize GSAP scroll choreography for persistent 3D laboratory scene
  useScrollExperience();

  return (
    <div className="relative min-h-screen bg-graphite lab-grid-bg text-warm-white selection:bg-signal-orange selection:text-deep-black font-sans antialiased overflow-x-hidden">
      {/* Analog film grain overlay */}
      <GrainOverlay />

      {/* Persistent 3D R3F Canvas */}
      <Scene />

      {/* Laboratory Instrument Navigation Bar */}
      <Navbar />

      {/* Editorial Content Layers */}
      <main className="relative z-20">
        <HeroSection />
        <JourneySection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default App;
