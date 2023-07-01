/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend:{
      keyframes:{
        turnside:{
            'from' : {transform: 'rotate(0)'},
            'to': { transform: 'rotate(90deg)'}
        },
        turnback:{
          'from': { transform: 'rotate(90deg)'},
          'to' : {transform: 'rotate(0)'},
        }
      },
      backgroundImage:{
        'hero': "url('/src/assets/images/images/bg.jpg')",
      },

    },
    colors: {
      // Remember. When making night mode:
      // BG color and text color are hard-coded 
      // Loot at index.css
      transparent: 'transparent',
      current: 'currentColor',
      'dark-blue': '#0F052D',
      'navy-blue': '#203671',
      'teal': '#36868F',
      'lime': '#5FC75D',
    },
    screens:{
      'tablet': '768px',
      'desktop': '1280px',
    },
    animation: {
      'spin-slow': 'spin 20s linear infinite',
      'turnside': 'turnside 0.2s linear',
      'turnback': 'turnback 0.2s linear'
    }
  },
  plugins: [],
})
