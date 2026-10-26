import { createContext, useContext } from "react";

// true once the loader has finished, so the hero can start its intro animation
export const ReadyContext = createContext(false);
export const useReady = () => useContext(ReadyContext);
