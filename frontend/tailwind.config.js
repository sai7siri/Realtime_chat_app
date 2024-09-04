/** @type {import('tailwindcss').Config} */
  import daisyui from "daisyui";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container : {
        center : true,
        padding : {
          DEFAULT : "2rem"
        } 
      }
    },
  },
  plugins: [
    daisyui,
    require('tailwind-scrollbar'),
  ],
}