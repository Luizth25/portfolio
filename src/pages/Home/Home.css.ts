import { keyframes, style } from "@vanilla-extract/css";
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
  gap: "7rem",
  padding: "2rem 0",
  backgroundColor: vars.color.background,
});

export const homeTitle = style({
  color: vars.color.textPrimary,
  fontSize: "2.6rem",
  fontWeight: "normal",
});
