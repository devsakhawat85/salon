export type PortfolioCategory =
  | 'ALL'
  | 'COLOR'
  | 'BLONDE'
  | 'BRUNETTE'
  | 'BALAYAGE'
  | 'SOMBRÉ'
  | 'TRANSFORMATIONS'
  | 'EDUCATION';

export interface PortfolioItem {
  id: string;
  title: string;
  category: PortfolioCategory;
  categoryLabel: string;
  image: string;
  aspectRatio: 'square' | 'portrait' | 'landscape';
  description: string;
  technique: string;
  formulaNote?: string;
  featured?: boolean;
}

export interface ColorPillar {
  title: string;
  subtitle: string;
  description: string;
  detail: string;
}

export interface TechniqueItem {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  keyBenefits: string[];
  formulaInsight: string;
  category: string;
  image?: string;
}

export interface EducationWorkshop {
  id: string;
  title: string;
  type: string;
  format: string;
  description: string;
  keyTakeaways: string[];
  focus: string;
}
