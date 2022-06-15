import { NavRoute, SocialIcon } from "./types/common";

import openSeaLogo from "./public/opensea-logo.svg";
import etherscanLogo from "./public/etherscan-logo.svg";
import discordLogo from "./public/discord-logo.svg";
import twitterLogo from "./public/twitter-logo.svg";

export const beyuLabsTwitterURL: string = "https://twitter.com/Beyu_labs";
export const discordInviteURL: string = "https://discord.gg/Ye6pQqJes7";

export const routes: NavRoute[] = [
  {
    path: "/",
    title: "home",
    enabled: false,
  },
  {
    path: "/astro-nao",
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
