module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        darkgreen:"#325651"
    },
    fontFamily: {
      poppins:['Poppins','sans-serif']
    }

  },
  variants: {
    extend: {},
  },
  plugins: [],
}
}