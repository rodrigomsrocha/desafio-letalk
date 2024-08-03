/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        box: '0px 0px 10px 0px rgba(236, 236, 236, 1)',
        button: '0px 4px 4px 0px rgba(135, 135, 135, 0.25)',
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
