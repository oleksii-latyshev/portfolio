'use client';

import { useTheme } from 'next-themes';
import { FC } from 'react';

import { Icons } from '@/components/ui/icons';
import { useMounted } from '@/hooks/use-mounted';

export const ThemeSwitcher: FC = () => {
  const isMounted = useMounted();
  const { resolvedTheme, setTheme } = useTheme();

  if (!isMounted) {
    return null;
  }

  return (
    <button
      className='fixed bottom-5 right-5 flex h-[3rem] w-[3rem] items-center justify-center rounded-full bg-secondary/60 shadow-xl transition-all hover:scale-[1.15] hover:bg-muted active:scale-105'
      onClick={() => {
        setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
      }}
    >
      {resolvedTheme === 'light' ? <Icons.sun /> : <Icons.moon />}
    </button>
  );
};
