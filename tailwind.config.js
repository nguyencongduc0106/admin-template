/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#ED1C24',
        blur: 'rgb(0,0,0,0.3)',
        error: '#ED1C24',
      },
    },
  },
  plugins: [],
};
