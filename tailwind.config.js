/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'dela-gothic-one': ['"Dela Gothic One"', 'sans-serif'],
        'days-one': ['"Days One"', 'sans-serif'],
        'chivo': ['"Chivo"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}