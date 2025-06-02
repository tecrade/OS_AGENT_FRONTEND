import { Feature, Demo, TeamMember, NavItem } from './types';

export const navItems: NavItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'Features', href: '#features' },
  { name: 'Demos', href: '#demos' },
  { name: 'About', href: '#about' },
];

export const features: Feature[] = [
  {
    id: 1,
    title: 'Intelligent Command Suggestions',
    description: 'Get smart command suggestions based on your previous usage and current context.',
    icon: 'Terminal',
  },
  {
    id: 2,
    title: 'Security Analysis',
    description: 'Automatic security checks for commands and scripts before execution.',
    icon: 'Shield',
  },
  {
    id: 3,
    title: 'Web Automation',
    description: 'Automate repetitive web tasks with simple terminal commands.',
    icon: 'Globe',
  },
  {
    id: 4,
    title: 'Cross-Platform Support',
    description: 'Works seamlessly across Windows, macOS, and Linux environments.',
    icon: 'Layers',
  },
  {
    id: 5,
    title: 'Custom Workflows',
    description: 'Create and save custom command workflows for complex tasks.',
    icon: 'GitBranch',
  },
];

export const demos: Demo[] = [
  {
    id: 1,
    title: 'Command Prediction',
    imageUrl: 'https://images.pexels.com/photos/4126724/pexels-photo-4126724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'OS-AGENT predicting your next command based on workflow patterns.',
  },
  {
    id: 2,
    title: 'Security Scanning',
    imageUrl: 'https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Real-time security analysis of terminal commands and scripts.',
  },
  {
    id: 3,
    title: 'Web Automation',
    imageUrl: 'https://images.pexels.com/photos/5474295/pexels-photo-5474295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Automating repetitive web tasks through simple terminal commands.',
  },
  {
    id: 4,
    title: 'Custom Workflows',
    imageUrl: 'https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Creating and executing custom command workflows for complex tasks.',
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Alex Chen',
    role: 'Lead Developer',
    imageUrl: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    role: 'AI Specialist',
    imageUrl: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 3,
    name: 'Marcus Webb',
    role: 'UX Designer',
    imageUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];