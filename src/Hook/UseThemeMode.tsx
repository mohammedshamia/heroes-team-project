import { useEffect, useState, useCallback } from "react";

const useThemeMode = () => {
  const [theme, setTheme] = useState("light");

  const ToggelTheme = useCallback(() => {
    if (theme === "dark") {
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  }, [theme]);

  useEffect(() => {
    let theme_ = localStorage.getItem("theme");
    if (theme_) {
      setTheme(theme_);
    }
  }, []);

  return { theme, ToggelTheme };
};

export default useThemeMode;
