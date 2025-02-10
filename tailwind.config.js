/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Enables class-based dark mode
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
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
