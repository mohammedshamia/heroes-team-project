import { Suspense, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./Helpers/Theme/index";
import { GlobalStyles } from "./Helpers/globalStyle";
import { Routes, Route, Navigate } from "react-router";
import SppinerLoading from "./Components/Elements/SppinerLoading/index";
import Header from "./Components/Header";
import useThemeMode from "./Hook/UseThemeMode";

import { RootState } from "./Store/configureStore";
import { useSelector } from "react-redux";

import routes from "./Helpers/Router";

function App() {
  const [rule, setRule] = useState("");
  const { theme, ToggelTheme } = useThemeMode();

  let data = useSelector((state: RootState) => state.entities.user);
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  useEffect(() => {
    if (!data.auth) {
      setRule("guist");
    }
    if (data.auth && data.data?.isAdmin) {
      setRule("admin");
    }
    if (data.auth && !data.data?.isAdmin) {
      setRule("customer");
    }
    localStorage.setItem("rule", rule);
  }, [data, rule]);

  return (
    <div className="App">
      <ThemeProvider theme={themeMode}>
        <GlobalStyles {...themeMode} />
        {/* add header  */}
        <Header ToggelTheme={ToggelTheme} />
        {/* pages */}
        <Suspense fallback={<SppinerLoading />}>
          <Routes>
            {routes.map((route) =>
              route?.ruleShouldBe?.includes(rule) ? (
                <Route
                  path={route.route}
                  element={route.component}
                  key={route.name}
                />
              ) : (
                <Route
                  path={route.route}
                  // element={<Navigate to={route.to || "/"} />}
                  element={route.component}
                  key={route.name}
                />
              )
            )}
          </Routes>
        </Suspense>
      </ThemeProvider>
    </div>
  );
}

export default App;
