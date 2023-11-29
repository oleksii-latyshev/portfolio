'use client';

import { motion } from 'framer-motion';
import { FC } from 'react';

import { HalloweenCatCanvas } from '@/components/canvases/halloween-cat-canvas';
import { Technologies } from '@/components/technologies';
import { buttonVariants } from '@/components/ui/button';
import { Icons } from '@/components/ui/icons';
import { Section, SectionContent, SectionHeader, SectionTitle } from '@/components/ui/section';
import { MAIN_STACK_TECHNOLOGIES } from '@/configs/my.configs';
import { CV_URL } from '@/configs/site.configs';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { cn } from '@/lib/utils';

export const AboutSection: FC = () => {
  const { ref } = useSectionInView('About', 0.5);

  return (
    <Section ref={ref} id='about'>
      <SectionHeader>
        <SectionTitle>About me</SectionTitle>
      </SectionHeader>
      <SectionContent className='flex flex-col-reverse gap-8 lg:flex-row'>
        <div className='pointer-events-none flex h-[350px] cursor-grab items-center justify-center lg:h-[400px] lg:w-[350px]'>
          <HalloweenCatCanvas />
        </div>
        <motion.div
          variants={{
            initial: {
              scale: 0,
              y: 100,
            },
            animate: {
              scale: 1,
              y: 0,
              transition: {
                delay: 0.05,
              },
            },
          }}
          initial='initial'
          whileInView='animate'
          viewport={{
            once: true,
          }}
          className='flex-1 space-y-3'
        >
          <p className='text-lg font-medium leading-relaxed lg:text-xl'>
            Hello, my name is Oleksii. I am a student with a passion for web development,
            aspiring to become a Front-end developer with a profound understanding of web
            development. What started as a hobby has transformed into a desire to turn it into
            a profession. Every day, I dedicate time to practice and explore new technologies
            and possibilities in web development.
          </p>
          <div className='space-y-1'>
            <h3 className='text-xl font-semibold lg:text-2xl'>My Main Stack:</h3>
            <Technologies technologies={MAIN_STACK_TECHNOLOGIES} />
          </div>
          <a
            href={CV_URL}
            target='_blank'
            className={cn(
              buttonVariants({ variant: 'link' }),
              'gap-1 hover:gap-2 transition-all ml-auto'
            )}
          >
            Download CV
            <Icons.arrowRight />
          </a>
        </motion.div>
      </SectionContent>
    </Section>
  );
};
