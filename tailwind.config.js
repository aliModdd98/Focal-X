/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'my-font': ['Montserrat', 'sans-serif'] 
      },
      colors: {
       'my-black':'#282828',
       'my-secoundry':'#938C8C'
      },
      screens: {
        'largeScreen': '1600px',
      },
    },
  },
  plugins: [],
}

