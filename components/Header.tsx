import Image from "next/image";
import Link from "next/link";

import Nav from "./Nav";
import SocialIcons from "./SocialIcons";

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
      <div className="fle flex-row">
        <button className="border mx-2 rounded-lg text-white bg-gradient-to-r from-nexusGreen to-nexusGradientGreen px-4 py-2">
          Mint
        </button>
        <button className="border mx-2 rounded-lg text-nexusGreen bg-transparent px-4 py-2">
          Connect
        </button>
      </div>
    </header>
  );
};

export default Header;
