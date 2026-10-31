import { Project, HackathonExperience, SkillCategory, JourneyMilestone } from '../types';

export const PERSONAL_INFO = {
  name: "Yaswanth",
  role: "Computer Science Engineer / AI & ML",
  college: "SRKR Engineering College",
  degree: "B.Tech in Computer Science and Engineering",
  academicYear: "2nd Year, 1st Semester",
  age: 20,
  cgpa: "7.0",
  statement: "Building systems. Exploring intelligence. Learning through execution.",
  subStatement: "Focused on bridging deterministic software architectures with applied machine learning to solve tangible operational challenges.",
  longTermGoal: "Mastering software engineering fundamentals and applied AI systems to build scalable infrastructure at a tier-1 technology company.",
  email: "your-email@example.com", // Placeholder: update with your personal email address
  github: "https://github.com/yash-bytes25",
  linkedin: "https://linkedin.com/in/your-username", // Placeholder: update with your LinkedIn profile
  location: "Andhra Pradesh, India",
  timezone: "IST (UTC+5:30)",
};

export const PROJECTS: Project[] = [
  {
    id: "kisansetu",
    title: "KisanSetu",
    tagline: "Smart Procurement Management Platform for Farmers",
    category: "Full Stack & Logistics Platform",
    period: "2024",
    status: "SIH Internal Round Selection",
    description:
      "A smart agricultural procurement management system engineered to streamline the harvest intake lifecycle. Tackles supply-chain bottlenecks at collection centers by digitizing the queue, scheduling intake slots, and tracking procurement and payment status end-to-end.",
    highlight: "Selected for the Internal Round of Smart India Hackathon (SIH)",
    architectureDetails: [
      "Digital Slot Scheduling Engine to distribute physical collection center traffic",
      "Automated Token Generation System ensuring queue transparency for farmers",
      "Real-Time Procurement Tracking module documenting receipt, inspection, and weighing",
      "Direct Payment Status Pipeline providing clear audit trails from purchase to disbursement"
    ],
    keyFeatures: [
      "Reduces physical waiting times at grain collection terminals",
      "Automated time-slot booking with procurement scheduling",
      "Digital token generation for scheduled arrival",
      "Tracking procurement and payment status transparently"
    ],
    techStack: ["Web Development", "DBMS & SQL", "Python Backend", "Git & GitHub"]
  },
  {
    id: "inkloom-ai",
    title: "Inkloom AI",
    tagline: "AI-Powered Brand Governance & Compliance Platform",
    category: "Applied AI / System Engineering",
    period: "2024",
    status: "Active Architecture",
    description:
      "An automated enterprise content review platform that evaluates publication drafts against rigorous brand identity rules, verified factual repositories, preferred corporate lexicon, and regulatory compliance constraints prior to publication.",
    highlight: "Dual-Engine Architecture: Deterministic Rules + Contextual AI Analysis",
    architectureDetails: [
      "Deterministic Rule Validation Engine executing zero-hallucination policy checks",
      "Contextual AI semantic analyzer evaluating tone, voice consistency, and nuances",
      "Lexicon replacement pipeline flagging non-preferred wording with contextual fixes",
      "Pre-publication compliance gate preventing unverified factual dissemination"
    ],
    keyFeatures: [
      "Rigorous verification against approved brand guidelines and fact sheets",
      "Context-aware AI scoring for corporate tone and messaging alignment",
      "Pre-publication review against compliance requirements and approved facts",
      "Deterministic governance engine paired with contextual AI analysis"
    ],
    techStack: ["Machine Learning", "Python", "Natural Language Analysis", "System Design", "Git"]
  },
  {
    id: "safecampus",
    title: "SafeCampus",
    tagline: "First-Year Android Application for Campus Utilities",
    category: "Mobile Application",
    period: "2023",
    status: "Completed (First Year Project)",
    description:
      "An Android application developed during my first year of computer science studies, serving as an earlier software development project exploring native mobile development, UI components, and software lifecycle principles.",
    highlight: "First-Year Foundation Software Engineering Milestone",
    architectureDetails: [
      "Native Android architecture utilizing object-oriented Java principles",
      "Modular activity management and component-driven view hierarchy",
      "Local storage handling and responsive mobile interface layouts"
    ],
    keyFeatures: [
      "Built natively for the Android platform",
      "Practical implementation of OOP concepts and lifecycle events",
      "Earlier software development project built during first year"
    ],
    techStack: ["Android Development", "Java", "OOP Principles", "Mobile Lifecycle"]
  }
];

export const HACKATHONS: HackathonExperience[] = [
  {
    name: "Smart India Hackathon (SIH)",
    role: "Core Developer & Problem Solver",
    year: "2024",
    context: "Internal Round Selection",
    focus: "Engineered KisanSetu to solve farmer procurement logistics, reducing waiting times and tracking payment status.",
    projectAssociated: "KisanSetu"
  },
  {
    name: "VJ Hackathon 2026",
    role: "Participant",
    year: "2026",
    context: "Participant",
    focus: "Participated in timed problem solving and practical technical implementation.",
    projectAssociated: "Technical Prototyping"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming Languages",
    code: "LANG_CORE",
    items: [
      { name: "Python", focus: "Applied AI, Data Structures, Automation Scripts, ML workflows", status: "Core" },
      { name: "Java", focus: "Object-Oriented Programming, Application Architecture, Android fundamentals", status: "Core" }
    ]
  },
  {
    title: "Core Computer Science",
    code: "CS_THEORY",
    items: [
      { name: "Data Structures & Algorithms", focus: "Problem solving, algorithmic complexity, recursive analysis, memory efficiency", status: "Active Study" },
      { name: "DBMS & SQL", focus: "Relational database schema modeling, queries, data normalization, transaction integrity", status: "Active Study" }
    ]
  },
  {
    title: "Artificial Intelligence & Data",
    code: "AI_INTEL",
    items: [
      { name: "Machine Learning", focus: "Supervised learning, feature engineering, classification, model evaluation", status: "Active Study" },
      { name: "Contextual AI Analysis", focus: "Deterministic governance heuristics, prompt evaluation, factual verification", status: "Applied" }
    ]
  },
  {
    title: "Engineering & Applied Systems",
    code: "SYS_APPLIED",
    items: [
      { name: "Web Development", focus: "Modern frontend architectures, responsive interfaces, interactive system design", status: "Applied" },
      { name: "Android Development", focus: "Native mobile development, Java-based lifecycle management, UI components", status: "Applied" },
      { name: "Git & GitHub", focus: "Version control workflows, branch management, collaborative codebases", status: "Core" },
      { name: "Cybersecurity Fundamentals", focus: "Security principles, authentication flows, vulnerability awareness, secure coding", status: "Active Study" }
    ]
  }
];

export const JOURNEY_MILESTONES: JourneyMilestone[] = [
  {
    phase: "PHASE 01",
    title: "Foundation & First Real Code",
    timeframe: "Year 1 — 2023",
    description:
      "Entered SRKR Engineering College (BTech CSE). Transitioned from theoretical computer science concepts to shipping functional software. Developed SafeCampus on Android using Java to learn object-oriented design and application lifecycles.",
    takeaway: "Real-world debugging teaches ten times faster than reading documentation alone.",
    tags: ["Java", "Android Dev", "OOP"]
  },
  {
    phase: "PHASE 02",
    title: "Hackathons & Systems Logic",
    timeframe: "Year 2 — 2024",
    description:
      "Tackled agricultural procurement bottlenecks in Smart India Hackathon. Created KisanSetu with digital token scheduling and status tracking, winning selection in the internal round. Participated in VJ Hackathon 2026 to test problem-solving under real constraints.",
    takeaway: "Software value is defined by operational reality, not just code syntax.",
    tags: ["SIH Internal Round", "Logistics", "DBMS", "KisanSetu"]
  },
  {
    phase: "PHASE 03",
    title: "AI Convergence & Tier-1 Vision",
    timeframe: "Present — 2024 / 2025",
    description:
      "Deepening mastery in Data Structures & Algorithms, Python, and Machine Learning. Building Inkloom AI to bridge deterministic rule engines with contextual AI governance. Maintaining a steady 7.0 CGPA while consistently practicing problem-solving to prepare for tier-1 tech engineering roles.",
    takeaway: "Mastery is an iterative loop: implement, benchmark, refine, repeat.",
    tags: ["Machine Learning", "DSA", "Inkloom AI", "System Engineering"]
  }
];
