import Image from "next/image";
import Link from "next/link";

import Nav from "./Nav";
import SocialIcons from "./SocialIcons";

import coinsSVG from "../public/coins.svg";
import walletSVG from "../public/wallet.svg";

import nexusVoyagersLogo from "../public/nexus-voyagers-logotype-green-white.svg";
interface HeaderProps {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

const Header = ({ menuOpen, setMenuOpen }: HeaderProps) => {
  return (
    <header className="px-4 py-4 flex flex-row items-center justify-between w-100 w-full text-xl border-b border-nexusHeaderDivider border-opacity-40 z-50">
      <div className="w-2/5 lg:w-48">
        <Link href="/" passHref>
          <div>
            <Image
              src={nexusVoyagersLogo}
              alt="BeYu Labs logo"
              className="cursor-pointer drop-shadow-md"
            />
          </div>
        </Link>
      </div>
      <div className="w-3/5 flex flex-row justify-end md:items-center lg:w-full">
        <div className="flex flex-row lg:flex-row-reverse lg:items-center">
          <div className="hidden z-50 md:inline-block lg:mt-1.5 lg:ml-4">
            <SocialIcons />
          </div>
          <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </div>
        <div className="hidden lg:flex lg:flex-row lg:ml-4">
          <button
            disabled
            className="flex flex-row mx-2 rounded-lg text-white bg-gradient-to-r from-nexusGreen to-nexusGradientGreen px-4 py-2 cursor-not-allowed disabled:opacity-50 lg:text-base"
          >
            <Image alt="Coins" src={coinsSVG} />
            <span className="inline-block ml-2">Mint</span>
          </button>
          <button
            disabled
            className="flex flex-row border mx-2 rounded-lg text-white bg-transparent px-4 py-2 cursor-not-allowed disabled:opacity-50 lg:text-base"
          >
            <Image alt="Coins" src={walletSVG} />
            <span className="inline-block ml-2">Connect</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
