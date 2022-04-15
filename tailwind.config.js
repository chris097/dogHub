module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primarygray: "#E5E5E5",
        primaryblue: "#EEF3FB",
        secondarygray: "#E3E7EE",
        lightgray: "#5F718C",
        coregray: "#97A8C2",
        primaryblack: "#343434"
      },
      fontFamily:{
        inter: ['Inter', 'sans-serif']
      }, 
      width:{
        "272px": "272px",
        "317px": "317px",
        "350px":"350px"
      },
      height:{
        "400px": "400px",
        "456px":"456px"
      }
    },
  },
  plugins: [],
}
