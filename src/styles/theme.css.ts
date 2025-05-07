import { createTheme, createThemeContract, style } from "@vanilla-extract/css";

export const vars = createThemeContract({
  color: {
    background: null,
    surface: null,
    text: null,
    textMuted: null,
    primary: null,
    secondary: null,
    border: null,
    textPrimary: null,
  },
  font: {
    body: null,
    heading: null,
  },
});

// 🌙 Tema escuro
export const darkTheme = createTheme(vars, {
  color: {
    background: "#0A0E1A",
    surface: "#1B2A40",
    text: "#FFFFFF",
    textMuted: "#C2C2C2",
    textPrimary: "#f4eada",
    primary: "#FF6B35",
    secondary: "#3A7CA5",
    border: "#2C3A4F",
  },
  font: {
    body: "Inter, sans-serif",
    heading: "Poppins, sans-serif",
  },
});

// ☀️ Tema claro
export const lightTheme = createTheme(vars, {
  color: {
    background: "#F4F4F9",
    surface: "#FFFFFF",
    text: "#0A0E1A",
    textMuted: "#5C5C5C",
    textPrimary: "#1f1f1f",
    primary: "#FF6B35",
    secondary: "#3A7CA5",
    border: "#D0D0D0",
  },
  font: {
    body: "Inter, sans-serif",
    heading: "Poppins, sans-serif",
  },
});

// Estilo para aplicar no body
export const bodyBase = style({
  backgroundColor: vars.color.background,
  color: vars.color.text,
  fontFamily: vars.font.body,
  margin: 0,
  minHeight: "100vh",
});

// Botao do tema
export const buttonTheme = style({
  background: "transparent",
  color: vars.color.text,
  padding: "12px 20px",
  borderRadius: 8,
  border: "none",
  cursor: "pointer",
  position: "absolute",
  fontSize: 20,
  top: 8,
  right: 20,
});
