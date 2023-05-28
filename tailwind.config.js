/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        128: "800px",
      },
      maxWidth: {
        "1/2": "70%",
      },
    },
  },
  plugins: [],
};
