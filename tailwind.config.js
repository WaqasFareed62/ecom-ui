/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-img": "url('./src/assets/hero-bg.png')",
        "bg-image": "url('./src/assets/bg-image.png')",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".content-hidden": {
          "content-visibility": "hidden",
        },
        ".content-visible": {
          "content-visibility": "visible",
        },
      });
    }),
  ],
};
