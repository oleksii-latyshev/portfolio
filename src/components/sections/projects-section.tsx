'use client';

import { FC } from 'react';

import { Project } from '@/components/project';
import { Section, SectionContent, SectionHeader, SectionTitle } from '@/components/ui/section';
import { MY_FAVORITE_PROJECTS } from '@/configs/my.configs';
import { useSectionInView } from '@/hooks/use-section-in-view';

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
          className='mx-auto block w-fit text-center text-xl font-medium text-muted-foreground hover:text-primary'
        >
          Explore more my projects
        </a>
      </SectionContent>
    </Section>
  );
};
