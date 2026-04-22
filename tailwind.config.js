/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "jost":["Jost", "sans-serif"],
        "vollkorn":["Vollkorn", "serif"]
      },
      colors:{
        "primary":"#00413D",
        "secondary":"#E5745D"
      },
      fontSize:{
        "titleSize":"50px"
      },
      backgroundImage: {
        'banner': "url('/src/assets/banner.JPG')"
      }
    },
  },
  plugins: [],
}
