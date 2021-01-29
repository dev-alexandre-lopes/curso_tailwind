module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'cidade': "url('/src/img/cidade.jpg')",
        'robot': "url('/src/img/robot.jpg')",
        'logotail': "url('/src/img/tailwindlogo.png')",
        'tiger': "url('/src/img/tiger.jpeg')",
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
