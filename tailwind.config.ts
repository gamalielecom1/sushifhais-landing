import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // Rojo exacto extraído del logo (#d7010c) — sin mezcla naranja
          50: "#fde9e9",
          100: "#fac6c6",
          400: "#e8140f",
          500: "#d7010c",
          600: "#b8000a",
          700: "#8f0008",
          900: "#500005",
        },
        bamboo: {
          // Verde bambú exacto extraído del logo (#86bb2d)
          400: "#9bcf43",
          500: "#86bb2d",
          600: "#699423",
        },
      },
      keyframes: {
        "expand-in": {
          "0%": { transform: "scale(0.2)", opacity: "0" },
          "60%": { transform: "scale(1.04)", opacity: "1" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "ring-out": {
          "0%": { transform: "scale(0.3)", opacity: "0.6" },
          "100%": { transform: "scale(1.8)", opacity: "0" },
        },
      },
      animation: {
        "expand-in": "expand-in 0.55s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in": "fade-in 0.3s ease-out forwards",
        "ring-out": "ring-out 1s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
    },
  },
  plugins: [],
};
export default config;
