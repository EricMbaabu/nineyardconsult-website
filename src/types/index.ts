export interface NavLink {
  label: string;
  href: string;
  sectionId: string;
}

export interface HeroStat {
  value: string;
  label: string;
}

export interface Pillar {
  icon: string;
  title: string;
  description: string;
  items: string[];
}

export interface Sector {
  icon: string;
  title: string;
  subtitle: string;
}

export interface PanAfricanFeature {
  icon: string;
  title: string;
  description: string;
}

export interface DriveValue {
  title: string;
  description: string;
}

export interface ApproachStep {
  number: number;
  title: string;
  description: string;
}
