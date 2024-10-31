/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        goldenHopes:["Golden-Hopes"],
        sansMedium:["Sans-Medium"],
        atypKido:["Atyp-Kido"]
      },
      colors:{
        "myOrange":"#e8604c",
        "myBlue":"#313143",
        "myKhaki":"#dedfe1",
      }
    },
  },
  plugins: [],
}

