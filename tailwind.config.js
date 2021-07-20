const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    stroke: theme => ({
      'green': theme('colors.green.300'),
      'current': 'currentColor'
    }),
    colors: {
      gray: colors.gray,
      red: colors.red,
      orange: colors.orange,
      amber: colors.amber,
      yellow: colors.yellow,
      lime: colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      teal: colors.teal,
      cyan: colors.cyan,
      sky: colors.sky,
      blue: colors.blue,
      indigo: colors.indigo,
      violet: colors.violet,
      purple: colors.purple,
      pink: colors.pink,
      rose: colors.rose,
      white: colors.white,
      black: colors.black,
      blueGray: colors.blueGray,
      neonPink: '#FF105e',
      odin: '#CC9543',
      pyimagesearch: '#1178ae'
    },
    backdropFilter:{
      'none': 'none',
      'blur': 'blur(20px)'
    },
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      backgroundColor:{
        'blueGray-t-50': 'rgba(0,0,0,0.75)'
      },
      width:{
        '110': '28rem',
        '120': '32rem',
        '130': '36rem',
        '140': '40rem',
        '150': '50rem'
      },
      height:{
        '110': '28rem',
        '120': '32rem',
        '130': '36rem',
        '140': '40rem',
        '150': '50rem'
      },
      inset: {
        '17': '68px',
        '26': '104px',
        '34': '135px',
        '38': '156px',
        '46': '192px'
      },
      zIndex: {

        '-10': '-10',
      },
    },
  },
  variants: {
    extend: {
      fill: ['hover', 'focus'],
    },
  plugins: [
    require('@tailwindcss/typography')
  ],
  }
}
