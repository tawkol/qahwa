import { createContext, useState, useContext, useEffect } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useTranslation } from "react-i18next";

const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const { i18n } = useTranslation();
  const dir = i18n.dir();
  const systemDefault = window.matchMedia("(prefers-color-scheme: dark)");
  const storedTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(storedTheme || "system");

  const handleThemeChange = () => {
    if (theme === "system") {
      systemDefault.matches
        ? document.body.classList.add("dark")
        : document.body.classList.remove("dark");
    } else if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  };

  useEffect(() => {
    handleThemeChange();
    if (theme === "system") {
      systemDefault.addEventListener("change", handleThemeChange);
      return () => {
        systemDefault.removeEventListener("change", handleThemeChange);
      };
    }
  }, [theme]);

  const customTheme = createTheme({
    // direction: dir,
    palette: {
      mode:
        theme === "system" ? (systemDefault.matches ? "dark" : "light") : theme,
      primary: {
        main: "#d59d6b",
        light: "#d59d6b",
        dark: "#956d4a",
        contrastText: "#fff",
      },
    },
  });

  return (
    <ThemeContext.Provider value={{ theme, setTheme, dir }}>
      <ThemeProvider theme={customTheme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  return useContext(ThemeContext);
};
