/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        left_bg: "#D8D9DA",
        logout: "#FF6969",
        left_text:"337CCF",
        center: "#FFEEF4",
        right_bottom: "#1D5D9B",
        right_top: "#0C356A",
        
      },
      fontFamily:{
        "Roboto" : ["Roboto", "sans-serif"],
      }

    },
  },
  plugins: [],
}
