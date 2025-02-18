/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enables class-based dark mode
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // include your app directory
    './pages/**/*.{js,ts,jsx,tsx}', // if you have pages directory as well
    './components/**/*.{js,ts,jsx,tsx}', // include your components
  ],
  theme: {
    extend: {
      colors: {
        primary: '#f1efed', // Light mode background
        accent: '#222222', // Light mode text
        darkPrimary: '#222222', // Dark mode background
        darkAccent: '#f1efed', // Dark mode text
      },
      fontFamily: {
        space: ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
