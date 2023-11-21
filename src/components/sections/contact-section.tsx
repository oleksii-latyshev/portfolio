'use client';

import { motion } from 'framer-motion';
import { FC } from 'react';

import { buttonVariants } from '@/components/ui/button';
import { Icons } from '@/components/ui/icons';
import { Section, SectionContent, SectionHeader, SectionTitle } from '@/components/ui/section';
import { CV_URL, SOCIAL_LINKS } from '@/configs/site.configs';
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
          className='flex flex-col-reverse items-center gap-6 lg:flex-row lg:gap-10'
        >
          <ul className='grid shrink-0 grid-cols-2 gap-4'>
            {SOCIAL_LINKS.map(({ title, icon, href }) => {
              const Icon = Icons[icon];

              return (
                <li key={title} className='w-full'>
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
                </li>
              );
            })}
          </ul>

          <div className='flex flex-col gap-2'>
            <p className='text-lg font-medium leading-relaxed lg:text-xl'>
              {`Thank you for exploring my portfolio to the end. If you have any questions, or
            collaboration ideas, or simply want to share your thoughts, feel free to get in
            touch with me. I'm available across various social networks, so choose any from the
            list provided that suits you best. I'm looking forward to hearing from you!`}
            </p>
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
          </div>
        </motion.div>
      </SectionContent>
    </Section>
  );
};
