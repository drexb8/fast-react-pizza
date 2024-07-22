/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Merienda, cursive",
    },
    extend: {
      height: {
        screen: "100dvh",
        scroll: "none",
      },
    },
  },
  plugins: [],
};
