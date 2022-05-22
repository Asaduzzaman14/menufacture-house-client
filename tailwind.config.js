module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#EB5353",
          secondary: "#F9D923",
          accent: "#36AE7C",
          neutral: "#187498",
          "base-100": "#ffffff",
        },
      },

      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}