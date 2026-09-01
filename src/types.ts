export type ProjectCategory = 'Full Stack' | 'AI & ML' | 'Backend' | 'DevOps';

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  category: ProjectCategory;
  liveUrl: string;
  githubUrl: string;
}

export interface ExperienceEntry {
  company: string;
  title: string;
  type: string;
  period: string;
  location: string;
  bullets: string[];
  tech: string[];
}

export interface EducationEntry {
  school: string;
  degree: string;
  period: string;
  highlights: string[];
  skills: string[];
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface StatItem {
  label: string;
  target: number;
  suffix: string;
}

export interface AIWorkEntry {
  id: string;
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface ProjectResult {
  value: string;
  label: string;
}

export interface ProjectDetail {
  id: string;
  description: string[];
  bullets: string[];
  challenges: string[];
  results: ProjectResult[];
}
