import { globalStyle, style } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";

export const projectsSection = style({
  display: "grid",
  gap: "1.5rem",
});

export const projectsIntro = style({
  color: vars.color.textMuted,
  fontSize: "1.1rem",
  lineHeight: 1.7,
  maxWidth: "820px",
});

export const carouselShell = style({
  position: "relative",
  paddingInline: "3.25rem",
  "@media": {
    "screen and (max-width: 680px)": {
      paddingInline: "2.75rem",
    },
    "screen and (max-width: 480px)": {
      paddingInline: 0,
      paddingBottom: "3.25rem",
    },
  },
  selectors: {
    "&::before, &::after": {
      content: "",
      position: "absolute",
      top: 0,
      bottom: "1rem",
      width: "3rem",
      pointerEvents: "none",
      zIndex: 1,
    },
    "&::before": {
      left: "3.25rem",
      background: `linear-gradient(90deg, ${vars.color.background}, transparent)`,
    },
    "&::after": {
      right: "3.25rem",
      background: `linear-gradient(270deg, ${vars.color.background}, transparent)`,
    },
  },
});

export const carouselStart = style({
  selectors: {
    "&::before": {
      opacity: 0,
    },
  },
});

export const carouselEnd = style({
  selectors: {
    "&::after": {
      opacity: 0,
    },
  },
});

export const projectsContainer = style({
  display: "flex",
  gap: "1rem",
  overflowX: "auto",
  padding: "0.25rem 0.1rem 1rem",
  scrollSnapType: "x mandatory",
  scrollPaddingInline: "0.25rem",
  scrollbarWidth: "none",
  cursor: "grab",
  userSelect: "none",
  touchAction: "pan-y",
  selectors: {
    "&:active": {
      cursor: "grabbing",
    },
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
});

export const carouselButton = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  top: "50%",
  zIndex: 2,
  width: "48px",
  height: "48px",
  borderRadius: "8px",
  border: `1px solid ${vars.color.border}`,
  background: vars.color.surface,
  color: vars.color.textPrimary,
  cursor: "pointer",
  boxShadow: "none",
  transform: "translateY(-50%)",
  transition: "border-color 0.2s ease, color 0.2s ease, background-color 0.2s ease",
  selectors: {
    "&:hover": {
      borderColor: vars.color.primary,
      color: vars.color.primary,
      background: vars.color.background,
    },
    "&:disabled": {
      opacity: 0,
      pointerEvents: "none",
    },
  },
  "@media": {
    "screen and (max-width: 480px)": {
      top: "auto",
      bottom: 0,
      transform: "none",
    },
  },
});

export const carouselButtonPrevious = style({
  left: 0,
  "@media": {
    "screen and (max-width: 480px)": {
      left: "calc(50% - 56px)",
    },
  },
});

export const carouselButtonNext = style({
  right: 0,
  "@media": {
    "screen and (max-width: 480px)": {
      right: "calc(50% - 56px)",
    },
  },
});

export const projectCard = style({
  border: `1px solid ${vars.color.border}`,
  display: "flex",
  flexDirection: "column",
  flex: "0 0 min(380px, 88vw)",
  overflow: "hidden",
  margin: "0",
  borderRadius: "8px",
  transition: "transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease",
  width: "100%",
  background: vars.color.surface,
  boxShadow: "none",
  selectors: {
    "&:hover": {
      transform: "translateY(-4px)",
      borderColor: vars.color.primary,
      boxShadow: `0 6px 14px ${vars.color.shadow}`,
    },
  },
});

export const projectImageWrap = style({
  aspectRatio: "16 / 10",
  overflow: "hidden",
  background: vars.color.background,
});

export const projectImage = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
});

export const projectContent = style({
  display: "flex",
  flexDirection: "column",
  gap: "0.8rem",
  padding: "1rem",
  flex: 1,
});

export const projectBadge = style({
  width: "fit-content",
  color: vars.color.secondary,
  fontSize: "0.78rem",
  fontWeight: 800,
  textTransform: "uppercase",
  letterSpacing: "0.06em",
});

export const projectTitle = style({
  color: vars.color.textPrimary,
  fontSize: "1.5rem",
  lineHeight: 1.2,
});

export const projectDescription = style({
  color: vars.color.textMuted,
  fontSize: "1rem",
  lineHeight: 1.6,
});

export const projectHighlights = style({
  display: "grid",
  gap: "0.35rem",
  color: vars.color.textPrimary,
  fontSize: "0.95rem",
  listStyle: "none",
});

globalStyle(`${projectHighlights} li`, {
  position: "relative",
  paddingLeft: "1rem",
});

globalStyle(`${projectHighlights} li::before`, {
  content: "",
  position: "absolute",
  left: 0,
  top: "0.68em",
  width: "6px",
  height: "6px",
  borderRadius: "999px",
  background: vars.color.accent,
});

export const projectStack = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "0.45rem",
  marginTop: "auto",
});

export const projectStackItem = style({
  padding: "0.35rem 0.55rem",
  borderRadius: "999px",
  background: vars.color.heroGlow,
  color: vars.color.textPrimary,
  fontSize: "0.78rem",
  fontWeight: 700,
});

export const projectLink = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "42px",
  marginTop: "0.25rem",
  padding: "0.65rem 0.85rem",
  borderRadius: "8px",
  background: vars.color.primary,
  textDecoration: "none",
  color: vars.color.background,
  fontWeight: "bold",
  transition: "transform 0.2s ease, opacity 0.2s ease",
  selectors: {
    "&:hover": {
      transform: "translateY(-2px)",
      opacity: 0.92,
    },
  },
});
