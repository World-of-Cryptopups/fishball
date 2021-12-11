const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.tsx"],
  mode: "jit",
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
