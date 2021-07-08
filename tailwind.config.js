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
          DEFAULT: '#B7B7B7',
          light: '#e0e6ed',
          lightest: '#f9fafc',
        },
      },
      borderRadius: {
        none: '0',
        sm: '0.125rem',
        DEFAULT: '0.25rem',
        md: '0.375rem',
        lg: '0.5rem',
        full: '9999px',
        large: '12px',
        '4xl': '40px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
