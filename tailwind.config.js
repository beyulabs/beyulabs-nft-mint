const defaultTheme = require("tailwindcss/defaultTheme");

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
        calloutBorderGreen: "#2C4B40",
        bodyBg: "#16171B",
        cardBorder: "#2C4B40",
        walletIconBorder: "#41A380",
        faqBg: "#232424"
      },
      boxShadow: {
        voyagerCard: "0px 15px 20px rgba(95, 192, 157, 0.15)",
      },
      borderRadius: {
        calloutSection: "48px",
        faqSection: '0 0 50% 50%/0 0 15% 15%'
      },
      fontFamily: {
        sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
        raleway: ["Raleway", "sans-serif"],
        gothamPro: ["Gotham Pro", "sans-serif"],
      },
      width: {
        mint: '105px',
        wallet: '165px',
        missionBlock: '1628px',
        missionSection: '1335px',
        description: '756px',
        heroTitle: '746px',
        heroImage: '647px',
        heroDescription: '520px',
        titleMission: '536px',
        boardingSection: '1394px',
        boardingBlock: '1349px',
        boardingDescription: '668px',
        astromapDescription: '253px',
        voyagerCard: '300px',
        bgFaq: '2563px',
        faqField: '847px',
        faqAnswer: '735px',
        nexusMissionImage: '524px'
      }
    },
    height: {
      mint: "45px",
      boardingSection: "736px",
      boardingBlock: "710px",
      boardingDescription: '192px',
      heroImage: '616px',
      heroTitle: '264px',
      heroBlock: '688px',
      nexusMissionImage: '679px'
    },
    lineHeight: {
      heroTitle: '87px',
    },

  },
  plugins: [],
  darkMode: 'class',
};
