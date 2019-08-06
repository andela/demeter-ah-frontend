const {
  colors, maxWidth, minWidth, minHeight
} = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    screens: {
      sm: '300px',
      md: '830px',
      lg: '1024px',
      xl: '1280px',
    },
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
      maxWidth: {
        ...maxWidth,
        86: '22rem',
        108: '26rem',
        112: '28rem',
        118: '32rem',
        220: '60rem',
      },
      minWidth: {
        ...minWidth,
        min: '20rem',
        84: '21rem',
        96: '24rem',
        108: '26rem',
      },
      minHeight: {
        ...minHeight,
        84: '21rem',
        96: '24rem',
        108: '26rem',
        120: '35rem',
      },
      spacing: {
        7: '1.75rem',
        72: '17rem',
        84: '21rem',
        86: '22rem',
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
