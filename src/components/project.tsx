'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { FC, useRef } from 'react';

import { Badge } from '@/components/ui/badge';
import { buttonVariants } from '@/components/ui/button';
import { Icons } from '@/components/ui/icons';
import { MY_FAVORITE_PROJECTS } from '@/configs/my.configs';
import { cn } from '@/lib/utils';

type ProjectProps = (typeof MY_FAVORITE_PROJECTS)[number];

export const Project: FC<ProjectProps> = ({ title, desc, img, demo, technologies, repo }) => {
  const ref = useRef<HTMLLIElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.li
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className='relative flex flex-col gap-2 lg:flex-row lg:gap-6 lg:even:flex-row-reverse'
    >
      <a
        href={demo}
        target='_blank'
        className='overflow-hidden rounded-xl border-2 border-transparent transition-colors hover:border-muted-foreground focus:border-muted-foreground'
      >
        <Image
          src={img}
          alt={title}
          width={718}
          height={404}
          quality={100}
          className='w-full flex-1 object-contain object-center lg:w-[500px] xl:w-[710px]'
        />
      </a>
      <div className='flex w-full flex-1 flex-col items-start justify-center gap-2 xl:gap-3'>
        <h3 className='text-2xl font-bold text-accent-foreground xl:text-3xl'>
          <a
            href={demo}
            target='_blank'
            className='tracking-tight transition-colors hover:text-muted-foreground focus:text-muted-foreground'
          >
            {title}
          </a>
        </h3>
        <p className='text-lg font-medium leading-relaxed xl:text-xl'>{desc}</p>
        <ul className='flex flex-wrap gap-1'>
          {technologies.map(({ title, link }) => (
            <li key={title}>
              <a href={link} target='_blank'>
                <Badge className='lowercase'>{title}</Badge>
              </a>
            </li>
          ))}
        </ul>
        <div className='flex w-full items-center justify-between gap-2'>
          <a
            href={repo}
            target='_blank'
            className={cn(buttonVariants({ variant: 'link' }), 'text-lg p-0 gap-1 ')}
          >
            Source code <Icons.github className='h-5 w-5' />
          </a>
          <a
            href={demo}
            target='_blank'
            className={cn(
              buttonVariants({ variant: 'link' }),
              'gap-1 hover:gap-2 transition-all ml-auto text-lg'
            )}
          >
            Demo <Icons.arrowRight className='h-5 w-5' />
          </a>
        </div>
      </div>
    </motion.li>
  );
};
