/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      fontFamily: {
        youngSerif: ['Young Serif'],
        outfit: ['Outfit'],
      },
      colors: {
        'stone-100': ['hsl(30, 54%, 90%)'],
        'stone-150': ['hsl(30, 18%, 87%)'],
        'stone-600': ['hsl(30, 10%, 34%)'],
        'stone-900': ['hsl(24, 5%, 18%)'],
        'brown-800': ['hsl(14, 45%, 36%)'],
        'rose-800': ['hsl(332, 51%, 32%)'],
        'rose-50': ['hsl(330, 100%, 98%)'],
      }
    },
  },
  plugins: [],
}
