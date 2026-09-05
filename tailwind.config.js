/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        onyx: 'var(--color-onyx)',
        'paper-white': 'var(--color-paper-white)',
        'faint-white': 'var(--color-faint-white)',
        surface: 'var(--color-surface)',
        accent: '#2864FF',
        diamantina: '#D50000',
        'ink-10': 'var(--ink-10)',
        'ink-15': 'var(--ink-15)',
        'ink-25': 'var(--ink-25)',
        'ink-30': 'var(--ink-30)',
        'ink-40': 'var(--ink-40)',
        'ink-45': 'var(--ink-45)',
        'ink-50': 'var(--ink-50)',
        'ink-60': 'var(--ink-60)',
        'ink-65': 'var(--ink-65)',
        'ink-70': 'var(--ink-70)',
        'ink-75': 'var(--ink-75)',
        'ink-80': 'var(--ink-80)',
      },
      fontFamily: {
        ak: ['var(--font-ak)'],
        gs: ['var(--font-gs)'],
      },
    },
  },
  plugins: [],
}
