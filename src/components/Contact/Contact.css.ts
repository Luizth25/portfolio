import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";

export const contactGrid = style({
  display: "grid",
  gridTemplateColumns: "minmax(0, 1fr) minmax(320px, 0.8fr)",
  gap: "2rem",
  alignItems: "center",
  "@media": {
    "screen and (max-width: 820px)": {
      gridTemplateColumns: "1fr",
    },
  },
});

export const contactCard = style({
  padding: "1.2rem",
  borderRadius: "8px",
  border: `1px solid ${vars.color.border}`,
  background: vars.color.surface,
  boxShadow: `0 18px 48px ${vars.color.shadow}`,
});

export const contactLink = style({
  display: "flex",
  alignItems: "center",
  gap: "12px",
  color: vars.color.textPrimary,
  textDecoration: "none",
  fontSize: "1.1rem",
  borderRadius: "8px",
  padding: "0.75rem",
  background: vars.color.background,
  border: `1px solid ${vars.color.border}`,
  transition: "transform 0.2s ease, color 0.2s ease, border-color 0.2s ease",
  selectors: {
    "&:hover": {
      transform: "translateY(-2px)",
      color: vars.color.primary,
      borderColor: vars.color.primary,
    },
  },
});

export const contactLinkContainer = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "0.75rem",
  marginTop: "0.75rem",
  "@media": {
    "screen and (max-width: 480px)": {
      gridTemplateColumns: "1fr",
    },
  },
});

export const contactActions = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "0.75rem",
  "@media": {
    "screen and (max-width: 480px)": {
      gridTemplateColumns: "1fr",
    },
  },
});

export const copyButton = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "12px",
  minHeight: "54px",
  color: vars.color.background,
  background: vars.color.primary,
  borderRadius: "8px",
  padding: "0.75rem",
  cursor: "pointer",
  fontSize: "1.1rem",
  fontWeight: 800,
  transition: "transform 0.2s ease, opacity 0.2s ease",
  selectors: {
    "&:hover": {
      transform: "translateY(-2px)",
      opacity: 0.92,
    },
  },
});

export const contactParagraph = style({
  color: vars.color.textPrimary,
  fontSize: "1.15rem",
  lineHeight: "1.8rem",
  marginTop: "1rem",
  maxWidth: "800px",
  width: "100%",
});
