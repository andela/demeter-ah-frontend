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
        gray: {
          ...colors.gray,
          150: '#EAEAEA',
        },
      },
      spacing: {
        7: '1.75rem',
        72: '18rem',
        84: '21rem',
        96: '24rem',
        100: '25rem',
        108: '26rem',
        112: '28rem',
        118: '32rem',
      },
      borderRadius: {
        '2xl': '1.5rem',
      },
    },
  },
  variants: {},
  plugins: [],
};
