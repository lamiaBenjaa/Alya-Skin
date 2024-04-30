/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      beauty:['Pacifico','cursive'],
      lamia:['Nunito','sans-serif'],
      italic:['Dancing Script'],
      mine:['Varela Round']
    },
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide')],
}