'use client';

import { motion } from 'framer-motion';
import { FC } from 'react';

import { buttonVariants } from '@/components/ui/button';
import { Icons } from '@/components/ui/icons';
import { Section, SectionContent, SectionHeader, SectionTitle } from '@/components/ui/section';
import { SOCIAL_LINKS } from '@/configs/site.configs';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { cn } from '@/lib/utils';

export const ContactSection: FC = ({}) => {
  const { ref } = useSectionInView('Contact');

  return (
    <Section ref={ref} id='contact'>
      <SectionHeader>
        <SectionTitle>Contact</SectionTitle>
      </SectionHeader>
      <SectionContent>
        <ul className='grid grid-cols-1 justify-items-center gap-8 sm:grid-cols-2  md:grid-cols-3 md:gap-4 lg:grid-cols-4'>
          {SOCIAL_LINKS.map(({ title, icon, href }, i) => {
            const Icon = Icons[icon];

            return (
              <motion.li
                key={title}
                className='w-full'
                variants={{
                  initial: {
                    opacity: 0,
                    y: 100,
                  },
                  animate: (index: number) => ({
                    opacity: 1,
                    y: 0,
                    transition: {
                      delay: 0.05 * index,
                    },
                  }),
                }}
                initial='initial'
                whileInView='animate'
                viewport={{
                  once: true,
                }}
                custom={i}
              >
                <a
                  target='_blank'
                  href={href}
                  className={cn(
                    buttonVariants({ variant: 'outline', size: 'fit' }),
                    'cursor-pointer p-4 flex-col gap-2 w-full justify-center items-center'
                  )}
                >
                  <Icon className='h-10 w-10' />
                  <h3>{title}</h3>
                </a>
              </motion.li>
            );
          })}
        </ul>
      </SectionContent>
    </Section>
  );
};
