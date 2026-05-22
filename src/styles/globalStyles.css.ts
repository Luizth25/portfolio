import { style } from "@vanilla-extract/css";
import { vars } from "./theme.css";

export const sectionTitle = style({
  color: vars.color.primary,
  fontSize: "clamp(2rem, 5vw, 2.6rem)",
  lineHeight: 1.1,
  marginBottom: "0.5rem",
});
