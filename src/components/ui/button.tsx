import { cva, type VariantProps } from 'class-variance-authority';
import { ButtonHTMLAttributes, FC } from 'react';

import { cn } from '@/lib/utils';

export const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors',
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground shadow hover:bg-primary/90 focus:bg-primary/90',
        ghost:
          'hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
        outline:
          'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
      },
      size: {
        default: 'h-9 px-2 py-1',
        icon: 'h-9 w-9',
        fit: 'h-fit w-fit',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export const Button: FC<ButtonProps> = ({ className, children, variant, size, ...props }) => {
  return (
    <button {...props} className={cn(buttonVariants({ variant, size, className }))}>
      {children}
    </button>
  );
};
