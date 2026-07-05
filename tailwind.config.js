/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        "sc":    "#F9F0F1", "sc-lo": "#F9F0F1", "sc-hi": "#ebe7e5", "sc-hi2":"#FCE8EB",
        "sv":    "#FCE8EB", "pc":    "#f4dcdd", "pf":    "#f5ddde", "tc":    "#ffd8d9",
        "tf":    "#ffdada", "sec-c": "#FFE6EC", "osv":   "#593C43", "bg":    "#FCF6F6",
        "pri":   "#8C656E", "acc":   "#D495A1", "choc":  "#593C43",
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
}
