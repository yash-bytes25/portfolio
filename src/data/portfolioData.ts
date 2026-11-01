import { Project, HackathonExperience, SkillMatrixItem, JourneyMilestone } from '../types';

export const PERSONAL_INFO = {
  name: "YASWANTH",
  tagline: "SOFTWARE ENGINEER IN THE MAKING",
  bio: "A second-year Computer Science and Engineering student exploring AI/ML, software engineering, and practical problem-solving.",
  college: "SRKR Engineering College",
  degree: "B.Tech in Computer Science and Engineering",
  academicYear: "2nd Year, 1st Semester",
  cgpa: "7.0",
  age: 20,
  labDesignation: "LAB NODE // EXP-CSE.2024",
  location: "Andhra Pradesh, India",
  timezone: "IST (UTC+5:30)",
  github: "https://github.com/yash-bytes25",
  linkedin: "https://www.linkedin.com/in/kundrapu-yaswanth-b67717391",
  email: "kundrapuyaswanth93@gmail.com",
  statement: "Building robust systems through deterministic logic and applied intelligence.",
  focusArea: "AI/ML Exploration • Systems Architecture • Practical Engineering",
};

export const PROJECTS: Project[] = [
  {
    id: "kisansetu",
    specCode: "EXP-01 // PRJ-KST",
    title: "KisanSetu",
    subtitle: "Smart Procurement Management Platform",
    category: "Agri-Logistics & Procurement Platform",
    period: "2026",
    status: "SIH 2026 Internal Round Selection",
    problem:
      "Agricultural procurement terminals frequently suffer from severe queue congestion and scheduling uncertainty. Farmers often endure unpredictable wait times of several days at grain collection centers, leading to transport bottlenecks, produce spoilage risk, and opaque weighing procedures.",
    solution:
      "A centralized digital intake management system designed to eliminate physical queue uncertainty. The platform introduces pre-arrival slot reservations, algorithmic queue sequencing with digital tokens, real-time wait estimation, and end-to-end status tracking from inspection to payment disbursement.",
    keyCapabilities: [
      "Smart procurement slot scheduling to distribute terminal traffic across operating hours",
      "Digital token system providing verifiable queue positions and eliminating manual manipulation",
      "Real-time queue tracking with dynamic estimated waiting times for arriving farmers",
      "Procurement progress tracking documenting intake receipt, inspection, and weighing stages",
      "Direct payment status pipeline maintaining a transparent audit trail through disbursement",
      "Local-language accessibility designed for clear operation across diverse regional farmer demographics"
    ],
    engineeringDecisions: [
      "Architected deterministic FIFO token scheduling to prevent queue bypasses",
      "Structured relational database schemas (SQL) with strict ACID transactions for multi-station weighing records",
      "Implemented a lightweight responsive interface optimized for low-bandwidth rural mobile networks"
    ],
    highlight: "Selected for Smart India Hackathon (SIH) 2026 Internal Round",
    techStack: ["Python Backend", "DBMS & SQL", "Web Development", "Git & GitHub"],
    repoUrl: "https://github.com/yash-bytes25/kisansetu",
    isPlaceholderRepo: false
  },
  {
    id: "inkloom-ai",
    specCode: "EXP-02 // PRJ-IKL",
    title: "Inkloom AI",
    subtitle: "Brand Governance & Compliance Platform",
    category: "Applied AI & System Engineering",
    period: "2024",
    status: "In Development • Rule Engine & AI Governance Architecture",
    problem:
      "Modern enterprise publishing at scale risks brand erosion, factual drift, and regulatory non-compliance. Pure LLM generation and human drafting both suffer from subtle voice inconsistencies, forbidden phrasing, and unverified factual statements that manual editorial teams cannot review fast enough.",
    solution:
      "A dual-engine brand governance architecture that pairs a deterministic rule validation engine with contextual AI analysis. Deterministic heuristics strictly gate corporate facts, prohibited terminology, and statutory compliance, while contextual language models evaluate voice tone, audience suitability, and subtle messaging nuances.",
    keyCapabilities: [
      "Deterministic governance engine enforcing zero-hallucination brand policy rules and prohibited terms",
      "Contextual AI analysis evaluating brand voice consistency, semantic alignment, and tonal nuances",
      "Automated content review workflow flagging infractions with suggested in-context remediations",
      "Brand compliance verification gating publication until all mandatory criteria are satisfied",
      "Modular backend architecture with secure multi-tenant design isolating organizational assets"
    ],
    engineeringDecisions: [
      "Dual-Engine Design: Decoupled hard regulatory constraints (deterministic regex/AST rules) from soft stylistic feedback (contextual AI models) to guarantee 100% adherence on non-negotiable policies",
      "Secure Multi-Tenant Architecture: Designed isolated data workspaces to ensure brand rulesets and draft intellectual property remain strictly segregated",
      "Pre-computation of compliance checklists to minimize latency during live authoring workflows"
    ],
    highlight: "Dual-Engine Architecture: Deterministic Rules + Contextual AI",
    techStack: ["Python", "Machine Learning", "Contextual AI Analysis", "System Design", "Git & GitHub"],
    repoUrl: "https://github.com/yash-bytes25/inkloom-ai",
    isPlaceholderRepo: false
  },
  {
    id: "safecampus",
    specCode: "EXP-03 // PRJ-SFC",
    title: "SafeCampus",
    subtitle: "Foundational Android Campus Utilities Application",
    category: "Mobile Application Engineering",
    period: "2023",
    status: "Completed (First Year Milestone)",
    problem:
      "Incoming engineering undergraduates faced fragmented communication channels for campus utility contacts, emergency helplines, and basic institutional notifications across sprawling college grounds.",
    solution:
      "A foundational native Android application built during first year of engineering studies, providing students with structured access to emergency contacts, campus navigation coordinates, and verified administrative telephone directories.",
    keyCapabilities: [
      "Native Android development engineered using Java and core Android SDK components",
      "Structured application architecture implementing clean separation between UI activities and local data",
      "Offline-first utility directory ensuring access to crucial contacts without continuous connectivity",
      "Practical development milestone grounding object-oriented programming (OOP) principles in a shipped product"
    ],
    engineeringDecisions: [
      "Adopted native Java over hybrid toolchains to deeply understand Android activity lifecycles, Intent routing, and memory constraints",
      "Utilized Android Room / local persistent storage for zero-latency retrieval during connectivity drops",
      "Built clean, modular view components following standard Material design guidelines"
    ],
    highlight: "Foundational First-Year Software Engineering Project",
    techStack: ["Android Development", "Java", "OOP Principles", "Mobile Lifecycle"],
    repoUrl: "https://github.com/yash-bytes25/safe-campus-R",
    isPlaceholderRepo: false
  }
];

export const SKILL_MATRIX: SkillMatrixItem[] = [
  // Practiced through projects
  {
    name: "Python",
    tier: "Practiced Through Projects",
    category: "Languages & Frameworks",
    code: "SPEC.PY-01",
    application: "Backend services, ML scripting, data manipulation, automation tools, algorithmic problem-solving",
    evidence: "KisanSetu backend, Inkloom AI governance engine, computational experiments"
  },
  {
    name: "Java",
    tier: "Practiced Through Projects",
    category: "Languages & Frameworks",
    code: "SPEC.JV-02",
    application: "Object-oriented design, Android lifecycle handling, algorithmic implementation",
    evidence: "SafeCampus native Android application, academic OOP coursework"
  },
  {
    name: "Web Development",
    tier: "Practiced Through Projects",
    category: "Application Engineering",
    code: "SPEC.WEB-03",
    application: "Responsive interfaces, component-driven client architecture, DOM manipulation, HTTP API integration",
    evidence: "KisanSetu procurement interface, engineering portfolio development"
  },
  {
    name: "Android Development",
    tier: "Practiced Through Projects",
    category: "Application Engineering",
    code: "SPEC.AND-04",
    application: "Activity & Fragment lifecycles, Intent dispatch, local SQLite/Room caching, native UI views",
    evidence: "SafeCampus first-year mobile deployment"
  },
  {
    name: "Git & GitHub",
    tier: "Practiced Through Projects",
    category: "Systems & Workflows",
    code: "SPEC.GIT-05",
    application: "Version control, branching strategy, commit hygiene, collaborative open-source workflows",
    evidence: "Production project repositories on GitHub: @yash-bytes25"
  },
  {
    name: "Contextual AI Analysis",
    tier: "Practiced Through Projects",
    category: "Applied Intelligence",
    code: "SPEC.CAI-06",
    application: "Semantic evaluation, prompt governance, deterministic heuristics integration, content review",
    evidence: "Inkloom AI dual-engine governance system"
  },

  // Currently learning
  {
    name: "Data Structures & Algorithms",
    tier: "Currently Learning",
    category: "Core Computer Science",
    code: "SPEC.DSA-07",
    application: "Algorithmic complexity (Big-O), arrays, linked lists, trees, graphs, sorting, searching, recursion",
    evidence: "Active daily problem-solving regimen preparing for tier-1 engineering standards"
  },
  {
    name: "AI & Machine Learning",
    tier: "Currently Learning",
    category: "Applied Intelligence",
    code: "SPEC.ML-08",
    application: "Supervised learning models, classification heuristics, feature extraction, evaluation metrics",
    evidence: "Academic exploration and integration into software architectures"
  },
  {
    name: "DBMS & SQL",
    tier: "Currently Learning",
    category: "Core Computer Science",
    code: "SPEC.DB-09",
    application: "Relational schema modeling, normalization (1NF-3NF), indexing, ACID transactions, join optimization",
    evidence: "Academic database coursework and KisanSetu procurement schema design"
  },
  {
    name: "Cybersecurity Fundamentals",
    tier: "Currently Learning",
    category: "Systems & Security",
    code: "SPEC.SEC-10",
    application: "Authentication flows, OWASP Top 10 awareness, input sanitization, data encryption principles",
    evidence: "Exploration of defensive software patterns and multi-tenant isolation"
  },

  // Areas of interest
  {
    name: "Scalable Systems Architecture",
    tier: "Areas of Interest",
    category: "Systems Engineering",
    code: "SPEC.SYS-11",
    application: "Microservice decoupling, event-driven pipelines, load balancing, fault tolerance",
    evidence: "Studying distributed system design papers and enterprise architectures"
  },
  {
    name: "Deterministic AI Governance",
    tier: "Areas of Interest",
    category: "Applied Intelligence",
    code: "SPEC.GOV-12",
    application: "Zero-hallucination guardrails, constraint satisfaction, corporate compliance automation",
    evidence: "Iterative architectural development on Inkloom AI"
  }
];

export const HACKATHONS: HackathonExperience[] = [
  {
    name: "Smart India Hackathon 2026",
    role: "Core Developer & Problem Solver",
    year: "2026",
    context: "Internal Round Selection",
    focus: "Engineered KisanSetu to solve agricultural procurement bottlenecks, introducing digital slot scheduling, token queues, and payment auditing.",
    projectAssociated: "KisanSetu"
  },
  {
    name: "VJ Hackathon 2026",
    role: "Participant",
    year: "2026",
    context: "Participant",
    focus: "Competed in timed algorithmic problem-solving and rapid software prototyping under live constraints.",
    projectAssociated: "Technical Prototyping"
  }
];

export const JOURNEY_LOGS: JourneyMilestone[] = [
  {
    phase: "LOG.01 — INITIALIZATION",
    title: "Foundations & First Shipped Application",
    timeframe: "Year 1 // 2023",
    description:
      "Entered SRKR Engineering College (B.Tech Computer Science & Engineering). Bridged theoretical computation with concrete application execution. Built SafeCampus natively in Android using Java to learn object-oriented design, memory management, and platform lifecycle constraints.",
    takeaway: "Theory gives you the language, but real-world debugging builds genuine engineering intuition.",
    tags: ["Java", "Android SDK", "OOP Architecture", "First Principles"]
  },
  {
    phase: "LOG.02 — PRODUCTION HACKATHONS",
    title: "Operational Logistics Under Pressure",
    timeframe: "Year 2 // 2024 – 2026",
    description:
      "Tackled agricultural procurement bottlenecks during Smart India Hackathon 2026. Conceived and implemented KisanSetu, introducing digital token scheduling and transparent intake stages, securing selection in the competitive internal college round. Participated in VJ Hackathon 2026 to push rapid technical delivery.",
    takeaway: "True software value is proven by solving physical operational bottlenecks, not just passing unit tests.",
    tags: ["Smart India Hackathon 2026", "Internal Round Selection", "KisanSetu", "VJ Hackathon 2026"]
  },
  {
    phase: "LOG.03 — SYSTEMATIZATION & HORIZON",
    title: "AI Convergence & Software Rigor",
    timeframe: "Present // 2024 – 2025",
    description:
      "Currently in 2nd Year, 1st Semester maintaining a 7.0 CGPA. Deepening expertise in Python, Data Structures & Algorithms, and relational database systems. Architecting Inkloom AI to bridge deterministic rule engines with contextual AI governance. Setting sights on building high-scale infrastructure at a tier-1 technology organization.",
    takeaway: "Excellence is an iterative loop: implement, benchmark, dissect failures, and rebuild cleaner.",
    tags: ["Inkloom AI", "DSA Regimen", "Deterministic Governance", "Tier-1 Trajectory"]
  }
];
