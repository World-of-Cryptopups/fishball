const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.tsx"],
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...colors,
      transparent: "transparent",
    },
    fontFamily: {
      sans: ['"Karla"', ...defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
