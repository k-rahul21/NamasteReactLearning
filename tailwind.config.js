/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-black": "rgb(28, 28, 28)",
        "custom-dark-gray": "rgb(130, 130, 130)",
        "custom-light-gray": "rgb(156, 156, 156)",
      },
    },
  },
  plugins: [],
};
