import { FC } from 'react';

import { AboutSection } from '@/components/sections/about-section';
import { EducationSection } from '@/components/sections/education-section';
import { HeroSection } from '@/components/sections/hero-section';
import { ProjectsSection } from '@/components/sections/projects-section';
import { SkillsSection } from '@/components/sections/skills-section';

const Page: FC = ({}) => {
  return (
    <main className='container mt-[4.5rem] space-y-10 sm:mt-[3.25rem] md:space-y-12'>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <EducationSection />
    </main>
  );
};

export default Page;
