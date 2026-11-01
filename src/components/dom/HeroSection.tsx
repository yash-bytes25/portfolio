import React from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero-section"
      className="relative min-h-[92vh] w-full flex flex-col justify-between pt-36 pb-12 px-6 md:px-16 pointer-events-auto"
    >
      <div className="max-w-6xl mx-auto w-full flex-1 flex flex-col justify-center">
        <div className="max-w-xl z-20">
          {/* Subtle discipline tag */}
          <div className="inline-block text-xs font-sans tracking-wide text-neutral-400 mb-6 font-medium">
            Computer Science & Engineering • B.Tech
          </div>

          {/* Natural, prominent heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white leading-[1.15] mb-6 drop-shadow-md">
            Hi, I&rsquo;m <span className="font-serif italic font-normal text-white">Yaswanth</span>.
          </h1>

          {/* Clean, human introduction */}
          <p className="text-lg sm:text-xl text-neutral-200 font-normal leading-relaxed mb-4 drop-shadow-md">
            A computer science student exploring AI/ML, software engineering, and practical problem-solving.
          </p>

          <p className="text-base text-neutral-300 font-normal leading-relaxed mb-8 max-w-lg drop-shadow-md">
            I enjoy building software, learning through implementation, and turning ideas into useful products.
          </p>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <a
              href="#projects-section"
              className="px-5 py-2.5 rounded-md bg-white text-neutral-950 hover:bg-neutral-200 text-sm font-medium transition-all shadow-sm"
            >
              Explore Projects
            </a>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-md border border-white/15 hover:border-white/30 bg-white/[0.02] text-sm text-neutral-300 hover:text-white transition-all"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-4 h-4 text-neutral-400" />
            </a>
          </div>

          {/* Academic context note */}
          <div className="pt-6 border-t border-white/[0.08] text-xs text-neutral-500 font-sans">
            SRKR Engineering College • Second Year, First Semester • CGPA 7.0
          </div>
        </div>
      </div>

      {/* Bottom scroll hint */}
      <div className="max-w-6xl mx-auto w-full flex items-center justify-between text-xs text-neutral-500 pt-6">
        <span className="hidden sm:inline">Based in Andhra Pradesh, India</span>
        <a
          href="#about-section"
          className="flex items-center gap-2 hover:text-neutral-300 transition-colors"
        >
          <span>Scroll down</span>
          <ArrowDown className="w-3.5 h-3.5 text-neutral-500" />
        </a>
      </div>
    </section>
  );
};
