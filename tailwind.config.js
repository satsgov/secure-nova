/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#FIF2F4',
        primary: '#0C0D0E',
        secondary: '#667085',
        tertiary: '#98A2B3',
      },
    },
  },
  plugins: [],
};