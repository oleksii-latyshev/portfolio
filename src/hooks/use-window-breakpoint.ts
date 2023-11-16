import { useEffect, useState } from 'react';

import { useWindowSize } from '@/hooks/use-window-size';

export const XL = 1280;
export const LG = 1024;
export const MD = 768;

export const useWindowBreakpoint = (minWidth: number) => {
  const { width } = useWindowSize();
  const [included, setIncluded] = useState(false);

  useEffect(() => {
    if (width !== undefined) {
      setIncluded(width >= minWidth);
    }
  }, [minWidth, width]);

  return included;
};
