import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { sceneScrollState } from '../components/canvas/scrollState';

gsap.registerPlugin(ScrollTrigger);

export const useScrollExperience = () => {
  useEffect(() => {
    // Check prefers-reduced-motion media query
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.innerWidth < 768;

    const ctx = gsap.context(() => {
      // SECTION 1 -> SECTION 2 (Hero to Journey: Deconstruction)
      ScrollTrigger.create({
        trigger: '#journey-section',
        start: 'top bottom',
        end: 'top center',
        scrub: prefersReducedMotion ? false : 1.2,
        onUpdate: (self) => {
          const p = self.progress;
          sceneScrollState.targetX = gsap.utils.interpolate(isMobile ? 0 : 1.2, isMobile ? 0 : -1.3, p);
          sceneScrollState.targetY = gsap.utils.interpolate(0, 0.1, p);
          sceneScrollState.targetZ = gsap.utils.interpolate(0, 0.4, p);
          sceneScrollState.targetRotX = gsap.utils.interpolate(0.2, 0.6, p);
          sceneScrollState.targetRotY = gsap.utils.interpolate(0, prefersReducedMotion ? 0.3 : 1.6, p);
          sceneScrollState.separation = gsap.utils.interpolate(0, 1.0, p);
          sceneScrollState.structureMode = gsap.utils.interpolate(0, 0, p);
          sceneScrollState.wireframeMix = gsap.utils.interpolate(0, 0.05, p);
          sceneScrollState.simplifyMix = 0;
          sceneScrollState.scale = gsap.utils.interpolate(1.1, 1.0, p);
        },
      });

      // SECTION 2 -> SECTION 3 (Journey to Projects: Structured Orthogonal Monolith)
      ScrollTrigger.create({
        trigger: '#projects-section',
        start: 'top bottom',
        end: 'top center',
        scrub: prefersReducedMotion ? false : 1.2,
        onUpdate: (self) => {
          const p = self.progress;
          sceneScrollState.targetX = gsap.utils.interpolate(isMobile ? 0 : -1.3, isMobile ? 0 : 1.35, p);
          sceneScrollState.targetY = gsap.utils.interpolate(0.1, -0.05, p);
          sceneScrollState.targetZ = gsap.utils.interpolate(0.4, 0.1, p);
          sceneScrollState.targetRotX = gsap.utils.interpolate(0.6, -0.2, p);
          sceneScrollState.targetRotY = gsap.utils.interpolate(prefersReducedMotion ? 0.3 : 1.6, prefersReducedMotion ? 0.6 : 3.14, p);
          sceneScrollState.separation = gsap.utils.interpolate(1.0, 0.25, p);
          sceneScrollState.structureMode = gsap.utils.interpolate(0, 1.0, p);
          sceneScrollState.wireframeMix = gsap.utils.interpolate(0.05, 0.1, p);
          sceneScrollState.simplifyMix = 0;
          sceneScrollState.scale = gsap.utils.interpolate(1.0, 1.05, p);
        },
      });

      // SUB-SCROLL WITHIN PROJECTS (Alternating alignment beside project cards)
      ScrollTrigger.create({
        trigger: '#project-inkloom',
        start: 'top bottom',
        end: 'center center',
        scrub: prefersReducedMotion ? false : 1.2,
        onUpdate: (self) => {
          const p = self.progress;
          sceneScrollState.targetX = gsap.utils.interpolate(isMobile ? 0 : 1.35, isMobile ? 0 : -1.35, p);
          sceneScrollState.targetRotY = gsap.utils.interpolate(
            prefersReducedMotion ? 0.6 : 3.14,
            prefersReducedMotion ? 0.9 : 4.2,
            p
          );
          sceneScrollState.targetRotZ = gsap.utils.interpolate(0, 0.35, p);
        },
      });

      ScrollTrigger.create({
        trigger: '#project-safecampus',
        start: 'top bottom',
        end: 'center center',
        scrub: prefersReducedMotion ? false : 1.2,
        onUpdate: (self) => {
          const p = self.progress;
          sceneScrollState.targetX = gsap.utils.interpolate(isMobile ? 0 : -1.35, isMobile ? 0 : 1.3, p);
          sceneScrollState.targetRotY = gsap.utils.interpolate(
            prefersReducedMotion ? 0.9 : 4.2,
            prefersReducedMotion ? 1.2 : 5.4,
            p
          );
          sceneScrollState.targetRotZ = gsap.utils.interpolate(0.35, -0.2, p);
        },
      });

      // SECTION 3 -> SECTION 4 (Projects to Skills: Technical Holographic Wireframe)
      ScrollTrigger.create({
        trigger: '#skills-section',
        start: 'top bottom',
        end: 'top center',
        scrub: prefersReducedMotion ? false : 1.2,
        onUpdate: (self) => {
          const p = self.progress;
          sceneScrollState.targetX = gsap.utils.interpolate(isMobile ? 0 : 1.3, 0, p);
          sceneScrollState.targetY = gsap.utils.interpolate(-0.05, 0.1, p);
          sceneScrollState.targetZ = gsap.utils.interpolate(0.1, 0.5, p);
          sceneScrollState.targetRotX = gsap.utils.interpolate(-0.2, 0.4, p);
          sceneScrollState.targetRotY = gsap.utils.interpolate(
            prefersReducedMotion ? 1.2 : 5.4,
            prefersReducedMotion ? 1.5 : 6.28,
            p
          );
          sceneScrollState.separation = gsap.utils.interpolate(0.25, 0.1, p);
          sceneScrollState.structureMode = gsap.utils.interpolate(1.0, 0.4, p);
          sceneScrollState.wireframeMix = gsap.utils.interpolate(0.1, 1.0, p);
          sceneScrollState.simplifyMix = 0;
          sceneScrollState.scale = gsap.utils.interpolate(1.05, 1.15, p);
        },
      });

      // SECTION 4 -> SECTION 5 (Skills to Contact: Simplified Pure Continuous Loop)
      ScrollTrigger.create({
        trigger: '#contact-section',
        start: 'top bottom',
        end: 'top center',
        scrub: prefersReducedMotion ? false : 1.2,
        onUpdate: (self) => {
          const p = self.progress;
          sceneScrollState.targetX = 0;
          sceneScrollState.targetY = gsap.utils.interpolate(0.1, 0.32, p);
          sceneScrollState.targetZ = gsap.utils.interpolate(0.5, -0.2, p);
          sceneScrollState.targetRotX = gsap.utils.interpolate(0.4, 0.1, p);
          sceneScrollState.targetRotY = gsap.utils.interpolate(
            prefersReducedMotion ? 1.5 : 6.28,
            prefersReducedMotion ? 1.8 : 7.2,
            p
          );
          sceneScrollState.separation = gsap.utils.interpolate(0.1, 0, p);
          sceneScrollState.structureMode = gsap.utils.interpolate(0.4, 0, p);
          sceneScrollState.wireframeMix = gsap.utils.interpolate(1.0, 0, p);
          sceneScrollState.simplifyMix = gsap.utils.interpolate(0, 1.0, p);
          sceneScrollState.scale = gsap.utils.interpolate(1.15, 0.95, p);
        },
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);
};
