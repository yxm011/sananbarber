/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#cd9a5b',
          light: '#ddb176',
          dark: '#b8813f',
        },
        oxford: {
          DEFAULT: '#002147',
          light: '#003366',
          dark: '#001122',
        },
        cream: {
          DEFAULT: '#F5F1E8',
          dark: '#E8E0D0',
        }
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
