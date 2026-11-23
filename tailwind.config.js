/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      /* Muji-style light palette: soft white, charcoal text, warm-grey cards, muted leaf green, clay accent.
         The default emerald / amber / stone scales are re-pointed here so every page changes at once.
         emerald-950 = page background, emerald-900 = cards, stone-50..400 = text (dark to light). */
      colors: {
        emerald: {
          50: "#F3F6F2", 100: "#E6EDE4", 200: "#CBD9C8", 300: "#9DB59A", 400: "#6E8B6A",
          500: "#5A7957", 600: "#4E6C4B", 700: "#4A6A47", 800: "#3A5337", 900: "#ECE9E0", 950: "#FAF9F6",
        },
        amber: {
          50: "#F8F1EA", 100: "#EFE0D0", 200: "#DFC3A6", 300: "#7E5535", 400: "#8A5A38",
          500: "#946340", 600: "#7E5535", 700: "#684529", 800: "#52361F", 900: "#3B2616", 950: "#26180D",
        },
        stone: {
          50: "#2E2E2C", 100: "#383835", 200: "#44443F", 300: "#5A5A54", 400: "#6B6B63",
          500: "#8A8A80", 600: "#A5A59B", 700: "#C4C4BA", 800: "#DEDDD5", 900: "#2E2E2C", 950: "#1A1A18",
        },
      },
      fontFamily: {
        serif: ["Fraunces", "Noto Sans Devanagari", "serif"],
        sans: ["Work Sans", "Noto Sans Devanagari", "sans-serif"],
      },
    },
  },
  plugins: [],
};
