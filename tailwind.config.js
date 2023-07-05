/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '20px',
      }
    },
    screens: {
      sm: '320px',
      md: '720px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {},
  },
  plugins: [],
}

