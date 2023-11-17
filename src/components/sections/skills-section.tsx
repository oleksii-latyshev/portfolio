'use client';

import { FC } from 'react';

import { BookCanvas } from '@/components/canvases/book-canvas';
import { Technologies } from '@/components/technologies';
import { Section, SectionContent, SectionHeader, SectionTitle } from '@/components/ui/section';
import { SKILLS } from '@/configs/my.configs';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { cn } from '@/lib/utils';

export const SkillsSection: FC = () => {
  const { ref } = useSectionInView('Skills');

  return (
    <Section ref={ref} id='skills'>
      <SectionHeader>
        <SectionTitle>Skills</SectionTitle>
      </SectionHeader>
      <SectionContent className='flex flex-col gap-8 lg:flex-row'>
        <ul className='flex flex-1 flex-col justify-center gap-3'>
          {SKILLS.map(({ title, technologies }) => (
            <li key={title} className='space-y-1'>
              <h3 className='text-lg font-semibold lg:text-xl'>{title}:</h3>
              <Technologies technologies={technologies} />
            </li>
          ))}
        </ul>

        <div
          className={cn(
            'pointer-events-none flex h-[350px] cursor-grab items-center justify-center lg:h-[400px] lg:w-[400px]'
          )}
        >
          <BookCanvas />
        </div>
      </SectionContent>
    </Section>
  );
};
