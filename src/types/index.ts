export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  imageUrl?: string;
  featured?: boolean;
}

export interface LinkedInPost {
  id: string;
  title?: string;
  content: string;
  date: string;
  url: string;
  imageUrl?: string;
  likes?: number;
  comments?: number;
  platform?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  username?: string;
}

export interface ResumeData {
  pdfUrl: string;
  sections: ResumeSection[];
}

export interface ResumeSection {
  title: string;
  items: ResumeSectionItem[];
}

export interface ResumeLink {
  label: string;
  url: string;
}

export interface ResumeSectionItem {
  title: string;
  subtitle?: string;
  date?: string;
  description?: string[];
  tags?: string[];
  links?: ResumeLink[];
}

export interface AboutData {
  name: string;
  title: string;
  bio: string;
  email: string;
  location?: string;
  imageUrl?: string;
}
