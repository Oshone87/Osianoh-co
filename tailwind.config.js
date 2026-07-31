/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1B3A5C',
          dark: '#14304C',
          light: '#234A75',
        },
        accent: {
          DEFAULT: '#14A5A0',
          dark: '#0E8A86',
          light: '#1FD1CB',
        },
        neutral: {
          light: '#F2F4F6',
          mid: '#5A6472',
          border: '#DCE1E6',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'soft-blue': '0px 4px 20px rgba(27, 58, 92, 0.08)',
        'soft-accent': '0px 4px 20px rgba(20, 165, 160, 0.15)',
        'card-hover': '0 10px 30px -5px rgba(27, 58, 92, 0.12)',
      }
    },
  },
  plugins: [],
}
