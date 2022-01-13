import { useState, useCallback, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./Helpers/Theme/index";
import { GlobalStyles } from "./Helpers/globalStyle";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = useCallback(() => {
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

  return (
    <div className="App">
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles {...(theme === "dark" ? darkTheme : lightTheme)} />
      </ThemeProvider>
    </div>
  );
}

export default App;