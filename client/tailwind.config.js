/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "ubg": "#EBE6DE",
        "ulight": "#C6BC84",
        "umedium": "#7A8222",
        "udark": "#343829",
      },
      fontFamily:{
        sans: ['Roboto','Inter', 'system-ui'],
        playFair: ['Playfair\\ Display', 'serif']
      },
      backgroundImage:{
        'heroSection': "url('assets/heroSection.jpeg')",
      }
    },
  },

  plugins: [],
};
