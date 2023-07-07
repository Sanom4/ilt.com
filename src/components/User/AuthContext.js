import { createContext, useContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if the login state is stored in localStorage
    const storedLoginState = localStorage.getItem('isAuthenticated');
    if (storedLoginState) {
      setIsAuthenticated(JSON.parse(storedLoginState));
    }
  }, []);

  const login = () => {
    setIsAuthenticated(true);
    // Store the login state in localStorage
    localStorage.setItem('isAuthenticated', true);
  };

  const logout = () => {
    setIsAuthenticated(false);
    // Remove the login state from localStorage
    localStorage.removeItem('isAuthenticated');
  };

  const value = {
    isAuthenticated,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
