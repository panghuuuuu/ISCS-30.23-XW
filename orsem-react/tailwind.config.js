/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../src/**/*.{html,js,jsx,ts,tsx}", "../public/**/*.html"],
  theme: {
    extend: {
      inset: {
        45: "45%",
      },
      screens: {
        "custom-md": "800px",
      },
      scale: {
        '1.2': '120%',
        '2': '2',
        '3': '3',
      }
    },
    colors: {
      primaryBlue: "#2633d5",
      primaryYellow: "#feff9A",
      primaryWhite: "#fffaed",
      primaryPink: "#f267e7",
      primaryRed: "#fb0200",
      primaryOrange: "#f79739",
      primaryGreen: "#46ff66",
      primaryViolet: "#784df3",
      blue2: "#194eff",
      yellow2: "#f5f733",
      // ...
      fontFamily: {
        sans: ["Subjectivity", "sans-serif"],
        serif: ["Subjectivity", "serif"],
        mono: ["Subjectivity", "monospace"],
      },
      colors: {
        primaryBlue: "#2633d5",
        primaryYellow: "#feff9A",
        primaryWhite: "#fffaed",
        primaryPink: "#f267e7",
        primaryRed: "#fb0200",
        primaryOrange: "#f79739",
        primaryGreen: "#46ff66",
        primaryViolet: "#784df3",
        blue2: "#194eff",
        yellow2: "#f5f733",
        // ...
      },
    },
  },
  plugins: [],
};
