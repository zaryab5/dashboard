/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      backgroundColor:{
        'greenish':'rgb(247,247,247)'
      }
    },
  },
  plugins: [],
}

