/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Customer colors are not picket up, reconsidaration is needed!
        // Replaced with closest standard Tailwind colors
        //'christmas-green': '#0B5E1A',
        //'christmas-red': '#C41E3A',
        //'christmas-gold': '#FFD700',
        //'christmas-light': '#F0F9FF',
        //Comment to change in the Source Control
      },
    },
  },
  plugins: [],
}
