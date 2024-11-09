/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'lowBrown': '#6D2805',
        'highBrown': '#711906'
      },
      fontFamily:{
        'hasti' : 'hasti',
        'vazir' : 'vazirMatn'
      },
      container:{
        center:true,
      }
    },
  },
  plugins: [],
};
