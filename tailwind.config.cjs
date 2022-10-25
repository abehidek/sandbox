/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      "2xl": 32,
    },
    colors: {
      transparent: "transparent",
      black: "#000",
      white: "#fff",

      gray: {
        900: "#121212",
        800: "#1A1A1A",
        600: "#585858",
        600: "#585858",
        100: "#EBE3EC",
      },
    },
    extend: {
      fontFamily: {
        sans: "Zen Kaku Gothic New, sans-serif",
      },
      gridTemplateColumns: {
        main: "1fr 768px 1fr",
      },
    },
  },
  plugins: [],
};
