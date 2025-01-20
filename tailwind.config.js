/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        gainsboro: {
          "100": "#dcdcdc",
          "200": "#d9d9d9",
        },
        mediumslateblue: "rgba(50, 71, 232, 0.76)",
        darksalmon: "#ecaa7e",
        whitesmoke: {
          "100": "#f6f6f6",
          "200": "#f5f5f5",
        },
        darkgray: {
          "100": "#a8a1a1",
          "200": "#a19b9b",
        },
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
      },
      borderRadius: {
        mini: "15px",
      },
    },
    fontSize: {
      xl: "20px",
      "13xl": "32px",
      base: "16px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
