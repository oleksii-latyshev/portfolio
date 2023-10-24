import { Icons } from '@/components/ui/icons';

export type INavigation = {
  name: string;
  link: string;
};

export type ISocialLink = {
  title: string;
  icon: keyof typeof Icons;
  href: string;
};
