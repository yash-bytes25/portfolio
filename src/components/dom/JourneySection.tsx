import React from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const JourneySection: React.FC = () => {
  const interests = [
    'AI & Machine Learning',
    'Python',
    'Java',
    'Data Structures & Algorithms',
    'Database Management Systems',
    'Software Engineering',
    'Cybersecurity Fundamentals',
  ];

  const milestones = [
    {
      year: '2023',
      title: 'First Real Project: SafeCampus',
      description:
        'Started computer science studies at SRKR Engineering College. Built SafeCampus natively in Android using Java to get hands-on experience with object-oriented design, application lifecycles, and local persistence.',
    },
    {
      year: '2024 – 2026',
      title: 'Hackathons & KisanSetu Platform',
      description:
        'Tackled agricultural procurement bottlenecks by engineering KisanSetu with digital token queuing and slot scheduling, earning selection in the Smart India Hackathon 2026 internal round. Participated in VJ Hackathon 2026.',
    },
    {
      year: 'Present',
      title: 'Applied AI & Software Engineering',
      description:
        'Currently in second year, first semester (CGPA 7.0). Practicing DSA consistently, deepening relational database mastery, and architecting Inkloom AI to bridge deterministic policy rules with contextual AI models.',
    },
  ];

  return (
    <section
      id="about-section"
      className="relative min-h-screen w-full py-28 px-6 md:px-16 pointer-events-auto"
    >
      {/* ScrollTrigger target anchor */}
      <div id="journey-section" className="absolute top-0 left-0 w-full h-1" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 pb-6 border-b border-white/[0.08]">
          <span className="text-xs font-sans text-neutral-400 font-medium tracking-wide block mb-2">
            Background & Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-white">
            About Me
          </h2>
        </div>

        {/* Narrative & Profile Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          <div className="lg:col-span-7 space-y-5 text-neutral-300 text-base sm:text-lg leading-relaxed font-normal">
            <p>
              I am a 20-year-old Computer Science and Engineering student in my second year, first semester at <strong className="text-white font-medium">SRKR Engineering College</strong>, currently holding a <strong className="text-white font-medium">7.0 CGPA</strong>.
            </p>
            <p className="text-neutral-400">
              I learn by building projects, participating in hackathons, and experimenting with practical implementations. Rather than stopping at theory, I focus on turning ideas into reliable, functioning software that addresses real human needs.
            </p>
            <p className="text-neutral-400">
              Whether designing queue balancing algorithms for rural farmers or exploring how deterministic rules can rein in generative AI hallucinations, I enjoy solving problems with clean, maintainable code.
            </p>
          </div>

          <div className="lg:col-span-5 bg-[#13161c] border border-white/[0.08] rounded-xl p-6 md:p-8 shadow-2xl">
            <h3 className="text-sm font-medium text-white mb-4">
              Core Technical Interests
            </h3>
            <div className="flex flex-wrap gap-2">
              {interests.map((interest) => (
                <span
                  key={interest}
                  className="px-3 py-1.5 rounded-md bg-white/[0.04] border border-white/[0.06] text-xs text-neutral-300 font-sans"
                >
                  {interest}
                </span>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.06] space-y-3 text-xs text-neutral-400">
              <div className="flex justify-between">
                <span>College</span>
                <span className="text-neutral-200 font-medium">{PERSONAL_INFO.college}</span>
              </div>
              <div className="flex justify-between">
                <span>Degree</span>
                <span className="text-neutral-200">{PERSONAL_INFO.degree}</span>
              </div>
              <div className="flex justify-between">
                <span>Academic Year</span>
                <span className="text-neutral-200">{PERSONAL_INFO.academicYear}</span>
              </div>
              <div className="flex justify-between">
                <span>CGPA</span>
                <span className="text-neutral-200 font-medium">7.0 / 10.0</span>
              </div>
            </div>
          </div>
        </div>

        {/* Clean Editorial Timeline */}
        <div>
          <h3 className="text-xl font-medium text-white mb-8">
            How I Got Here
          </h3>
          <div className="space-y-8 border-l border-white/[0.1] pl-6 md:pl-8 ml-2">
            {milestones.map((milestone, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline node */}
                <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-3 h-3 rounded-full bg-neutral-800 border-2 border-neutral-400 group-hover:border-white transition-colors" />

                <div className="text-xs font-mono text-neutral-400 mb-1">
                  {milestone.year}
                </div>
                <h4 className="text-lg font-medium text-white mb-2">
                  {milestone.title}
                </h4>
                <p className="text-sm text-neutral-400 leading-relaxed max-w-2xl">
                  {milestone.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
