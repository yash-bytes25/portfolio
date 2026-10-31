import React from 'react';
import { ArrowDown, ArrowUpRight, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero-section"
      className="relative min-h-screen w-full flex flex-col justify-between pt-28 pb-10 px-6 md:px-16 pointer-events-auto"
    >
      {/* Top Telemetry & Status Rail */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-lab pb-4">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 bg-signal-orange animate-pulse" />
          <span className="font-mono text-xs text-muted-steel tracking-wider uppercase">
            STATUS: ACTIVE // {PERSONAL_INFO.college}
          </span>
        </div>
        <div className="flex items-center gap-5 text-xs font-mono text-muted-steel">
          <span>{PERSONAL_INFO.degree}</span>
          <span className="hidden sm:inline text-muted-steel/40">/</span>
          <span className="text-warm-white font-medium">{PERSONAL_INFO.academicYear}</span>
          <span className="hidden sm:inline text-muted-steel/40">/</span>
          <span>CGPA: <strong className="text-signal-orange">{PERSONAL_INFO.cgpa}</strong></span>
        </div>
      </div>

      {/* Main Asymmetric Editorial Showcase */}
      <div className="my-auto py-10 md:py-16 max-w-3xl z-20">
        {/* Lab System Subtitle Badge */}
        <div className="inline-flex items-center gap-2.5 mb-6 px-3 py-1 border border-lab bg-surface-dark/80">
          <Terminal className="w-3.5 h-3.5 text-signal-orange" />
          <span className="font-mono text-[11px] uppercase tracking-widest text-muted-steel">
            EXP-LAB // <span className="text-warm-white">{PERSONAL_INFO.labDesignation}</span>
          </span>
        </div>

        {/* Primary Identity Headline */}
        <h1 className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl tracking-tight uppercase leading-[0.92] text-warm-white">
          {PERSONAL_INFO.name}
        </h1>

        {/* Role Specifier */}
        <div className="mt-4 flex items-center gap-3">
          <span className="text-signal-orange font-mono text-sm sm:text-base font-bold tracking-widest">
            [01]
          </span>
          <h2 className="font-mono text-sm sm:text-lg md:text-xl font-semibold tracking-wider uppercase text-warm-white/90">
            {PERSONAL_INFO.tagline}
          </h2>
        </div>

        {/* Concise Statement */}
        <p className="mt-6 text-base sm:text-lg md:text-xl font-normal text-muted-steel max-w-xl leading-relaxed">
          {PERSONAL_INFO.bio}
        </p>

        {/* Navigation & Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#projects-section"
            className="group flex items-center gap-3 px-6 py-3 border border-signal-orange bg-signal-orange/10 hover:bg-signal-orange text-warm-white hover:text-deep-black transition-all font-mono text-xs uppercase tracking-widest font-semibold"
          >
            <span>Inspect Projects</span>
            <span className="text-signal-orange group-hover:text-deep-black">[03]</span>
          </a>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2.5 px-5 py-3 border border-lab bg-surface-dark hover:border-muted-steel text-warm-white hover:text-warm-white transition-all font-mono text-xs uppercase tracking-widest"
          >
            <span>GitHub</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-muted-steel group-hover:text-signal-orange transition-colors" />
          </a>
        </div>

        {/* Verified Technical Badges */}
        <div className="mt-8 flex flex-wrap gap-2 text-[11px] font-mono text-muted-steel">
          <span className="px-2.5 py-1 border border-lab bg-surface-dark">
            Smart India Hackathon 2026 Internal Selection
          </span>
          <span className="px-2.5 py-1 border border-lab bg-surface-dark">
            Dual-Engine Governance Systems
          </span>
          <span className="px-2.5 py-1 border border-lab bg-surface-dark">
            Applied AI & Practical Problem Solving
          </span>
        </div>
      </div>

      {/* Bottom Telemetry & Scroll Anchor */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pt-4 border-t border-lab z-20">
        <div className="max-w-md">
          <span className="font-mono text-[10px] uppercase tracking-widest text-signal-orange block mb-1">
            CORE PHILOSOPHY
          </span>
          <p className="text-xs text-muted-steel leading-relaxed font-sans">
            {PERSONAL_INFO.statement}
          </p>
        </div>

        <a
          href="#journey-section"
          className="group flex items-center gap-3 text-xs font-mono text-muted-steel hover:text-warm-white tracking-widest uppercase transition-colors"
        >
          <span>Scroll to Inspect Engineering Log</span>
          <div className="w-7 h-7 border border-lab flex items-center justify-center group-hover:border-signal-orange group-hover:translate-y-0.5 transition-all">
            <ArrowDown className="w-3.5 h-3.5 text-signal-orange" />
          </div>
        </a>
      </div>
    </section>
  );
};
