module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      transform: ['hover', 'focus'],
    },
    transformOrigin: {

      '24': '6rem',

      'full': '100%',
    }
  },
  plugins: [],
}
