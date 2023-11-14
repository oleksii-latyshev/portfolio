import { Metadata } from 'next';
import { FC } from 'react';

import { HeroSection } from '@/components/hero-section';
import { Menu } from '@/components/menu';

export const metadata: Metadata = {
  title: 'Portfolio',
};

const Page: FC = ({}) => {
  return (
    <>
      <Menu />
      <HeroSection />
    </>
  );
};

export default Page;
