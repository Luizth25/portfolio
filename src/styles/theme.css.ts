import { createTheme, createThemeContract, style } from "@vanilla-extract/css";

export const vars = createThemeContract({
  color: {
    background: null,
    surface: null,
    text: null,
    textMuted: null,
    textPrimary: null,
    primary: null,
    secondary: null,
    accent: null,
    border: null,
    heroGlow: null,
    shadow: null,
  },
  font: {
    body: null,
    heading: null,
  },
});

export const darkTheme = createTheme(vars, {
  color: {
    background: "#0A0A0D",
    surface: "#171417",
    text: "#F4EADA",
    textMuted: "#A99F97",
    textPrimary: "#F1D7C7",
    primary: "#B5332A",
    secondary: "#A6B392",
    accent: "#C89B4E",
    border: "#332B2A",
    heroGlow: "rgba(181, 51, 42, 0.13)",
    shadow: "rgba(0, 0, 0, 0.20)",
  },
  font: {
    body: "Inter, sans-serif",
    heading: "Poppins, sans-serif",
  },
});

export const lightTheme = createTheme(vars, {
  color: {
    background: "#FFF9F2",
    surface: "#FFFFFF",
    text: "#2E2927",
    textMuted: "#6F645E",
    textPrimary: "#3A2E2D",
    primary: "#B5332A",
    secondary: "#8DA078",
    accent: "#B8873A",
    border: "#E8D8C9",
    heroGlow: "rgba(181, 51, 42, 0.12)",
    shadow: "rgba(46, 41, 39, 0.09)",
  },
  font: {
    body: "Inter, sans-serif",
    heading: "Poppins, sans-serif",
  },
});

export const bodyBase = style({
  backgroundColor: vars.color.background,
  color: vars.color.text,
  fontFamily: vars.font.body,
  margin: 0,
  minHeight: "100vh",
  transition: "background-color 0.2s ease, color 0.2s ease",
});
