/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    spacing: {
      1: "8px",
      2: "12px",
      3: "16px",
      4: "24px",
      5: "32px",
      6: "48px",
    },
    extend: {
      fontSize: {
        base: "18px",
      },
      colors: {
        myColor: {
          100: "#ec4899",
          200: "#fde047",
        },
      },
    },
  },
  plugins: [],
};
