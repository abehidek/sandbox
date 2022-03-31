module.exports = {
  purge: {
    content: ['./docs/**/*.html']
  },
  theme: {
    extend: {
      fontFamily:{
        'mainFont': ['Rubik','Roboto','ui-sans-serif','system-ui','Arial'],
      },
      colors: {
        'primary': '#7c1fe0',
        'secondary': '#421078', 
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
