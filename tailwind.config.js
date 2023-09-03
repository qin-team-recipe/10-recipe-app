/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  plugins: [],
  theme: {
    colors: {
      black: "#1A1523",
      lightGra1: "#FDFCFD",
      lightGray2: "#F9F8F9",
      lightGray6: "#E4E2E4",
      gray: "#6F6E77",
      lightGray: "#DCDBDD",
      inputGray: "#F9F8F9",
      tomato: "#CA3214",
      lightTomato: "#FFF0EE",
      white: "#FFFFFF",
      blue: "#006ADC",
      red: "#FF0000",
    },
    extend: {
      aspectRatio: {
        "3/4": "3/4",
      },
    },
    fontSize: {
      title: "24px",
      large: "18px",
      medium: "14px",
      small: "10px",
    },
  },
};
