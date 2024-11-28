/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playwrite: ['"Playwrite CU"', 'sans-serif'],
        sofadi: ['"Sofadi One"', 'cursive'],
      },
    },
  },
  plugins: [],
}