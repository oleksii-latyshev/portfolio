'use client';

import { forwardRef, HTMLAttributes, TimeHTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

export const Timeline = forwardRef<HTMLUListElement, HTMLAttributes<HTMLUListElement>>(
  ({ className, ...props }, ref) => (
    <ul
      ref={ref}
      className={cn(
        'relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:-translate-x-px before:bg-gradient-to-b before:from-transparent before:via-foreground before:to-transparent md:min-w-[700px] md:before:mx-auto md:before:translate-x-0',
        className
      )}
      {...props}
    />
  )
);

Timeline.displayName = 'Timeline';

export const TimelineItem = forwardRef<HTMLLIElement, HTMLAttributes<HTMLLIElement>>(
  ({ className, ...props }, ref) => (
    <li
      ref={ref}
      className={cn(
        'relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group',
        className
      )}
      {...props}
    />
  )
);

TimelineItem.displayName = 'TimelineItem';

export const TimelineIcon = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'flex h-10 w-10 overflow-hidden shrink-0 items-center border border-input bg-card justify-center rounded-full shadow  md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2',
        className
      )}
      {...props}
    />
  )
);

TimelineIcon.displayName = 'TimelineIcon';

export const TimelineCard = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)]', className)}
      {...props}
    />
  )
);

TimelineCard.displayName = 'TimelineCard';

export const TimelineHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex flex-col space-y-1.5', className)} {...props} />
  )
);

TimelineHeader.displayName = 'TimelineHeader';

export const TimelineTitle = forwardRef<
  HTMLHeadingElement,
  HTMLAttributes<HTMLHeadingElement> & {
    as?: 'h1' | 'h2' | 'h3' | 'h4';
  }
>(({ className, as: Component = 'h4', ...props }, ref) => (
  <Component
    ref={ref}
    className={cn('font-semibold leading-none tracking-tight', className)}
    {...props}
  />
));

TimelineTitle.displayName = 'TimelineTitle';

export const TimelineDescription = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-sm text-muted-foreground font-medium', className)}
    {...props}
  />
));

TimelineDescription.displayName = 'TimelineDescription';

export const TimelineTime = forwardRef<HTMLTimeElement, TimeHTMLAttributes<HTMLTimeElement>>(
  ({ className, ...props }, ref) => (
    <time ref={ref} className={cn('font-semibold', className)} {...props} />
  )
);

TimelineTime.displayName = 'TimelineTime';
