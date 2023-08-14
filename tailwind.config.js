/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pageBlack: "#1D1C1A",
        pageLight: "#E3F4F4",
        pageMedium: "#D2E9E9",
        pageStrong: "#C4DFDF",
        pageSuperStrong: "#A3CDCD",
        pageWhite: "#FAF8F6",
        pageMenu: "#383434"
      },
      fontFamily: {
        body: ['Nunito', "sans-serif"],
      },
    },
  },
  plugins: [],
};
