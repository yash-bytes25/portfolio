import React, { useState } from 'react';
import { SKILL_MATRIX, HACKATHONS } from '../../data/portfolioData';
import { Award } from 'lucide-react';
import { SkillMatrixItem } from '../../types';

export const SkillsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('ALL');

  const tiers: ('ALL' | SkillMatrixItem['tier'])[] = [
    'ALL',
    'Practiced Through Projects',
    'Currently Learning',
    'Areas of Interest'
  ];

  const filteredSkills = activeFilter === 'ALL'
    ? SKILL_MATRIX
    : SKILL_MATRIX.filter((item) => item.tier === activeFilter);

  return (
    <section
      id="skills-section"
      className="relative min-h-screen w-full py-28 px-6 md:px-16 pointer-events-auto"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-lab pb-6 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-signal-orange font-mono text-xs font-bold">[04]</span>
              <span className="font-mono text-xs uppercase tracking-widest text-muted-steel">
                // CAPABILITY SPECIFICATION
              </span>
            </div>
            <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl tracking-tight uppercase text-warm-white">
              Technical <span className="text-signal-orange">Arsenal</span>
            </h2>
          </div>
          <div className="max-w-md p-3.5 border border-lab bg-surface-dark/85 backdrop-blur-md">
            <p className="text-xs sm:text-sm font-sans text-muted-steel leading-relaxed">
              A transparent, honest accounting of engineering tools — explicitly separated into technologies verified through shipped code, active daily study, and architectural horizons.
            </p>
          </div>
        </div>

        {/* Filter Navigation Tabs (Instrument Controls) */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-lab-subtle">
          <span className="font-mono text-[11px] text-muted-steel uppercase tracking-widest mr-2">
            FILTER SPECIFICATION:
          </span>
          {tiers.map((tier) => (
            <button
              key={tier}
              onClick={() => setActiveFilter(tier)}
              className={`px-3 py-1.5 font-mono text-xs uppercase tracking-wider transition-all border ${
                activeFilter === tier
                  ? 'border-signal-orange bg-signal-orange/15 text-signal-orange font-semibold'
                  : 'border-lab bg-surface-dark text-muted-steel hover:text-warm-white hover:border-muted-steel'
              }`}
            >
              {tier === 'ALL' ? 'ALL SPECIFICATIONS (12)' : tier}
            </button>
          ))}
        </div>

        {/* Technical Specification Matrix */}
        <div className="mb-20 overflow-hidden border border-lab bg-surface-dark">
          {/* Header Row */}
          <div className="hidden lg:grid grid-cols-12 gap-4 px-6 py-3 border-b border-lab bg-[#14171a] font-mono text-[11px] uppercase tracking-widest text-muted-steel">
            <div className="col-span-1">CODE</div>
            <div className="col-span-3">TECHNOLOGY / DOMAIN</div>
            <div className="col-span-3">STATUS & PROFICIENCY TIER</div>
            <div className="col-span-5">PRACTICAL APPLICATION & EVIDENCE</div>
          </div>

          {/* Matrix Rows */}
          <div className="divide-y divide-lab-subtle">
            {filteredSkills.map((skill) => (
              <div
                key={skill.code}
                className="grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-4 p-5 lg:px-6 lg:py-4 items-start hover:bg-surface-raised/40 transition-colors"
              >
                {/* Spec Code */}
                <div className="lg:col-span-1 font-mono text-xs text-signal-orange font-bold">
                  {skill.code}
                </div>

                {/* Name & Category */}
                <div className="lg:col-span-3">
                  <h4 className="font-mono text-sm font-bold text-warm-white">
                    {skill.name}
                  </h4>
                  <span className="font-mono text-[10px] text-muted-steel uppercase tracking-wider block mt-0.5">
                    {skill.category}
                  </span>
                </div>

                {/* Tier Badge */}
                <div className="lg:col-span-3">
                  <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 font-mono text-xs border ${
                      skill.tier === 'Practiced Through Projects'
                        ? 'border-signal-orange/40 bg-signal-orange/10 text-signal-orange'
                        : skill.tier === 'Currently Learning'
                        ? 'border-muted-steel/40 bg-muted-steel/10 text-warm-white'
                        : 'border-lab bg-surface-dark text-muted-steel'
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-current" />
                    <span>{skill.tier}</span>
                  </span>
                </div>

                {/* Application & Evidence */}
                <div className="lg:col-span-5 text-xs font-sans text-muted-steel">
                  <p className="text-warm-white/90 leading-relaxed font-normal mb-1">
                    {skill.application}
                  </p>
                  <p className="font-mono text-[11px] text-muted-steel/80">
                    <strong className="text-muted-steel font-medium">Evidence:</strong> {skill.evidence}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================= */}
        {/* HACKATHON BENCHMARKS (SIH & VJ Hackathon) */}
        {/* ========================================================= */}
        <div className="border-t border-lab pt-16">
          <div className="flex items-center gap-2 mb-8">
            <Award className="w-4 h-4 text-signal-orange" />
            <h3 className="font-mono text-xs uppercase tracking-widest text-warm-white font-bold">
              VERIFIED HACKATHON EXPERIENCES // REAL-TIME TIMED COMPETITIONS
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {HACKATHONS.map((hackathon, idx) => (
              <div
                key={hackathon.name}
                className="lab-panel tech-corners p-6 md:p-8"
              >
                <div className="flex items-center justify-between gap-4 pb-4 border-b border-lab-subtle mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-signal-orange font-mono text-xs font-bold">
                      [HACK-{String(idx + 1).padStart(2, '0')}]
                    </span>
                    <span className="font-mono text-xs text-muted-steel">
                      {hackathon.year}
                    </span>
                  </div>
                  <span className="px-2 py-0.5 border border-signal-orange/40 bg-signal-orange/10 font-mono text-[10px] text-signal-orange uppercase font-semibold">
                    {hackathon.context}
                  </span>
                </div>

                <h4 className="font-display text-xl sm:text-2xl font-bold text-warm-white mb-2">
                  {hackathon.name}
                </h4>

                <p className="font-mono text-xs text-muted-steel mb-4">
                  Role: <span className="text-warm-white">{hackathon.role}</span> • Focus:{' '}
                  <span className="text-signal-orange">{hackathon.projectAssociated}</span>
                </p>

                <p className="text-xs sm:text-sm font-sans text-muted-steel leading-relaxed">
                  {hackathon.focus}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
