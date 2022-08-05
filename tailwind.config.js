const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '375px',
        md: '768px',
        lg: '1024px',
      },
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
        faqBg: "#232424",
        teamMember: "linear-gradient(90.42deg, #41A380 0.29%, #63D5AC 100.54%)",
      },
      backgroundImage: {
        teamMemberHover: "linear-gradient(90.42deg, #41A380 0.29%, #63D5AC 100.54%)"
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
        missionImage: '500px',
        missionBlock: '1628px',
        missionSection: '1440px',
        description: '756px',
        heroTitle: '746px',
        heroImage: '680px',
        heroDescription: '520px',
        titleMission: '536px',
        boardingSection: '1394px',
        boardingBlock: '1305px',
        boardingDescription: '668px',
        astromapDescription: '253px',
        voyagerCard: '300px',
        bgFaq: '2370px',
        faqField: '847px',
        faqAnswer: '735px',
        nexusMissionImage: '524px',
        astromapItem: '468px',
        partnerItem: "630px",
        partnerItemPhone: "335px",
        partnerImage: "175px",
        ticketsImage: '532px',
        missionText: "630px",
        partnerTextMob: "303px",
        partnerText: "395px",
      }
    },
    height: {
      mint: "45px",
      missionImage: '638px',
      missionSection: '720px',
      boardingSection: "736px",
      boardingBlock: "590px",
      boardingDescription: '192px',
      heroImage: '647px',
      heroTitle: '264px',
      heroBlock: '688px',
      nexusMissionImage: '679px',
      astromapItem: '184px',
      partnerItem:'356px',
      partnerItemPhone: "521px",
      ticketsImage: '701px',
    },
    lineHeight: {
      heroTitle: '87px',
    },

  },
  plugins: [],
  darkMode: 'class',
};
