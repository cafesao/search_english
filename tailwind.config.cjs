/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {},
  plugins: [require('daisyui')],

  daisyui: {
    themes: ['halloween'],
  },
}
