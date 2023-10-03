/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['DM Sans', 'Poppins'],
      },
      colors: {
        primary: '#F5831F',
        secondary: '#333132',
        divider: '#CED4DA',
        placeholder: '#9BA0AC',
      }
    },
  },
  plugins: [],
}

