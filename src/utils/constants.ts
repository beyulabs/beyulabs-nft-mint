import {
    AstromapItem,
    FAQ,
    NavRoute,
    SocialIcon,
    Voyager,
    TeamMember,
    PartnersItem,
} from "../types/common"

// @ts-ignore
import openSeaLogo from "../../public/opensea-logo.svg"
// @ts-ignore
import etherscanLogo from "../../public/etherscan-logo.svg"
// @ts-ignore
import discordLogo from "../../public/discord-icon.svg"
// @ts-ignore
import twitterLogo from "../../public/twitter-logo.svg"
// @ts-ignore
import LightModeIcon from "../../public/light-mode-page.svg"
// @ts-ignore
import DarkMode from "../../public/dark-mode.png"
// @ts-ignore
import captainAvatar from "../../public/Cap.png"
// @ts-ignore
import FirstMechanic from "../../public/mechanic2.png"
// @ts-ignore
import SecondMechanic from "../../public/SecondMechanic.png"
// @ts-ignore
import Architector from "../../public/Rectangle2.svg"
// @ts-ignore
import Ryan1 from "../team-images/team1.png"
// @ts-ignore
import Ryan2 from "../team-images/team2.png"
// @ts-ignore
import Ben1 from "../team-images/team3.png"
// @ts-ignore
import Qwerty1 from "../team-images/team4.png"
// @ts-ignore
import Qwerty2 from "../team-images/team5.png"
// @ts-ignore
import Ryan3 from "../team-images/team6.png"
// @ts-ignore
import Ben2 from "../team-images/team7.png"
// @ts-ignore
import Ryan4 from "../team-images/team8.png"
// @ts-ignore
import Este1 from "../team-images/team9.png"
// @ts-ignore
import Ryan5 from "../team-images/team10.png"
// @ts-ignore
import Qwerty3 from "../team-images/team11.png"
// @ts-ignore
import Este2 from "../team-images/team12.png"
// @ts-ignore
import Qwerty4 from "../team-images/team13.png"
// @ts-ignore
import Ryan6 from "../team-images/team14.png"
// @ts-ignore
import Ben3 from "../team-images/team15.png"
// @ts-ignore
import Ryan7 from "../team-images/team16.png"

// import explorerAvatar from "./public/explorer.png";
// import journalistAvatar from "./public/journalist.png";
// import merchantAvatar from "./public/architect.png";

export const beyuLabsTwitterURL: string = "https://twitter.com/Beyu_labs"
export const discordInviteURL: string = "https://discord.gg/Ye6pQqJes7"

export const routes: NavRoute[] = [
    {
        path: "/astromap",
        title: "Astromap",
        enabled: true,
    },
    {
        path: "/team",
        title: "Our team",
        enabled: true,
    },
    {
        path: "/whitepaper",
        title: "Whitepaper",
        enabled: true,
    },
]

export const beyuSocialIcons: SocialIcon[] = [
    {
        name: "twitter",
        image: twitterLogo,
        enabled: true,
        url: "https://twitter.com/beyu_labs",
    },
    {
        name: "discord",
        image: discordLogo,
        enabled: true,
        url: "https://discord.gg/3NXV2J3S7M",
    },
    {
        name: "light",
        image: LightModeIcon,
        enabled: false,
        url: "",
    },
    {
        name: "dark",
        image: DarkMode,
        enabled: false,
        url: "",
    },
    {
        name: "opensea",
        image: openSeaLogo,
        enabled: true,
        url: "",
    },
    {
        name: "etherscan",
        image: etherscanLogo,
        enabled: false,
        url: "",
    },
]

export const faqs: FAQ[] = [
    {
        question: "What is BeYu Labs?",
        answer:
            "The driving force behind the Nexus Voyagers NFT drop. A digital hub of creators, developers and " +
            "investors to collaborate on and build web3 projects. Our mission is to empower web3 entrepreneurship " +
            "by bringing together project teams and investors, facilitating epic shared experiences, and " +
            "dropping a one-of-a-kind NFT collection to tie the whole ecosystem together.",
    },
    {
        question: "What is Nexus Voyagers?",
        answer:
            "The genesis NFT drop by BeYu Labs. A collection of 10,119 crew members, primed for the genesis " +
            "mission launch. On this voyage, crew members will have access to epic shared experiences, meaningful  " +
            "collabs, one of a kind NFT drops, and a future built for the community over time. With the focus on " +
            "empowering Web3 entrepreneurship the ecosystem will fill the underlying gaps on contribution with " +
            "incentivized exchange of utility. Each of us will have a role to play.",
    },
    {
        question: "What is the supply of this collection?",
        answer: "10,119 NFTs",
    },
    {
        question: "When is the drop date?",
        answer:
            "TBA - be sure to tune into the #announcements channel for updates.",
    },
    {
        question: "How much for a Nexus Voyager NFT?",
        answer:
            "TBA - be sure to tune into the #announcements channel for updates.",
    },
    {
        question: "When reveal?",
        answer: "24 hours after sellout.",
    },
    {
        question: "How to purchase?",
        answer: "Mint will be on our official website.",
    },
    {
        question: "Are you offering financial advice?",
        answer: "No. Do your own research.",
    },
    {
        question: "What is the Nifty Nomads podcast?",
        answer:
            "Join Hosts (& BeYu Labs Founders) Ben and Miles as they fly through " +
            "the metaverse on their journey to empower Web3 entrepreneurship" +
            "with their startup, BeYu Labs. Check out these weekly discussions on " +
            "NFT Trends & Creations “Behind the Curtain” and learn how to build a " +
            "Web3 future. Visit linktr.ee/niftynomads to subscribe and listen now!",
    },
    {
        question: "Who is the Artist?",
        answer:
            "Our amazing art was all created by the one and only NFT Bee." +
            "NFT Bee is digital artist specialized in graphic design and illustration. She is a " +
            "graduate of SCAD and found herself in NFTs in late 2020. Bee is a full " +
            "stack artist, owning the art process end to end. Beyond her 1/1 works " +
            "she is the artist behind several NFT projects including @Dogepunks," +
            "@Spacebums and @EcoBotsNFT.",
    },
]

export const astromap: AstromapItem[] = [
    {
        title: "Events",
        description:
            "It takes more than just grinding behind the scenes to grow an ecosystem.",
        imagePath: "/astromap-1.svg",
    },
    {
        title: "Bounty Board",
        description:
            "A bounty hub empowering freelancers, project teams, and agencies alike.",
        imagePath: "/astromap-2.svg",
    },
    {
        title: "Launchpad",
        description: "A navigation system to launch your own mission.",
        imagePath: "/astromap-3.svg",
    },
    {
        title: "Project Showcase",
        description:
            "A spotlight on some of our Holder's Top Projects via Panels, Interviews, " +
            "Podcast, Collabs, and Dedicated Discord channels.",
        imagePath: "/astromap-4.svg",
    },
    {
        title: "Partnerships",
        description:
            "The power of community goes a long way on the Nexus Voyage.",
        imagePath: "/astromap-5.svg",
    },
    {
        title: "Community Chest",
        description:
            "13% goes to Community Chest to be re-invested as decided by our Holders.",
        imagePath: "/astromap-6.svg",
    },
    {
        title: "Charity",
        description:
            "We’ll be donating x% of proceeds from mint to a charity that’s aligned with our overall vision: " +
            "NY PACE (https://www.nypace.org/).",
        imagePath: "/astromap-1.svg",
    },
]

export const partner: PartnersItem[] = [
    {
        title: "Events",
        description:
            "It takes more than just grinding behind the scenes to grow an ecosystem.",
        callToAction: "Don't procrastinate",
        imagePath: "/astromap-1.svg",
    },
    {
        title: "Bounty Board",
        description:
            "A bounty hub empowering freelancers, project teams, and agencies alike.",
        callToAction: "Don't procrastinate",
        imagePath: "/astromap-2.svg",
    },
]

export const voyagers: Voyager[] = [
    {
        nexusName: "Architect",
        irlName: "Artist",
        description:
            // eslint-disable-next-line max-len
            "The creatives that take ideas and bring them to life in a beautiful way - the artists. Without " +
            "grace in the design of a new world, it would become nothing more than a lifeless land of chrome " +
            "and boxy structures. The architects breathe life into the planet and create an aesthetic that " +
            "makes it worth populating.",
        image: Architector,
    },
    {
        nexusName: "Captain",
        irlName: "Founder",
        description:
            // eslint-disable-next-line max-len
            "Pulling together the pieces of the puzzle and ensuring the community is working in harmony to terraform the planet in the same direction - the founders. While each cog in the wheel is valuable in its own right, progress is not truly made unless all voyagers are working in harmony and aligned on the vision of this new world. The captain’s vision is brought to life by those inspired enough to see the light at the end of the tunnel.",
        image: captainAvatar,
    },
    {
        nexusName: "Mechanic",
        irlName: "Dev",
        description:
            // eslint-disable-next-line max-len
            "The brains behind the ideas - the engineers/developers. Creating technical solutions to the complex challenges that come with terraforming a new world; they build quietly in the back-end and help connect the dots to bring innovation to life.",
        image: SecondMechanic,
    },
    {
        nexusName: "Mechanic",
        irlName: "Dev",
        description:
            // eslint-disable-next-line max-len
            "The brains behind the ideas - the engineers/developers. Creating technical solutions to the complex challenges that come with terraforming a new world; they build quietly in the back-end and help connect the dots to bring innovation to life.",
        image: FirstMechanic,
    },
    // {
    //   nexusName: "Architect",
    //   irlName: "Artist",
    //   description:
    // eslint-disable-next-line max-len
    //     "The creatives that take ideas and bring them to life in a beautiful way - the artists. Without grace in the design of a new world, it would become nothing more than a lifeless land of chrome and boxy structures. The architects breathe life into the planet and create an aesthetic that makes it worth populating.",
    //   image: architectAvatar,
    // },
    // {
    //   nexusName: "Journalist",
    //   irlName: "Marketing",
    //   description:
    // eslint-disable-next-line max-len
    //     "On a mission to spread ideas and share news of innovations and creation - the marketers. A new business - a beautiful piece of art - an innovative idea; do they really exist if the people of the planet don’t KNOW they exist? The journalists spread the word to ensure the population is aware of what’s happening on the planet.",
    //   image: journalistAvatar,
    // },
    // {
    //   nexusName: "Merchant",
    //   irlName: "Investor/Trader",
    //   description:
    // eslint-disable-next-line max-len
    //     "The driving force behind the economy of the new world - the investors. Those who decide what the direction of the market looks like, support new businesses and create financial abundance for the builders and community alike.",
    //   image: merchantAvatar,
    // },
    // {
    //   nexusName: "Explorer",
    //   irlName: "Collector",
    //   description:
    // eslint-disable-next-line max-len
    //     "Like true mavens, stimulating the economy as the backbone to all initiatives of the new world - the collector. All innovations, projects, and progress of this terraformed society would be all for naught if not for these community members actively participating and engaging in the wild world of web3. These collectors of innovation buy, sell, trade and barter their way through the space, providing feedback to the builders so the planet is built with progress and abundance in mind.",
    //   image: explorerAvatar,
    // },
]

export const teamMembers: TeamMember[] = [
    {
        nexusName: "Ryan Harris",
        irlName: "Commander|Biz dev",
        image: "team1.png",
        linkedin: "https://linedin.com/",
        instagram: "https://instagram.com/",
        skillset: [
            "Entrepreneur",
            "Networker",
            "Project Manager/Engineer",
            "Skateboarder",
            "loves overpriced jpegs and metal shows",
        ],
    },
    {
        nexusName: "Ryan Harris",
        irlName: "Commander|Biz dev",
        image: "team2.png",
        linkedin: "https://linedin.com/",
        twitter: "https://twitter.com/",
        instagram: "https://instagram.com/",
        skillset: [
            "Entrepreneur",
            "Networker",
            "Project Manager/Engineer",
            "Skateboarder",
            "loves overpriced jpegs and metal shows",
        ],
    },
    {
        nexusName: "Ben Yurcisin",
        irlName: "Mechanic|Community",
        image: "team3.png",
        linkedin: "https://linedin.com/",
        instagram: "https://instagram.com/",
        skillset: [
            "Entrepreneur",
            "Networker",
            "Project Manager/Engineer",
            "Skateboarder",
            "loves overpriced jpegs and metal shows",
        ],
    },
    {
        nexusName: "QwertyCo",
        irlName: "Co-Commander|Project Manager",
        image: "team4.png",
        instagram: "https://instagram.com/",
        skillset: [
            "Entrepreneur",
            "Networker",
            "Project Manager/Engineer",
            "Skateboarder",
            "loves overpriced jpegs and metal shows",
        ],
    },
    {
        nexusName: "QwertyCo",
        irlName: "Co-Commander|Project Manager",
        image: "team5.png",
        linkedin: "https://linedin.com/",
        skillset: [
            "Entrepreneur",
            "Networker",
            "Project Manager/Engineer",
            "Skateboarder",
            "loves overpriced jpegs and metal shows",
        ],
    },
    {
        nexusName: "Ryan Harris",
        irlName: "Commander|Biz dev",
        image: "team6.png",
        linkedin: "https://linedin.com/",
        instagram: "https://instagram.com/",
        skillset: [
            "Entrepreneur",
            "Networker",
            "Project Manager/Engineer",
            "Skateboarder",
            "loves overpriced jpegs and metal shows",
        ],
    },
    {
        nexusName: "Ben Yurcisin",
        irlName: "Mechanic|Community",
        image: "team7.png",
        linkedin: "https://linedin.com/",
        instagram: "https://instagram.com/",
        skillset: [
            "Entrepreneur",
            "Networker",
            "Project Manager/Engineer",
            "Skateboarder",
            "loves overpriced jpegs and metal shows",
        ],
    },
    {
        nexusName: "Ryan Harris",
        irlName: "Commander|Biz dev",
        image: "team8.png",
        linkedin: "https://linedin.com/",
        instagram: "https://instagram.com/",
        skillset: [
            "Entrepreneur",
            "Networker",
            "Project Manager/Engineer",
            "Skateboarder",
            "loves overpriced jpegs and metal shows",
        ],
    },
    {
        nexusName: "Este Lopez",
        irlName: "Commander|Biz dev",
        image: "team9.png",
        linkedin: "https://linedin.com/",
        instagram: "https://instagram.com/",
        skillset: [
            "Entrepreneur",
            "Networker",
            "Project Manager/Engineer",
            "Skateboarder",
            "loves overpriced jpegs and metal shows",
        ],
    },
    {
        nexusName: "Ryan Harris",
        irlName: "Commander|Biz dev",
        image: "team10.png",
        linkedin: "https://linedin.com/",
        instagram: "https://instagram.com/",
        skillset: [
            "Entrepreneur",
            "Networker",
            "Project Manager/Engineer",
            "Skateboarder",
            "loves overpriced jpegs and metal shows",
        ],
    },
    {
        nexusName: "QwertyCo",
        irlName: "Co-Commander|Project Manager",
        image: "team11.png",
        linkedin: "https://linedin.com/",
        instagram: "https://instagram.com/",
        skillset: [
            "Entrepreneur",
            "Networker",
            "Project Manager/Engineer",
            "Skateboarder",
            "loves overpriced jpegs and metal shows",
        ],
    },
    {
        nexusName: "Este Lopez",
        irlName: "Commander|Biz dev",
        image: "team12.png",
        linkedin: "https://linedin.com/",
        instagram: "https://instagram.com/",
        skillset: [
            "Entrepreneur",
            "Networker",
            "Project Manager/Engineer",
            "Skateboarder",
            "loves overpriced jpegs and metal shows",
        ],
    },
    {
        nexusName: "QwertyCo",
        irlName: "Co-Commander|Project Manager",
        image: "team13.png",
        linkedin: "https://linedin.com/",
        instagram: "https://instagram.com/",
        skillset: [
            "Entrepreneur",
            "Networker",
            "Project Manager/Engineer",
            "Skateboarder",
            "loves overpriced jpegs and metal shows",
        ],
    },
    {
        nexusName: "Ryan Harris",
        irlName: "Commander|Biz dev",
        image: "team14.png",
        linkedin: "https://linedin.com/",
        instagram: "https://instagram.com/",
        skillset: [
            "Entrepreneur",
            "Networker",
            "Project Manager/Engineer",
            "Skateboarder",
            "loves overpriced jpegs and metal shows",
        ],
    },
    {
        nexusName: "Ben Yurcisin",
        irlName: "Mechanic|Community",
        image: "team15.png",
        linkedin: "https://linedin.com/",
        instagram: "https://instagram.com/",
        skillset: [
            "Entrepreneur",
            "Networker",
            "Project Manager/Engineer",
            "Skateboarder",
            "loves overpriced jpegs and metal shows",
        ],
    },
    {
        nexusName: "Ryan Harris",
        irlName: "Commander|Biz dev",
        image: "team16.png",
        linkedin: "https://linedin.com/",
        instagram: "https://instagram.com/",
        skillset: [
            "Entrepreneur",
            "Networker",
            "Project Manager/Engineer",
            "Skateboarder",
            "loves overpriced jpegs and metal shows",
        ],
    },
]
