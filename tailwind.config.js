/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '600' : '600px',
        '400' : '400px',
        '800' : '800px',
        '1000' : '1000px',
        '400' : '400px',
        '200' : '200px',
      },
      height: {
        '400' : '400px',
      },
      screens: {
        'c1': '800px', 
        'c2': '660px',

      },
    },
  },
  plugins: [],

}