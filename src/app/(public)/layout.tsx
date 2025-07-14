import type { PropsWithChildren } from 'react';

import Header from '@/src/widgets/Header/Header';

const Layout: React.FC<PropsWithChildren> = async ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
