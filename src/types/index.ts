export interface Project {
  id: string;
  specCode: string;
  title: string;
  subtitle: string;
  category: string;
  period: string;
  status: string;
  problem: string;
  solution: string;
  keyCapabilities: string[];
  engineeringDecisions: string[];
  highlight: string;
  techStack: string[];
  repoUrl: string;
  isPlaceholderRepo: boolean;
}

export interface SkillMatrixItem {
  name: string;
  tier: 'Currently Learning' | 'Practiced Through Projects' | 'Areas of Interest';
  category: string;
  code: string;
  application: string;
  evidence: string;
}

export interface HackathonExperience {
  name: string;
  role: string;
  year: string;
  context: string;
  focus: string;
  projectAssociated: string;
}

export interface JourneyMilestone {
  phase: string;
  title: string;
  timeframe: string;
  description: string;
  takeaway: string;
  tags: string[];
}
