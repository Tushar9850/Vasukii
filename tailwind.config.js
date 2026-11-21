/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      /* Forest & Cream palette — overrides the default emerald / amber / stone scales site-wide */
      colors: {
        emerald: {
          50: "#F1F7F2", 100: "#E2EEE4", 200: "#CFE3D2", 300: "#B5D3BA", 400: "#9FC6A6",
          500: "#8FB996", 600: "#6F9B78", 700: "#4F7A5A", 800: "#2B4A39", 900: "#1F3A2B", 950: "#14281D",
        },
        amber: {
          50: "#FBF1EA", 100: "#F6E0D1", 200: "#EEC4A9", 300: "#E3A07F", 400: "#D98B65",
          500: "#CF7B52", 600: "#C8734A", 700: "#A95C38", 800: "#85472B", 900: "#5E321F", 950: "#3A1D12",
        },
        stone: {
          50: "#F5F0E6", 100: "#EBE5D8", 200: "#DDD6C6", 300: "#C5BEAE", 400: "#A39D8E",
          500: "#7F7A6E", 600: "#625E54", 700: "#4A473F", 800: "#33312B", 900: "#201F1B", 950: "#12110F",
        },
      },
      fontFamily: {
        serif: ["Fraunces", "serif"],
        sans: ["Work Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
