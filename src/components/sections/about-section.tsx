'use client';

import { FC } from 'react';

import { HalloweenCatCanvas } from '@/components/canvases/halloween-cat-canvas';
import { buttonVariants } from '@/components/ui/button';
import { Icons } from '@/components/ui/icons';
import { Section, SectionContent, SectionHeader, SectionTitle } from '@/components/ui/section';
import { MAIN_STACK_TECHNOLOGIES } from '@/configs/my.configs';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { cn } from '@/lib/utils';

export const AboutSection: FC = () => {
  const { ref } = useSectionInView('About', 0.5);

  return (
    <Section ref={ref} id='about'>
      <SectionHeader>
        <SectionTitle>About me</SectionTitle>
      </SectionHeader>
      <div className='flex flex-col-reverse gap-8 lg:flex-row'>
        <div className='pointer-events-none flex h-[400px] cursor-grab items-center justify-center lg:w-[350px] lg:flex-[0.4]'>
          <HalloweenCatCanvas />
        </div>
        <SectionContent>
          <div className='flex-1 space-y-3'>
            <p className='text-lg font-medium leading-relaxed lg:text-xl'>
              Hi, my name is Oleksii. I&apos;m a student with a passion for web development,
              aiming to become a full-stack developer. What started as a hobby has turned into
              a desire to transform it into a profession. I dedicate time every day to practice
              and explore new technologies and opportunities in web development.
            </p>
            <div className='space-y-1'>
              <h3 className='text-xl font-semibold lg:text-2xl'>My Main Stack:</h3>
              <ul className='flex flex-wrap items-center gap-2'>
                {MAIN_STACK_TECHNOLOGIES.map(({ title, href, icon }) => {
                  const Icon = Icons[icon];

                  return (
                    <li key={icon}>
                      <a
                        href={href}
                        target='_blank'
                        className={cn(
                          buttonVariants({ variant: 'ghost', size: 'icon' }),
                          'p-2 h-fit w-[90px] flex flex-col gap-1'
                        )}
                      >
                        <Icon className='h-10 w-10 shrink-0' />
                        <h4 className='text-center font-medium'>{title}</h4>
                      </a>
                    </li>
                  );
                })}
              </ul>
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
        </SectionContent>
      </div>
    </Section>
  );
};
