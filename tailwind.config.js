/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./assets/**/*.js",
    "./templates/**/*.html.twig",
  ],
  theme: {
    extend: {},
    screens: {
      'xs': '600px',
      'sm':	'640px',
      'md': '768px',
      'lg':	'1024px',
      'xl':	'1280px',
      '2xl':	'1536px',
    }
  },
  plugins: [
    require('flowbite/plugin'),
    require('@tailwindcss/typography')
  ]
}
