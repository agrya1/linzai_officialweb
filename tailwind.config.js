/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#C6A776", // 金色
        secondary: "#2A2356", // 深紫色
        dark: "#0F0B24", // 暗黑色
        success: "#00B894", // 绿色
        "dark-lighter": "rgba(15, 11, 36, 0.7)",
        "dark-lightest": "rgba(15, 11, 36, 0.5)",
        "light-text": "rgba(245, 245, 247, 0.7)",
        "light-text-bold": "rgba(245, 245, 247, 0.9)",
        "light-text-muted": "rgba(245, 245, 247, 0.5)",
      },
      fontFamily: {
        sans: ["Noto Sans SC", "sans-serif"],
        serif: ["Noto Serif SC", "serif"],
      },
      borderRadius: {
        xl: "20px",
      },
      backdropBlur: {
        xl: "60px",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
} 