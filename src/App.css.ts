import { style } from "@vanilla-extract/css";
import { vars } from "./styles/theme.css";

export const appShell = style({
  minHeight: "100vh",
  background:
    `radial-gradient(circle at top left, ${vars.color.heroGlow} 0, transparent 34rem), ${vars.color.background}`,
});
