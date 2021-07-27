module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    minHeight: {
      '1/2': '50%',
     }
  },
  variants: {
    extend: {
      fill: ['hover'],
    },
  },
  plugins: [],
}
