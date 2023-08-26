/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // "./node_modules/flowbite-react/**/*.js",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // plugins: [
  //   require("flowbite/plugin")
  // ],
  theme: {
    extend: {
      colors: {
        pageBlack: "#1D1C1A",
        page4: "#96B6C5",
        page3: "#ADC4CE",
        page2: "#EEE0C9",
        page1: "#F1F0E8",
        pageWhite: "#FAF8F6",
        pageMenu: "#383434"
      },
      fontFamily: {
        body: ['Nunito', "sans-serif"],
        page: ['Montserrat', "sans-serif"]
      },
    },
  },
  plugins: [],
};
