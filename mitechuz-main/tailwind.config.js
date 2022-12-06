/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors : {
        sky : '#086AD8',
        animation: {
          wiggle: 'wiggle 1s ease-in-out infinite',
        }
      },
      screens: {
        xsm: "320px"
      }
    },
  },
  plugins: [],
}