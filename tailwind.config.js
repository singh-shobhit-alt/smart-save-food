/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        earth: {
          50: '#f2f6eb',
          100: '#e1ecd2',
          200: '#c6dcad',
          300: '#a3c77f',
          400: '#84af59',
          500: '#66923d',
          600: '#50742f',
          700: '#3f5826',
          800: '#344722',
          900: '#2b3b1e',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        'fade-in': 'fade-in 0.6s ease-out forwards',
      }
    },
  },
  plugins: [],
}
