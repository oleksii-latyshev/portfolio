'use client';

import { FC } from 'react';

import { Project } from '@/components/project';
import { buttonVariants } from '@/components/ui/button';
import { Icons } from '@/components/ui/icons';
import { Section, SectionContent, SectionHeader, SectionTitle } from '@/components/ui/section';
import { MY_FAVORITE_PROJECTS } from '@/configs/my.configs';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { cn } from '@/lib/utils';

export const ProjectsSection: FC = () => {
  const { ref } = useSectionInView('Projects', 0.5);

  return (
    <Section ref={ref} id='projects'>
      <SectionHeader>
        <SectionTitle>Projects</SectionTitle>
      </SectionHeader>
      <SectionContent className='space-y-4 '>
        <ul className='flex flex-col gap-6'>
          {MY_FAVORITE_PROJECTS.map((project) => (
            <Project key={project.title} {...project} />
          ))}
        </ul>
        <a
          href='https://github.com/EDMIGHT?tab=repositories'
          target='_blank'
          className={cn(buttonVariants({ variant: 'link' }), 'mx-auto p-0 gap-1 ')}
        >
          Explore more my projects
          <Icons.externalLink className='h-5 w-5' />
        </a>
      </SectionContent>
    </Section>
  );
};
