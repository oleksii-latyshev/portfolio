'use client';

import { motion } from 'framer-motion';
import { FC } from 'react';

import { GhostCatCanvas } from '@/components/ghost-cat';
import { buttonVariants } from '@/components/ui/button';
import { Icons } from '@/components/ui/icons';
import { SOCIAL_LINKS } from '@/configs/site.configs';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { cn } from '@/lib/utils';

export const HeroSection: FC = ({}) => {
  const { ref } = useSectionInView('Home', 0.5);

  return (
    <section
      ref={ref}
      id='home'
      className='flex h-screen w-full flex-col items-center justify-end pt-[6rem] md:flex-row md:justify-between md:pt-0'
    >
      <motion.div
        className='space-y-2 md:basis-2/3'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className='text-5xl font-semibold uppercase lg:text-7xl '>Oleksii Latyshev</h1>
        <h2 className='text-3xl font-semibold uppercase text-muted-foreground lg:text-5xl'>
          Fullstack developer
        </h2>
        <ul className='flex items-center gap-2'>
          {SOCIAL_LINKS.map(({ icon, href, title }, i) => {
            const Icon = Icons[icon];

            return (
              <li key={i}>
                <a
                  href={href}
                  about={title}
                  target='_blank'
                  className={cn(
                    buttonVariants({ variant: 'ghost', size: 'icon' }),
                    'p-2 h-fit w-fit'
                  )}
                >
                  <Icon className='h-8 w-8 shrink-0' />
                </a>
              </li>
            );
          })}
        </ul>
      </motion.div>

      <GhostCatCanvas className='h-[500px] w-[200px] md:basis-1/3' />
    </section>
  );
};
