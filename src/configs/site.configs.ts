import { IInteractiveIcon, INavigation } from '@/types';

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
    name: 'Skills',
    link: '#skills',
  },
  {
    name: 'Education',
    link: '#education',
  },
  {
    name: 'Contact',
    link: '#contact',
  },
];

export const SOCIAL_LINKS: readonly IInteractiveIcon[] = [
  {
    title: 'Github',
    icon: 'github',
    href: 'https://github.com/EDMIGHT',
  },
  {
    title: 'LinkedIn',
    icon: 'linkedin',
    href: 'https://www.linkedin.com/in/oleksii-latyshev/',
  },
  {
    title: 'Telegram',
    icon: 'telegram',
    href: 'https://t.me/edmight',
  },
  {
    title: 'Gmail',
    icon: 'mail',
    href: 'https://mail.google.com/mail/u/0/?to=oleksii.latyshevskiy@gmail.com&fs=1&tf=cm',
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
