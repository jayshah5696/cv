"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

type ThemeContextValue = {
  theme: Theme;
  setTheme: (t: Theme) => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("light");

  useEffect(() => {
    try {
      const stored = localStorage.getItem("theme");
      const preferred: Theme = stored === "dark" || stored === "light"
        ? (stored as Theme)
        : window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
      setThemeState(preferred);
      document.documentElement.classList.toggle("dark", preferred === "dark");
    } catch (_e) {
      // noop
    }
  }, []);

  const setTheme = (t: Theme) => {
    setThemeState(t);
    try {
      localStorage.setItem("theme", t);
    } catch (_e) {}
    document.documentElement.classList.toggle("dark", t === "dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}

