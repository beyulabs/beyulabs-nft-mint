import React, { useCallback, useEffect, useState } from 'react';
import { LOCAL_STORAGE } from '@utils/index';
import AppContext from './context/AppContext';

import Header from './containers/Header';
import Footer from './containers/Footer';

// interface LayoutProps {
//   children: React.ReactNode;
// }

const Layout = ({ children }: { children: JSX.Element }) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const [isLightMode, setIsLightMode] = useState(
    typeof window !== 'undefined'
      ? JSON.parse(localStorage.getItem(LOCAL_STORAGE.LIGHT_MODE) as string)
      : false
  );

  console.log(menuOpen);

  const handleSwitchLightMode = useCallback((value: boolean) => {
    setIsLightMode(value);
    window.localStorage.setItem(LOCAL_STORAGE.LIGHT_MODE, value.toString());
  }, []);

  const context = {
    isLightMode,
    handleSwitchLightMode,
  };

  useEffect(() => {
    document.body.classList.toggle('light-mode', isLightMode);
  }, [isLightMode]);

  return (
    <AppContext.Provider value={context}>
      <main>
        <Header setMenuOpen={setMenuOpen} />
        {children}
      </main>
      <Footer />
    </AppContext.Provider>
  );
};

export default Layout;
