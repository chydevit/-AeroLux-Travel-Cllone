/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0A1A33",
          900: "#08152A",
          800: "#0F2547",
          700: "#163363",
          600: "#1E417E",
        },
        gold: {
          DEFAULT: "#C9A24B",
          light: "#E2C275",
          soft: "#F0CC7F",
        },
        ink: "#172B4D",
        mist: "#F6F8FC",
      },
      fontFamily: {
        sans: ["'Kantumruy Pro'", "'Noto Sans Khmer'", "system-ui", "sans-serif"],
        serif: ["'Kantumruy Pro'", "'Noto Sans Khmer'", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 10px 40px -12px rgba(10, 26, 51, 0.18)",
        lift: "0 24px 60px -20px rgba(10, 26, 51, 0.35)",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(24px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeIn: { "0%": { opacity: 0 }, "100%": { opacity: 1 } },
        floaty: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        fadeInUp: "fadeInUp .8s ease both",
        fadeIn: "fadeIn 1.1s ease both",
        floaty: "floaty 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
