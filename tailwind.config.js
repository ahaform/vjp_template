/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        'jp-yellow': '#F3EADB',
        'jp-step-active':"#EA9F49"

      },
      borderColor:{
        'jp-dash-yellow':"#B8A17D",
      },
      colors:{
        'jp-text-yellow':"#B8A17D"
      },
      width: {
        15:'3.75rem',
        17: '4.25rem'
      },
      height: {
        17: '4.25rem'
      },
      padding:{
        15:'3.75rem'
      },
      margin:{
        15:'3.75rem'
      }
    }
  },
  plugins: []
}
