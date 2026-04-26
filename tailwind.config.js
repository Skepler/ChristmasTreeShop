/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'christmas-green': '#0B5E1A',
        'christmas-red': '#C41E3A',
        'christmas-gold': '#FFD700',
        'christmas-light': '#F0F9FF',
      },
    },
  },
  plugins: [],
}
