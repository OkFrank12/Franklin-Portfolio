/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        S768: { max: "768px" },
        S600: { max: "600px" },
        S1270: { max: "1270px" },
        S1120: { max: "1120px" },
        S980: { max: "980px" },
        S500: { max: "500px" },
        S1360: { max: "1360px" },
        S1130: { max: "1130px" },
        S400: { max: "400px" },
      },
    },
  },
  plugins: [],
};
