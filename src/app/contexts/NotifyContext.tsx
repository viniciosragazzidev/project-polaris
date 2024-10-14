"use client";
import { createContext, useState, ReactNode } from "react";

interface NotifyContextProps {
  message: string;
  setMessage: (message: string) => void;
}

export const NotifyContext = createContext<NotifyContextProps>({
  message: "",
  setMessage: () => {},
});

export const NotifyProvider = ({ children }: { children: ReactNode }) => {
  const [message, setMessage] = useState("");

  return (
    <NotifyContext.Provider value={{ message, setMessage }}>
      {children}
    </NotifyContext.Provider>
  );
};
