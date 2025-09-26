/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: { brand: { red: "#E30613" } }, /* vermelho canônico */
      borderRadius: { xl: "0.75rem" }
    },
  },
  plugins: [],
};
