/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['Playfair'],
        'black-ops-one': ['Black Ops One', 'cursive'],
      },
    
      boxShadow: {
        'diffused': '0 0 2px rgba(255, 255, 255, 0.9), 0 0 10px rgba(255, 255, 255, 0.4)',
      }
    },
  },
  plugins: [],
}

