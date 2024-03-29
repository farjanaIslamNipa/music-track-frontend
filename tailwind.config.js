/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand' : '#1F1212',
        'primary': '#E20707',
        'secondary': '#4E3636',
        'offWhite': '#fbecec'
      }
    },
  },
  plugins: [],
}