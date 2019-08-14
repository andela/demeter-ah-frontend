const {
  colors,
  maxWidth,
  minWidth,
  minHeight,
  maxHeight,
  fontSize,
} = require ('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    screens: {
      sm: '300px',
      md: '830px',
      lg: '1024px',
      xl: '1280px',
    },
    fontFamily: {
      montserrat: ['Montserrat'],
    },
    fontSize: {
      ...fontSize,
      '1.5xl': '1.2em',
      'xs-2': '0.85em',
      xxs: '0.7em',
    },
    extend: {
      colors: {
        purple: {
          ...colors.purple,
          150: '#835bd824',
          650: '#835BD8',
          250: '#AD93E6',
          50: 'rgba(197, 172, 250, 0.05)',
        },
        gray: {
          ...colors.gray,
          150: '#EAEAEA',
          250: '#606060',
          350: '#d4d4d4',
          550: 'rgba(0, 0, 0, 0.5)',
          50: '#c4c4c4',
          40: '#c4c4c450',
          30: '#f4f4f4',
          20: '#c4c4c430',
          10: '#c4c4c410',
        },
        yellow: {
          ...colors.yellow,
          650: '#FAAD18',
        },
      },
      maxWidth: {
        ...maxWidth,
        85: '17rem',
        42: '11em',
        86: '22rem',
        108: '26rem',
        112: '28rem',
        118: '32rem',
        150: '36rem',
        122: '38rem',
        180: '50rem',
        220: '60rem',
      },
      maxHeight: {
        ...maxHeight,
        86: '22rem',
        108: '26rem',
        112: '28rem',
        118: '32rem',
        220: '60rem',
        440: '120rem',
        64: '200rem',
      },
      minWidth: {
        ...minWidth,
        40: '10rem',
        32: '8rem',
        48: '14rem',
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
        '5.5/12': '45%',
        7: '1.75rem',
        9: '2.2rem',
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
        '4xl': '2rem',
        lg: '3rem',
      },
      boxShadow: {
        lg: '2px 5px 5px 3px rgba(0, 0, 0, .2)',
      },
      margin: {
        sm: '8px',
        md: '16px',
        lg: '24px',
        lgx1: '40px',
        lgx2: '120px',
        xls0: '140px',
        xls1: '180px',
        xls2: '210px',
        xls2x: '170px',
        xls3: '295px',
        xlx1: '400px',
        '4xl': '3rem',
      },
      height: {
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '48px',
        xlx1: '18rem',
        xlx2: '24rem',
      },
    },
  },
  variants: {},
  plugins: [],
};
