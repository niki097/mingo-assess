import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(!!localStorage.getItem('accessToken'));

  const enableLogin = () => {
    setIsUserLoggedIn(true);
  };

  const enableLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('user');
    setIsUserLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isUserLoggedIn, enableLogin, enableLogout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
