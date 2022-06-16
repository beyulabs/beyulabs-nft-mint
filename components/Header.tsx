import Image from "next/image";
import Link from "next/link";

import Nav from "./Nav";
import SocialIcons from "./SocialIcons";

import coinsSVG from "../public/coins.svg";
import walletSVG from "../public/wallet.svg";

import nexusVoyagersLogo from "../public/nexus-voyagers-logotype.png";
interface HeaderProps {
  setMenuOpen: (open: boolean) => void;
}

const Header = ({ setMenuOpen }: HeaderProps) => {
  return (
    <header className="flex flex-row items-center justify-between w-100 w-full text-xl py-6 border-b border-nexusHeaderDivider border-opacity-40">
      <div className="hidden md:block w-1/5">
        <Link href="/" passHref>
          <Image
            src={nexusVoyagersLogo}
            alt="BeYu Labs logo"
            className="cursor-pointer drop-shadow-md"
          />
        </Link>
      </div>
      <Nav setMenuOpen={setMenuOpen} />
      <SocialIcons />
      <div className="flex flex-row">
        <button className="flex flex-row border mx-2 rounded-lg text-white bg-gradient-to-r from-nexusGreen to-nexusGradientGreen px-4 py-2">
          <Image alt="Coins" src={coinsSVG} />
          <span className="inline-block ml-2">Mint</span>
        </button>
        <button className="flex flex-row border mx-2 rounded-lg text-nexusGreen bg-transparent px-4 py-2">
          <Image alt="Coins" src={walletSVG} />
          <span className="inline-block ml-2">Connect</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
