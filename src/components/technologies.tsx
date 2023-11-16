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

const fadeInAnimationVariants = {
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
};

export const Technologies: FC<TechnologiesProps> = ({ technologies }) => {
  return (
    <ul className='grid grid-cols-[repeat(auto-fit,100px)]  gap-2'>
      {technologies.map(({ title, href, icon }, i) => {
        const Icon = Icons[icon];

        return (
          <motion.li
            key={icon}
            variants={fadeInAnimationVariants}
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
                'p-2 h-full w-fit min-w-[100px] flex flex-col justify-start items-center gap-2 '
              )}
            >
              <Icon className='h-10 w-10 shrink-0' />
              <h4 className='whitespace-nowrap text-center font-medium'>{title}</h4>
            </a>
          </motion.li>
        );
      })}
    </ul>
  );
};
