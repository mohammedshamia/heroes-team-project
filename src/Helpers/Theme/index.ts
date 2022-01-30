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
    primary: "#FCDD06",
    secondary: "#FFC727",
    error: "#ef5350",
    success: "#4caf50",
    warning: "#ff9800",
    info: "#03a9f4",
  },
  textColors: {
    primary: "#242424",
    secondary: "#707070",
    disabled: "#00000061",
    counterColor: "#a29d9d",
    divider: "rgba(1, 15, 30, 0.1)",
  },
  background: {
    paper: "#F7F8FC",
    default: "#ffffff",
    secondary: "#f2f2f2",
    header: "#242424",
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
    primary: "#FFC727",
    secondary: "#FCDD06",
    error: "#ef5350",
    success: "#4caf50",
    warning: "#ff9800",
    info: "#03a9f4",
  },
  textColors: {
    primary: "#efeeff",
    secondary: "#ddd",
    disabled: "##FFFFFF80",
    counterColor: "#a29d9d",
    divider: "rgba(255, 255, 255, 0.2)",
  },
  background: {
    paper: "#1e252b",
    default: "#0a1929",
    secondary: "#123",
    header: "#121518",
  },
  common: {
    black: "#000000",
    white: "#ffffff",
  },
  typography: Typography,
};
