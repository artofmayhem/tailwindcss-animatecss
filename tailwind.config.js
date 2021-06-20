
module.exports = {
  //purge: [], change this file to...
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: "media", // or 'media' or 'class'
  theme: {
      extend: {
        animation: {
          pulse: 'pulse 10s ease-in-out infinite'
        }
      },
  },
  variants: {
      extend: {},
  },
  plugins: [],
}