import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";

export const header = style({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  zIndex: 1000,
  background: vars.color.background,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "20px",
  color: vars.color.text,
});

export const navList = style({
  display: "flex",
  gap: "40px",
  justifyContent: "space-around",
  listStyleType: "none",
  paddingRight: 80,
});

export const headerTitle = style({
  color: vars.color.primary,
});

export const navListItem = style({
  color: vars.color.textMuted,
  fontSize: "1rem",
  textDecoration: "none",
  cursor: "pointer",
  transition: "color 0.3s ease",
  ":hover": {
    color: vars.color.primary,
  },
  "@media": {
    "screen and (max-width: 768px)": {
      display: "none",
    },
  },
});

export const buttonTheme = style({
  background: "transparent",
  color: vars.color.text,
  padding: "12px 20px",
  borderRadius: 8,
  border: "none",
  cursor: "pointer",
  position: "absolute",
  top: 2,
  right: 20,
});
