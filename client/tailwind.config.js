/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ubg: "#EBE6DE",
        ulight: "#C6BC84",
        umedium: "#7A8222",
        udark: "#343829",
      },
      aspectRatio: {
        "4/3": "4 / 3",
        "3/4": "3 / 4",
      },
      fontFamily: {
        sans: ["Roboto", "Inter", "system-ui"],
        playFair: ["Playfair\\ Display", "serif"],
      },
      backgroundImage: {
        heroSection: "url('assets/heroSection.jpeg')",
      },
    },
  },
  plugins: [],
};
