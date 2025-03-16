import React, { createContext, useState, useContext, ReactNode, useEffect } from "react";
import { useColorScheme } from "react-native";

interface DarkModeContextProps {
  isDarkMode: boolean;
  toggleDarkMode: (mode: string) => void;
}

const DarkModeContext = createContext<DarkModeContextProps | undefined>(
  undefined
);

export const DarkModeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const colorScheme = useColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(colorScheme === "dark");

  useEffect(() => {
    setIsDarkMode(colorScheme === "dark");
  }, [colorScheme]);

  const toggleDarkMode = (mode: string) => {
    if (mode === "device") {
      setIsDarkMode(colorScheme === "dark");
    } else {
      setIsDarkMode(mode === "dark");
    }
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = (): DarkModeContextProps => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error("useDarkMode must be used within a DarkModeProvider");
  }
  return context;
};
