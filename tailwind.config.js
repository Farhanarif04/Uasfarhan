/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",],
  theme: {fontFamily: {
      sans: ['Open Sans', 'sans-serif'],
      inter: ['Inter', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif']
    },
    extend: {
      colors: {
        primary: "#0872BF",
        background:"#141A1A"
      }, 
      dropShadow: {
        '3xl': '0 4px 20px rgba(93, 173, 236, 0.23)',
      }
    },
    
  },
  plugins: [
    
  ],
}

