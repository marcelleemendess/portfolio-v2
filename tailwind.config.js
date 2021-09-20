module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
       kaushan : ['Kaushan Script'],
      },
    extend: {
      colors: {
      purple: {
        DEFAULT: '#4C1D95',
      
      }
    }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
