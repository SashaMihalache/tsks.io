const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    // app content
    `src/**/*.{js,ts,jsx,tsx}`,
    // include packages if not transpiling
    '../../packages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#5c6ac4',
        brandred: colors.red[500],
      },
      height: {
        16: '4rem',
      },
    },
  },
  plugins: [],
}
