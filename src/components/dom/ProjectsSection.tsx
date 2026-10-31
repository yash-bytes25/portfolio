import React from 'react';
import { PROJECTS, HACKATHONS } from '../../data/portfolioData';
import { Award, CheckCircle2, ShieldAlert, Cpu, Terminal, Code2 } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="projects-section"
      className="relative min-h-screen w-full py-28 px-6 md:px-16 pointer-events-auto"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-8 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="font-mono text-xs uppercase tracking-widest text-zinc-400">
                03 // ARCHITECTED WORK
              </span>
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight uppercase text-white">
              Selected <span className="text-chrome">Projects</span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-sm font-sans text-zinc-400 leading-relaxed">
              Real-world systems engineered to resolve tangible inefficiencies — from national hackathon logistics to AI-driven brand compliance engines.
            </p>
          </div>
        </div>

        {/* Project 1: KisanSetu (Large Feature Card) */}
        <div
          id="project-kisansetu"
          className="mb-20 scroll-mt-24"
        >
          <div className="chrome-card tech-bracket p-8 md:p-12 rounded-lg border border-white/[0.1] bg-[#0c0d13]/80">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-white/[0.08]">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-zinc-400 tracking-widest uppercase">
                  PROJECT 01 // SIH INTERNAL ROUND
                </span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span className="text-xs font-mono text-emerald-400">Validated Architecture</span>
              </div>
              <div className="px-3 py-1 rounded bg-white/[0.04] border border-white/[0.1] text-xs font-mono text-zinc-300">
                {PROJECTS[0].period}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7">
                <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-3">
                  {PROJECTS[0].title}
                </h3>
                <p className="font-mono text-sm text-zinc-300 mb-6">
                  {PROJECTS[0].tagline}
                </p>

                <p className="text-sm sm:text-base font-sans text-zinc-400 leading-relaxed mb-6">
                  {PROJECTS[0].description}
                </p>

                {/* Highlight banner */}
                <div className="p-4 rounded bg-white/[0.02] border border-white/[0.08] mb-8 flex items-start gap-3">
                  <Award className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-amber-300 block mb-1">
                      Hackathon Recognition
                    </span>
                    <p className="text-xs text-zinc-300 font-sans">
                      {PROJECTS[0].highlight}
                    </p>
                  </div>
                </div>

                {/* Key Features */}
                <div className="space-y-2.5 mb-8">
                  <span className="font-mono text-xs uppercase tracking-widest text-zinc-400 block mb-2">
                    CORE SYSTEM CAPABILITIES
                  </span>
                  {PROJECTS[0].keyFeatures.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-zinc-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {PROJECTS[0].techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded text-xs font-mono bg-white/[0.03] text-zinc-300 border border-white/[0.08]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Architecture Blueprint column */}
              <div className="lg:col-span-5 bg-black/40 border border-white/[0.08] rounded p-6 font-mono text-xs">
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] mb-4">
                  <span className="text-[11px] text-zinc-400 uppercase tracking-widest">
                    SYSTEM ARCHITECTURE
                  </span>
                  <Terminal className="w-3.5 h-3.5 text-zinc-400" />
                </div>
                <div className="space-y-4">
                  {PROJECTS[0].architectureDetails.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="text-zinc-600 mt-0.5">0{idx + 1}.</span>
                      <p className="text-zinc-300 text-xs leading-relaxed font-sans">
                        {detail}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-zinc-400">
                  <span>PROBLEM: FARMER WAITING TIMES</span>
                  <span>SYSTEM: DIGITAL TOKEN SCHEDULING</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project 2: Inkloom AI (Large Feature Card) */}
        <div
          id="project-inkloom"
          className="mb-20 scroll-mt-24"
        >
          <div className="chrome-card tech-bracket p-8 md:p-12 rounded-lg border border-white/[0.1] bg-[#0c0d13]/80">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-white/[0.08]">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-zinc-400 tracking-widest uppercase">
                  PROJECT 02 // APPLIED AI & GOVERNANCE
                </span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span className="text-xs font-mono text-cyan-400">Dual Engine Design</span>
              </div>
              <div className="px-3 py-1 rounded bg-white/[0.04] border border-white/[0.1] text-xs font-mono text-zinc-300">
                {PROJECTS[1].period}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7">
                <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-3">
                  {PROJECTS[1].title}
                </h3>
                <p className="font-mono text-sm text-cyan-300/80 mb-6">
                  {PROJECTS[1].tagline}
                </p>

                <p className="text-sm sm:text-base font-sans text-zinc-400 leading-relaxed mb-6">
                  {PROJECTS[1].description}
                </p>

                {/* Highlight banner */}
                <div className="p-4 rounded bg-white/[0.02] border border-white/[0.08] mb-8 flex items-start gap-3">
                  <Cpu className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-cyan-300 block mb-1">
                      Core Innovation
                    </span>
                    <p className="text-xs text-zinc-300 font-sans">
                      {PROJECTS[1].highlight}
                    </p>
                  </div>
                </div>

                {/* Key Features */}
                <div className="space-y-2.5 mb-8">
                  <span className="font-mono text-xs uppercase tracking-widest text-zinc-400 block mb-2">
                    GOVERNANCE PIPELINE
                  </span>
                  {PROJECTS[1].keyFeatures.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400/80 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {PROJECTS[1].techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded text-xs font-mono bg-white/[0.03] text-zinc-300 border border-white/[0.08]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Architecture Blueprint column */}
              <div className="lg:col-span-5 bg-black/40 border border-white/[0.08] rounded p-6 font-mono text-xs">
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] mb-4">
                  <span className="text-[11px] text-zinc-400 uppercase tracking-widest">
                    DUAL-ENGINE SPECIFICATION
                  </span>
                  <ShieldAlert className="w-3.5 h-3.5 text-zinc-400" />
                </div>
                <div className="space-y-4">
                  {PROJECTS[1].architectureDetails.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="text-cyan-600 mt-0.5">0{idx + 1}.</span>
                      <p className="text-zinc-300 text-xs leading-relaxed font-sans">
                        {detail}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-zinc-400">
                  <span>ZERO-HALLUCINATION POLICY</span>
                  <span>COMPLIANCE GATE</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project 3: SafeCampus & Hackathon Matrix */}
        <div
          id="project-safecampus"
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 scroll-mt-24"
        >
          {/* SafeCampus */}
          <div className="lg:col-span-6 chrome-card tech-bracket p-8 rounded-lg border border-white/[0.1] bg-[#0c0d13]/80 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-6">
                <span className="font-mono text-xs text-zinc-400 tracking-widest uppercase">
                  PROJECT 03 // MOBILE ENGINEERING
                </span>
                <span className="px-2.5 py-0.5 rounded bg-white/[0.04] text-[11px] font-mono text-zinc-400">
                  {PROJECTS[2].period}
                </span>
              </div>

              <h3 className="font-display text-2xl font-bold text-white mb-2">
                {PROJECTS[2].title}
              </h3>
              <p className="font-mono text-xs text-zinc-400 mb-4">
                {PROJECTS[2].tagline}
              </p>

              <p className="text-xs sm:text-sm font-sans text-zinc-400 leading-relaxed mb-6">
                {PROJECTS[2].description}
              </p>

              <div className="space-y-2 mb-6">
                {PROJECTS[2].architectureDetails.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-zinc-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.06]">
                {PROJECTS[2].techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded text-[11px] font-mono bg-white/[0.03] text-zinc-400 border border-white/[0.06]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Hackathons Record (Accurate and Transparent) */}
          <div className="lg:col-span-6 chrome-card tech-bracket p-8 rounded-lg border border-white/[0.1] bg-[#0c0d13]/80 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-6">
                <span className="font-mono text-xs text-zinc-400 tracking-widest uppercase">
                  HACKATHONS // COMPETITIVE ARENA
                </span>
                <Code2 className="w-4 h-4 text-zinc-400" />
              </div>

              <h3 className="font-display text-2xl font-bold text-white mb-2">
                Rapid Prototyping & Execution
              </h3>
              <p className="text-xs font-sans text-zinc-400 leading-relaxed mb-6">
                Testing engineering skills under pressure, solving unscripted problems, and delivering working software against real deadlines.
              </p>

              <div className="space-y-4">
                {HACKATHONS.map((h, i) => (
                  <div
                    key={i}
                    className="p-4 rounded bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] transition-colors"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-display text-sm font-bold text-white">
                        {h.name}
                      </span>
                      <span className="font-mono text-[10px] text-zinc-400 px-2 py-0.5 rounded bg-white/[0.04]">
                        {h.year}
                      </span>
                    </div>
                    <div className="text-xs font-mono text-emerald-400/90 mb-1">
                      {h.context}
                    </div>
                    <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                      {h.focus}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/[0.06] mt-6">
              <span className="text-[11px] font-mono text-zinc-400">
                VERIFIED SUBMISSIONS // REAL-WORLD IMPLEMENTATIONS ONLY
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
