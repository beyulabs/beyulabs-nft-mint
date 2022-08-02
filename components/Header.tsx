import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import Nav from "./Nav";
import SocialIcons from "./SocialIcons";
import coinsSVG from "../public/coins.svg";
import walletSVG from "../public/wallet.svg";
import nexusVoyagersLogo from "../public/nexus-voyagers-logotype-green-white.svg";
import LightMode from "../public/light-mode-page.svg"

interface HeaderProps {
  setMenuOpen: (open: boolean) => void;
}

const Header = ({ setMenuOpen }: HeaderProps) => {
  const { systemTheme, theme, setTheme } = useTheme();

  const changeTheme = () => {
    const currentTheme = theme === 'system' ? systemTheme : theme;
    if(currentTheme === 'light') {
    return (
      <button className="" onClick={() => setTheme('dark')}>
        <Image
            src={LightMode}
            alt="BeYu Labs logo"
            className="cursor-pointer drop-shadow-md"
          />
      </button>
    )
    } else {
      return (
        <button className="" onClick={() => setTheme('light')}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
       </button>
      )
    }
  }
  
  return (
    <header className="px-4 py-4 flex flex-row items-center justify-between w-100 w-full h-20 text-xl border-b border-nexusHeaderDivider border-opacity-40 z-50">
      <div className="hidden md:block w-40 h-12 mr-10">
        <Link href="/" passHref>
          <Image
            src={nexusVoyagersLogo}
            alt="BeYu Labs logo"
            className="cursor-pointer drop-shadow-md"
          />
        </Link>
      </div>
      <Nav setMenuOpen={setMenuOpen} />
      <div className="flex justify-end -mr-5">
      <div className="z-50 mr-2 -ml-20">
        <SocialIcons />
      </div>
      <div className="mt-2 mr-2">
      <Image alt="light-mode" src={LightMode} />
      </div>
      <div className="hidden md:flex md:flex-row">
        <button
          className="flex flex-row justify-center items-center ml-11 mx-2 rounded-lg text-white bg-gradient-to-r from-nexusGreen to-nexusGradientGreen px-4 py-2 mr-8 w-mint h-mint cursor-not-allowed disabled:opacity-50"
        >
          <Image alt="Coins" src={coinsSVG} />
          <span className="ml-2 text-sm">Mint</span>
        </button>
        <button
          className="flex flex-row justify-center items-center border mx-2 border-emerald-300 rounded-lg text-white text-sm bg-transparent px-4 py-2 cursor-not-allowed disabled:opacity-50 h-mint"
        >
          <Image alt="Coins" src={walletSVG} />
          <span className="inline-block ml-2">Connect wallet</span>
        </button>
      </div>
      </div>
    </header>
  );
};

export default Header;
