/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      mdl: "900px",
      lg: "1024px",
      xl: "1280px",
    },
    colors: {
      white: "#fff",
      black: "#000000",
      main: "#00A6CB",
      boulder: "#6c6c6cbd",
    },
    extend: {},
  },
  plugins: [],
};
