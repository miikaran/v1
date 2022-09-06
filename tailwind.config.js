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
      gray: "#8d99ae",
      sky: "#5eb9ff",
      green: "#049112",
      purple: "#b97ffa",
      red: "#ff455e"
    },

    fontFamily: {
      'roboto': ['Roboto Condensed'],
      'robotolight': ['Roboto'],
      'cool': ['Qwitcher Grypen'],
      'raleway': ['Raleway']
    },

  },
  plugins: [],
}