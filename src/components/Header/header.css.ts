import { globalStyle, style } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";

export const header = style({
  position: "fixed",
  top: "16px",
  left: "50%",
  transform: "translateX(-50%)",
  width: "min(1180px, calc(100% - 32px))",
  zIndex: 1000,
  background: vars.color.surface,
  backdropFilter: "blur(16px)",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "1rem",
  padding: "14px 16px",
  border: `1px solid ${vars.color.border}`,
  borderRadius: "8px",
  color: vars.color.text,
  boxShadow: `0 18px 50px ${vars.color.shadow}`,
});

export const nav = style({
  marginLeft: "auto",
});

export const navList = style({
  display: "flex",
  gap: "8px",
  justifyContent: "center",
  alignItems: "center",
  listStyleType: "none",
  "@media": {
    "screen and (max-width: 768px)": {
      position: "absolute",
      top: "calc(100% + 10px)",
      left: 0,
      right: 0,
      display: "none",
      flexDirection: "column",
      alignItems: "stretch",
      padding: "0.75rem",
      background: vars.color.surface,
      border: `1px solid ${vars.color.border}`,
      borderRadius: "8px",
      boxShadow: `0 18px 50px ${vars.color.shadow}`,
    },
  },
});

export const navListOpen = style({
  "@media": {
    "screen and (max-width: 768px)": {
      display: "flex",
    },
  },
});

export const headerTitle = style({
  color: vars.color.primary,
  fontWeight: 900,
  whiteSpace: "nowrap",
  cursor: "pointer",
  textDecoration: "none",
});

export const navListItem = style({
  color: vars.color.textMuted,
  fontSize: "1rem",
  cursor: "pointer",
});

globalStyle(`${navListItem} a`, {
  display: "block",
  padding: "0.55rem 0.75rem",
  borderRadius: "8px",
  textDecoration: "none",
  transition: "color 0.2s ease, background-color 0.2s ease",
});

globalStyle(`${navListItem} a:hover, ${navListItem} a.active`, {
  color: vars.color.primary,
  background: vars.color.heroGlow,
});

export const buttonTheme = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: "42px",
  height: "42px",
  background: vars.color.background,
  color: vars.color.primary,
  borderRadius: 8,
  border: `1px solid ${vars.color.border}`,
  cursor: "pointer",
});

export const menuButton = style({
  display: "none",
  alignItems: "center",
  justifyContent: "center",
  width: "42px",
  height: "42px",
  background: vars.color.background,
  color: vars.color.textPrimary,
  borderRadius: 8,
  border: `1px solid ${vars.color.border}`,
  cursor: "pointer",
  "@media": {
    "screen and (max-width: 768px)": {
      display: "inline-flex",
    },
  },
});
