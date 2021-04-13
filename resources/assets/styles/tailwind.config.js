module.exports = {
  purge: {
    content: [
      "resources/views/**/*.php",
      "resources/assets/styles/**/*.scss",
      "resources/assets/scripts/**/*.js",
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        mario: "#cc1111",
        luigi: "#11cc00",
        zelda: "#ffcc11",
        kratos: "#ff0112",
        peach: "#f450b7",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
