/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // accent: '#f1efed',
        // primary: '#222222',
        primary: '#f1efed',
        accent: '#222222',
      },
      fontFamily: {
        space: ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
