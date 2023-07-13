/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  plugins: [],
  theme: {
    colors: {
      black: "#1A1523",
      gray: "#6F6E77",
      lightGray: "#DCDBDD",
      tomato: "#CA3214",
      white: "#FFFFFF",
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
