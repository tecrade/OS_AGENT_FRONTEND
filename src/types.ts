export interface NavItem {
  name: string;
  href: string;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Demo {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  imageUrl: string;
}