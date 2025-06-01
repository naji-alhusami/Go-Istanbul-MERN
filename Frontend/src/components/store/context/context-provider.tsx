import { useState } from "react";

import StateContext from "./state-context";

interface ContextProviderProps {
  children: React.ReactNode;
}

const ContextProvider = ({ children }: ContextProviderProps) => {
  const [isLoginMode, setIsLoginMode] = useState(true);

  const value = {
    isLoginMode,
    setIsLoginMode,
  };

  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};

export default ContextProvider;
