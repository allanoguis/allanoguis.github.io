/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Adjust according to your folder structure
    "./public/**/*.html", // Include any public HTML files
    "./components/**/*.{html,js,jsx,ts,tsx}", // If you have a components folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
