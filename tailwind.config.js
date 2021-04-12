// eslint-disable-next-line import/no-extraneous-dependencies
const colors = require('tailwindcss/colors');

module.exports = {
  theme: {
    fontFamily: {
      Poppins: ['Poppins', 'sans-serif'],
      AvenirNextCyrRegular: ['AvenirNextCyr', 'Arial', 'sans-serif'],
      Oswald: ['Oswald'],
    },
    extend: {
      colors: {
        brand: {
          DEFAULT: '#0D0D2B',
          icon: '#3671E9',
          button: '#3671E9',
          white10: '#FFFFFF1A',
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
