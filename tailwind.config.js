/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cards: "rgb(83, 83, 83)",
        borderCard: "rgb(128, 126, 126)",
        primary: "#1E1E1E",
        secondary: "rgb(54, 54, 54)",
        accent: "#1cccb3", // equivalente a emerald-600
        "dark-text": "rgba(255, 255, 255, 0.7)",
      },
    },
  },
  plugins: [],
};
