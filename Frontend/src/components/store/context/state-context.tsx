import { createContext } from "react";

interface ContextType {
  isLoginMode: boolean;
  setIsLoginMode: (mode: boolean) => void;
}

const StateContext = createContext<null | ContextType>(null);

export default StateContext;
