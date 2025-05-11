import { style } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";

export const projectsContainer = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "1rem",
});

export const projectCard = style({
  border: `1px solid ${vars.color.secondary}`,
  display: "flex",
  flexDirection: "column",
  gap: "0.8rem",
  padding: "1rem",
  margin: "0",
  borderRadius: "8px",
  transition: "all 0.3s ease",
  maxWidth: "300px",
  width: "100%",
  selectors: {
    "&:hover": {
      transform: "translateX(4px)",
      borderColor: vars.color.primary,
    },
  },
});

export const projectTitle = style({
  color: vars.color.textPrimary,
  fontSize: "1.5rem",
});

export const projectDescription = style({
  color: vars.color.textMuted,
  fontSize: "1rem",
});

export const projectLink = style({
  textDecoration: "none",
  color: vars.color.secondary,
  fontWeight: "bold",
  selectors: {
    "&:hover": {
      color: vars.color.primary,
    },
  },
});
