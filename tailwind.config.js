/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ff6600",  
        secondary: "#333333", 
        background: "#f9f9f9", 
      },
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'], 
      },
    },
  },
  plugins: [require("daisyui")],
};
