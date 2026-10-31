import React from 'react';
import { ArrowDown, Cpu } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero-section"
      className="relative min-h-screen w-full flex flex-col justify-between pt-32 pb-12 px-6 md:px-16 pointer-events-auto"
    >
      {/* Top Metadata Rail */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
        <div className="flex items-center gap-3">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-mono text-xs text-zinc-400 tracking-wider uppercase">
            STATUS: ACTIVE // B.TECH CSE • 2ND YEAR (SEM 1)
          </span>
        </div>
        <div className="flex items-center gap-6 text-xs font-mono text-zinc-400">
          <span>SRKR ENGINEERING COLLEGE</span>
          <span className="hidden sm:inline text-zinc-600">/</span>
          <span className="hidden sm:inline">CGPA: 7.0</span>
          <span className="text-zinc-600">/</span>
          <span>AGE: {PERSONAL_INFO.age}</span>
        </div>
      </div>

      {/* Main Editorial Centerpiece */}
      <div className="my-auto py-12 md:py-20 max-w-4xl">
        <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded border border-white/10 bg-white/[0.02]">
          <Cpu className="w-3.5 h-3.5 text-zinc-400" />
          <span className="font-mono text-xs uppercase tracking-widest text-zinc-300">
            {PERSONAL_INFO.role}
          </span>
        </div>

        <h1 className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tighter uppercase leading-[0.9] text-white">
          <span className="text-chrome block">YASWANTH</span>
        </h1>

        <p className="mt-8 text-xl sm:text-2xl md:text-3xl font-light text-zinc-300 max-w-2xl leading-relaxed tracking-tight">
          &ldquo;{PERSONAL_INFO.statement}&rdquo;
        </p>

        <p className="mt-4 text-sm sm:text-base font-sans text-zinc-400 max-w-xl leading-normal">
          {PERSONAL_INFO.subStatement}
        </p>

        {/* Minimal Badges */}
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <div className="px-3.5 py-1.5 rounded border border-white/[0.12] bg-[#0c0d12]/60 backdrop-blur-sm text-xs font-mono text-zinc-300">
            Smart India Hackathon Internal Selection
          </div>
          <div className="px-3.5 py-1.5 rounded border border-white/[0.08] bg-[#0c0d12]/40 backdrop-blur-sm text-xs font-mono text-zinc-400">
            Focus: Deterministic Systems + Applied AI
          </div>
        </div>
      </div>

      {/* Bottom Footer Rail & Scroll Anchor */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pt-6 border-t border-white/[0.08]">
        <div className="max-w-md">
          <div className="font-mono text-[11px] uppercase tracking-widest text-zinc-400 mb-1">
            CORE OBJECTIVE
          </div>
          <p className="text-xs text-zinc-400 leading-relaxed font-sans">
            {PERSONAL_INFO.longTermGoal}
          </p>
        </div>

        <a
          href="#journey-section"
          className="group inline-flex items-center gap-3 text-xs font-mono text-zinc-400 hover:text-white uppercase tracking-widest transition-colors"
        >
          <span>Scroll to Inspect Architecture</span>
          <div className="w-8 h-8 rounded border border-white/20 flex items-center justify-center group-hover:border-white/50 group-hover:translate-y-0.5 transition-all">
            <ArrowDown className="w-3.5 h-3.5 text-zinc-300" />
          </div>
        </a>
      </div>
    </section>
  );
};
