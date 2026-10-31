import React from 'react';
import { SKILL_CATEGORIES } from '../../data/portfolioData';
import { Terminal, Binary } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  return (
    <section
      id="skills-section"
      className="relative min-h-screen w-full py-28 px-6 md:px-16 pointer-events-auto"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-8 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="font-mono text-xs uppercase tracking-widest text-zinc-400">
                04 // KNOWLEDGE MATRIX & ACTIVE STUDY
              </span>
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight uppercase text-white">
              Skills & <span className="text-chrome">Learning</span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-sm font-sans text-zinc-400 leading-relaxed">
              Curated by active implementation depth rather than passive keyword accumulation. Designed for systematic algorithmic problem solving and production-grade architectures.
            </p>
          </div>
        </div>

        {/* Technical Philosophy Banner */}
        <div className="chrome-card p-6 md:p-8 rounded-lg mb-12 border border-white/[0.1] bg-[#0c0d12]/90">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded border border-white/20 bg-white/[0.02] flex items-center justify-center shrink-0">
                <Binary className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-mono text-[11px] uppercase tracking-widest text-zinc-400 block mb-1">
                  CORE LEARNING PHILOSOPHY
                </span>
                <p className="font-display text-lg md:text-xl font-bold text-white">
                  &ldquo;I prefer learning through practical implementation, hackathons, and real-world projects.&rdquo;
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <div className="px-3.5 py-1.5 rounded border border-white/10 bg-white/[0.03] text-xs font-mono text-zinc-300">
                Code &gt; Passive Tutorials
              </div>
            </div>
          </div>
        </div>

        {/* Technical Matrix Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_CATEGORIES.map((category) => (
            <div
              key={category.code}
              className="chrome-card tech-bracket p-6 md:p-8 rounded border border-white/[0.08] bg-[#0b0c11]/80"
            >
              {/* Category Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-6">
                <div>
                  <span className="font-mono text-[10px] text-zinc-400 tracking-widest block uppercase">
                    DOMAIN // {category.code}
                  </span>
                  <h3 className="font-display text-xl font-bold text-white mt-0.5">
                    {category.title}
                  </h3>
                </div>
                <span className="w-2 h-2 rounded-full bg-cyan-400/80" />
              </div>

              {/* Items List */}
              <div className="space-y-4">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="p-4 rounded bg-white/[0.02] border border-white/[0.04] hover:border-white/[0.12] transition-colors"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-sm font-semibold text-white">
                        {item.name}
                      </span>
                      <span
                        className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                          item.status === 'Core'
                            ? 'bg-white/10 text-white border-white/20'
                            : item.status === 'Active Study'
                            ? 'bg-amber-400/10 text-amber-300 border-amber-400/20'
                            : 'bg-cyan-400/10 text-cyan-300 border-cyan-400/20'
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                      {item.focus}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Real-world Application Checklist */}
        <div className="mt-12 p-6 rounded border border-white/[0.08] bg-black/40 font-mono text-xs text-zinc-400 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Terminal className="w-4 h-4 text-zinc-400" />
            <span>LEARNING RIGOR: CONTINUOUS DSA PRACTICE • GIT COMMITMENT • SYSTEM DESIGN EXPLORATION</span>
          </div>
          <div className="text-zinc-400 text-[11px]">
            ACTIVE TARGET: TIER-1 ENGINEERING READINESS
          </div>
        </div>
      </div>
    </section>
  );
};
