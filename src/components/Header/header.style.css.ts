import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";

export const header = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "4px 20px 4px 0",
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
