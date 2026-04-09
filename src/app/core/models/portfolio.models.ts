export interface NavItem {
  id: string;
  label: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  responsibilities: string[];
}

export interface ProjectItem {
  name: string;
  description: string;
  highlights?: string[];
  techStack: string[];
  githubUrl: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface CodingProfileItem {
  platform: string;
  handle: string;
  icon: string;
  href: string;
}

export interface ContactItem {
  label: string;
  value: string;
  href: string;
  icon: string;
}
