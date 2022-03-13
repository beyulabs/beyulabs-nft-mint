import Image from "next/image";
import classNames from 'classnames';

import openSeaLogo from "../public/opensea-logo.svg";
import etherscanLogo from "../public/etherscan-logo.svg";
import discordLogo from "../public/discord-logo.svg";
import twitterLogo from "../public/twitter-logo.svg";

interface SocialIcon {
  name: string;
  image: React.ReactNode;
  enabled: boolean;
  url: string;
}

const icons: SocialIcon[] = [
  {
    name: "discord",
    image: (
      <Image
        src={discordLogo}
        alt="Discord logo"
        width={28}
        height={28}
        className="hover:shadow"
        quality={100}
      />
    ),
    enabled: true,
    url: '',
  },
  {
    name: "twitter",
    image: (
      <Image
        src={twitterLogo}
        alt="TwitterLogo logo"
        width={28}
        height={28}
        className="hover:shadow"
        quality={100}
      />
    ),
    enabled: true,
    url: '',
  },
  {
    name: "opensea",
    image: (
      <Image
        src={openSeaLogo}
        alt="OpenSea logo"
        width={28}
        height={28}
        className="hover:shadow"
        quality={100}
      />
    ),
    enabled: false,
    url: '',
  },
  {
    name: "etherscan",
    image: (
      <Image
        src={etherscanLogo}
        alt="Etherscan logo"
        width={28}
        height={28}
        className="hover:shadow"
        quality={100}
      />
    ),
    enabled: false,
    url: '',
  },
];

const SocialIcons = () => {
  return (
    <ul className="flex">
      {icons.map(icon => {
        const liClass = classNames(
          "ml-8",
          {
            "opacity-50 hover:cursor-not-allowed": !icon.enabled,
            "origin-center hover:scale-150 hover:rotate-12": icon.enabled,
          }
        );
        const aClass = classNames({
          "hover:cursor-not-allowed": !icon.enabled,
        })

        return (
          <li
            key={`icon-${icon.name}`}
            className={liClass}
          >
            <a
              href={icon.url}
              rel="nofollow noreferrer"
              target="_blank"
              className={aClass}
            >
              {icon.image}
            </a>
          </li>
        )
      })}
    </ul>
  );
};

export default SocialIcons;
