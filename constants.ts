import { AstromapItem, FAQ, NavRoute, SocialIcon } from "./types/common";
import Image from "next/image";

import openSeaLogo from "./public/opensea-logo.svg";
import etherscanLogo from "./public/etherscan-logo.svg";
import discordLogo from "./public/discord-logo.svg";
import twitterLogo from "./public/twitter-logo.svg";

import astromapOne from "./public/astromap-1.svg";
import astromapTwo from "./public/astromap-2.svg";
import astromapThree from "./public/astromap-3.svg";
import astromapFour from "./public/astromap-4.svg";
import astromapFive from "./public/astromap-5.svg";
import astromapSix from "./public/astromap-6.svg";

export const beyuLabsTwitterURL: string = "https://twitter.com/Beyu_labs";
export const discordInviteURL: string = "https://discord.gg/Ye6pQqJes7";

export const routes: NavRoute[] = [
  {
    path: "/",
    title: "home",
    enabled: false,
  },
  {
    path: "/astro-map",
    title: "Astromap",
    enabled: true,
  },
  {
    path: "/team",
    title: "Our team",
    enabled: true,
  },
  {
    path: "/gallery",
    title: "gallery",
    enabled: false,
  },
  {
    path: "/wallet",
    title: "wallet",
    enabled: false,
  },
];

export const beyuSocialIcons: SocialIcon[] = [
  {
    name: "discord",
    image: discordLogo,
    enabled: true,
    url: "",
  },
  {
    name: "twitter",
    image: twitterLogo,
    enabled: true,
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
