/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'mobile': '200px',
      'tablet': '620px',
      'desktop': '1050px'
    },
    colors: {
      'dark-blue': 'var(--dark-blue)',
      'very-dark-blue': 'var(--very-dark-blue)',
      'light-mode-text': 'var(--light-mode-text)',
      'dark-gray': 'var(--dark-gray)',
      'very-light-gray': 'var(--very-light-gray)',
      'white': 'var(--white)'
    },
    extend: {},
  },
  plugins: [],
}