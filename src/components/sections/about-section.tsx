'use client';

import { motion } from 'framer-motion';
import { FC } from 'react';

import { HalloweenCatCanvas } from '@/components/canvases/halloween-cat-canvas';
import { Technologies } from '@/components/technologies';
import { Icons } from '@/components/ui/icons';
import { Section, SectionContent, SectionHeader, SectionTitle } from '@/components/ui/section';
import { MAIN_STACK_TECHNOLOGIES } from '@/configs/my.configs';
import { useSectionInView } from '@/hooks/use-section-in-view';

export const AboutSection: FC = () => {
  const { ref } = useSectionInView('About', 0.5);

  return (
    <Section ref={ref} id='about'>
      <SectionHeader>
        <SectionTitle>About me</SectionTitle>
      </SectionHeader>
      <SectionContent className='flex flex-col-reverse gap-8 lg:flex-row'>
        <div className='pointer-events-none flex h-[400px] cursor-grab items-center justify-center lg:w-[350px] lg:flex-[0.4]'>
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
        >
          <div className='flex-1 space-y-3'>
            <p className='text-lg font-medium leading-relaxed lg:text-xl'>
              Hi, my name is Oleksii. I&apos;m a student with a passion for web development,
              aiming to become a full-stack developer. What started as a hobby has turned into
              a desire to transform it into a profession. I dedicate time every day to practice
              and explore new technologies and opportunities in web development.
            </p>
            <div className='space-y-1'>
              <h3 className='text-xl font-semibold lg:text-2xl'>My Main Stack:</h3>
              <Technologies technologies={MAIN_STACK_TECHNOLOGIES} />
            </div>
            <a
              href='./cv.pdf'
              target='_blank'
              className='flex items-center justify-end gap-1 text-end text-xl font-medium text-muted-foreground transition-all hover:gap-2 hover:text-primary'
            >
              Download CV
              <Icons.arrowRight />
            </a>
          </div>
        </motion.div>
      </SectionContent>
    </Section>
  );
};
