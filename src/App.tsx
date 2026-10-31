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
  // Initialize subtle scroll choreography for persistent 3D sculpture
  useScrollExperience();

  return (
    <div className="relative min-h-screen bg-background text-primary selection:bg-accent/30 selection:text-white font-sans antialiased overflow-x-hidden">
      {/* Subtle atmospheric vignette */}
      <GrainOverlay />

      {/* Persistent 3D R3F Canvas */}
      <Scene />

      {/* Navigation */}
      <Navbar />

      {/* Editorial Content */}
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
