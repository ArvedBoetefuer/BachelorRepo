/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue2: {
          1 :'#004b5a',
          2 :'#0f6c86',
          3 :'#187f9e',
          4 :'#2392b8',
          4 :'#004b5a',
          5 :'#004b5a',
          6 :'#004b5a',
        },
        red2: {
          1 : '#b33d21'
        }
      }
    },
  },
  plugins: [],
}

