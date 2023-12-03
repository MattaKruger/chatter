/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    './node_modules/@flavorly/vanilla-components/dist/presets/tailwind/all.json',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f3f4f6',
          100: '#e5e7eb',
          200: '#d0d3d8',
          300: '#b0b5bd',
          400: '#F0ECE5',
          500: '#B6BBC4', // sea green
          600: '#31304D', // khaki
          700: '#161A30', // raisin black
          800: '#533E2D', // cafe noir
          900: '#F4FFF8  ', // almond
        },
        accent: {
          50: '#e3f8ff',
          100: '#b3ecff',
          200: '#81defd',
          300: '#5ed0fa',
          400: '#40c3f7',
          500: '#2bb0ed', // User messages
          600: '#1992d4',
          700: '#127fbf',
          800: '#0b69a3',
          900: '#035388',
        },
        success: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#95C623 ', // Success messages
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        error: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#C84C09', // Error messages
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
        },
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    // Forms plugin is required if you are using the tailwind preset
    require('@tailwindcss/forms'),
    require('daisyui')
  ],
}

