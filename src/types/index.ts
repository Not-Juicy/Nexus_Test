import { LucideIcon } from 'lucide-react';

export interface Service {
  title: string;
  desc: string;
  icon: LucideIcon;
  category: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  company: string;
}

export interface Project {
  title: string;
  category: string;
  image: string;
}

export interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  readTime: string;
  category: string;
  image: string;
}
