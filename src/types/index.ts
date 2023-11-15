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

export type ISectionName = 'Home' | 'About' | 'Projects' | 'Skills' | 'Experience' | 'Contact';

export type IFavoriteProject = {
  title: string;
  img: string;
  desc: string;
  technologies: ITechnology[];
  repo: string;
  demo: string;
};

export type ITechnology = {
  title: string;
  link: string;
};
