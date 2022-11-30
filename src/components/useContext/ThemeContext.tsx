import React from "react";
import { createContext } from "react";

export const ThemeContext = createContext("Light");

export const ThemeContextProvider = ({ children }) => {
  return <ThemeContext.Provider value="Dark">{children}</ThemeContext.Provider>;
};
