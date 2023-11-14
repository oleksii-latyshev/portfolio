'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FC } from 'react';

import { NAVIGATION } from '@/configs/site.configs';
import { useActiveSectionContext } from '@/contexts/active-section-context';
import { cn } from '@/lib/utils';

export const Menu: FC = ({}) => {
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <nav className='relative z-[777]'>
      <motion.div
        className='fixed left-1/2 top-0 h-[4.5rem] w-full rounded-none bg-secondary/60 shadow-lg backdrop-blur-lg sm:top-6 sm:h-[3.25rem] sm:w-[29rem] sm:rounded-full'
        initial={{ y: -100, x: '-50%', opacity: 0 }}
        animate={{ y: 0, x: '-50%', opacity: 1 }}
      />
      <div className='fixed left-1/2 top-[0.15rem] flex h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0'>
        <ul className='flex w-[22rem] flex-wrap items-center justify-center gap-2 text-[0.9rem] font-medium text-muted-foreground sm:w-[initial] sm:flex-nowrap'>
          {NAVIGATION.map(({ name, link }) => (
            <motion.li
              key={link}
              className='relative flex h-3/4 items-center justify-center'
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                href={link}
                className={cn(
                  'flex w-full items-center justify-center p-3 transition',
                  activeSection === name
                    ? 'text-background'
                    : 'hover:text-secondary-foreground'
                )}
                onClick={() => {
                  setActiveSection(name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {name}

                {activeSection === name && (
                  <motion.span
                    className='absolute inset-0 -z-10 rounded-full bg-foreground'
                    layoutId='activeSection'
                    transition={{
                      type: 'spring',
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
