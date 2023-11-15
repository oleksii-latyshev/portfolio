'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { Badge } from '@/components/ui/badge';
import { Icons } from '@/components/ui/icons';
import { Section, SectionContent, SectionHeader, SectionTitle } from '@/components/ui/section';
import { MY_FAVORITE_PROJECTS } from '@/configs/my.configs';
import { useSectionInView } from '@/hooks/use-section-in-view';

export const ProjectsSection: FC = ({}) => {
  const { ref } = useSectionInView('Projects', 0.5);

  return (
    <Section ref={ref} id='projects'>
      <SectionHeader>
        <SectionTitle>My Projects</SectionTitle>
      </SectionHeader>
      <SectionContent className='space-y-4 lg:p-0'>
        <ul className='flex flex-col gap-6'>
          {MY_FAVORITE_PROJECTS.map(({ title, img, desc, demo, repo, technologies }) => (
            <li
              key={title}
              className='relative flex flex-col gap-2 lg:flex-row lg:gap-6 lg:even:flex-row-reverse'
            >
              <a
                href={demo}
                className='overflow-hidden rounded-xl border-2 border-transparent transition-colors hover:border-primary focus:border-primary'
              >
                <Image
                  src={img}
                  alt={title}
                  width={718}
                  height={404}
                  quality={100}
                  className='w-full flex-1 object-contain object-center lg:w-[500px] xl:w-[710px]'
                  // fill
                  // sizes='(min-width: 768px) 100vw, (min-width: 1200px) 50vw'
                />
              </a>
              <div className='flex w-full flex-1 flex-col items-start justify-center gap-2 xl:gap-3'>
                <h3 className='text-2xl font-bold text-accent-foreground xl:text-3xl'>
                  <a
                    href={demo}
                    className='tracking-tight transition-colors hover:text-muted-foreground focus:text-muted-foreground'
                  >
                    {title}
                  </a>
                </h3>
                <p className='text-lg font-medium leading-relaxed xl:text-xl'>{desc}</p>
                <ul className='flex flex-wrap gap-1'>
                  {technologies.map(({ title, link }) => (
                    <li key={title}>
                      <a href={link} target='_blank'>
                        <Badge className='lowercase'>{title}</Badge>
                      </a>
                    </li>
                  ))}
                </ul>
                <div className='flex w-full items-center justify-between gap-2'>
                  <a
                    href={repo}
                    target='_blank'
                    className='flex items-center justify-end gap-1 font-medium text-muted-foreground transition-all hover:text-primary'
                  >
                    Source code <Icons.github className='h-5 w-5' />
                  </a>
                  <a
                    href={demo}
                    target='_blank'
                    className='flex items-center justify-end gap-1 font-medium text-muted-foreground transition-all hover:gap-2 hover:text-primary'
                  >
                    Demo <Icons.arrowRight className='h-5 w-5' />
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <Link
          href='/projects'
          className='flex items-center justify-center text-2xl transition-colors hover:text-muted-foreground focus:text-muted-foreground'
        >
          &lt; Explore more my projects &gt;
        </Link>
      </SectionContent>
    </Section>
  );
};
