import { Metadata } from 'next';
import { FC } from 'react';

import { Menu } from '@/components/menu';
import { AboutSection } from '@/components/sections/about-section';
import { HeroSection } from '@/components/sections/hero-section';
import { ProjectsSection } from '@/components/sections/projects-section';

export const metadata: Metadata = {
  title: 'Portfolio',
};

const Page: FC = ({}) => {
  return (
    <div className='space-y-4 md:space-y-6'>
      <Menu />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
    </div>
  );
};

export default Page;
