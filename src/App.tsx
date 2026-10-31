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
  // Initialize GSAP scroll-driven 3D coordinates
  useScrollExperience();

  return (
    <div className="relative min-h-screen bg-[#060608] text-[#e2e5eb] selection:bg-[#c7ccd6] selection:text-[#060608] font-sans">
      {/* Film grain and atmospheric vignette */}
      <GrainOverlay />

      {/* Persistent 3D R3F Canvas */}
      <Scene />

      {/* Navigation */}
      <Navbar />

      {/* Main Editorial Content Layers */}
      <main className="relative z-20">
        <HeroSection />
        
        {/* About Anchor linking to Journey */}
        <div id="about-section" className="scroll-mt-24">
          <JourneySection />
        </div>

        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default App;

