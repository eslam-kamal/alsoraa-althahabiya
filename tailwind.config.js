/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        gold: '#c8a96e',
        navy: '#1a1a2e',
        accent: '#e63946',
        dark: '#111111',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        arabic: ['Cairo', 'Tajawal', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
