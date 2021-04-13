module.exports = {
  purge: {
    content: ["resources/assets/styles/**/*.scss", "resources/views/**/*.php"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        mario: "#cc1111",
        luigi: "#11cc00",
        zelda: "#ffcc00",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
