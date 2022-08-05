import React from 'react';

type AppContextType = {
  isLightMode: boolean;
  handleSwitchLightMode: (isLightMode: boolean) => void;
};

const AppContext = React.createContext<AppContextType>({
  isLightMode: false,
  handleSwitchLightMode: () => {},
});

export default AppContext;
