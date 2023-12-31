'use client';

import { forwardRef, HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

export const Section = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <section
      ref={ref}
      className={cn('space-y-4 lg:space-y-6 scroll-mt-[6rem]', className)}
      {...props}
    />
  )
);

Section.displayName = 'Section';

export const SectionHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex flex-col gap-2', className)} {...props} />
  )
);

SectionHeader.displayName = 'SectionHeader';

export const SectionTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h2
      ref={ref}
      className={cn(
        'font-semibold tracking-tight leading-none text-4xl lg:text-5xl capitalize',
        className
      )}
      {...props}
    />
  )
);

SectionTitle.displayName = 'SectionTitle';

export const SectionContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <section ref={ref} className={cn('lg:p-6 pt-0', className)} {...props} />
  )
);

SectionContent.displayName = 'SectionContent';

export const SectionFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex items-center lg:p-6 pt-0', className)} {...props} />
  )
);

SectionFooter.displayName = 'SectionFooter';
