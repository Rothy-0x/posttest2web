/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html', './dist/html/login.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
      
    },
    extend: {
      colors: {
        primary : '#4ade80',
        dark: '#0f172a',
        secondary: '#64748b', 
      },
    screens: {
      '2xl' : '1320px',
    }
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
    strategy: 'base', // only generate global styles
    strategy: 'class', // only generate classes
  }),
  ],
}
