/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'white-117':'#6366F1',
        'black-231':'#E5E7EB',
      },
      
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
