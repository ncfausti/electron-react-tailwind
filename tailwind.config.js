import colors from 'tailwindcss/colors';

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        sky: colors.sky,
        cyan: colors.cyan,
        cordGreen: '#269B77',
        cordPurple: '#4809C6',
        cordGold: '#efc230',
        cordGray: {
          darkest: 'rgb(5,5,5)',
          darker: 'rgb(20,20,20)',
          dark: 'rgb(75,75,75)',
          DEFAULT: '#484848',
          light: '#e0e6ed',
          lightest: '#f9fafc',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
