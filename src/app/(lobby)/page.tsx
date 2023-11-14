import { Metadata } from 'next';
import { FC } from 'react';

import { Menu } from '@/components/menu';
import { AboutSection } from '@/components/sections/about-section';
import { HeroSection } from '@/components/sections/hero-section';

export const metadata: Metadata = {
  title: 'Portfolio',
};

const Page: FC = ({}) => {
  return (
    <>
      <Menu />
      <HeroSection />
      <AboutSection />
    </>
  );
};

export default Page;
