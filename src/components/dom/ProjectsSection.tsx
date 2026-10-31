import React from 'react';
import { PROJECTS } from '../../data/portfolioData';
import {
  Award,
  CheckCircle2,
  Cpu,
  Code2,
  Smartphone,
  Workflow
} from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [kisansetu, inkloom, safecampus] = PROJECTS;

  return (
    <section
      id="projects-section"
      className="relative min-h-screen w-full py-28 px-6 md:px-16 pointer-events-auto"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-lab pb-6 mb-20">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-signal-orange font-mono text-xs font-bold">[03]</span>
              <span className="font-mono text-xs uppercase tracking-widest text-muted-steel">
                // BENCHMARK EXPERIMENTS
              </span>
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight uppercase text-warm-white">
              Project <span className="text-signal-orange">Experiments</span>
            </h2>
          </div>
          <div className="max-w-md p-3.5 border border-lab bg-surface-dark/85 backdrop-blur-md">
            <p className="text-xs sm:text-sm font-sans text-muted-steel leading-relaxed">
              Three primary engineering builds with distinct architectural paradigms — spanning agricultural procurement logistics, AI brand governance, and native mobile software lifecycles.
            </p>
          </div>
        </div>

        {/* ========================================================= */}
        {/* PROJECT 01 — KISANSETU (Logistics & Scheduling Platform) */}
        {/* ========================================================= */}
        <div id="project-kisansetu" className="mb-28 scroll-mt-24">
          <div className="lab-panel tech-corners p-8 md:p-12 border-lab hover:border-signal-orange/50 transition-colors">
            {/* Project Header Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-lab mb-8">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 border border-signal-orange bg-signal-orange/10 font-mono text-xs text-signal-orange font-bold">
                  {kisansetu.specCode}
                </span>
                <span className="font-mono text-xs text-muted-steel uppercase tracking-widest hidden sm:inline">
                  {kisansetu.category}
                </span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 border border-signal-orange/30 bg-signal-orange/5 font-mono text-xs text-signal-orange">
                <Award className="w-3.5 h-3.5" />
                <span>{kisansetu.status}</span>
              </div>
            </div>

            {/* Title & Subtitle */}
            <div className="mb-8">
              <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-warm-white uppercase">
                {kisansetu.title}
              </h3>
              <p className="font-mono text-sm sm:text-base text-signal-orange mt-1">
                {kisansetu.subtitle}
              </p>
            </div>

            {/* SIH Recognition Callout */}
            <div className="p-4 border-l-2 border-signal-orange bg-surface-dark border-y border-r border-lab-subtle mb-8 flex items-start gap-3">
              <Award className="w-5 h-5 text-signal-orange shrink-0 mt-0.5" />
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-warm-white font-semibold block">
                  Hackathon Selection Benchmark
                </span>
                <p className="text-xs font-sans text-muted-steel mt-0.5">
                  {kisansetu.highlight} — evaluated for supply chain efficiency and elimination of physical procurement queues.
                </p>
              </div>
            </div>

            {/* Problem & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 pb-8 border-b border-lab-subtle">
              <div>
                <span className="font-mono text-[11px] uppercase tracking-widest text-signal-orange block mb-2">
                  THE OPERATIONAL PROBLEM
                </span>
                <p className="text-xs sm:text-sm font-sans text-muted-steel leading-relaxed">
                  {kisansetu.problem}
                </p>
              </div>
              <div>
                <span className="font-mono text-[11px] uppercase tracking-widest text-warm-white block mb-2">
                  THE ARCHITECTED SOLUTION
                </span>
                <p className="text-xs sm:text-sm font-sans text-muted-steel leading-relaxed">
                  {kisansetu.solution}
                </p>
              </div>
            </div>

            {/* Key Capabilities */}
            <div className="mb-10">
              <span className="font-mono text-xs uppercase tracking-widest text-warm-white block mb-4">
                CORE SYSTEM CAPABILITIES:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {kisansetu.keyCapabilities.map((cap, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3 border border-lab-subtle bg-surface-dark/70">
                    <CheckCircle2 className="w-4 h-4 text-signal-orange shrink-0 mt-0.5" />
                    <span className="text-xs font-sans text-warm-white/90 leading-snug">
                      {cap}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Engineering Decisions & Tech Stack Footer */}
            <div className="pt-6 border-t border-lab flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-steel block mb-2">
                  ENGINEERING DECISIONS
                </span>
                <ul className="space-y-1 text-xs font-mono text-muted-steel">
                  {kisansetu.engineeringDecisions.map((dec, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="text-signal-orange">›</span>
                      <span>{dec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4 shrink-0">
                <div className="flex flex-wrap gap-2">
                  {kisansetu.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 border border-lab bg-surface-dark font-mono text-[11px] text-warm-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={kisansetu.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2 border border-signal-orange bg-signal-orange/10 hover:bg-signal-orange text-warm-white hover:text-deep-black font-mono text-xs uppercase tracking-wider transition-all"
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* PROJECT 02 — INKLOOM AI (Dual-Engine Brand Governance) */}
        {/* ========================================================= */}
        <div id="project-inkloom" className="mb-28 scroll-mt-24">
          <div className="lab-panel tech-corners p-8 md:p-12 border-lab hover:border-signal-orange/50 transition-colors">
            {/* Project Header Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-lab mb-8">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 border border-signal-orange bg-signal-orange/10 font-mono text-xs text-signal-orange font-bold">
                  {inkloom.specCode}
                </span>
                <span className="font-mono text-xs text-muted-steel uppercase tracking-widest hidden sm:inline">
                  {inkloom.category}
                </span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 border border-lab bg-surface-dark font-mono text-xs text-warm-white">
                <Cpu className="w-3.5 h-3.5 text-signal-orange" />
                <span>{inkloom.status}</span>
              </div>
            </div>

            {/* Title & Subtitle */}
            <div className="mb-8">
              <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-warm-white uppercase">
                {inkloom.title}
              </h3>
              <p className="font-mono text-sm sm:text-base text-signal-orange mt-1">
                {inkloom.subtitle}
              </p>
            </div>

            {/* Architectural Deep-Dive: Dual-Engine Schema */}
            <div className="p-6 border border-lab bg-surface-dark mb-10">
              <div className="flex items-center gap-2 mb-4">
                <Workflow className="w-4 h-4 text-signal-orange" />
                <span className="font-mono text-xs uppercase tracking-widest text-warm-white font-bold">
                  ARCHITECTURAL PARADIGM // DUAL-ENGINE GOVERNANCE
                </span>
              </div>
              <p className="text-xs sm:text-sm font-sans text-muted-steel leading-relaxed mb-6">
                To eliminate LLM hallucinations while preserving stylistic flexibility, Inkloom AI partitions editorial review into two distinct, decoupled pipelines:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border border-signal-orange/30 bg-[#16191c]">
                  <div className="flex items-center gap-2 mb-2 font-mono text-xs font-bold text-signal-orange">
                    <span>ENGINE A: DETERMINISTIC RULES</span>
                  </div>
                  <p className="text-xs font-sans text-muted-steel leading-relaxed">
                    Zero-hallucination statutory verification. Validates publication drafts against verified corporate fact sheets, regulatory constraints, and strict keyword substitution dictionaries without probabilistic error.
                  </p>
                </div>

                <div className="p-4 border border-lab bg-[#16191c]">
                  <div className="flex items-center gap-2 mb-2 font-mono text-xs font-bold text-warm-white">
                    <span>ENGINE B: CONTEXTUAL AI ANALYSIS</span>
                  </div>
                  <p className="text-xs font-sans text-muted-steel leading-relaxed">
                    Evaluates brand voice alignment, audience appropriateness, tone nuance, and messaging sentiment using language analysis models. Surfaces actionable suggestions directly within authoring workflows.
                  </p>
                </div>
              </div>
            </div>

            {/* Problem & Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 pb-8 border-b border-lab-subtle">
              <div>
                <span className="font-mono text-[11px] uppercase tracking-widest text-signal-orange block mb-2">
                  THE COMPLIANCE PROBLEM
                </span>
                <p className="text-xs sm:text-sm font-sans text-muted-steel leading-relaxed">
                  {inkloom.problem}
                </p>
              </div>
              <div>
                <span className="font-mono text-[11px] uppercase tracking-widest text-warm-white block mb-2">
                  THE PLATFORM SOLUTION
                </span>
                <p className="text-xs sm:text-sm font-sans text-muted-steel leading-relaxed">
                  {inkloom.solution}
                </p>
              </div>
            </div>

            {/* Key Capabilities */}
            <div className="mb-10">
              <span className="font-mono text-xs uppercase tracking-widest text-warm-white block mb-4">
                SYSTEM CAPABILITIES & GOVERNANCE CHECKS:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {inkloom.keyCapabilities.map((cap, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3 border border-lab-subtle bg-surface-dark/70">
                    <CheckCircle2 className="w-4 h-4 text-signal-orange shrink-0 mt-0.5" />
                    <span className="text-xs font-sans text-warm-white/90 leading-snug">
                      {cap}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Engineering Decisions & Tech Stack Footer */}
            <div className="pt-6 border-t border-lab flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-steel block mb-2">
                  ENGINEERING DECISIONS & SECURITY
                </span>
                <ul className="space-y-1 text-xs font-mono text-muted-steel">
                  {inkloom.engineeringDecisions.map((dec, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="text-signal-orange">›</span>
                      <span>{dec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4 shrink-0">
                <div className="flex flex-wrap gap-2">
                  {inkloom.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 border border-lab bg-surface-dark font-mono text-[11px] text-warm-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={inkloom.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2 border border-signal-orange bg-signal-orange/10 hover:bg-signal-orange text-warm-white hover:text-deep-black font-mono text-xs uppercase tracking-wider transition-all"
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* PROJECT 03 — SAFECAMPUS (Foundational Android Application) */}
        {/* ========================================================= */}
        <div id="project-safecampus" className="scroll-mt-24">
          <div className="lab-panel tech-corners p-8 md:p-12 border-lab hover:border-signal-orange/50 transition-colors">
            {/* Project Header Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-lab mb-8">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 border border-signal-orange bg-signal-orange/10 font-mono text-xs text-signal-orange font-bold">
                  {safecampus.specCode}
                </span>
                <span className="font-mono text-xs text-muted-steel uppercase tracking-widest hidden sm:inline">
                  {safecampus.category}
                </span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 border border-lab bg-surface-dark font-mono text-xs text-muted-steel">
                <Smartphone className="w-3.5 h-3.5 text-signal-orange" />
                <span>{safecampus.status}</span>
              </div>
            </div>

            {/* Title & Subtitle */}
            <div className="mb-8">
              <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-warm-white uppercase">
                {safecampus.title}
              </h3>
              <p className="font-mono text-sm sm:text-base text-signal-orange mt-1">
                {safecampus.subtitle}
              </p>
            </div>

            {/* Problem & Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 pb-8 border-b border-lab-subtle">
              <div>
                <span className="font-mono text-[11px] uppercase tracking-widest text-signal-orange block mb-2">
                  THE FIRST-YEAR PROBLEM
                </span>
                <p className="text-xs sm:text-sm font-sans text-muted-steel leading-relaxed">
                  {safecampus.problem}
                </p>
              </div>
              <div>
                <span className="font-mono text-[11px] uppercase tracking-widest text-warm-white block mb-2">
                  THE APPLICATION ARCHITECTURE
                </span>
                <p className="text-xs sm:text-sm font-sans text-muted-steel leading-relaxed">
                  {safecampus.solution}
                </p>
              </div>
            </div>

            {/* Key Capabilities */}
            <div className="mb-10">
              <span className="font-mono text-xs uppercase tracking-widest text-warm-white block mb-4">
                FOUNDATIONAL SOFTWARE CAPABILITIES:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {safecampus.keyCapabilities.map((cap, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3 border border-lab-subtle bg-surface-dark/70">
                    <CheckCircle2 className="w-4 h-4 text-signal-orange shrink-0 mt-0.5" />
                    <span className="text-xs font-sans text-warm-white/90 leading-snug">
                      {cap}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Engineering Decisions & Tech Stack Footer */}
            <div className="pt-6 border-t border-lab flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-steel block mb-2">
                  ENGINEERING LESSONS LEARNED
                </span>
                <ul className="space-y-1 text-xs font-mono text-muted-steel">
                  {safecampus.engineeringDecisions.map((dec, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="text-signal-orange">›</span>
                      <span>{dec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4 shrink-0">
                <div className="flex flex-wrap gap-2">
                  {safecampus.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 border border-lab bg-surface-dark font-mono text-[11px] text-warm-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={safecampus.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-2 border border-lab bg-surface-dark hover:border-signal-orange text-warm-white font-mono text-xs uppercase tracking-wider transition-all"
                >
                  <Code2 className="w-3.5 h-3.5 text-muted-steel" />
                  <span>GitHub Repository</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
