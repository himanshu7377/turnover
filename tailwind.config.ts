// tailwind.config.js
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
