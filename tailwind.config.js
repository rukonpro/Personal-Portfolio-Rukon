module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],

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
