import { FC } from 'react';

import { buttonVariants } from '@/components/ui/button';
import { Icons } from '@/components/ui/icons';
import { cn } from '@/lib/utils';

export const Footer: FC = ({}) => {
  return (
    <div className='mt-6 flex flex-col items-center justify-center gap-3 py-6 text-center'>
      <h4 className='text-base lg:text-lg'>
        Made by{' '}
        <a
          href='https://www.linkedin.com/in/oleksii-latyshev/'
          target='_blank'
          className={cn(
            buttonVariants({ variant: 'link', size: 'fit' }),
            'inline-flex text-base lg:text-lg gap-[0.2rem]'
          )}
        >
          Oleksii Latyshev <Icons.externalLink className='h-4 w-4' />
        </a>
      </h4>
      <h5 className='text-base lg:text-lg'>
        This portfolio is open source and the source code can be found on{' '}
        <a
          href='https://github.com/EDMIGHT/portfolio'
          target='_blank'
          className={cn(
            buttonVariants({ variant: 'link', size: 'fit' }),
            'inline-flex text-base lg:text-lg gap-[0.2rem]'
          )}
        >
          GitHub <Icons.externalLink className='h-4 w-4' />
        </a>
      </h5>
    </div>
  );
};
