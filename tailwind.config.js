/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#2874f0",
          darkblue: "#1c5cc7",
          yellow: "#ffc200",
          green: "#388e3c",
        },
      },
    },
  },
  plugins: [],
};
