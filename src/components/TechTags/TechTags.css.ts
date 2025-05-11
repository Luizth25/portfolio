import { style, styleVariants } from "@vanilla-extract/css";

// Container com grid responsivo
export const tagContainer = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "8px",
  marginTop: "16px",
});

// Estilo base
export const tagBase = style({
  borderRadius: "8px",
  padding: "6px 12px",
  fontWeight: 600,
  fontSize: "0.875rem",
  transition: "transform 0.2s ease",
  cursor: "default",
  selectors: {
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
});

// Variantes de cor por tecnologia
export const techTag = styleVariants({
  typescript: {
    backgroundColor: "#3178C6",
    color: "#ffffff",
  },
  javascript: {
    backgroundColor: "#F7DF1E",
    color: "#000000",
  },
  react: {
    backgroundColor: "#61DAFB",
    color: "#000000",
  },
  nextjs: {
    backgroundColor: "#000000",
    color: "#ffffff",
  },
  nodejs: {
    backgroundColor: "#3C873A",
    color: "#ffffff",
  },
  angular: {
    backgroundColor: "#DD0031",
    color: "#ffffff",
  },
  reactnative: {
    backgroundColor: "#61DBFB",
    color: "#000000",
  },
  tailwind: {
    backgroundColor: "#38BDF8",
    color: "#000000",
  },
  vanillExtract: {
    backgroundColor: "#6466e9",
    color: "#ffffff",
  },
  jquery: {
    backgroundColor: "#0769AD",
    color: "#ffffff",
  },
  bootstrap: {
    backgroundColor: "#7952B3",
    color: "#ffffff",
  },
  scss: {
    backgroundColor: "#CD6799",
    color: "#ffffff",
  },
  html: {
    backgroundColor: "#E34F26",
    color: "#ffffff",
  },
  css: {
    backgroundColor: "#1572B6",
    color: "#ffffff",
  },
});
