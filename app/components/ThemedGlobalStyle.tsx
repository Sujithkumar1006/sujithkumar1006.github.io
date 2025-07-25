"use client";
import React from "react";
import { GlobalStyle } from "../globalStyles";
import { useTheme } from "../context/ThemeContext";

const ThemedGlobalStyle: React.FC = () => {
  const { isDark } = useTheme();
  return <GlobalStyle theme={isDark ? "dark" : "light"} />;
};

export default ThemedGlobalStyle;
