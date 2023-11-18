import { IFavoriteProject, IInteractiveIcon, IQualificationItem } from '@/types';

export const MAIN_STACK_TECHNOLOGIES: readonly IInteractiveIcon[] = [
  {
    title: 'TypeScript',
    icon: 'typescript',
    href: 'https://www.typescriptlang.org/',
  },
  {
    title: 'Next.js',
    icon: 'nextJs',
    href: 'https://nextjs.org/',
  },
  {
    title: 'React',
    icon: 'react',
    href: 'https://react.dev/',
  },
  {
    title: 'Express.js',
    icon: 'expressJs',
    href: 'https://expressjs.com/',
  },
  {
    title: 'Tailwind',
    icon: 'tailwindcss',
    href: 'https://tailwindcss.com/',
  },
  {
    title: 'Prisma',
    icon: 'prismaORM',
    href: 'https://www.prisma.io/',
  },
  {
    title: 'MySQL',
    icon: 'mysql',
    href: 'https://www.mysql.com/',
  },
];

export const MY_FAVORITE_PROJECTS: readonly IFavoriteProject[] = [
  {
    title: 'comicslib',
    img: '/projects/comicslib.webp',
    desc: 'A web application serving as a comic library inspired by MangaDex, offering online reading and personalized collection management',
    technologies: [
      {
        title: 'next.js 13.4',
        link: 'https://nextjs.org/',
      },
      {
        title: 'tailwindcss',
        link: 'https://tailwindcss.com/',
      },
      {
        title: 'express.js',
        link: 'https://expressjs.com/',
      },
      {
        title: 'mysql',
        link: 'https://www.mysql.com/',
      },
      {
        title: 'shadcn/ui',
        link: 'https://ui.shadcn.com/',
      },
      {
        title: 'prisma',
        link: 'https://www.prisma.io/',
      },
      {
        title: 'redux toolkit',
        link: 'https://redux-toolkit.js.org/',
      },
    ],
    repo: 'https://github.com/EDMIGHT/comicslib',
    demo: 'https://comicslib.vercel.app',
  },
  {
    title: 'social',
    img: '/projects/social.webp',
    desc: 'A web application functioning as a social network, encompassing key features found in typical social platforms.',
    technologies: [
      {
        title: 'react',
        link: 'https://react.dev/',
      },
      {
        title: 'tailwindcss',
        link: 'https://tailwindcss.com/',
      },
      {
        title: 'express.js',
        link: 'https://expressjs.com/',
      },
      {
        title: 'mysql',
        link: 'https://www.mysql.com/',
      },
      {
        title: 'prisma',
        link: 'https://www.prisma.io/',
      },
      {
        title: 'redux toolkit',
        link: 'https://redux-toolkit.js.org/',
      },
      {
        title: 'swagger',
        link: 'https://swagger.io/',
      },
    ],
    repo: 'https://github.com/EDMIGHT/social',
    demo: 'https://social-latyshev.vercel.app/',
  },
  {
    title: 'sushi-shop',
    img: '/projects/sushi-shop.webp',
    desc: 'A web application representing a sushi shop, encompassing essential online store features such as catalog browsing and seamless ordering',
    technologies: [
      {
        title: 'react',
        link: 'https://react.dev/',
      },
      {
        title: 'sass',
        link: 'https://sass-lang.com/',
      },
      {
        title: 'express.js',
        link: 'https://expressjs.com/',
      },
      {
        title: 'mongo db',
        link: 'https://www.mongodb.com/',
      },
      {
        title: 'redux toolkit',
        link: 'https://redux-toolkit.js.org/',
      },
      {
        title: 'passport.js',
        link: 'https://www.passportjs.org/',
      },
      {
        title: 'docker',
        link: 'https://www.docker.com/',
      },
    ],
    repo: 'https://github.com/EDMIGHT/sushi-shop',
    demo: 'https://sushi-shop.azurewebsites.net/',
  },
];

type ISkill = {
  title: string;
  technologies: readonly IInteractiveIcon[];
};

export const SKILLS: ISkill[] = [
  {
    title: 'Languages',
    technologies: [
      {
        title: 'TypeScript',
        icon: 'typescript',
        href: 'https://www.typescriptlang.org/',
      },
      {
        title: 'C#',
        icon: 'csharp',
        href: 'https://dotnet.microsoft.com/en-us/languages/csharp',
      },
      {
        title: 'Sass',
        icon: 'sass',
        href: 'https://sass-lang.com/',
      },
    ],
  },
  {
    title: 'Frontend',
    technologies: [
      {
        title: 'Next.js',
        icon: 'nextJs',
        href: 'https://nextjs.org/',
      },
      {
        title: 'React',
        icon: 'react',
        href: 'https://react.dev/',
      },
      {
        title: 'Tailwind',
        icon: 'tailwindcss',
        href: 'https://tailwindcss.com/',
      },
      {
        title: 'Redux Toolkit',
        icon: 'redux',
        href: 'https://redux-toolkit.js.org/',
      },
    ],
  },
  {
    title: 'Backend',
    technologies: [
      {
        title: 'Node.js',
        icon: 'nodejs',
        href: 'https://nodejs.org/en',
      },
      {
        title: 'Express.js',
        icon: 'expressJs',
        href: 'https://expressjs.com/',
      },
      {
        title: 'Prisma',
        icon: 'prismaORM',
        href: 'https://www.prisma.io/',
      },
      {
        title: 'MySQL',
        icon: 'mysql',
        href: 'https://www.mysql.com/',
      },
      {
        title: 'MongoDB',
        icon: 'mongodb',
        href: 'https://www.mongodb.com/',
      },
    ],
  },
  {
    title: 'Tools',
    technologies: [
      {
        title: 'Figma',
        icon: 'figma',
        href: 'https://www.figma.com/',
      },
      {
        title: 'Docker',
        icon: 'docker',
        href: 'https://www.docker.com/',
      },
      {
        title: 'Jira',
        icon: 'jira',
        href: 'https://www.atlassian.com/software/jira',
      },
    ],
  },
];

export const EDUCATION: readonly IQualificationItem[] = [
  {
    title: 'Kharkiv National University of Radio Electronics',
    desc: 'Ukraine - Kharkiv',
    time: '2021 - Present',
    link: 'https://en.wikipedia.org/wiki/Kharkiv_National_University_of_Radioelectronics',
  },
  {
    title: 'Kharkiv Patent-Computer College',
    desc: 'Ukraine - Kharkiv',
    time: '2017 - 2021',
    // No English page for my college ¯\_(ツ)_/¯
    link: 'https://uk.wikipedia.org/wiki/%D0%A5%D0%B0%D1%80%D0%BA%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_%D0%BF%D0%B0%D1%82%D0%B5%D0%BD%D1%82%D0%BD%D0%BE-%D0%BA%D0%BE%D0%BC%D0%BF%27%D1%8E%D1%82%D0%B5%D1%80%D0%BD%D0%B8%D0%B9_%D0%BA%D0%BE%D0%BB%D0%B5%D0%B4%D0%B6',
  },
];
