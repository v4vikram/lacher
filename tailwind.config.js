/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}", // Keeps scanning files inside the src folder
    "./public/**/*.{html,js}", // Add this if you have a public folder
    "./*.{html,js}", // This will scan files in the root directory
    "./other-folder/**/*.{html,js}", // Scan files in another folder outside src
  ],
  theme: {
    extend: {
      colors: {
        green: "#196136",
        darkGrreen:"#132b1b",
        lightGreen:"#f4c72c",
        yellow: "#f7ca16",
        textDarkGreen:"#051905",
        lightGray: "#e6e6e6",
        gray200:"#828c82",
        greenHover:"#028753",
        fadeBlue:"#1d3757",
        starColor: "#f3c72b",
        heartColor: "#ff3636"
      },
      fontSize: {
        p: "18px",
        h2: "50px",
        h3: "35px",
        "20px": "20px",
        "75px": "75px",
        "50px": "50px",
      },
      lineHeight: {
        "39px": "39px",
        "75px": "75px",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        philosopher: ["Philosopher", "sans-serif"],

      },
      display: {
        unset: "unset",
        initial: "initial",
      },
    },
  },
  plugins: [],
};
