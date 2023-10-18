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
        main: '#F5F5F5',
        gray: '#9BA0AC',
        'gray-dark': '#7F868D',
        green: '#28A745',
        blue: '#17A2B8'
      }
    },
  },
  plugins: [],
}

