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
      animation: {
        "spin-slow": "spin 35s linear infinite",
      },
      backgroundImage: {
        hero: "url('../public/assets/home/background-home-mobile.jpg')",
        "hero-md": "url('../public/assets/home/background-home-tablet.jpg')",
        "hero-lg": "url('../public/assets/home/background-home-desktop.jpg')",
        destBgMobile:
          "url('../public/assets/destination/background-destination-mobile.jpg')",
        destBgTablet:
          "url('../public/assets/destination/background-destination-tablet.jpg')",
        destBgDesktop:
          "url('../public/assets/destination/background-destination-desktop.jpg')",
        crewBgMobile:
          "url('../public/assets/crew/background-crew-mobile.jpg')",
        crewBgTablet:
          "url('../public/assets/crew/background-crew-tablet.jpg')",
        crewBgDesktop:
          "url('../public/assets/crew/background-crew-desktop.jpg')",
        technologyBgMobile:
          "url('../public/assets/technology/background-technology-mobile.jpg')",
        technologyBgTablet:
          "url('../public/assets/technology/background-technology-tablet.jpg')",
        technologyBgDesktop:
          "url('../public/assets/technology/background-technology-desktop.jpg')",
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
