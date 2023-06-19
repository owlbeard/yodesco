/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        yodesco: '#00529C',
      },
      borderColor: {
        yodesco: '#00529C',
      },
      textColor: {
        yodesco: '#00529C',
      },
      borderRadius: {
        fifty: '50%',
      },
    },
  },
  plugins: [],
};
