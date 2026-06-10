/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        // Centralised theme tokens — previously hard-coded as CSS variables.
        primary: {
          DEFAULT: '#0066ff',
          light: '#3399ff',
          dark: '#003399',
        },
        secondary: '#00ccff',
        background: '#f8faff',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        tech: ['Orbitron', 'ui-sans-serif', 'sans-serif'],
      },
      keyframes: {
        floating: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shine: {
          '0%': { left: '-100%' },
          '20%, 100%': { left: '100%' },
        },
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': { opacity: '1' },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': { opacity: '0.6' },
        },
        'pulse-ring': {
          '0%': { boxShadow: '0 0 0 0 rgba(0, 102, 255, 0.4)' },
          '70%': { boxShadow: '0 0 0 15px rgba(0, 102, 255, 0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(0, 102, 255, 0)' },
        },
      },
      animation: {
        floating: 'floating 4s ease-in-out infinite',
        flicker: 'flicker 3s linear infinite',
        'pulse-ring': 'pulse-ring 2s infinite',
      },
    },
  },
  plugins: [],
};
