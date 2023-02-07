/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        aharoni: ["AharoniBold", "sans-serif"],
        "chalet-london-nineteen-sixty": [
          "ChaletLondonNineteenSixty",
          "sans-serif",
        ],
        pricedown: ["Pricedown", "sans-serif"],
      },
      colors: {
        "hud-green": "#306C26",
        "hud-red": "#BF242A",
        "hud-dark-red": "#6A1415",
        "hud-grey": "#908B92",
        "hud-white": "#D9DCD9",
      },
    },
  },
  plugins: [],
};
