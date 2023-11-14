import { Icons } from '@/components/ui/icons';

export type INavigation = {
  name: ISectionName;
  link: string;
};

export type IInteractiveIcon = {
  title: string;
  icon: keyof typeof Icons;
  href: string;
};

export type ISectionName = 'Home' | 'About' | 'Projects' | 'Experience' | 'Contact';
