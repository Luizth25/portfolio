import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";

export const aboutMeContainer = style({
  display: "flex",
  maxWidth: "800px",
  flexDirection: "column",
  width: "100%",
  borderRadius: "8px",
  borderLeft: `4px solid ${vars.color.primary}`,
  marginTop: "1rem",
  paddingLeft: "16px",
});

export const aboutMeSection = style({
  display: "flex",
  flexDirection: "column",
});

export const aboutMeText = style({
  color: vars.color.textPrimary,
  fontSize: "1.3rem",
  lineHeight: "1.5rem",
});
