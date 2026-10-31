import React from 'react';
import { PROJECTS } from '../../data/portfolioData';
import { ArrowUpRight, Award, CheckCircle2 } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [kisansetu, inkloom, safecampus] = PROJECTS;

  return (
    <section
      id="projects-section"
      className="relative min-h-screen w-full py-28 px-6 md:px-16 pointer-events-auto"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-20 pb-6 border-b border-white/[0.08]">
          <span className="text-xs font-sans text-neutral-400 font-medium tracking-wide block mb-2">
            Selected Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-white mb-3">
            Projects
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 max-w-xl font-normal leading-relaxed">
            Software built to address practical challenges — from grain collection logistics to deterministic AI governance and mobile utilities.
          </p>
        </div>

        {/* ========================================================= */}
        {/* PROJECT 01: KISANSETU */}
        {/* ========================================================= */}
        <div id="project-kisansetu" className="mb-24 scroll-mt-24">
          <div className="bg-[#13161c] border border-white/[0.08] hover:border-white/[0.16] rounded-xl p-8 md:p-12 transition-all shadow-2xl">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <span className="text-xs font-mono text-neutral-400">
                01 • {kisansetu.category}
              </span>
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs text-neutral-300">
                <Award className="w-3.5 h-3.5 text-orange-400" />
                <span>{kisansetu.status}</span>
              </div>
            </div>

            <h3 className="text-2xl sm:text-3xl font-medium text-white mb-2">
              {kisansetu.title}
            </h3>
            <p className="text-base text-neutral-300 mb-6 font-normal">
              {kisansetu.subtitle}
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-8 pb-8 border-b border-white/[0.06]">
              <div className="lg:col-span-6 space-y-3">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-neutral-400">
                  The Problem
                </h4>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {kisansetu.problem}
                </p>
              </div>

              <div className="lg:col-span-6 space-y-3">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-neutral-300">
                  The Solution
                </h4>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {kisansetu.solution}
                </p>
              </div>
            </div>

            {/* Key Capabilities */}
            <div className="mb-8">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-neutral-400 mb-4">
                Core Capabilities
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {kisansetu.keyCapabilities.map((cap, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack & Links */}
            <div className="pt-6 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {kisansetu.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/[0.06] text-xs text-neutral-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={kisansetu.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-medium text-white hover:text-orange-400 transition-colors"
              >
                <span>View on GitHub</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* PROJECT 02: INKLOOM AI */}
        {/* ========================================================= */}
        <div id="project-inkloom" className="mb-24 scroll-mt-24">
          <div className="bg-[#13161c] border border-white/[0.08] hover:border-white/[0.16] rounded-xl p-8 md:p-12 transition-all shadow-2xl">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <span className="text-xs font-mono text-neutral-400">
                02 • {inkloom.category}
              </span>
              <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs text-neutral-300">
                {inkloom.status}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-medium text-white mb-2">
              {inkloom.title}
            </h3>
            <p className="text-base text-neutral-300 mb-6 font-normal">
              {inkloom.subtitle}
            </p>

            {/* Architectural Explanation */}
            <div className="my-8 p-6 rounded-lg bg-white/[0.02] border border-white/[0.06]">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-white mb-3">
                Dual-Engine Design
              </h4>
              <p className="text-sm text-neutral-400 leading-relaxed mb-4">
                To prevent AI hallucinations while preserving natural writing, Inkloom AI decouples hard factual policy checks from contextual tone analysis:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-neutral-300">
                <div className="p-3.5 rounded bg-white/[0.03] border border-white/[0.06]">
                  <strong className="block text-white mb-1">Deterministic Rule Engine</strong>
                  Verifies drafts against approved fact sheets, restricted corporate lexicon, and regulatory constraints with zero hallucination.
                </div>
                <div className="p-3.5 rounded bg-white/[0.03] border border-white/[0.06]">
                  <strong className="block text-white mb-1">Contextual AI Analysis</strong>
                  Evaluates overall brand voice, messaging nuances, and audience appropriateness to recommend constructive editorial adjustments.
                </div>
              </div>
            </div>

            {/* Key Capabilities */}
            <div className="mb-8">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-neutral-400 mb-4">
                Platform Capabilities
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {inkloom.keyCapabilities.map((cap, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack & Links */}
            <div className="pt-6 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {inkloom.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/[0.06] text-xs text-neutral-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={inkloom.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-medium text-white hover:text-orange-400 transition-colors"
              >
                <span>View on GitHub</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* PROJECT 03: SAFECAMPUS */}
        {/* ========================================================= */}
        <div id="project-safecampus" className="scroll-mt-24">
          <div className="bg-[#13161c] border border-white/[0.08] hover:border-white/[0.16] rounded-xl p-8 md:p-12 transition-all shadow-2xl">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <span className="text-xs font-mono text-neutral-400">
                03 • {safecampus.category}
              </span>
              <span className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs text-neutral-300">
                {safecampus.status}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-medium text-white mb-2">
              {safecampus.title}
            </h3>
            <p className="text-base text-neutral-300 mb-6 font-normal">
              {safecampus.subtitle}
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-8 pb-8 border-b border-white/[0.06]">
              <div className="lg:col-span-6 space-y-3">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-neutral-400">
                  The Problem
                </h4>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {safecampus.problem}
                </p>
              </div>

              <div className="lg:col-span-6 space-y-3">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-neutral-300">
                  The Application
                </h4>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {safecampus.solution}
                </p>
              </div>
            </div>

            {/* Key Capabilities */}
            <div className="mb-8">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-neutral-400 mb-4">
                Foundational Features
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {safecampus.keyCapabilities.map((cap, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack & Links */}
            <div className="pt-6 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {safecampus.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/[0.06] text-xs text-neutral-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={safecampus.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-medium text-white hover:text-orange-400 transition-colors"
              >
                <span>View on GitHub</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
