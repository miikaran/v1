/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    colors: {
      dark: "#0c0d0d",
      dark2: "#121212",
      darkblue: "#001d3d",
      lighterblue: "#003566",
      yellow: "#ffc300",
      lightyellow: "#ffd60a",
      white: "#edf2f4",
      gray: "#8d99ae"
    },

    fontFamily: {
      'roboto': ['Roboto Condensed'],
      'robotolight': ['Roboto'],
      'cool': ['Qwitcher Grypen']
    },

  },
  plugins: [],
}