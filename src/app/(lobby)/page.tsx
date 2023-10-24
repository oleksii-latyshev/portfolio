import { Metadata } from 'next';
import { FC } from 'react';

export const metadata: Metadata = {
  title: 'Portfolio',
};

const Page: FC = ({}) => {
  return (
    <>
      <div className=' h-40 w-40 rounded-full bg-blue-400 blur-[6rem]' />
    </>
  );
};

export default Page;
