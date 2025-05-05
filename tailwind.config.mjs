/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F0FBFA",
        segundary: "#475467",
        accent: {
          DEFAULT: "#7edad2",
          hover: "#79d3cc",
        },
      },
      boxShadow: {
        custom: "0px 14px 54px rgba(0,0,0,0.1)",
      },
    },
  },
  container: {
    center: true,
    padding: "15px",
  },
  screens: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1200px",
  },
  plugins: [],
};
