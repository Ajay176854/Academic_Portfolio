export type NavSectionId = 'about' | 'breakthroughs' | 'publications' | 'grants' | 'timeline' | 'awards-services' | 'gallery' | 'contact';

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  volume?: string;
  pages?: string;
  doi?: string;
  link?: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  year: string;
  details?: string;
  logo?: string;
}

export interface Award {
  id: string;
  title: string;
  organization: string;
  year: string;
  logo?: string;
}

export interface Experience {
  id: string;
  role: string;
  institution: string;
  period: string;
  details?: string;
  logo?: string;
}

export interface Grant {
  id: string;
  title: string;
  piCoPi: string;
  period: string;
  agency: string;
  amount: string;
  status: 'Ongoing' | 'Completed';
  role?: string;
}

export interface Accomplishment {
  id: string;
  text: string;
  reference?: string;
}

export interface Instrument {
  id: string;
  category: 'Synthesis' | 'Characterization' | 'Software';
  name: string;
  details: string;
  image?: string;
}

export interface Student {
  id: string;
  name: string;
  degree: string;
  institution: string;
  period: string;
  publicationsNote?: string;
  currentPosition?: string;
}

export interface ProfileData {
  name: string;
  title: string;
  bio: string;
  email: string;
  email2?: string;
  phone?: string;
  address?: string;
  scholar?: string;
  orcid?: string;
}
