/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        normal: '#ffd9d4',
        urgent: '#d4d7ff',
      },
    },
  },
  plugins: [],
};
