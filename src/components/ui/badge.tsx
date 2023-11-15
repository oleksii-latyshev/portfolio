import { ButtonHTMLAttributes, FC } from 'react';

import { cn } from '@/lib/utils';

type BadgeProps = ButtonHTMLAttributes<HTMLButtonElement>;

export const Badge: FC<BadgeProps> = ({ className, ...props }) => {
  return (
    <button
      className={cn(
        'inline-flex text-sm rounded-md cursor-pointer py-0.5 px-1.5 text-primary-foreground font-medium whitespace-nowrap transition-colors hover:bg-primary/80 bg-primary focus:bg-primary/80 items-center justify-center',
        className
      )}
      {...props}
    />
  );
};
