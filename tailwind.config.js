/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [],
  },
  theme: {
    colors: {
      'doctor-blue': '#0fcfec',
      'doctor-green': '#19d3ae',
      'doctor-black': '#3A4256'
    },
    fontFamily: {
      'sans': ['Open Sans', 'sans-serif']
    },
    extend: {},
  },
  plugins: [
    require("daisyui")
  ],
}

