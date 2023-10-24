import { INavigation, ISocialLink } from '@/types/config.types';

export const NAVIGATION: readonly INavigation[] = [
  {
    name: 'Home',
    link: '#home',
  },
  {
    name: 'About',
    link: '#about',
  },
  {
    name: 'Projects',
    link: '#projects',
  },
  {
    name: 'Experience',
    link: '#experience',
  },
  {
    name: 'Contact',
    link: '#contact',
  },
];

export const SOCIAL_LINKS: readonly ISocialLink[] = [
  {
    title: 'Github',
    icon: 'github',
    href: 'https://github.com/EDMIGHT',
  },
  {
    title: 'Telegram',
    icon: 'telegram',
    href: 'https://github.com/EDMIGHT',
  },
  {
    title: 'Gmail',
    icon: 'telegram',
    href: 'https://github.com/EDMIGHT',
  },
];

export const SITE_CONFIG = {
  name: 'Latyshev',
  desc: 'Welcome to my portfolio. Here you will learn about me and view the projects that I have implemented',
  keywords: [
    'NextJS',
    'Next.JS 13.4',
    'NextJS 13.4',
    'React',
    'Latyshev Oleksii',
    'Latyshev',
    'Fullstack',
    'Frontend',
    'Portfolio',
  ],
  url: process.env.APP_URL!,
};
