const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      colors: {
        purple: {
          ...colors.purple,
          150: '#835bd824',
          650: '#835BD8',
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
