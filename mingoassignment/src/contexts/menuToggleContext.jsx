import React, { createContext, useContext, useState } from 'react';

const menuContext = createContext();

export const menuProvider = ({ children }) => {
    const [toggleMenu, setToggleMenu] = useState()

  return (
    <menuContext.Provider value={{ toggleMenu, setToggleMenu }}>
      {children}
    </menuContext.Provider>
  );
};

export const useMenu = () => {
  return useContext(menuContext);
};
