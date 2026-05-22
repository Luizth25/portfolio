import { globalStyle, keyframes, style } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";

const wave = keyframes({
  "0%": { transform: "rotate(0.0deg)" },
  "10%": { transform: "rotate(14.0deg)" },
  "20%": { transform: "rotate(-8.0deg)" },
  "30%": { transform: "rotate(14.0deg)" },
  "40%": { transform: "rotate(-4.0deg)" },
  "50%": { transform: "rotate(10.0deg)" },
  "60%": { transform: "rotate(0.0deg)" },
  "100%": { transform: "rotate(0.0deg)" },
});

export const wavingHand = style({
  display: "inline-block",
  animation: `${wave} 2.5s infinite`,
  transformOrigin: "70% 70%",
});

export const homeContainer = style({
  display: "flex",
  flexDirection: "column",
  maxWidth: "1180px",
  margin: "0 auto",
  padding: "7rem 1.25rem 4rem",
});

export const homeContent = style({
  display: "flex",
  flexDirection: "column",
  gap: "6rem",
});

export const heroContainer = style({
  display: "grid",
  gridTemplateColumns: "minmax(0, 1.25fr) minmax(320px, 0.75fr)",
  alignItems: "center",
  gap: "3rem",
  minHeight: "calc(100vh - 7rem)",
  paddingBottom: "5rem",
  "@media": {
    "screen and (max-width: 900px)": {
      gridTemplateColumns: "1fr",
      minHeight: "auto",
      paddingBottom: "4rem",
    },
  },
});

export const homeTitle = style({
  color: vars.color.textPrimary,
  fontSize: "clamp(2.45rem, 7vw, 4.9rem)",
  fontWeight: 800,
  lineHeight: 1.04,
  maxWidth: "900px",
  letterSpacing: 0,
});

export const heroBadge = style({
  display: "inline-flex",
  alignItems: "center",
  width: "fit-content",
  padding: "0.45rem 0.8rem",
  borderRadius: "999px",
  border: `1px solid ${vars.color.border}`,
  color: vars.color.primary,
  background: vars.color.surface,
  fontSize: "0.9rem",
  fontWeight: 700,
  marginBottom: "1rem",
});

export const heroEyebrow = style({
  color: vars.color.secondary,
  fontSize: "1rem",
  fontWeight: 700,
  marginBottom: "0.75rem",
});

export const heroDescription = style({
  color: vars.color.textMuted,
  fontSize: "1.15rem",
  lineHeight: 1.8,
  maxWidth: "720px",
  marginTop: "1.25rem",
});

export const heroActions = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "0.9rem",
  marginTop: "2rem",
});

const heroLinkBase = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "48px",
  padding: "0.8rem 1.1rem",
  borderRadius: "8px",
  textDecoration: "none",
  fontWeight: 800,
  transition: "transform 0.2s ease, border-color 0.2s ease, background-color 0.2s ease",
  selectors: {
    "&:hover": {
      transform: "translateY(-2px)",
    },
  },
};

export const heroPrimaryLink = style({
  ...heroLinkBase,
  background: vars.color.primary,
  color: vars.color.background,
});

export const heroSecondaryLink = style({
  ...heroLinkBase,
  background: "transparent",
  color: vars.color.textPrimary,
  border: `1px solid ${vars.color.border}`,
});

export const heroCard = style({
  background: vars.color.surface,
  border: `1px solid ${vars.color.border}`,
  borderRadius: "8px",
  padding: "1.2rem",
  boxShadow: `0 24px 60px ${vars.color.shadow}`,
});

export const heroMetrics = style({
  display: "grid",
  gap: "0.8rem",
});

export const heroMetric = style({
  display: "grid",
  gap: "0.25rem",
  padding: "1rem",
  borderRadius: "8px",
  border: `1px solid ${vars.color.border}`,
  background: vars.color.background,
});

globalStyle(`${heroMetric} strong`, {
  color: vars.color.textPrimary,
  fontSize: "1.1rem",
});

globalStyle(`${heroMetric} span`, {
  color: vars.color.textMuted,
  fontSize: "0.95rem",
});

export const heroStack = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "0.55rem",
  marginTop: "1rem",
});

export const heroStackItem = style({
  padding: "0.45rem 0.65rem",
  borderRadius: "999px",
  background: vars.color.heroGlow,
  color: vars.color.textPrimary,
  fontSize: "0.85rem",
  fontWeight: 700,
});
