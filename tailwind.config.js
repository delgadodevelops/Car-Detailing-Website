/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        108: "27rem",
        120: "30rem",
      },
      width: {
        108: "27rem",
        120: "30rem",
        144: "36rem",
      },
      colors: {
        "custom-blue": "#4ec0ff",
      },
    },
  },
  plugins: [],
};
