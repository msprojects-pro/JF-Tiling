export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  features: string[];
}

export interface GalleryProject {
  id: string;
  title: string;
  category: 'Renovation' | 'Tiling' | 'Shower' | 'Flooring';
  categoryLabel: string;
  description: string;
  image: string;
  alt: string;
  featured?: boolean;
}

export interface BenefitItem {
  title: string;
  description: string;
  iconName: 'Sparkles' | 'ShieldCheck' | 'Briefcase' | 'Smile' | 'CheckCircle2' | 'Ruler';
}
