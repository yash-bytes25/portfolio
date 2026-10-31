import React from 'react';
import { JOURNEY_LOGS, PERSONAL_INFO } from '../../data/portfolioData';
import { Terminal } from 'lucide-react';

export const JourneySection: React.FC = () => {
  const activeCurriculum = [
    { name: "Learning Python", note: "ML scripting, backend automation, algorithmic solutions" },
    { name: "Learning Java", note: "Object-oriented design, Android lifecycle, robust typing" },
    { name: "DSA Preparation", note: "Algorithmic complexity, recursion, trees, memory efficiency" },
    { name: "DBMS & SQL", note: "Relational schemas, normalization, query optimization, ACID" },
    { name: "AI/ML Exploration", note: "Supervised heuristics, model evaluation, contextual analysis" },
    { name: "Git & GitHub", note: "Branch management, version control workflows, collaborative repos" },
    { name: "Practical Project Development", note: "Shipping usable software to solve operational problems" },
  ];

  return (
    <section
      id="journey-section"
      className="relative min-h-screen w-full py-28 px-6 md:px-16 pointer-events-auto"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-lab pb-6 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-signal-orange font-mono text-xs font-bold">[02]</span>
              <span className="font-mono text-xs uppercase tracking-widest text-muted-steel">
                // SYSTEM LOG & TRAJECTORY
              </span>
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight uppercase text-warm-white">
              Engineering <span className="text-muted-steel">Log</span>
            </h2>
          </div>
          <div className="max-w-md p-3.5 border border-lab bg-surface-dark/85 backdrop-blur-md">
            <p className="text-xs sm:text-sm font-sans text-muted-steel leading-relaxed">
              An engineering notebook documenting the transition from academic theory to shipping deterministic systems and applied AI under live constraints.
            </p>
          </div>
        </div>

        {/* Academic Rigor Specification Sheet */}
        <div className="mb-16 lab-panel tech-corners p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-lab mb-6">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-signal-orange block mb-1">
                INSTITUTIONAL METRICS // SPEC-EDU.24
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-warm-white">
                {PERSONAL_INFO.college}
              </h3>
              <p className="font-mono text-xs text-muted-steel mt-0.5">
                {PERSONAL_INFO.degree} • {PERSONAL_INFO.academicYear}
              </p>
            </div>
            <div className="flex items-center gap-6">
              <div className="px-4 py-2 border border-lab bg-surface-dark font-mono text-xs">
                <span className="text-muted-steel block text-[10px] uppercase">CUMULATIVE GPA</span>
                <span className="text-signal-orange font-bold text-lg">{PERSONAL_INFO.cgpa}</span>
                <span className="text-muted-steel text-xs"> / 10.0</span>
              </div>
              <div className="px-4 py-2 border border-lab bg-surface-dark font-mono text-xs">
                <span className="text-muted-steel block text-[10px] uppercase">CURRENT STATUS</span>
                <span className="text-warm-white font-medium">ACTIVE CSE CANDIDATE</span>
              </div>
            </div>
          </div>

          {/* Active Practical Tracks Spec Grid */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Terminal className="w-3.5 h-3.5 text-signal-orange" />
              <span className="font-mono text-xs uppercase tracking-wider text-warm-white">
                CURRENT REPERTOIRE & PRACTICAL PREPARATION:
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {activeCurriculum.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 border border-lab-subtle bg-surface-dark/60 flex items-start gap-2.5"
                >
                  <span className="text-signal-orange font-mono text-xs font-semibold shrink-0 mt-0.5">
                    {String(idx + 1).padStart(2, '0')}.
                  </span>
                  <div>
                    <h4 className="font-mono text-xs font-semibold text-warm-white">
                      {item.name}
                    </h4>
                    <p className="text-[11px] font-sans text-muted-steel mt-0.5 leading-snug">
                      {item.note}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Chronological Notebook Log Entries */}
        <div className="space-y-8">
          <div className="flex items-center gap-2 border-b border-lab pb-3">
            <span className="font-mono text-xs uppercase tracking-widest text-signal-orange">
              FIELD NOTES // CHRONOLOGICAL SYSTEM ENTRIES
            </span>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {JOURNEY_LOGS.map((log) => (
              <div
                key={log.phase}
                className="lab-panel p-6 md:p-8 hover:border-signal-orange/60 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 pb-4 border-b border-lab-subtle mb-5">
                  <div className="flex items-center gap-3">
                    <span className="px-2 py-0.5 border border-signal-orange/40 bg-signal-orange/10 font-mono text-[11px] text-signal-orange font-bold">
                      {log.phase}
                    </span>
                    <span className="font-mono text-xs text-muted-steel">
                      {log.timeframe}
                    </span>
                  </div>
                  <div className="font-mono text-[11px] text-muted-steel uppercase tracking-wider">
                    VERIFIED MILESTONE
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  <div className="lg:col-span-8">
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-warm-white mb-3">
                      {log.title}
                    </h3>
                    <p className="text-sm font-sans text-muted-steel leading-relaxed mb-5">
                      {log.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {log.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 border border-lab bg-surface-dark font-mono text-[11px] text-muted-steel"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-lab-subtle pt-4 lg:pt-0 lg:pl-6 flex flex-col justify-between">
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-widest text-signal-orange block mb-2">
                        ENGINEERING PRINCIPLE
                      </span>
                      <blockquote className="text-xs font-mono text-warm-white/90 leading-relaxed italic border-l-2 border-signal-orange pl-3">
                        &ldquo;{log.takeaway}&rdquo;
                      </blockquote>
                    </div>
                    <div className="mt-4 pt-3 border-t border-lab-subtle flex items-center justify-between text-[10px] font-mono text-muted-steel">
                      <span>STATUS: RECORDED</span>
                      <span className="text-signal-orange">EXEC // VERIFIED</span>
                    </div>
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
