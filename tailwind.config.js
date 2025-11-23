/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'goa-cream': '#FFF8E7',
        'goa-yellow': '#F5E6D3',
        'goa-green': '#E8F5E9',
        'goa-teal': '#B2DFDB',
        'goa-blue': '#80CBC4',
      },
      fontFamily: {
        'display': ['Georgia', 'serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

