import { FC, ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return <main className='container scroll-smooth'>{children}</main>;
};

export default Layout;
