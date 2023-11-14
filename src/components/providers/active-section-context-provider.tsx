'use client';

import { createContext, Dispatch, FC, ReactNode, SetStateAction, useState } from 'react';

import { ISectionName } from '@/types';

type ActiveSectionContextProviderProps = {
  children: ReactNode;
};

type ActiveSectionContentType = {
  activeSection: ISectionName;
  setActiveSection: Dispatch<SetStateAction<ISectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: Dispatch<SetStateAction<number>>;
};

export const ActiveSectionContext = createContext<ActiveSectionContentType | null>(null);

export const ActiveSectionContextProvider: FC<ActiveSectionContextProviderProps> = ({
  children,
}) => {
  const [activeSection, setActiveSection] = useState<ISectionName>('Home');
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
};
