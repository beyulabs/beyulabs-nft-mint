import Image from "next/image";

import openSeaLogo from "../public/opensea-logo.svg";
import etherscanLogo from "../public/etherscan-logo.svg";
import discordLogo from "../public/discord-logo.svg";
import twitterLogo from "../public/twitter-logo.svg";

const SocialIcons = () => {
  return (
    <ul className="flex">
      <li className="px-4 origin-center hover:scale-150 hover:rotate-12">
        <a href="" rel="nofollow noreferrer" target="_blank">
          {
            <Image
              src={discordLogo}
              alt="Discord logo"
              width={28}
              height={28}
            />
          }
        </a>
      </li>
      <li className="px-4 origin-center hover:scale-150 hover:rotate-12">
        <a href="" rel="nofollow noreferrer" target="_blank">
          {
            <Image
              src={twitterLogo}
              alt="Twitter logo"
              width={28}
              height={28}
            />
          }
        </a>
      </li>
      <li className="px-4 origin-center hover:scale-150 hover:rotate-12">
        <a href="" rel="nofollow noreferrer" target="_blank">
          {
            <Image
              src={etherscanLogo}
              alt="Etherscan logo"
              width={28}
              height={28}
            />
          }
        </a>
      </li>
      <li className="px-4 origin-center hover:scale-150 hover:rotate-12">
        <a href="" rel="nofollow noreferrer" target="_blank">
          {
            <Image
              src={openSeaLogo}
              alt="OpenSea logo"
              width={28}
              height={28}
            />
          }
        </a>
      </li>
    </ul>
  );
};

export default SocialIcons;
