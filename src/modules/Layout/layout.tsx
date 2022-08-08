import React, { useEffect } from 'react';
import { useTheme } from 'next-themes';

import Header from './containers/Header';
import Footer from './containers/Footer';

const Layout = ({ children }: { children: JSX.Element }) => {
  const { theme } = useTheme();

  useEffect(() => {
    document.body.classList.toggle('light-mode', theme === 'light');
  }, [theme]);

  return (
    <>
      <main className="main">
        <Header />
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
