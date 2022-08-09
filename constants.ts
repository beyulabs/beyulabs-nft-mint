import {
  AstromapItem,
  FAQ,
  NavRoute,
  SocialIcon,
  Voyager,
  TeamMember,
  PartnersItem
} from "./types/common";

import openSeaLogo from "./public/opensea-logo.svg";
import etherscanLogo from "./public/etherscan-logo.svg";
import discordLogo from "./public/discord-icon.svg";
import twitterLogo from "./public/twitter-logo.svg";
import LightModeIcon from "./public/light-mode-page.svg"
import DarkMode from "./public/dark-mode.png";
import captainAvatar from "./public/Cap.png";
import FirstMechanic from './public/mechanic2.png';
import SecondMechanic from './public/SecondMechanic.png';
import Architector from './public/Rectangle2.svg';
import Ryan1 from "./team-images/team1.png";
import Ryan2 from "./team-images/team2.png";
import Ben1 from "./team-images/team3.png";
import Qwerty1 from "./team-images/team4.png";
import Qwerty2 from "./team-images/team5.png";
import Ryan3 from "./team-images/team6.png";
import Ben2 from "./team-images/team7.png";
import Ryan4 from "./team-images/team8.png";
import Este1 from "./team-images/team9.png";
import Ryan5 from "./team-images/team10.png";
import Qwerty3 from "./team-images/team11.png";
import Este2 from "./team-images/team12.png";
import Qwerty4 from "./team-images/team13.png";
import Ryan6 from "./team-images/team14.png";
import Ben3 from "./team-images/team15.png";
import Ryan7 from "./team-images/team16.png";
import mobTeam3 from "./public/mobTeam3.svg";
import mobTeam6 from "./public/mobTeam6.svg";


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
    enabled: true,
  },
];

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
    answer: "1/01/19 is the date that the farthest object (2014 MU69) was discovered by a spacecraft in human history. We aim to extend beyond these limits on our journey through web3. Buckle up.",
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
    question: "How to get presale access?",
    answer:
      "See #boarding-pass channel for a briefing on how to access our presale launch. We will be sporadically posting challenges in this channel - be sure to stay active in the community so you don’t miss out! The BeYu team is always watching the Discord, and contributors to this mission will be rewarded.",
  },
];

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
      "A spotlight on some of our Holder's Top Projects via Panels, Interviews, Podcast, Collabs, and Dedicated Discord channels.",
    imagePath: "/astromap-4.svg",
  },
  {
    title: "Partnerships",
    description: "The power of community goes a long way on the Nexus Voyage.",
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
      "We’ll be donating x% of proceeds from mint to a charity that’s aligned with our overall vision: NY PACE (https://www.nypace.org/).",
    imagePath: "/astromap-1.svg",
  },
];

export const partners: PartnersItem[] = [
  {
    title: "Project 3",
    callToAction: "Don't procrastinate",
    imagePath: "/Partner1.svg",
  },
  {
    title: "BDH (Legal)",
    callToAction: "Don't procrastinate",
    imagePath: "/Partner2.svg",
  },
]

export const partnersMob: PartnersItem[] = [
  {
    title: "Project 3",
    callToAction: "Don't procrastinate",
    imagePath: "/partner1mob.svg",
  },
  {
    title: "BDH (Legal)",
    callToAction: "Don't procrastinate",
    imagePath: "/partner2mob.svg",
  },
]

export const voyagers: Voyager[] = [
  {
    nexusName: "Architect",
    irlName: "Artist",
    description:
      "The creatives that take ideas and bring them to life in a beautiful way - the artists. Without grace in the design of a new world, it would become nothing more than a lifeless land of chrome and boxy structures. The architects breathe life into the planet and create an aesthetic that makes it worth populating.",
    image: Architector
  },
  {
    nexusName: "Captain",
    irlName: "Founder",
    description:
      "Pulling together the pieces of the puzzle and ensuring the community is working in harmony to terraform the planet in the same direction - the founders. While each cog in the wheel is valuable in its own right, progress is not truly made unless all voyagers are working in harmony and aligned on the vision of this new world. The captain’s vision is brought to life by those inspired enough to see the light at the end of the tunnel.",
    image: captainAvatar
  },
  {
    nexusName: "Mechanic",
    irlName: "Dev",
    description:
      "The brains behind the ideas - the engineers/developers. Creating technical solutions to the complex challenges that come with terraforming a new world; they build quietly in the back-end and help connect the dots to bring innovation to life.",
    image: SecondMechanic
  },
  {
    nexusName: "Mechanic",
    irlName: "Dev",
    description:
      "The brains behind the ideas - the engineers/developers. Creating technical solutions to the complex challenges that come with terraforming a new world; they build quietly in the back-end and help connect the dots to bring innovation to life.",
    image: FirstMechanic
  },
 
];

export const teamMembers: TeamMember[] = [
  {
    nexusName: "Ryan Harris",
    irlName: "Commander|Biz dev",
    image: Ryan1,
    id: '1'
  },
  {
    nexusName: "Ryan Harris",
    irlName: "Commander|Biz dev",
    image: Ryan2,
    id: '2'
  },
  {
    nexusName: "Ben Yurcisin",
    irlName: "Mechanic|Community",
    image: Ben1,
    id: '3'
  },
  {
    nexusName: "QwertyCo",
    irlName: "Co-Commander|Project Manager",
    image: Qwerty1,
     id: '4'
  },
  {
    nexusName: "QwertyCo",
    irlName: "Co-Commander|Project Manager",
    image: Qwerty2,
     id: '5'
  },
  {
    nexusName: "Ryan Harris",
    irlName: "Commander|Biz dev",
    image: Ryan3,
     id: '6'
  },
  {
    nexusName: "Ben Yurcisin",
    irlName: "Mechanic|Community",
    image: Ben2,
     id: '7'
  },
  {
    nexusName: "Ryan Harris",
    irlName: "Commander|Biz dev",
    image: Ryan4,
     id: '8'
  },
  {
    nexusName: "Este Lopez",
    irlName: "Commander|Biz dev",
    image: Este1,
     id: '9'
  },
  {
    nexusName: "Ryan Harris",
    irlName: "Commander|Biz dev",
    image: Ryan5,
     id: '10'
  },
  {
    nexusName: "QwertyCo",
    irlName: "Co-Commander|Project Manager",
    image: Qwerty3,
     id: '11'
  },
  {
    nexusName: "Este Lopez",
    irlName: "Commander|Biz dev",
    image: Este2,
     id: '12'
  },
  {
    nexusName: "QwertyCo",
    irlName: "Co-Commander|Project Manager",
    image: Qwerty4,
     id: '13'
  },
  {
    nexusName: "Ryan Harris",
    irlName: "Commander|Biz dev",
    image: Ryan6,
     id: '14'
  },
  {
    nexusName: "Ben Yurcisin",
    irlName: "Mechanic|Community",
    image: Ben3,
     id: '15'
  },
  {
    nexusName: "Ryan Harris",
    irlName: "Commander|Biz dev",
    image: Ryan7,
    id: '16'
  },
]

export const mobTeamMembers: TeamMember[] = [
  {
    nexusName: "Ryan Harris",
    irlName: "Commander|Biz dev",
    image: Ryan1,
    id: '1'
  },
  {
    nexusName: "QwertyCo",
    irlName: "Co-Commander|Project Manager",
    image: Ryan2,
    id: '2'
  },
  {
    nexusName: "Este Lopez",
    irlName: "Commander|Biz dev",
    image: mobTeam3,
     id: '3'
  },
  {
    nexusName: "Ryan Harris",
    irlName: "Commander|Biz dev",
    image: Ben3,
     id: '4'
  },
  {
    nexusName: "Ryan Harris",
    irlName: "Commander|Biz dev",
    image: Qwerty3,
     id: '5'
  },
  {
    nexusName: "Ryan Harris",
    irlName: "Commander|Biz dev",
    image: mobTeam6,
     id: '6'
  },
]

