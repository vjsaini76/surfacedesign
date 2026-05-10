/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: 'rgb(234, 88, 12)',
          dark: 'rgb(10, 10, 10)',
          light: 'rgb(250, 250, 250)',
          gray: 'rgb(82, 82, 82)',
          muted: 'rgb(212, 212, 212)',
          surface: 'rgb(245, 245, 245)',
          cream: 'rgb(255, 247, 237)',
        },
      },
      fontFamily: {
        geist: ['Geist', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
