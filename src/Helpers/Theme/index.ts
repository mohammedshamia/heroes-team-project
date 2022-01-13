import { DefaultTheme } from "styled-components";

const Typography = {
  h1: {
    fontWeight: 200,
    fontSize: "6rem",
    lineHeight: 1.167,
    letterSpacing: "-0.01562em",
  },
  h2: {
    fontWeight: 300,
    fontSize: "4rem",
    lineHeight: 1.2,
    letterSpacing: "-0.00833em",
  },
  h3: {
    fontWeight: 400,
    fontSize: "3.2rem",
    lineHeight: 1.167,
    letterSpacing: "0em",
  },
  h4: {
    fontWeight: 400,
    fontSize: "3rem",
    lineHeight: 1.235,
    letterSpacing: "0.00735em",
  },
  h5: {
    fontWeight: 400,
    fontSize: "2.4rem",
    lineHeight: 1.334,
    letterSpacing: "0em",
  },
  h6: {
    fontWeight: 500,
    fontSize: "2.2rem",
    lineHeight: 1.6,
    letterSpacing: "0.0075em",
  },
  subtitle1: {
    fontWeight: 400,
    fontSize: "1rem",
    lineHeight: 1.75,
    letterSpacing: "0.00938em",
  },
  subtitle2: {
    fontWeight: 500,
    fontSize: "0.875rem",
    lineHeight: 1.57,
    letterSpacing: "0.00714em",
  },
  body1: {
    fontWeight: 400,
    fontSize: "1.6rem",
    lineHeight: 1.5,
    letterSpacing: "0.00938em",
  },
  body2: {
    fontWeight: 400,
    fontSize: "1.3rem",
    lineHeight: 1.43,
    letterSpacing: "0.01071em",
  },
  caption: {
    fontWeight: 500,
    fontSize: "1rem",
    lineHeight: 1.75,
    letterSpacing: "0.02857em",
    textTransform: "uppercase",
  },
};

export const lightTheme: DefaultTheme = {
  type: "light",
  colors: {
    primary: "#42a5f5",
    secondary: "#ba68c8",
    error: "#ef5350",
    success: "#4caf50",
    warning: "#ff9800",
    info: "#03a9f4",
  },
  textColors: {
    primary: "#000000DE",
    secondary: "#00000099",
    disabled: "#00000061",
  },
  background: {
    paper: "#ffffff",
    default: "#ffffff",
  },
  common: {
    black: "#000000",
    white: "#ffffff",
  },
  typography: Typography,
};

export const darkTheme: DefaultTheme = {
  type: "dark",
  colors: {
    primary: "#42a5f5",
    secondary: "#ab47bc",
    error: "#d32f2f",
    success: "#1b5e20",
    warning: "#f57c00",
    info: "#0288d1",
  },
  textColors: {
    primary: "#e7ebf0",
    secondary: "#b2bac2",
    disabled: "##FFFFFF80",
  },
  background: {
    paper: "#1e1e1e",
    default: "#0a1929",
  },
  common: {
    black: "#000000",
    white: "#ffffff",
  },
  typography: Typography,
};
