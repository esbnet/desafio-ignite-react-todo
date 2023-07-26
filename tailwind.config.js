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
      purple: "#8284fa",
      purpledark: "#5e60ce",
      blue: "#4ea8de",
      bluedark: "#1e6f9f",
      danger: "#e25858",
    },
    extend: {},
  },

  plugins: [],
};
