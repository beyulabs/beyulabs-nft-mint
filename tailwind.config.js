module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        astromapGrayText: "#BBBBBB",
        nexusGreen: "#41A380",
        nexusGradientGreen: "#63D4AC",
        nexusBlack: "#202020",
        nexusGray: "#4F4F4F",
        nexusGrayText: "#989898",
        nexusFooterDivider: "#FCF9F9",
        nexusHeaderDivider: "#ACC2BD",
        nexusDarkBg: "#232424",
        discordBlue: "#7289da",
        twitterBlue: "#1da1f2",
      },
      boxShadow: {
        voyagerCard: "0px 15px 20px rgba(95, 192, 157, 0.15)",
      },
    },
  },
  plugins: [],
};
