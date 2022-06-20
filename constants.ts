import {
  AstromapItem,
  FAQ,
  NavRoute,
  SocialIcon,
  Voyager,
} from "./types/common";

import openSeaLogo from "./public/opensea-logo.svg";
import etherscanLogo from "./public/etherscan-logo.svg";
import discordLogo from "./public/discord-logo.svg";
import twitterLogo from "./public/twitter-logo.svg";

import architectAvatar from "./public/architect.png";
import captainAvatar from "./public/captain.png";
import explorerAvatar from "./public/explorer.png";
import mechanicAvatar from "./public/mechanic.png";
import journalistAvatar from "./public/journalist.png";
import merchantAvatar from "./public/architect.png";

export const beyuLabsTwitterURL: string = "https://twitter.com/Beyu_labs";
export const discordInviteURL: string = "https://discord.gg/Ye6pQqJes7";

export const routes: NavRoute[] = [
  {
    path: "/astro-map",
    title: "Astromap",
    enabled: false,
  },
  {
    path: "/team",
    title: "Our team",
    enabled: false,
  },
];

export const beyuSocialIcons: SocialIcon[] = [
  {
    name: "discord",
    image: discordLogo,
    enabled: true,
    url: "https://discord.gg/3NXV2J3S7M",
  },
  {
    name: "twitter",
    image: twitterLogo,
    enabled: true,
    url: "https://twitter.com/beyu_labs",
  },
  {
    name: "opensea",
    image: openSeaLogo,
    enabled: false,
    url: "",
  },
  {
    name: "etherscan",
    image: etherscanLogo,
    enabled: false,
    url: "",
  },
];

export const faqs: FAQ[] = [
  {
    question: "What is BeYu Labs?",
    answer:
      "The driving force behind the Nexus Voyagers NFT drop. A digital hub of creators, developers and investors to collaborate on and build web3 projects. Our mission is to empower web3 entrepreneurship by bringing together project teams and investors, facilitating epic shared experiences, and dropping a one-of-a-kind NFT collection to tie the whole ecosystem together.",
  },
  {
    question: "What is Nexus Voyagers?",
    answer:
      "The genesis NFT drop by BeYu Labs. A collection of 10,119 crew members, primed for the genesis mission launch. On this voyage, crew members will have access to epic shared experiences, meaningful  collabs, one of a kind NFT drops, and a future built for the community over time. With the focus on empowering Web3 entrepreneurship the ecosystem will fill the underlying gaps on contribution with incentivized exchange of utility. Each of us will have a role to play.",
  },
  {
    question: "What is the supply of this collection?",
    answer: "10,119 NFTs.",
  },
  {
    question: "Why this supply number?",
    answer:
      "1/01/19 is the date that the farthest object (2014 MU69) was discovered by a spacecraft in human history. We aim to extend beyond these limits on our journey through web3. Buckle up.",
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
    question: "Wen reveal?",
    answer: "24 hours after sellout.",
  },
  {
    question: "How to get presale access?",
    answer:
      "See #boarding-pass channel for a briefing on how to access our presale launch. We will be sporadically posting challenges in this channel - be sure to stay active in the community so you don’t miss out! The BeYu team is always watching the Discord, and contributors to this mission will be rewarded.",
  },
];

export const astromap: AstromapItem[] = [
  {
    title: "NFT",
    description:
      "To terraform Web3. An ecosystem cultivated by developers, artists, enthusiasts, and investors.",
    imagePath: "/astromap-1.svg",
  },
  {
    title: "Community Chest",
    description:
      "To terraform Web3. An ecosystem cultivated by developers, artists, enthusiasts, and investors.",
    imagePath: "/astromap-2.svg",
  },
  {
    title: "Mission Board",
    description:
      "To terraform Web3. An ecosystem cultivated by developers, artists, enthusiasts, and investors.",
    imagePath: "/astromap-3.svg",
  },
  {
    title: "Launchpad",
    description:
      "To terraform Web3. An ecosystem cultivated by developers, artists, enthusiasts, and investors.",
    imagePath: "/astromap-4.svg",
  },
  {
    title: "Project Showcase",
    description:
      "To terraform Web3. An ecosystem cultivated by developers, artists, enthusiasts, and investors.",
    imagePath: "/astromap-5.svg",
  },
  {
    title: "The Experience",
    description:
      "To terraform Web3. An ecosystem cultivated by developers, artists, enthusiasts, and investors.",
    imagePath: "/astromap-6.svg",
  },
  {
    title: "Charity",
    description:
      "To terraform Web3. An ecosystem cultivated by developers, artists, enthusiasts, and investors.",
    imagePath: "/astromap-1.svg",
  },
];

export const voyagers: Voyager[] = [
  {
    nexusName: "Captain",
    irlName: "Founder",
    description:
      "Pulling together the pieces of the puzzle and ensuring the community is working in harmony to terraform the planet in the same direction - the founders. While each cog in the wheel is valuable in its own right, progress is not truly made unless all voyagers are working in harmony and aligned on the vision of this new world. The captain’s vision is brought to life by those inspired enough to see the light at the end of the tunnel.",
    image: captainAvatar,
  },
  {
    nexusName: "Mechanic",
    irlName: "Dev",
    description:
      "The brains behind the ideas - the engineers/developers. Creating technical solutions to the complex challenges that come with terraforming a new world; they build quietly in the back-end and help connect the dots to bring innovation to life.",
    image: mechanicAvatar,
  },
  {
    nexusName: "Architect",
    irlName: "Artist",
    description:
      "The creatives that take ideas and bring them to life in a beautiful way - the artists. Without grace in the design of a new world, it would become nothing more than a lifeless land of chrome and boxy structures. The architects breathe life into the planet and create an aesthetic that makes it worth populating.",
    image: architectAvatar,
  },
  {
    nexusName: "Journalist",
    irlName: "Marketing",
    description:
      "On a mission to spread ideas and share news of innovations and creation - the marketers. A new business - a beautiful piece of art - an innovative idea; do they really exist if the people of the planet don’t KNOW they exist? The journalists spread the word to ensure the population is aware of what’s happening on the planet.",
    image: journalistAvatar,
  },
  {
    nexusName: "Merchant",
    irlName: "Investor/Trader",
    description:
      "The driving force behind the economy of the new world - the investors. Those who decide what the direction of the market looks like, support new businesses and create financial abundance for the builders and community alike.",
    image: merchantAvatar,
  },
  {
    nexusName: "Explorer",
    irlName: "Collector",
    description:
      "Like true mavens, stimulating the economy as the backbone to all initiatives of the new world - the collector. All innovations, projects, and progress of this terraformed society would be all for naught if not for these community members actively participating and engaging in the wild world of web3. These collectors of innovation buy, sell, trade and barter their way through the space, providing feedback to the builders so the planet is built with progress and abundance in mind.",
    image: explorerAvatar,
  },
];
