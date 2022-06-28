module.exports = {
  content: [
    // Example content paths...
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif"],
      },
      height: {
        600: "600px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
