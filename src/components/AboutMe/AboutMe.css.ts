import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";

export const aboutMeContainer = style({
  display: "flex",
  border: `1px solid ${vars.color.border}`,
  padding: "1rem",
  borderRadius: "8px",
  backgroundColor: vars.color.surface,
});

export const aboutMeText = style({
  color: vars.color.textPrimary,
  fontSize: "1.3rem",
});
