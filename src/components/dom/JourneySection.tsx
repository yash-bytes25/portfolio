import React from 'react';
import { JOURNEY_MILESTONES, PERSONAL_INFO } from '../../data/portfolioData';
import { GitBranch, Layers, Target, BookOpen } from 'lucide-react';

export const JourneySection: React.FC = () => {
  return (
    <section
      id="journey-section"
      className="relative min-h-screen w-full py-28 px-6 md:px-16 pointer-events-auto"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.08] pb-8 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="font-mono text-xs uppercase tracking-widest text-zinc-400">
                02 // TRAJECTORY & EVOLUTION
              </span>
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight uppercase text-white">
              Engineering <span className="text-chrome">Journey</span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-sm font-sans text-zinc-400 leading-relaxed">
              Transitioning from foundational concepts to architecting real-world platforms.
              Rooted in practical implementation, iterative hackathon builds, and rigorous code execution.
            </p>
          </div>
        </div>

        {/* Academic & Vision Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="chrome-card tech-bracket p-6 md:p-8 rounded">
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs text-zinc-400 uppercase tracking-widest">
                01 • ACADEMIC RIGOR
              </span>
              <BookOpen className="w-4 h-4 text-zinc-400" />
            </div>
            <h3 className="font-display text-xl font-bold text-white mb-2">
              SRKR Engineering College
            </h3>
            <p className="text-xs font-mono text-zinc-400 mb-4">
              B.Tech in Computer Science & Engineering
            </p>
            <div className="space-y-2 text-xs text-zinc-400 border-t border-white/[0.06] pt-4">
              <div className="flex justify-between">
                <span>Current Standing</span>
                <span className="text-white font-mono">2nd Year / Sem 1</span>
              </div>
              <div className="flex justify-between">
                <span>Cumulative GPA</span>
                <span className="text-white font-mono">{PERSONAL_INFO.cgpa} / 10.0</span>
              </div>
              <div className="flex justify-between">
                <span>Core Discipline</span>
                <span className="text-white font-mono">Computer Science</span>
              </div>
            </div>
          </div>

          <div className="chrome-card tech-bracket p-6 md:p-8 rounded">
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs text-zinc-400 uppercase tracking-widest">
                02 • CORE ETHOS
              </span>
              <Layers className="w-4 h-4 text-zinc-400" />
            </div>
            <h3 className="font-display text-xl font-bold text-white mb-2">
              Learning Through Execution
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed mb-4">
              Theory provides the grammar, but shipping systems builds engineering intuition. Every concept is tested through hackathons, command-line scripts, and user-facing architectures.
            </p>
            <div className="inline-block px-3 py-1 rounded bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-zinc-300">
              Pragmatic Problem Solver
            </div>
          </div>

          <div className="chrome-card tech-bracket p-6 md:p-8 rounded">
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs text-zinc-400 uppercase tracking-widest">
                03 • TARGET HORIZON
              </span>
              <Target className="w-4 h-4 text-zinc-400" />
            </div>
            <h3 className="font-display text-xl font-bold text-white mb-2">
              Tier-1 Tech Trajectory
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed mb-4">
              Committed to mastering software engineering principles, robust data structures, and machine learning infrastructure to engineer solutions at scale.
            </p>
            <div className="inline-block px-3 py-1 rounded bg-white/[0.04] border border-white/[0.08] text-[11px] font-mono text-zinc-300">
              Long-term Commitment
            </div>
          </div>
        </div>

        {/* Chronological Milestone Timeline */}
        <div className="space-y-6">
          <div className="font-mono text-xs uppercase tracking-widest text-zinc-400 mb-6 flex items-center gap-3">
            <GitBranch className="w-3.5 h-3.5" />
            <span>EXECUTION MILESTONES & LEARNING PHASES</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {JOURNEY_MILESTONES.map((item) => (
              <div
                key={item.phase}
                className="chrome-card p-6 md:p-8 rounded flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/[0.06]">
                    <span className="font-mono text-xs text-zinc-400 tracking-wider">
                      {item.phase}
                    </span>
                    <span className="font-mono text-[11px] text-zinc-400">
                      {item.timeframe}
                    </span>
                  </div>

                  <h4 className="font-display text-lg font-bold text-white group-hover:text-chrome transition-colors mb-3">
                    {item.title}
                  </h4>

                  <p className="text-xs font-sans text-zinc-400 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div>
                  <div className="p-3 rounded bg-white/[0.02] border border-white/[0.05] mb-4">
                    <span className="text-[10px] font-mono text-zinc-400 uppercase block mb-1">
                      Key Realization
                    </span>
                    <p className="text-xs italic text-zinc-300 font-sans">
                      &ldquo;{item.takeaway}&rdquo;
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.03] text-zinc-400 border border-white/[0.06]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
