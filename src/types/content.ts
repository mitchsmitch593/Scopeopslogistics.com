export interface SiteConfig {
  name: string;
  shortName: string;
  brandTagline: string;
  titleTemplate: string;
  siteUrl: string;
  defaultTitle: string;
  defaultDescription: string;
  contactEmail: string;
  generalEmail: string;
  ownerEmail: string;
  contactPhone: string;
  serviceArea: string;
  responseTime: string;
  heroHighlights: string[];
  differentiators: string[];
  trustPoints: string[];
  quoteFactors: string[];
  aboutPrinciples: string[];
  qualificationFits: string[];
  qualificationNotFits: string[];
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  slug: string;
  title: string;
  summary: string;
  benefit: string;
  useCases: string[];
  seoTitle?: string;
  seoDescription?: string;
}

export interface UseCase {
  title: string;
  description: string;
}

export interface Industry {
  title: string;
  description: string;
  fit: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Expectation {
  title: string;
  description: string;
}

export interface ContactMethod {
  label: string;
  value: string;
  href?: string;
}

export interface FormOption {
  label: string;
  value: string;
}

export interface FormField {
  id: string;
  label: string;
  name: string;
  type: 'text' | 'email' | 'tel' | 'select' | 'textarea' | 'date';
  placeholder?: string;
  required?: boolean;
  options?: FormOption[];
  helpText?: string;
  autocomplete?: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}
