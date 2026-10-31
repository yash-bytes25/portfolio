export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: string;
  period: string;
  status: string;
  description: string;
  highlight?: string;
  architectureDetails: string[];
  keyFeatures: string[];
  techStack: string[];
  links?: {
    github?: string;
    demo?: string;
  };
}

export interface HackathonExperience {
  name: string;
  role: string;
  year: string;
  context: string;
  focus: string;
  projectAssociated?: string;
}

export interface SkillCategory {
  title: string;
  code: string;
  items: {
    name: string;
    focus: string;
    status: 'Core' | 'Active Study' | 'Applied';
  }[];
}

export interface JourneyMilestone {
  phase: string;
  title: string;
  timeframe: string;
  description: string;
  takeaway: string;
  tags: string[];
}

