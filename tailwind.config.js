const { heroui } = require("@heroui/theme");
const { themeHeroUI } = require("./styles/pisama-theme");

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "marron-cafe": "#5C4033", // Nuestro color de texto principal
        "terracotta-suave": "#E07A5F", // Nuestro color de acento para CTAs
        "crema-suave": "#FAF3E0", // Nuestro color de fondo
        "gris-calido": "#D6D2D2", // Nuestro color secundario
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  darkMode: "class",
  plugins: [heroui(themeHeroUI), require("@tailwindcss/typography")],
};

module.exports = config;
