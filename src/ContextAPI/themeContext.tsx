import React from 'react';
import { ThemeProvider } from 'styled-components';
import useThemeMode from '../Hook/UseThemeMode';
import { lightTheme, darkTheme } from "../Helpers/Theme/index";

const ThemeContext: React.FC = ({ children }) => {
  const { theme } = useThemeMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  return <ThemeProvider theme={themeMode}>{children}</ThemeProvider>;
};

export default ThemeContext;
