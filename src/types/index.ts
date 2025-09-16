export interface Project {
  id: string
  title: string
  category: string
  description?: string
  longDescription?: string
  location?: string
  year?: number
  client?: string
  area?: string
  features?: string[]
  is_featured: boolean
  created_at: string
  updated_at: string
  images?: ProjectImage[]
  status: '진행중' | '완료'
}

export interface ProjectImage {
  id: string
  project_id: string
  image_url: string
  alt_text?: string
  sort_order: number
  created_at: string
}

export interface CreateProjectData {
  title: string
  category: Project['category']
  description?: string
  location?: string
  year?: number
  client?: string
  area?: string
  is_featured?: boolean
  status: string
}

export interface UpdateProjectData extends Partial<CreateProjectData> {
  id: string
}


export interface NewsItem {
  id: string;
  category: string;
  title: string;
  summary: string;
  content: string;
  date: string;
  author: string;
  views: number;
  image: string;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  education: string;
  experience: string;
  specialty: string;
  image: string;
  status?: string;
}

export interface ContactInquiry {
  id: number;
  name: string;
  company: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
  status: 'new' | 'in-progress' | 'completed';
  date: string;
}

export interface SocialLink {
  name: string;
  handle: string;
  iconName: string;
  url: string;
  description: string;
}

export interface InstagramPost {
  id: string;
  image: string;
  caption: string;
  likes: number;
}

export interface TimeLineItem {
  year: string;
  title: string;
  description: string;
}

export interface Service {
  iconName: string;
  title: string;
  description: string;
  features: string[];
}

