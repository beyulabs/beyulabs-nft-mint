import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { NavRoute } from "../types/common";
import { routes } from "../constants";
import SocialIcons from "./SocialIcons";

import coinsSVG from "../public/coins.svg";
import walletSVG from "../public/wallet.svg";
import nexusVoyagersLogo from "../public/nexus-voyagers-logotype-green-white.svg";

interface MobileMenuProps {
  setMenuOpen: (open: boolean) => void;
}

const MobileMenu = ({ setMenuOpen }: MobileMenuProps) => {
  const createMenuItems = () => {
    return routes.map((route: NavRoute) => {
      const cn = classNames(
        {
          "opacity-50 hover:cursor-not-allowed": !route.enabled,
          "hover:text-purple-400": route.enabled,
        },
        "text-xl"
      );

      return (
        <li
          key={route.path}
          className={cn}
          onClick={() => {
            document.body.style.overflow = "auto";
            setMenuOpen(false);
          }}
        >
          {route.enabled ? (
            <Link href={route.path}>{route.title}</Link>
          ) : (
            route.title
          )}
        </li>
      );
    });
  };

  return (
    <div className="fixed h-full w-full px-6 py-6 bg-nexusDarkBg z-50 top-0 left-0">
      <div className="absolute text-white cursor-pointer z-50 top-6 left-2">
        <FontAwesomeIcon
          className="mr-2"
          width={36}
          height={36}
          icon={faX}
          onClick={() => {
            document.body.style.overflow = "auto";
            setMenuOpen(false);
          }}
        />
      </div>
      <div className="flex flex-col justify-center h-full">
        <div className="mb-10">
          <Image
            src={nexusVoyagersLogo}
            alt="BeYu Labs logo"
            className="cursor-pointer drop-shadow-md"
          />
        </div>
        <div className="relative w-full flex flex-col justify-center items-center text-white mb-10">
          <ul className="text-center">{createMenuItems()}</ul>
        </div>
        <div className="flex flex-col px-24 mb-10">
          <button
            disabled
            className="mb-4 flex flex-row justify-center mx-2 rounded-lg text-white bg-gradient-to-r from-nexusGreen to-nexusGradientGreen px-4 py-2 cursor-not-allowed disabled:opacity-50"
          >
            <Image alt="Coins" src={coinsSVG} />
            <span className="inline-block ml-2">Mint</span>
          </button>
          <button
            disabled
            className="mb-4 flex flex-row justify-center border mx-2 rounded-lg text-white bg-transparent px-4 py-2 cursor-not-allowed disabled:opacity-50"
          >
            <Image alt="Coins" src={walletSVG} />
            <span className="inline-block ml-2">Connect</span>
          </button>
        </div>
        <div className="relative w-full flex flex-col justify-center items-center text-white">
          <SocialIcons />
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
