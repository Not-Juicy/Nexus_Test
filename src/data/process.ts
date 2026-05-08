import { Target, Zap, Shield, TrendingUp } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

export interface ProcessStep {
  phase: string;
  title: string;
  subtitle: string;
  desc: string;
  icon: LucideIcon;
  color: string;
}

export const processSteps: ProcessStep[] = [
  {
    phase: '01',
    title: 'Discovery',
    subtitle: 'Strategic Auditing',
    desc: 'We audit your current digital presence, understand your goals, and identify the highest-impact opportunities for growth.',
    icon: Target,
    color: 'from-red-600/20 to-transparent'
  },
  {
    phase: '02',
    title: 'Strategy',
    subtitle: 'High-Level Roadmap',
    desc: 'A detailed roadmap with timelines, KPIs, and clear milestones. Every recommendation is backed by data and industry insights.',
    icon: Shield,
    color: 'from-blue-600/20 to-transparent'
  },
  {
    phase: '03',
    title: 'Execution',
    subtitle: 'Omnichannel Deployment',
    desc: 'Our team implements across all channels — from ad campaigns to product launches — with weekly reporting and optimization.',
    icon: Zap,
    color: 'from-purple-600/20 to-transparent'
  },
  {
    phase: '04',
    title: 'Scale',
    subtitle: 'Continuous Growth',
    desc: 'Once we find what works, we double down. Continuous testing, scaling, and refining to maximize your return on investment.',
    icon: TrendingUp,
    color: 'from-orange-600/20 to-transparent'
  }
];
