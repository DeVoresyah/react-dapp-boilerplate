/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'Purple63':'#6366F1',
        'WhiteE5':'#E5E7EB',
      },
      
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
