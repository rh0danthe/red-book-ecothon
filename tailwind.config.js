/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Пути к вашим компонентам
  ],
  theme: {
    extend: {
      screens:{
        'laptop': {max: '1600px', min: "1024px"},

        'desktop': {"max": '1920px', "min": '1920px'},
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
      },
      colors: {
        'Green' : "#1F2212",
        "Beige": '#FBFEF1'
      }
    },
  },
  plugins: [],
}
