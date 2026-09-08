export interface ServiceOffer {
  id: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  tags: string[];
  imageUrl: string;
  imageAlt: string;
  features: string[];
}

export interface ConfidenceStep {
  stepNumber: number;
  title: string;
  subtitle: string;
  description: string;
  stage: 'nervous' | 'learning' | 'ready';
  badgeColor: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  area: string;
  tag: string;
  stars: number;
  outcome: string;
}

export interface MatcherState {
  experienceLevel: string;
  preferredTime: string;
  primaryGoal: string;
}

export interface ContactFormData {
  name: string;
  phone: string;
  postcode: string;
  experienceLevel: string;
  preferredTime: string;
  notes: string;
}
