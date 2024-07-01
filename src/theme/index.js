"use client";
import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 300,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      xxl: 1800,
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  palette: {
    primary: {
      main: "#00AFF9",
      dark: "#1A1A1A",
      light: "#000000B2",
      white: "#fff",
      black: "#000",
    },
    text: {
      main: "#323232",
      subHead: "#616161",
      grey: "#999999",
      footer: "#EBEBEB",
    },
  },
});

export default theme;
