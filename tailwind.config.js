/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'purple-400':'#6366F1',
        'gray-200':'#E5E7EB',
      },
      
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
