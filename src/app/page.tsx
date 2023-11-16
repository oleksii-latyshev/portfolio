import { Metadata } from 'next';
import { FC } from 'react';

import { AboutSection } from '@/components/sections/about-section';
import { HeroSection } from '@/components/sections/hero-section';
import { ProjectsSection } from '@/components/sections/projects-section';
import { SkillsSection } from '@/components/sections/skills-section';

export const metadata: Metadata = {
  title: 'Portfolio',
};

const Page: FC = ({}) => {
  return (
    <main className='container space-y-4 md:space-y-6'>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
    </main>
  );
};

export default Page;
