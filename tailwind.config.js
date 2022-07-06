/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fg: `#565B66`,
        bg: `#0B0E14`,
        line: `#11151C`,
      }
    },
  },
  plugins: [],
}
