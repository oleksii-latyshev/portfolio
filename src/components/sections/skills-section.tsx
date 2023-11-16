'use client';

import { FC } from 'react';

import { BookCanvas } from '@/components/canvases/book-canvas';
import { Technologies } from '@/components/technologies';
import { Section, SectionContent, SectionHeader, SectionTitle } from '@/components/ui/section';
import { SKILLS } from '@/configs/my.configs';
import { useSectionInView } from '@/hooks/use-section-in-view';

export const SkillsSection: FC = () => {
  const { ref } = useSectionInView('Skills');

  return (
    <Section ref={ref} id='skills'>
      <SectionHeader>
        <SectionTitle>Skills</SectionTitle>
      </SectionHeader>
      <SectionContent className='flex flex-col gap-8 lg:flex-row'>
        <div className='md:basis-3/5'>
          <ul className='flex flex-col justify-center gap-3'>
            {SKILLS.map(({ title, technologies }) => (
              <li key={title} className='space-y-1'>
                <h3 className='text-lg font-semibold lg:text-xl'>{title}:</h3>
                <Technologies technologies={technologies} />
              </li>
            ))}
          </ul>
        </div>
        <div className='pointer-events-none flex h-[500px] cursor-grab items-center justify-center lg:basis-2/5'>
          <BookCanvas />
        </div>
      </SectionContent>
    </Section>
  );
};
