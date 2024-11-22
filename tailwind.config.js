/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        montserratThin: ['Montserrat-Thin', 'sans-serif'],
        classico: ['Classico', 'sans-serif'],
        juletanny: ['Juletanny','sans-serif']
      }
    },
  },
  plugins: [],
}