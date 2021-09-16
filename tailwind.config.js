const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  theme: {
    extend: {
     colors: {
        gray: colors.warmGray,
        lime: colors.lime,
        cyan: colors.cyan,
        indigo: colors.indigo,
        rose: colors.rose,
      },
    },
  },
  variants: {},
  plugins: [],
}
