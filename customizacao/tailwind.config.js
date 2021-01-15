const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  
  darkMode: false, // or 'media' or 'class'
  
  theme: {
    colors: {
      /*transparent: 'transparent',
      current: 'currentColor',
      blue: {
        light: '#85d7ff',
        DEFAULT: '#1fb6ff',
        dark: '#009eeb',
      },
      pink: {
        light: '#ff7ce5',
        DEFAULT: '#ff49db',
        dark: '#ff16d1',
      },
      gray: {
        darkest: '#1f2d3d',
        dark: '#3c4858',
        DEFAULT: '#c0ccda',
        light: '#e0e6ed',
        lightest: '#f9fafc',
      }*/
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      green: colors.emerald,
      red: colors.rose,
      yellow: colors.amber,
    },
    extend: {
      colors: {
        'regal-blue': '#243c5a',//Extensão nova regal-blue
        blue: {
          450: '#5F99F7'
        },
      },
    },
  },
  
  variants: {
    extend: {},
  },
  
  plugins: [],
}
