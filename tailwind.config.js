module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      float: ['group-even', 'group-odd']
    }
  },
  plugins: [
    require('tailwind-group-even-odd')
  ],
}
