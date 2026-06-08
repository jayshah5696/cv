import React from "react";

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export interface EducationEntry {
  school: string;
  degree: string;
  start: string;
  end: string;
}

export interface WorkEntry {
  company: string;
  link: string;
  badges: string[];
  title: string;
  logo: string;
  start: string;
  end: string;
  description: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface ProjectEntry {
  title: string;
  techStack: string[];
  description: string;
  logo?: any;
  link?: {
    href: string;
  };
}

export interface ResumeData {
  name: string;
  initials: string;
  location: string;
  locationLink: string;
  about: string;
  summary: string;
  avatarUrl: string;
  personalWebsiteUrl: string;
  contact: {
    email: string;
    social: SocialLink[];
  };
  education: EducationEntry[];
  work: WorkEntry[];
  skills: SkillCategory[];
  projects: ProjectEntry[];
}
