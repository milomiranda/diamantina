/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        onyx: '#DDEEFF',
        'paper-white': '#101522',
        'faint-white': '#F5FAFF',
        surface: '#F5FAFF',
        accent: '#2864FF',
        diamantina: '#D50000',
      },
      fontFamily: {
        ak: ['var(--font-ak)'],
        gs: ['var(--font-gs)'],
      },
    },
  },
  plugins: [],
}
