/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#FAFAFD",
        secondary: {
          DEFAULT: "#0C0C12",
          100: "#252538",
          200: "#E8D1BA",
        },
        black: {
          DEFAULT: "#000000",
          100: "#000000",
          200: "#E8D1BA",
          300: "#3686FF",
        },
        gray: {
          100: "#CDCDE0",
        },
        blue: {
          100: "#356899",
        },
        cardBg1: {
          DEFAULT: "#5386E4",
        },
        cardBg2: {
          DEFAULT: "#04284A",
        },
      },
    },
  },
  plugins: [],
};
