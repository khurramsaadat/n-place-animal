/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      maxWidth: {
        '80rem': '80rem',
      },
      keyframes: {
        fadeHighlight: {
          '0%': { backgroundColor: 'rgb(233 213 255)' },
          '100%': { backgroundColor: 'rgb(255 255 255)' }
        }
      },
      animation: {
        fadeHighlight: 'fadeHighlight 3s ease-out'
      }
    },
  },
  plugins: [],
} 