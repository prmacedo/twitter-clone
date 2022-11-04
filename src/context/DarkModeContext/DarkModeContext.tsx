import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';

interface DarkModeContextProps {
  darkModeActive: boolean;
  setDarkModeActive: React.Dispatch<React.SetStateAction<boolean>>;
}

interface DarkModeContextProviderProps {
  children: ReactNode;
}

const DarkModeContext = createContext<DarkModeContextProps>({
  darkModeActive: JSON.parse(String(localStorage.getItem("darkMode"))),
  setDarkModeActive: () => {}
});

export function DarkModeContextProvider({ children }: DarkModeContextProviderProps) {
  const [darkModeActive, setDarkModeActive] = useState<boolean>(JSON.parse(String(localStorage.getItem("darkMode"))) || false);

  useEffect(() => {
    setDarkModeActive(JSON.parse(String(localStorage.getItem("darkMode"))) || false);
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkModeActive));
    const root = document.querySelector('#root');

    if (darkModeActive) {
      root?.classList.add('dark');
    } else {
      root?.classList.remove('dark');
    }
  }, [darkModeActive]);

  return (
    <DarkModeContext.Provider
      value={{
        darkModeActive,
        setDarkModeActive
      }}
    >
      {children}
    </DarkModeContext.Provider>
  );
}

export function useDarkMode() {
  const context = useContext(DarkModeContext);
  const { darkModeActive, setDarkModeActive } = context;
  return { darkModeActive, setDarkModeActive };
}