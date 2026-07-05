/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        "sc":    "#FFF5F7", "sc-lo": "#FFF5F7", "sc-hi": "#ebe7e5", "sc-hi2":"#FCE8EB",
        "sv":    "#FCE8EB", "pc":    "#f4dcdd", "pf":    "#f5ddde", "tc":    "#ffd8d9",
        "tf":    "#ffdada", "sec-c": "#FFE6EC", "osv":   "#C27887", "bg":    "#FFFFFF",
        "pri":   "#D28A98", "acc":   "#EDAAB6", "choc":  "#C27887",
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
}
