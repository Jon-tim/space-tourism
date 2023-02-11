/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    // "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('../public/assets/home/background-home-mobile.jpg')",
        "hero-md": "url('../public/assets/home/background-home-tablet.jpg')",
        "hero-lg": "url('../public/assets/home/background-home-desktop.jpg')",
      },
      colors: {
        deepBlue: "#0b0d17",
        navBg: "#0B0D17",
        lightBlue: "#d0d6f9",
        white: "#fff",
      },
      fontFamily: {
        Barlow: ["Barlow Condensed", "sans-serif"],
        Bellefair: ["Bellefair", "serif"],
      },
    },
  },
  plugins: [],
};
