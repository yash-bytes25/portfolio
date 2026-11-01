import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { HACKATHONS } from '../../data/portfolioData';

interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    description: string;
  }[];
}

export const SkillsSection: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Programming',
      description: 'Core languages used for systems, backend services, and application development.',
      skills: [
        {
          name: 'Python',
          description: 'Backend services, machine learning scripts, data processing, and automation pipelines.',
        },
        {
          name: 'Java',
          description: 'Object-oriented application architecture, Android SDK development, and lifecycle management.',
        },
      ],
    },
    {
      title: 'AI & Machine Learning',
      description: 'Applied machine learning, contextual analysis, and model integration into software systems.',
      skills: [
        {
          name: 'AI / ML Foundations',
          description: 'Supervised classification, feature engineering, and model evaluation metrics.',
        },
        {
          name: 'Applied AI & Governance',
          description: 'Semantic consistency verification, prompt evaluation, and deterministic compliance guardrails.',
        },
      ],
    },
    {
      title: 'Computer Science Foundations',
      description: 'Theoretical computational principles and data storage architectures.',
      skills: [
        {
          name: 'Data Structures & Algorithms',
          description: 'Arrays, linked lists, trees, graphs, sorting, searching, recursion, and Big-O time complexity.',
        },
        {
          name: 'DBMS & SQL',
          description: 'Relational database schema design, normalization, ACID transactions, and structured querying.',
        },
      ],
    },
    {
      title: 'Development',
      description: 'End-to-end software delivery, interface engineering, and version management.',
      skills: [
        {
          name: 'Web Development',
          description: 'Responsive user interfaces, component-driven client architecture, and modern web standards.',
        },
        {
          name: 'Android Development',
          description: 'Native mobile apps using Java, Activity lifecycles, and local database storage.',
        },
        {
          name: 'Git & GitHub',
          description: 'Version control hygiene, branching strategies, code reviews, and collaborative workflows.',
        },
      ],
    },
    {
      title: 'Areas of Interest',
      description: 'Specialized disciplines under ongoing self-directed study and exploration.',
      skills: [
        {
          name: 'Cybersecurity Fundamentals',
          description: 'Authentication architecture, input sanitation, and defensive software patterns.',
        },
        {
          name: 'Software Architecture',
          description: 'Modular system design, decoupled microservices, and reliable backend patterns.',
        },
        {
          name: 'Practical AI Applications',
          description: 'Building domain-specific software tools that combine classical business logic with AI assistance.',
        },
      ],
    },
  ];

  return (
    <section
      id="skills-section"
      className="relative min-h-screen w-full py-28 px-6 md:px-16 pointer-events-auto"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 pb-6 border-b border-white/[0.08] relative z-10">
          <span className="text-xs font-sans text-neutral-400 font-medium tracking-wide block mb-2">
            Technical Foundations
          </span>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-white mb-3">
            Technical Expertise
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 max-w-xl font-normal leading-relaxed">
            Technologies I&rsquo;m using, learning, and exploring.
          </p>
        </div>

        {/* 5 Clean Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {skillCategories.map((category, index) => {
            // Span 2 columns on 3-col layouts for visual balance if desired
            const isWide = index === 3 || index === 4;
            return (
              <div
                key={category.title}
                className={`bg-[#13161c] border border-white/[0.08] rounded-xl p-6 sm:p-7 flex flex-col justify-between transition-colors hover:border-white/15 ${
                  isWide ? 'md:col-span-1 lg:col-span-1' : ''
                }`}
              >
                <div>
                  <h3 className="text-base font-medium text-white mb-1.5">
                    {category.title}
                  </h3>
                  <p className="text-xs text-neutral-400 mb-6 leading-relaxed font-normal">
                    {category.description}
                  </p>

                  <div className="space-y-4 pt-4 border-t border-white/[0.06]">
                    {category.skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="text-sm font-medium text-neutral-200 mb-0.5">
                          {skill.name}
                        </div>
                        <div className="text-xs text-neutral-400 font-normal leading-relaxed">
                          {skill.description}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Hackathons & Competitive Experience */}
        <div className="pt-10 border-t border-white/[0.08]">
          <div className="mb-8">
            <span className="text-xs font-sans text-neutral-400 font-medium tracking-wide block mb-1">
              Competitive Engineering
            </span>
            <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-white">
              Hackathons & Recognition
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {HACKATHONS.map((hackathon) => (
              <div
                key={hackathon.name}
                className="bg-[#13161c] border border-white/[0.08] rounded-xl p-6 sm:p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h4 className="text-base font-medium text-white">
                      {hackathon.name}
                    </h4>
                    <span className="text-xs px-2.5 py-1 rounded bg-orange-500/10 text-orange-400 font-medium border border-orange-500/20 shrink-0">
                      {hackathon.context}
                    </span>
                  </div>
                  <div className="text-xs text-neutral-500 mb-4">
                    {hackathon.role} • {hackathon.year}
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-300 font-normal leading-relaxed">
                    {hackathon.focus}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-neutral-400">
                  <span>Associated Project: {hackathon.projectAssociated}</span>
                  {hackathon.projectAssociated === 'KisanSetu' && (
                    <a
                      href="#projects-section"
                      className="inline-flex items-center gap-1 text-orange-400 hover:text-orange-300 transition-colors"
                    >
                      <span>View Project</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
