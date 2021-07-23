const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
     colors: {
       lime: colors.lime,
       sky: colors.sky,
       orange: colors.orange,
       pink: colors.pink,

     }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
