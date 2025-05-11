import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";

export const contactLink = style({
  display: "flex",
  alignItems: "center",
  gap: "12px",
  color: vars.color.textPrimary,
  textDecoration: "none",
  fontSize: "1.1rem",
  transition: "all 0.3s ease",
  selectors: {
    "&:hover": {
      transform: "translateX(4px)",
      color: vars.color.primary,
    },
  },
});

export const contactLinkContainer = style({
  display: "flex",
  gap: "20px",
  marginTop: "30px",
  flexWrap: "wrap",
});

export const constactParagraph = style({
  color: vars.color.textPrimary,
  fontSize: "1.3rem",
  lineHeight: "1.5rem",
  marginTop: "1rem",
  maxWidth: "800px",
  width: "100%",
});
