/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        button: '#fbe850',
        secondary: '#2e3038',
        accent: '#adadad',
      },
    },
    fontFamily: {
      serif: ['Prata', 'serif'],
      sans: ['Inter', 'sans-serif'],
    },
  },
  plugins: [],
};
