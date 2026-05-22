import { globalStyle, style } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";

export const aboutMeContainer = style({
  display: "grid",
  gridTemplateColumns: "minmax(0, 1fr) minmax(320px, 0.85fr)",
  gap: "2rem",
  maxWidth: "1100px",
  width: "100%",
  marginTop: "1rem",
  "@media": {
    "screen and (max-width: 900px)": {
      gridTemplateColumns: "1fr",
    },
  },
});

export const aboutMeSection = style({
  display: "flex",
  flexDirection: "column",
});

export const aboutSectionIntro = style({
  color: vars.color.textMuted,
  fontSize: "1.1rem",
  lineHeight: 1.7,
  maxWidth: "760px",
});

export const aboutMeText = style({
  color: vars.color.textPrimary,
  fontSize: "1.125rem",
  lineHeight: "1.8rem",
  borderLeft: `4px solid ${vars.color.secondary}`,
  paddingLeft: "16px",
});

export const aboutCards = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "0.9rem",
  "@media": {
    "screen and (max-width: 560px)": {
      gridTemplateColumns: "1fr",
    },
  },
});

export const aboutCard = style({
  padding: "1rem",
  borderRadius: "8px",
  border: `1px solid ${vars.color.border}`,
  background: vars.color.surface,
  boxShadow: `0 14px 34px ${vars.color.shadow}`,
});

globalStyle(`${aboutCard} h3`, {
  color: vars.color.textPrimary,
  fontSize: "1rem",
  marginBottom: "0.45rem",
});

globalStyle(`${aboutCard} p`, {
  color: vars.color.textMuted,
  fontSize: "0.95rem",
  lineHeight: 1.6,
});
