import type { FeatureKey } from '../services/feature-toggle.service';

export interface NavItem {
  label: string;
  href: string;
  featureKey?: FeatureKey;
}

export interface StatItem {
  value: string;
  description: string;
  icon?: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  description: string;
}

export interface TechItem {
  name: string;
  category: string;
  icon: string;
}

export interface Project {
  number: string;
  name: string;
  status: string;
  year: number;
  description: string;
  tags: string[];
}

export interface ContactItem {
  icon: string;
  main: string;
  subtitle: string;
  href: string;
}

export interface ContactInfo {
  location: string;
  availability: string;
  modality: string;
}
