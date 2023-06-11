/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        oblue: "#45A6B0",
        pblue: "#176876",
        ipink: "#F96C96"
      },
      fontFamily: {
        oswald: ['Oswald'],
        garamond: ['EB Garamond'],
        mont: ['Montserrat'],
        jose: ['Josefin Sans'],
        inter: ['Inter']
      }
    },
  },
  plugins: [],
};
