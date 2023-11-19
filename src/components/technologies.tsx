'use client';

import { motion } from 'framer-motion';
import { FC } from 'react';

import { buttonVariants } from '@/components/ui/button';
import { Icons } from '@/components/ui/icons';
import { cn } from '@/lib/utils';
import { IInteractiveIcon } from '@/types';

type TechnologiesProps = {
  technologies: readonly IInteractiveIcon[];
};

export const Technologies: FC<TechnologiesProps> = ({ technologies }) => {
  return (
    <ul className='grid grid-cols-[repeat(auto-fill,minmax(85px,max-content))] justify-items-center  gap-2 lg:grid-cols-[repeat(auto-fill,minmax(100px,max-content))]'>
      {technologies.map(({ title, href, icon }, i) => {
        const Icon = Icons[icon];

        return (
          <motion.li
            key={icon}
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
              href={href}
              target='_blank'
              className={cn(
                buttonVariants({ variant: 'ghost', size: 'icon' }),
                'p-2 h-full w-full min-w-[85px] lg:min-w-[100px] flex flex-col justify-start items-center gap-2 '
              )}
            >
              <Icon className='h-8 w-8 shrink-0 lg:h-10 lg:w-10' />
              <h4 className='whitespace-nowrap text-center text-sm font-medium lg:text-base'>
                {title}
              </h4>
            </a>
          </motion.li>
        );
      })}
    </ul>
  );
};
