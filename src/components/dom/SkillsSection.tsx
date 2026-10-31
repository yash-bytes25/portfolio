import React from 'react';
import { HACKATHONS } from '../../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const practiced = [
    { name: 'Python', note: 'Backend APIs, ML scripting, data pipelines (KisanSetu, Inkloom AI)' },
    { name: 'Java', note: 'Object-oriented programming, Android architecture, and lifecycle handling' },
    { name: 'Web Development', note: 'Responsive user interfaces, component systems, and client architecture' },
    { name: 'Android Development', note: 'Native Android SDK, Activity lifecycles, and local SQLite caching' },
    { name: 'Git & GitHub', note: 'Version control workflows, branch management, and collaborative development' },
    { name: 'Contextual AI Analysis', note: 'Prompt evaluation, semantic consistency review, and policy gates' },
  ];

  const learning = [
    { name: 'Data Structures & Algorithms', note: 'Daily problem solving: trees, graphs, dynamic programming, algorithmic complexity' },
    { name: 'AI & Machine Learning', note: 'Supervised classification, feature engineering, and model evaluation' },
    { name: 'DBMS & SQL', note: 'Relational schema modeling, normalization, indexing, and ACID transactions' },
    { name: 'Cybersecurity Fundamentals', note: 'Secure authentication flows, input validation, and defensive programming patterns' },
  ];

  const interests = [
    { name: 'Scalable Systems Architecture', note: 'Distributed microservices, event pipelines, and high-concurrency backend design' },
    { name: 'Deterministic AI Governance', note: 'Zero-hallucination verification layers and enterprise publishing guardrails' },
  ];

  return (
    <section
      id="skills-section"
      className="relative min-h-screen w-full py-28 px-6 md:px-16 pointer-events-auto"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 pb-6 border-b border-white/[0.08]">
          <span className="text-xs font-sans text-neutral-400 font-medium tracking-wide block mb-2">
            Technical Foundations
          </span>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-white mb-3">
            Skills & Capabilities
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 max-w-xl font-normal leading-relaxed">
            An honest overview of technologies I have implemented in real projects, areas currently under daily study, and architectural interests.
          </p>
        </div>

        {/* 3 Structured Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {/* Practiced Through Projects */}
          <div className="bg-[#13161c] border border-white/[0.08] rounded-xl p-6 md:p-8 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/[0.06]">
                <span className="w-2 h-2 rounded-full bg-orange-500" />
                <h3 className="text-sm font-medium text-white uppercase tracking-wider">
                  Practiced Through Projects
                </h3>
              </div>
              <div className="space-y-5">
                {practiced.map((skill) => (
                  <div key={skill.name}>
                    <h4 className="text-sm font-medium text-white mb-0.5">
                      {skill.name}
                    </h4>
                    <p className="text-xs text-neutral-400 leading-relaxed font-normal">
                      {skill.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-white/[0.04] text-[11px] text-neutral-500 font-mono">
              VERIFIED THROUGH WORKING CODE
            </div>
          </div>

          {/* Currently Learning */}
          <div className="bg-[#13161c] border border-white/[0.08] rounded-xl p-6 md:p-8 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/[0.06]">
                <span className="w-2 h-2 rounded-full bg-neutral-400" />
                <h3 className="text-sm font-medium text-white uppercase tracking-wider">
                  Currently Learning
                </h3>
              </div>
              <div className="space-y-5">
                {learning.map((skill) => (
                  <div key={skill.name}>
                    <h4 className="text-sm font-medium text-white mb-0.5">
                      {skill.name}
                    </h4>
                    <p className="text-xs text-neutral-400 leading-relaxed font-normal">
                      {skill.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-white/[0.04] text-[11px] text-neutral-500 font-mono">
              ACTIVE DAILY STUDY REGIMEN
            </div>
          </div>

          {/* Areas of Interest */}
          <div className="bg-[#13161c] border border-white/[0.08] rounded-xl p-6 md:p-8 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/[0.06]">
                <span className="w-2 h-2 rounded-full bg-neutral-600" />
                <h3 className="text-sm font-medium text-white uppercase tracking-wider">
                  Areas of Interest
                </h3>
              </div>
              <div className="space-y-5">
                {interests.map((skill) => (
                  <div key={skill.name}>
                    <h4 className="text-sm font-medium text-white mb-0.5">
                      {skill.name}
                    </h4>
                    <p className="text-xs text-neutral-400 leading-relaxed font-normal">
                      {skill.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 pt-4 border-t border-white/[0.04] text-[11px] text-neutral-500 font-mono">
              ARCHITECTURAL HORIZONS
            </div>
          </div>
        </div>

        {/* Hackathon Benchmarks */}
        <div className="pt-12 border-t border-white/[0.08]">
          <h3 className="text-lg font-medium text-white mb-6">
            Hackathon Experience
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {HACKATHONS.map((h) => (
              <div
                key={h.name}
                className="p-6 rounded-lg bg-white/[0.02] border border-white/[0.06]"
              >
                <div className="flex items-center justify-between mb-3 text-xs">
                  <span className="font-mono text-neutral-400">{h.year}</span>
                  <span className="text-orange-400 font-medium">{h.context}</span>
                </div>
                <h4 className="text-base font-medium text-white mb-2">
                  {h.name}
                </h4>
                <p className="text-xs text-neutral-400 leading-relaxed mb-3">
                  {h.focus}
                </p>
                <div className="text-xs text-neutral-500">
                  Role: <span className="text-neutral-300">{h.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
