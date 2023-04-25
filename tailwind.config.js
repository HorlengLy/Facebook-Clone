/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        'hoverShadow': '0 5px 20px #6da709,0 -5px 20px #6da709,5px 0 10px #6da709,-5px 0 10px #6da709'
      },
      fontFamily:{
        'roboto':'Roboto',
        'mono':'Roboto Mono'
      },
      keyframes:{
        'spinner':{
          '0%':{transform:'rotate(0deg)'},
          '100%':{transform:'rotate(360deg)'}
        },
        'leftAnimation':{
          '0%':{transform:'translateX(100%)'},
          '100%':{transform:'translateX(0)'}
        }
      },
      animation:{
        'loading':'spinner 1.5s linear infinite',
        'FormAnimate':'leftAnimation .2s linear forwards'
      }
    },
  },
  plugins: [
    require("tailwind-scrollbar")
  ],
}