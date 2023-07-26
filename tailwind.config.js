/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    colors: {
      white: "#ffffff",
      black: "#000000",
      gray: {
        100: "#f2f2f2",
        200: "#d9d9d9",
        300: "#808080",
        400: "#333333",
        500: "#262626",
        600: "#1a1a1a",
        700: "#0d0d0d",
      },
      orange: "#fb923c",
      orangedark: "#f97316",
      yellow: "#fde047",
      yellowdark: "#facc15",
      danger: "#e25858",
    },
    extend: {},
  },

  plugins: [],
};
