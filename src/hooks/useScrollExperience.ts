import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { labSceneState } from '../components/canvas/sceneState';

gsap.registerPlugin(ScrollTrigger);

export const useScrollExperience = () => {
  useEffect(() => {
    const prefersReducedMotion = typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false;
    const isMobile = window.innerWidth < 768;

    const ctx = gsap.context(() => {
      // SECTION 01 -> SECTION 02 (Hero to Engineering Log: Camera moves closer, internal expansion)
      ScrollTrigger.create({
        trigger: '#journey-section',
        start: 'top bottom',
        end: 'top center',
        scrub: prefersReducedMotion ? false : 1.0,
        onUpdate: (self) => {
          const p = self.progress;
          labSceneState.targetX = gsap.utils.interpolate(isMobile ? 0 : 1.35, isMobile ? 0 : 1.25, p);
          labSceneState.targetY = gsap.utils.interpolate(0, 0.15, p);
          labSceneState.targetZ = gsap.utils.interpolate(0, 0.8, p); // Moves closer
          labSceneState.targetRotX = gsap.utils.interpolate(0.15, 0.45, p);
          labSceneState.targetRotY = gsap.utils.interpolate(0, prefersReducedMotion ? 0.3 : 1.6, p);
          labSceneState.targetRotZ = gsap.utils.interpolate(0, 0.1, p);
          labSceneState.inspectionExpansion = gsap.utils.interpolate(0, 1.0, p); // Reveals internal components
          labSceneState.organizationMode = 0;
          labSceneState.wireframeMix = gsap.utils.interpolate(0, 0.05, p);
          labSceneState.scale = gsap.utils.interpolate(1.0, 1.05, p);
        },
      });

      // SECTION 02 -> SECTION 03 (Engineering Log to Project Experiments: Organized configuration)
      ScrollTrigger.create({
        trigger: '#projects-section',
        start: 'top bottom',
        end: 'top center',
        scrub: prefersReducedMotion ? false : 1.0,
        onUpdate: (self) => {
          const p = self.progress;
          labSceneState.targetX = gsap.utils.interpolate(isMobile ? 0 : 1.25, isMobile ? 0 : 1.35, p);
          labSceneState.targetY = gsap.utils.interpolate(0.15, -0.05, p);
          labSceneState.targetZ = gsap.utils.interpolate(0.8, 0.2, p);
          labSceneState.targetRotX = gsap.utils.interpolate(0.45, -0.15, p);
          labSceneState.targetRotY = gsap.utils.interpolate(
            prefersReducedMotion ? 0.3 : 1.6,
            prefersReducedMotion ? 0.6 : 2.8,
            p
          );
          labSceneState.inspectionExpansion = gsap.utils.interpolate(1.0, 0.35, p); // Reorganizes
          labSceneState.organizationMode = gsap.utils.interpolate(0, 1.0, p);
          labSceneState.wireframeMix = gsap.utils.interpolate(0.05, 0.1, p);
          labSceneState.scale = 1.0;
        },
      });

      // SUB-SCROLL WITHIN PROJECTS (Alternate camera positioning to balance project content)
      ScrollTrigger.create({
        trigger: '#project-inkloom',
        start: 'top bottom',
        end: 'center center',
        scrub: prefersReducedMotion ? false : 1.0,
        onUpdate: (self) => {
          const p = self.progress;
          labSceneState.targetX = gsap.utils.interpolate(isMobile ? 0 : 1.35, isMobile ? 0 : -1.35, p);
          labSceneState.targetRotY = gsap.utils.interpolate(
            prefersReducedMotion ? 0.6 : 2.8,
            prefersReducedMotion ? 0.9 : 4.2,
            p
          );
          labSceneState.targetRotZ = gsap.utils.interpolate(0, 0.25, p);
        },
      });

      ScrollTrigger.create({
        trigger: '#project-safecampus',
        start: 'top bottom',
        end: 'center center',
        scrub: prefersReducedMotion ? false : 1.0,
        onUpdate: (self) => {
          const p = self.progress;
          labSceneState.targetX = gsap.utils.interpolate(isMobile ? 0 : -1.35, isMobile ? 0 : 1.3, p);
          labSceneState.targetRotY = gsap.utils.interpolate(
            prefersReducedMotion ? 0.9 : 4.2,
            prefersReducedMotion ? 1.2 : 5.4,
            p
          );
          labSceneState.targetRotZ = gsap.utils.interpolate(0.25, -0.15, p);
        },
      });

      // SECTION 03 -> SECTION 04 (Projects to Technical Arsenal: Blueprint Wireframe Transition)
      ScrollTrigger.create({
        trigger: '#skills-section',
        start: 'top bottom',
        end: 'top center',
        scrub: prefersReducedMotion ? false : 1.0,
        onUpdate: (self) => {
          const p = self.progress;
          labSceneState.targetX = gsap.utils.interpolate(isMobile ? 0 : 1.3, 0, p);
          labSceneState.targetY = gsap.utils.interpolate(-0.05, 0.08, p);
          labSceneState.targetZ = gsap.utils.interpolate(0.2, 0.3, p);
          labSceneState.targetRotX = gsap.utils.interpolate(-0.15, 0.35, p);
          labSceneState.targetRotY = gsap.utils.interpolate(
            prefersReducedMotion ? 1.2 : 5.4,
            prefersReducedMotion ? 1.5 : 6.28,
            p
          );
          labSceneState.inspectionExpansion = gsap.utils.interpolate(0.35, 0.7, p);
          labSceneState.organizationMode = gsap.utils.interpolate(1.0, 0.5, p);
          labSceneState.wireframeMix = gsap.utils.interpolate(0.1, 1.0, p); // Wireframe blueprint mode
          labSceneState.scale = gsap.utils.interpolate(1.0, 1.15, p);
        },
      });

      // SECTION 04 -> SECTION 05 (Arsenal to Connection: Harmonic Resolving & Simplicity)
      ScrollTrigger.create({
        trigger: '#contact-section',
        start: 'top bottom',
        end: 'top center',
        scrub: prefersReducedMotion ? false : 1.0,
        onUpdate: (self) => {
          const p = self.progress;
          labSceneState.targetX = 0;
          labSceneState.targetY = gsap.utils.interpolate(0.08, 0.32, p);
          labSceneState.targetZ = gsap.utils.interpolate(0.3, -0.3, p);
          labSceneState.targetRotX = gsap.utils.interpolate(0.35, 0.1, p);
          labSceneState.targetRotY = gsap.utils.interpolate(
            prefersReducedMotion ? 1.5 : 6.28,
            prefersReducedMotion ? 1.8 : 7.2,
            p
          );
          labSceneState.inspectionExpansion = gsap.utils.interpolate(0.7, 0, p); // Resolves into unified structure
          labSceneState.organizationMode = gsap.utils.interpolate(0.5, 0, p);
          labSceneState.wireframeMix = gsap.utils.interpolate(1.0, 0, p);
          labSceneState.scale = gsap.utils.interpolate(1.15, 0.9, p);
        },
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);
};
