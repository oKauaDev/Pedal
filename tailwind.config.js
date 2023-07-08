/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#FCBFB3",
          200: "#F5765F",
          300: "#EE3311",
          400: "#C42508",
          500: "#7A130A",
          600: "#290400",
        },
        support: {
          100: "#EBE7E6",
          200: "#B7B4B3",
          300: "#8F8D8C",
          400: "#7A7676",
          500: "#666362",
          600: "#524F4E",
          700: "#474545",
          800: "#333130",
          900: "#1F1D1D",
          1000: "#050404",
        },
        secondary: {
          100: "#B3ECFC",
          200: "#5FD2F5",
          300: "#11BBEE",
          400: "#0498C4",
          500: "#074F73",
          600: "#001621",
        },
      },
      fontSize: {
        14: "0.875rem",
        16: "1rem",
        20: "1.25rem",
        24: "1.5rem",
        28: "1.75rem",
        32: "2rem",
        40: "2.5rem",
        60: "3.75rem",
      },
      spacing: {
        w104px: "8.125vw",
        h60px: "8.242vh",
        h100px: "13.736vh",
        h156px: "21.429vh",
        h256px: "35.165vh",
      },
      borderRadius: {
        5: "5px",
      },
      letterSpacing: {
        "10px": "0.125rem",
      },
      animation: {
        swingx: "swingx .4s infinite ease-in alternate",
        desanime: "desanime .4s forwards",
      },
      keyframes: {
        swingx: {
          "0%": { transform: "translate3d(5px, 0px, 0px)" },
          "100%": { transform: "translate3d(0px, 0px, 0px)" },
        },
        desanime: {
          "100%": { transform: "translate3d(0px, 0px, 0px)" },
        },
      },
      screens: {
        xl: { max: "1124px" },
        lg: { max: "1024px" },
        tbl: { max: "800px" },
        mb: { max: "600px" },
        mn: { max: "400px" },
      },
    },
  },
  plugins: [],
};
