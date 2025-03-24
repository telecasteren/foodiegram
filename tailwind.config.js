const { dateBadge } = require("./js/app/routes/profile/post/createBadge");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}", "!./node_modules/**/*"],
  darkMode: "class",
  theme: {
    fontSize: {
      xs: "0.7rem",
      sm: "0.9rem",
      lg: "1.3rem",
      xl: "1.5rem",
    },
    fontFamily: {
      body: ["Geist", "Open Sans", "sans-serif"],
    },
    extend: {
      fontSize: {
        tiny: "0.625rem",
        bigger: "2.8rem",
        huge: "3.5rem",
        massive: "5rem",
      },
      colors: {
        bg: {
          dark1: "#24243e",
          dark2: "#302b63",
          dark3: "#0f0c29",
        },
        text: {
          dark: "#ffffff",
          light: "#000000",
        },
        accent: {
          dark: "#33e94e",
          light: "#e9b61c",
        },
        modal: {
          bg: "",
          text: "",
          close: "",
          shadow: "",
          overlay: "",
        },
      },
    },
  },
  plugins: [],
};
