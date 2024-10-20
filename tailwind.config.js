/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./assets/**/*.js",
    "./templates/**/*.html.twig",
  ],
  theme: {
    extend: {},
    screens: {
      'md': '840px',
    }
  },
  plugins: [
    require('flowbite/plugin'),
    require('@tailwindcss/typography')
  ]
}
