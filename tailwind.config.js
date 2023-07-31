/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(var(--r-green) / <alpha-value>)',
        secondary: 'rgb(var(--r-indigo) / <alpha-value>)',

        'white-soft': 'rgb(var(--r-white-soft) / <alpha-value>)',
        'white-mute': 'rgb(var(--r-white-mute) / <alpha-value>)',
        'white-cozy': 'rgb(var(--r-white-cozy) / <alpha-value>)',

        black: 'rgb(var(--r-black) / <alpha-value>)',
        'black-soft': 'rgb(var(--r-black-soft) / <alpha-value>)',
        'black-mute': 'rgb(var(--r-black-mute) / <alpha-value>)',
        'black-cozy': 'rgb(var(--r-black-cozy) / <alpha-value>)',

        'divider-light-1': 'rgb(var(--r-divider-light) / 0.29)',
        'divider-light-2': 'rgb(var(--r-divider-light) / 0.12)',

        'divider-dark-1': 'rgb(var(--r-divider-dark) / 0.65)',
        'divider-dark-2': 'rgb(var(--r-divider-dark) / 0.48)',

        'light-1': 'rgb(var(--r-indigo) / <alpha-value>)',
        'light-2': 'rgb(var(--r-black-cozy) / <alpha-value>)',

        'dark-1': 'white',
        'dark-2': 'rgb(var(--r-white-cozy) / <alpha-value>)'
      },
      spacing: {
        section: '80px'
      }
    }
  }
}
