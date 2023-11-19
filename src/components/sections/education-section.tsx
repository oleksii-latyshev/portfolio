'use client';

import { motion } from 'framer-motion';
import { FC } from 'react';

import { buttonVariants } from '@/components/ui/button';
import { Section, SectionContent, SectionHeader, SectionTitle } from '@/components/ui/section';
import {
  Timeline,
  TimelineCard,
  TimelineDescription,
  TimelineHeader,
  TimelineIcon,
  TimelineItem,
  TimelineTime,
  TimelineTitle,
} from '@/components/ui/timeline';
import { EDUCATION } from '@/configs/my.configs';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { cn } from '@/lib/utils';

export const EducationSection: FC = ({}) => {
  const { ref } = useSectionInView('Education');

  return (
    <Section ref={ref} id='education'>
      <SectionHeader>
        <SectionTitle>Education</SectionTitle>
      </SectionHeader>
      <SectionContent className='flex flex-col items-center justify-center'>
        <Timeline>
          {EDUCATION.map(({ title, desc, time, link }) => (
            <TimelineItem key={title}>
              <TimelineIcon className='border-none bg-transparent'>
                <motion.div
                  variants={{
                    initial: {
                      scale: 0,
                    },
                    animate: {
                      scale: 1,
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
                  className='h-full w-full rounded-full bg-primary'
                />
              </TimelineIcon>
              <TimelineCard>
                <motion.a
                  href={link}
                  target='_blank'
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
                  className={cn(
                    buttonVariants({ variant: 'outline', size: 'fit' }),
                    'flex-col justify-center items-start gap-2 px-6 py-3 w-full'
                  )}
                >
                  <TimelineHeader>
                    <TimelineTitle>{title}</TimelineTitle>
                    <TimelineDescription>{desc}</TimelineDescription>
                  </TimelineHeader>
                  <TimelineTime>{time}</TimelineTime>
                </motion.a>
              </TimelineCard>
            </TimelineItem>
          ))}
        </Timeline>
      </SectionContent>
    </Section>
  );
};
