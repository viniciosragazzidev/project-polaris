"use client";
import { createContext, useState, ReactNode } from "react";

interface GlobalContextProps {
  globalSound: boolean;
  setGlobalSound: React.Dispatch<React.SetStateAction<boolean>>;
}

export const GlobalContext = createContext<GlobalContextProps>({
  globalSound: true,
  setGlobalSound: () => {},
});

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [globalSound, setGlobalSound] = useState(true);

  return (
    <GlobalContext.Provider
      value={{
        globalSound,
        setGlobalSound,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
