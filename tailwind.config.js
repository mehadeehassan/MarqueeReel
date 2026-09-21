/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        marquee: {
          bg: "#0E0E10",
          panel: "#17171B",
          line: "#2A2A30",
          gold: "#E8B33D",
          goldDim: "#8A672B",
          crimson: "#B5342B",
          paper: "#F1EDE4",
          muted: "#9C9AA3",
        },
      },
      fontFamily: {
        display: ["'Anton'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.03em",
      },
    },
  },
  plugins: [],
};
